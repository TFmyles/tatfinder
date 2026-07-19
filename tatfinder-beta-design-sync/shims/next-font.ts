// Browser shim for next/font/google + next/font/local. Sync-preview only.
// Any named export (Inter, Roboto, ...) is a factory returning inert metadata;
// real font-face rules ship via the compiled CSS / fonts pipeline instead.
const factory = () => ({ className: '', variable: '', style: { fontFamily: 'inherit' } });
module.exports = new Proxy({ default: factory }, { get: (t: any, k) => (k in t ? t[k] : factory) });
