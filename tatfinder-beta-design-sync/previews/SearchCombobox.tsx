import * as React from 'react';
import { SearchCombobox } from 'tatfinder-beta';

const noop = () => {};

// SearchCombobox has no options prop — suggestions come from
// GET /api/search/suggestions. Mock that endpoint at module scope so the
// open state can render its real dropdown content on the card page.
// Capture browser has no outbound network — the avatar is an inline SVG data
// URI (initials chip); the second artist exercises the icon fallback. The
// suggestion list is trimmed so all three groups fit inside CommandList's
// max-height without a half-clipped row in the static shot.
const maraAvatar =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">' +
      '<rect width="64" height="64" rx="32" fill="#232634"/>' +
      '<text x="32" y="41" font-family="Arial, sans-serif" font-size="22" fill="#f4efe6" text-anchor="middle">MV</text>' +
      '</svg>'
  );

const MOCK_SUGGESTIONS = {
  success: true,
  data: {
    artists: [
      {
        id: 'artist-mara',
        type: 'artist',
        label: 'Mara Voss',
        sublabel: 'Fine line · Portland, OR',
        value: 'mara-voss',
        imageUrl: maraAvatar,
      },
    ],
    locations: [
      {
        id: 'loc-pdx',
        type: 'location',
        label: 'Portland, OR',
        sublabel: '128 artists',
        value: 'portland-or',
      },
    ],
    styles: [{ id: 'style-fineline', type: 'style', label: 'Fine line', value: 'fine-line' }],
  },
};

if (typeof window !== 'undefined') {
  const realFetch = window.fetch ? window.fetch.bind(window) : undefined;
  window.fetch = ((input: any, init?: any) => {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    if (String(url).indexOf('/api/search/suggestions') !== -1) {
      return Promise.resolve(
        new Response(JSON.stringify(MOCK_SUGGESTIONS), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        })
      );
    }
    return realFetch ? realFetch(input, init) : Promise.reject(new Error('fetch unavailable'));
  }) as any;
}

export const Idle = () => (
  <div className="max-w-lg p-4">
    <SearchCombobox value="" onChange={noop} />
  </div>
);

export const WithQuery = () => (
  <div className="max-w-lg p-4">
    <SearchCombobox value="fine line" onChange={noop} />
  </div>
);

export const OpenSuggestions = () => {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    // Focusing the input with a >=2-char value opens the dropdown and
    // triggers the (mocked) suggestion fetch — the component's real open path.
    const t = setTimeout(() => {
      const input = wrapRef.current ? wrapRef.current.querySelector('input') : null;
      if (input) (input as HTMLInputElement).focus();
    }, 50);
    return () => clearTimeout(t);
  }, []);
  return (
    <div ref={wrapRef} className="max-w-lg p-4" style={{ minHeight: 480 }}>
      <SearchCombobox value="fine line" onChange={noop} debounceMs={0} />
    </div>
  );
};
