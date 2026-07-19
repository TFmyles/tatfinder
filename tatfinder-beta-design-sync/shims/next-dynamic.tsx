// Browser shim for next/dynamic — lazy without SSR concerns. Sync-preview only.
import * as React from 'react';
export default function dynamic(loader: any, opts?: any) {
  const load = typeof loader === 'function' ? loader : () => loader;
  const C = React.lazy(() => Promise.resolve(load()).then((m: any) => ({ default: m?.default ?? m })));
  const Fallback = opts && opts.loading ? opts.loading : null;
  return (props: any) => (
    <React.Suspense fallback={Fallback ? <Fallback /> : null}>
      <C {...props} />
    </React.Suspense>
  );
}
