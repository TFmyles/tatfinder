// Browser shim for the bare 'next' import (type-only names at runtime). Sync-preview only.
const anything: any = undefined;
module.exports = new Proxy({}, { get: () => anything });
