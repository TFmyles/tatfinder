// Browser shim for @sentry/nextjs — inert. Sync-preview only.
import * as React from 'react';
const noop = (..._a: any[]) => undefined;
function ErrorBoundary({ children }: any) { return <>{children}</>; }
const withErrorBoundary = (C: any) => C;
const explicit: any = {
  ErrorBoundary, withErrorBoundary,
  captureException: noop, captureMessage: noop, captureEvent: noop,
  init: noop, setUser: noop, setTag: noop, setContext: noop,
  addBreadcrumb: noop, withScope: (cb: any) => cb({ setTag: noop, setExtra: noop, setLevel: noop }),
  startSpan: (_o: any, cb: any) => (typeof cb === 'function' ? cb() : undefined),
  getCurrentScope: () => ({ setTag: noop, setExtra: noop, setUser: noop }),
};
module.exports = new Proxy(explicit, { get: (t, k) => (k in t ? t[k] : noop) });
