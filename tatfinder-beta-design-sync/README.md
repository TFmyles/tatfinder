# Design-sync state for the tatfinder-beta design system

Durable inputs for the claude.ai/design sync of the archived
`TFmyles/tatfinder-beta` repo (the archive itself cannot be pushed to, so its
`.design-sync/` state lives here).

**Target project:** "TatFinder Design System" —
https://claude.ai/design/p/7515c4e0-2cd4-49a4-a12e-e570344e83e6

## Restore into a fresh clone

```sh
git clone https://github.com/tfmyles/tatfinder-beta
cp -r tatfinder-beta-design-sync/. tatfinder-beta/.design-sync/
mv tatfinder-beta/.design-sync/README.md /tmp/  # this file isn't part of .design-sync
cd tatfinder-beta
npm ci
ln -sfn .. node_modules/tatfinder-beta   # converter resolves the pkg via node_modules
# stage converter scripts from the design-sync skill into .ds-sync/, then:
#   run cfg.buildCmd (compiles Tailwind CSS entry), then package-build/resync per the skill.
# Playwright: install the version matching the container's chromium cache
# (this container: chromium-1194 -> playwright@1.56.0).
```

`NOTES.md` carries every gotcha and the Re-sync risks watch-list — read it first.
