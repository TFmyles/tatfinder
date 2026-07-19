// Browser shim for next/headers. Sync-preview only.
export const headers = () => new Map();
export const cookies = () => ({ get: () => undefined, getAll: () => [], has: () => false, set: () => {}, delete: () => {} });
export const draftMode = () => ({ isEnabled: false });
