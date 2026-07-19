// Early-init browser polyfill for `process` (bundled first via cfg.extraEntries).
// App components read process.env.NEXT_PUBLIC_* at render time, and some lib
// modules validate keys at module scope. Values below are obviously-fake
// preview placeholders — never real credentials.
(globalThis as any).process ??= {
  env: {
    NODE_ENV: 'production',
    NEXT_PUBLIC_APP_URL: 'https://preview.invalid',
    NEXT_PUBLIC_SITE_URL: 'https://preview.invalid',
    NEXT_PUBLIC_SUPABASE_URL: 'https://preview-placeholder.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'sb-preview-placeholder-anon-key',
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: 'pk_test_previewplaceholder000000',
    NEXT_PUBLIC_MAPBOX_TOKEN: 'pk.preview-placeholder',
    NEXT_PUBLIC_BETA_MODE_ENABLED: 'false',
    NEXT_PUBLIC_ENABLE_MOCK_AUTH: 'true',
    NEXT_PUBLIC_SENTRY_DSN: '',
  },
  version: 'v20.0.0',
  platform: 'browser',
  browser: true,
  nextTick: (f: any, ...a: any[]) => setTimeout(() => f(...a), 0),
};
export const dsProcessPolyfill = true;
