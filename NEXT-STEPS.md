# NEXT STEPS — TatFinder Beta 2026 provisioning

This repo acts as the ops/control repo for provisioning the beta split
deployment. The application code lives in `TatFinder/TatFinder-Beta-2026`.

## Design system → claude.ai/design

Status: **synced 2026-07-19** — project "TatFinder Design System"
(https://claude.ai/design/p/7515c4e0-2cd4-49a4-a12e-e570344e83e6), imported
from the archived `TFmyles/tatfinder-beta` snapshot.

- 461 components imported (full bundle + types + docs + token/font pipeline);
  36 have authored, screenshot-graded preview cards (all good); the remainder
  ship functional with floor cards. `DialogDemo`/`SelectDemo` excluded (demos).
- [ ] Author the deferred ~38 preview cards (badges + layout sets) on a future
      re-sync — use inline SVG data-URIs for images (capture has no network).
- Durable sync state (config, notes, conventions, shims, authored previews)
  lives in `tatfinder-beta-design-sync/` — see its README for the restore
  recipe. The uploaded `_ds_sync.json` anchors incremental re-syncs.

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
