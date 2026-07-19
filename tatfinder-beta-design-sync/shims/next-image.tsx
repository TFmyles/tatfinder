// Browser shim for next/image — renders a plain <img>. Sync-preview only.
import * as React from 'react';
export default function Image(props: any) {
  const { src, alt = '', fill, priority, loader, quality, placeholder, blurDataURL,
    unoptimized, onLoadingComplete, sizes, ...rest } = props;
  const url = typeof src === 'string' ? src : (src && src.src) || '';
  const style = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', ...rest.style }
    : rest.style;
  return <img src={url} alt={alt} {...rest} style={style} />;
}
