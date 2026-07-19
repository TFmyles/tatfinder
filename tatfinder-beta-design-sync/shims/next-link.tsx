// Browser shim for next/link — renders a plain <a>. Sync-preview only.
import * as React from 'react';
export default function Link({ href, children, prefetch, replace, scroll, shallow, legacyBehavior, ...rest }: any) {
  const url = typeof href === 'string' ? href : '#';
  return <a href={url} {...rest}>{children}</a>;
}
