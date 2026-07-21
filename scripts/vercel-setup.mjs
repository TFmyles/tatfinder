#!/usr/bin/env node
// Idempotent Vercel provisioning for the TatFinder Beta 2026 split deployment.
//
// Contract:
//   - Reuses existing projects; creates them only when absent.
//   - Adds env vars only when the key is absent; NEVER overwrites existing values.
//   - Links each project to the GitHub repo and deploys the production branch.
//
// Usage: node scripts/vercel-setup.mjs --team <team-slug-or-id>
// Env:   VERCEL_TOKEN (required), ANTHROPIC_API_KEY (optional, added if absent)

const REPO = 'TatFinder/TatFinder-Beta-2026';
const PRODUCTION_BRANCH = 'main';

// Root directories are the monorepo apps — NOT the root-level client/ or
// artist/ folders (those are a separate root-site split with absolute paths).
const PROJECTS = [
  { name: 'tfbeta2026client', rootDirectory: 'apps/client' },
  { name: 'tfbeta2026artist', rootDirectory: 'apps/studio' },
];

const API = 'https://api.vercel.com';
const DEPLOY_TIMEOUT_MS = 20 * 60 * 1000;
const POLL_INTERVAL_MS = 10 * 1000;

const token = process.env.VERCEL_TOKEN;
if (!token) {
  console.error('ERROR: VERCEL_TOKEN env var is required.');
  process.exit(1);
}

function parseTeamArg() {
  const argv = process.argv.slice(2);
  const i = argv.indexOf('--team');
  if (i !== -1 && argv[i + 1]) return argv[i + 1];
  if (process.env.TEAM) return process.env.TEAM;
  console.error('ERROR: pass --team <team-slug-or-id> (or set TEAM env var).');
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(path, { method = 'GET', body } = {}) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  let json = null;
  try {
    json = await res.json();
  } catch {
    // non-JSON body (rare) — leave json null
  }
  return { status: res.status, json };
}

function apiError(what, { status, json }) {
  const msg = json?.error?.message ?? JSON.stringify(json);
  return new Error(`${what} failed (HTTP ${status}): ${msg}`);
}

// Probe token validity independent of team scope. A valid access token always
// resolves /v2/user, even one scoped to a single team; a 401/403 here means the
// token itself is bad (wrong value, revoked, or not a REST API access token).
async function whoami() {
  const res = await api('/v2/user');
  if (res.status === 200) {
    const u = res.json.user ?? res.json;
    console.log(`Token OK: authenticated as ${u.username ?? u.name ?? '(unknown)'} (${u.email ?? 'no email'}).`);
    return true;
  }
  console.error(`TOKEN CHECK FAILED: GET /v2/user returned HTTP ${res.status}: ${res.json?.error?.message ?? JSON.stringify(res.json)}`);
  console.error('The token is not a usable Vercel REST API access token. Create one at');
  console.error('https://vercel.com/account/settings/tokens (scope: the account/team that owns the projects), then update the GitHub secret.');
  return false;
}

async function resolveTeam(input) {
  // A team ID (team_...) can be used directly and needs no listing permission.
  if (input.startsWith('team_')) {
    const res = await api(`/v2/teams/${input}`);
    if (res.status === 200) {
      console.log(`Team: ${res.json.slug ?? '(slug?)'} (${input})`);
      return input;
    }
    throw apiError(`Fetching team ${input}`, res);
  }
  // Otherwise resolve the slug by listing the token's teams.
  const res = await api('/v2/teams?limit=100');
  if (res.status !== 200) {
    // whoami already ran in main(); reaching here means the token is valid but
    // cannot enumerate teams (team-scoped token). Tell the user how to proceed.
    console.error(`ERROR: could not list teams (HTTP ${res.status}: ${res.json?.error?.message ?? 'Not authorized'}).`);
    console.error(`The token authenticated but is not permitted to list teams — likely scoped to one team.`);
    console.error(`Re-run this workflow with the numeric team ID (team_...) as the "team" input instead of the slug "${input}".`);
    console.error(`Find it in Vercel: the team's Settings → General → Team ID.`);
    process.exit(1);
  }
  const teams = res.json.teams ?? [];
  const team = teams.find((t) => t.id === input || t.slug === input);
  if (!team) {
    console.error(`ERROR: team "${input}" not found for this token.`);
    console.error(`Teams visible to this token (slugs): ${teams.map((t) => t.slug).join(', ') || '(none)'}`);
    process.exit(1);
  }
  console.log(`Team: ${team.slug} (${team.id})`);
  return team.id;
}

async function getProject(teamId, name) {
  const res = await api(`/v9/projects/${name}?teamId=${teamId}`);
  if (res.status === 200) return res.json;
  if (res.status === 404) return null;
  throw apiError(`Fetching project ${name}`, res);
}

async function ensureProject(teamId, { name, rootDirectory }) {
  const existing = await getProject(teamId, name);
  if (existing) {
    console.log(`Project ${name}: exists - reusing (settings left untouched).`);
    return existing;
  }
  // Prefer creating with the Git link in one call; fall back to a bare
  // project so a Git-integration problem produces a clear, separate error.
  let res = await api(`/v11/projects?teamId=${teamId}`, {
    method: 'POST',
    body: {
      name,
      rootDirectory,
      gitRepository: { type: 'github', repo: REPO },
    },
  });
  if (res.status >= 400) {
    console.log(`WARN: creating ${name} with Git link failed (HTTP ${res.status}): ${res.json?.error?.message ?? ''}`);
    console.log(`WARN: retrying creation of ${name} without Git link; will link separately.`);
    res = await api(`/v11/projects?teamId=${teamId}`, {
      method: 'POST',
      body: { name, rootDirectory },
    });
  }
  if (res.status >= 400) throw apiError(`Creating project ${name}`, res);
  console.log(`Project ${name}: created (rootDirectory=${rootDirectory}).`);
  return res.json;
}

async function ensureLink(teamId, project) {
  const linkedRepo = project.link
    ? `${project.link.org ?? project.link.owner ?? ''}/${project.link.repo ?? ''}`
    : null;
  if (linkedRepo && linkedRepo.toLowerCase() === REPO.toLowerCase()) {
    console.log(`Project ${project.name}: already linked to ${REPO}.`);
    return true;
  }
  if (linkedRepo) {
    console.log(`WARN: ${project.name} is linked to ${linkedRepo}, expected ${REPO}. Leaving the existing link untouched.`);
    return true;
  }
  for (const version of ['v10', 'v9']) {
    const res = await api(`/${version}/projects/${project.id}/link?teamId=${teamId}`, {
      method: 'POST',
      body: { type: 'github', repo: REPO },
    });
    if (res.status < 400) {
      console.log(`Project ${project.name}: linked to ${REPO}.`);
      return true;
    }
    if (version === 'v9') {
      console.log(`WARN: could not Git-link ${project.name} to ${REPO} (HTTP ${res.status}): ${res.json?.error?.message ?? JSON.stringify(res.json)}`);
    }
  }
  return false;
}

async function ensureEnv(teamId, project, key, value) {
  if (!value) {
    console.log(`Project ${project.name}: ${key} not provided - skipping env setup.`);
    return;
  }
  const res = await api(`/v9/projects/${project.id}/env?teamId=${teamId}`);
  if (res.status !== 200) {
    console.log(`WARN: could not list env vars for ${project.name} (HTTP ${res.status}); not adding ${key}.`);
    return;
  }
  const envs = res.json.envs ?? [];
  if (envs.some((e) => e.key === key)) {
    console.log(`Project ${project.name}: env ${key} already present - leaving value as-is.`);
    return;
  }
  const create = await api(`/v10/projects/${project.id}/env?teamId=${teamId}`, {
    method: 'POST',
    body: {
      key,
      value,
      type: 'encrypted',
      target: ['production', 'preview', 'development'],
    },
  });
  if (create.status >= 400) {
    console.log(`WARN: adding env ${key} to ${project.name} failed (HTTP ${create.status}): ${create.json?.error?.message ?? ''}`);
    return;
  }
  console.log(`Project ${project.name}: env ${key} added.`);
}

async function deploy(teamId, name) {
  // Re-fetch to pick up the link created above.
  const project = await getProject(teamId, name);
  const repoId = project?.link?.repoId;
  if (!repoId) {
    console.log(`WARN: ${name} has no Git link - cannot deploy from ${REPO}.`);
    return false;
  }
  const res = await api(`/v13/deployments?teamId=${teamId}&forceNew=1&skipAutoDetectionConfirmation=1`, {
    method: 'POST',
    body: {
      name,
      project: name,
      target: 'production',
      gitSource: { type: 'github', repoId, ref: PRODUCTION_BRANCH },
    },
  });
  if (res.status >= 400) {
    console.log(`WARN: creating deployment for ${name} failed (HTTP ${res.status}): ${res.json?.error?.message ?? JSON.stringify(res.json)}`);
    return false;
  }
  const id = res.json.id;
  console.log(`Project ${name}: deployment ${id} created from ${REPO}@${PRODUCTION_BRANCH}; waiting for READY...`);
  const deadline = Date.now() + DEPLOY_TIMEOUT_MS;
  while (Date.now() < deadline) {
    await sleep(POLL_INTERVAL_MS);
    const poll = await api(`/v13/deployments/${id}?teamId=${teamId}`);
    if (poll.status >= 400) continue;
    const state = poll.json.readyState ?? poll.json.status;
    if (state === 'READY') {
      console.log(`LIVE https://${name}.vercel.app`);
      return true;
    }
    if (state === 'ERROR' || state === 'CANCELED') {
      console.log(`WARN: deployment for ${name} ended ${state}: https://${poll.json.url ?? `vercel.com`}`);
      return false;
    }
  }
  console.log(`WARN: deployment for ${name} did not reach READY within ${DEPLOY_TIMEOUT_MS / 60000} minutes.`);
  return false;
}

async function main() {
  const teamArg = parseTeamArg();
  if (!(await whoami())) process.exit(1);
  const teamId = await resolveTeam(teamArg);
  let allLive = true;
  for (const spec of PROJECTS) {
    const project = await ensureProject(teamId, spec);
    await ensureLink(teamId, project);
    await ensureEnv(teamId, project, 'ANTHROPIC_API_KEY', process.env.ANTHROPIC_API_KEY);
    const live = await deploy(teamId, spec.name);
    allLive = allLive && live;
  }
  if (!allLive) {
    console.error('One or more projects did not reach LIVE - see warnings above.');
    process.exit(1);
  }
  console.log('All projects provisioned and LIVE.');
}

main().catch((err) => {
  console.error(`ERROR: ${err.message}`);
  process.exit(1);
});
