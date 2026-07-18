# NEXT STEPS — TatFinder Beta 2026 provisioning

This repo acts as the ops/control repo for provisioning the beta split
deployment. The application code lives in `TatFinder/TatFinder-Beta-2026`.

## Vercel provisioning

Status: **in progress** — workflow authored 2026-07-18, awaiting first
successful run.

- [x] `scripts/vercel-setup.mjs` — idempotent provisioning of Vercel projects
      `tfbeta2026client` (root `apps/client`) and `tfbeta2026artist`
      (root `apps/studio`), Git-linked to `TatFinder/TatFinder-Beta-2026`.
      Re-runnable: reuses existing projects, never overwrites env values.
- [x] `.github/workflows/vercel-setup.yml` — "Vercel project setup"
      (`workflow_dispatch`, input `team`, default `tatfinderbeta`).
      Prints token *presence* diagnostics only (never values), resolves the
      token as `secrets.VERCEL_TOKEN || vars.VERCEL_TOKEN` with a migration
      warning when it comes from a Variable, keeps `ANTHROPIC_API_KEY`
      secrets-only.
- [ ] Successful run reporting both:
      `LIVE https://tfbeta2026client.vercel.app`
      `LIVE https://tfbeta2026artist.vercel.app`
- [ ] Cloudflare "Workers Builds: tiny-cake-9d05" check on the merge commit —
      if absent after the org transfer, reconnect the Git integration in the
      Cloudflare dashboard.

## Notes

- Root directories are `apps/client` and `apps/studio`. Do NOT use the
  root-level `client/` or `artist/` folders — they are a separate root-site
  split with absolute paths.
- These files were re-authored from spec in this repo because the originals
  in `TatFinder/TatFinder-Beta-2026` are not reachable from the authoring
  session (cross-org session sourcing limitation).
