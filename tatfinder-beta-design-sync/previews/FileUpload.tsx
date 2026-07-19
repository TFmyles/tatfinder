import * as React from 'react';
import { FileUpload } from 'tatfinder-beta';

const noop = () => {};

// The capture browser has no outbound network (remote unsplash/picsum URLs
// render as broken-image icons), so reference thumbnails are inline SVG
// data URIs — linework on ink-dark and a flash-sheet on paper.
const svgUri = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const sleeveReference = svgUri(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">' +
    '<rect width="400" height="400" fill="#1c1e26"/>' +
    '<path d="M80 320 C140 240 120 160 200 120 C260 90 300 140 280 200 C260 260 180 260 160 320" stroke="#e8e6e1" stroke-width="6" fill="none"/>' +
    '<circle cx="240" cy="96" r="20" stroke="#e8e6e1" stroke-width="5" fill="none"/>' +
    '<path d="M110 340 C180 300 260 320 300 350" stroke="#8a8f9f" stroke-width="4" fill="none"/>' +
    '</svg>'
);

const flashSheet = svgUri(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">' +
    '<rect width="400" height="400" fill="#f4efe6"/>' +
    '<path d="M100 140 l30 -60 30 60 -30 60 z" stroke="#232323" stroke-width="5" fill="none"/>' +
    '<circle cx="280" cy="110" r="42" stroke="#232323" stroke-width="5" fill="none"/>' +
    '<path d="M90 300 q60 -70 120 0 q60 70 120 0" stroke="#232323" stroke-width="5" fill="none"/>' +
    '<path d="M262 92 l36 36 M298 92 l-36 36" stroke="#b3402e" stroke-width="4"/>' +
    '</svg>'
);

const referenceImages = [
  {
    url: sleeveReference,
    key: 'booking-refs/sleeve-reference.jpg',
    fileName: 'sleeve-reference.jpg',
    fileSize: 412300,
    contentType: 'image/jpeg',
  },
  {
    url: flashSheet,
    key: 'booking-refs/flash-sheet.png',
    fileName: 'flash-sheet.png',
    fileSize: 268100,
    contentType: 'image/png',
  },
];

export const Idle = () => (
  <div className="max-w-md p-4">
    <FileUpload
      onUpload={noop}
      uploadContext={{ type: 'booking-reference' }}
      maxFiles={5}
      maxSize={10}
    />
  </div>
);

export const WithReferenceImages = () => (
  <div className="max-w-md p-4">
    <FileUpload
      onUpload={noop}
      onRemove={noop}
      uploadedFiles={referenceImages}
      uploadContext={{ type: 'booking-reference', entityId: 'bk_20240515_riley' }}
      maxFiles={5}
      maxSize={10}
    />
  </div>
);

export const Disabled = () => (
  <div className="max-w-md p-4">
    <FileUpload
      onUpload={noop}
      uploadContext={{ type: 'message-attachment' }}
      disabled
      maxFiles={3}
      maxSize={5}
    />
  </div>
);
