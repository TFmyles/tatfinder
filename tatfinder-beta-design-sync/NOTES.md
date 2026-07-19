# design-sync notes — tatfinder-beta

- This repo is a Next.js 14 APP, not a packaged library: no dist/, no library
  build. The converter runs in synth-entry mode from `components/`; the repo's
  own `build` script (prisma generate && next build) is NOT usable as a DS entry.
- Source is the ARCHIVED GitHub repo (TFmyles/tatfinder-beta). The live code
  moved to TatFinder/TatFinder-Beta-2026, which cloud sessions cannot attach
  (cross-owner). Re-syncs from this archive will not see newer components.
- CSS/tokens: shadcn-style "Studio Ink" CSS variables live in app/globals.css;
  compiled via buildCmd (Tailwind v3 CLI) into .design-sync/.cache/compiled.css
  (gitignored — always run buildCmd before the converter).
- Font: Inter via next/font/google (runtime-loaded). Expect [FONT_MISSING];
  resolve via Google-hosted @import or runtimeFontPrefixes.
- .nvmrc pins node 20; container had node 22.22.2 — npm ci and tailwind were
  fine on 22. Watch for engine-sensitive issues.
- components/ui/index.ts is a barrel; camelCase exports (cardVariants etc.)
  should be filtered by PascalCase discovery — prune stragglers via componentSrcMap.

## Build learnings (first sync, 2026-07-19)

- Self-symlink required: `ln -sfn .. node_modules/tatfinder-beta` (converter
  resolves PKG_DIR via node_modules/<pkg>; recreate after fresh install).
- Next.js app imports are shimmed via `.design-sync/shims/` + tsconfig paths in
  `.design-sync/tsconfig.sync.json` (cfg.tsconfig): next/image, next/link,
  next/navigation, next/dynamic, next/font/*, next/server, next/headers,
  next/cache, next root, next/dist/client/components/redirect, server-only,
  and @sentry/nextjs (deep-imports next server internals -> node builtins).
- Aliased DIRECTORY imports (e.g. @/components/tasks) need exact tsconfig-paths
  pins to their index files, listed BEFORE the wildcard aliases (the paths
  plugin returns the bare dir otherwise). 9 pinned; regenerate if new ones appear.
- `process` polyfill ships as cfg.extraEntries[0] (extraEntries bundle before
  the main entry): .design-sync/shims/process-polyfill.ts. It also stubs every
  NEXT_PUBLIC_* key the code reads (lib/stripe-client.ts throws at module scope
  without NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY). Values are fake placeholders.
- Fonts: Gambetta loads from Fontshare, Inter from Google — both via remote
  @import in .design-sync/font-imports.css, concatenated ahead of the Tailwind
  output by buildCmd. --font-inter var also defined there. "Cascadia Mono" in
  globals.css is a fallback stack the app itself never ships — system mono
  fallback matches production behavior.
- Playwright: cached chromium build 1194 ⇒ playwright 1.56.0 in .ds-sync
  (repo pins 1.57/build 1200 — do NOT use the repo's version for validate).
- Known render warns: [TOKENS_MISSING] --radix-accordion-content-height & --tw
  are runtime-set (expected); --brand-accent-rgb / --color-brand-primary-rgb /
  --font-inter resolved via font-imports.css or benign.
- SYSTEMIC: ESM drops ambiguous star re-exports AND default-only exports never
  reach `export *` — 52 components were invisible on window.TatFinderDS.
  Fixed by .design-sync/shims/ambiguous-reexports.ts (regenerate with
  .design-sync/gen-ambiguous-shim.py; runtime-patches the global post-footer).
  PREVIEWS cannot rely on the runtime patch (compile-time resolution): deep-import
  those names, e.g. `from 'tatfinder-beta/components/ui/card'`.
- framer-motion entrance animations raced the screenshot; preview-motion.ts
  (extraEntries) sets MotionGlobalConfig.skipAnimations=true ONLY on card pages
  (file:// or /components/**/*.html) — never in shipped designs.
- DialogDemo/SelectDemo excluded via componentSrcMap (demo wrappers, not DS API).
- Known render warns: [TOKENS_MISSING] runtime-set vars (see earlier bullet);
  [FONT_REMOTE] fontshare/google imports are intentional.

## Wave learnings (folded 2026-07-19)

- SYSTEMIC: the capture Chromium has NO outbound network. Remote images
  (unsplash/picsum) render broken-image icons — preview photo props must use
  inline `data:image/svg+xml;utf8,` URIs (see inkThumb in previews/Tabs.tsx).
  The remote @import fonts likewise don't load during capture: review sheets
  grade in system-font fallback (accepted limitation; fonts DO load in the
  real DS runtime).
- Radix portal overlays need NO cardMode/viewport overrides: capture shoots
  the full 900x700 viewport per ?story=, so Dialog/AlertDialog/BottomSheet/
  Popover/DropdownMenu render in-frame with `open` on the root + a real
  Trigger. (Optional polish: viewport 480x560 would tighten BottomSheet shots.)
- Tabs is a custom context implementation (not Radix): defaultValue renders
  statically; TabsList/TabsTrigger throw outside a Tabs root.
- ResponsiveModal always exercises its desktop Dialog branch in capture
  (useMediaQuery initializes false).
- Input/Textarea have no error prop — app pattern is
  className="border-error focus-visible:ring-error" (ReviewForm.tsx:266).
  FloatingInput's `error` takes a FieldError-shaped object.
- SearchCombobox opens via fetch-mock + input.focus() with >=2 chars and
  debounceMs={0}; it has no options prop.
- Select: `defaultOpen` renders the portal statically. Radix Slider disabled
  needs explicit opacity-50. lucide-react imports fine in previews.
- Known render warns list: [TOKENS_MISSING] runtime vars (earlier bullet),
  [FONT_REMOTE] fontshare/google imports, [RENDER_SKIPPED] only on
  driver-scoped re-syncs with nothing render-affecting changed.

## Re-sync risks

- Source is the ARCHIVED repo — it can never pick up newer app code; re-syncs
  are only meaningful for preview/config/tooling changes until a session can
  be sourced from TatFinder/TatFinder-Beta-2026.
- The next/sentry shims and the process-polyfill's fake NEXT_PUBLIC_* values
  track next@14/@sentry-nextjs as installed — a dependency bump may need shim
  updates; placeholder env values may drift from what new code validates.
- The ambiguous-reexports shim is generated from a point-in-time missing-name
  scan; if components are added/renamed, re-run gen-ambiguous-shim.py with a
  fresh diag scan of the global.
- playwright 1.56.0 is pinned to the container's chromium-1194 cache — a new
  container may cache a different build; re-match via browsers.json.
- ~38 components (badges + layout waves) deliberately ship floor cards; the
  fixed wave prompts must use data-URI image guidance (NOT remote URLs).
- Verified-state carry-forward comes from the uploaded _ds_sync.json anchor;
  grades in .design-sync/.cache are container-local and disposable.
- guidelinesGlob is scoped to docs/COMPONENTS.md + docs/search-ux-analysis.md:
  the repo's docs/ is mostly backend/ops material (default glob swept 23 files
  incl. twilio/stripe/db setup) — not design-agent guidance.
