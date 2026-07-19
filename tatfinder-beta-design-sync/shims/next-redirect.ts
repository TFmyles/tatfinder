// Browser shim for next/dist/client/components/redirect. Sync-preview only.
export const redirect = () => {};
export const RedirectType = { push: 'push', replace: 'replace' };
export const getRedirectError = () => new Error('redirect');
