import * as React from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Badge,
} from 'tatfinder-beta';

// Remote images (unsplash/picsum) do NOT load in the capture environment —
// self-contained SVG data URIs stand in as flash-art thumbnails.
const inkThumb = (art: string) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#2b2e33"/><g fill="none" stroke="#e8e4da" stroke-width="3" stroke-linecap="round">${art}</g></svg>`
  );

const floralThumb = inkThumb(
  '<circle cx="100" cy="82" r="34"/><circle cx="100" cy="82" r="14"/><path d="M100 116v48"/><path d="M100 132c-18 6-28 2-40-8"/><path d="M100 146c18 6 28 2 40-8"/>'
);
const serpentThumb = inkThumb(
  '<path d="M40 152c30-42 50 20 80-20s18-58 38-70"/><circle cx="160" cy="58" r="6"/><path d="M40 152l-10 14"/><path d="M40 152l16 6"/>'
);
const waveThumb = inkThumb(
  '<path d="M28 142c20-30 50-30 70 0s50 30 72 0"/><path d="M28 112c20-30 50-30 70 0"/><circle cx="140" cy="78" r="22"/><path d="M126 94c10 10 20 10 28 0"/>'
);

export const ArtistProfileTabs = () => (
  <div className="max-w-lg">
    <Tabs defaultValue="portfolio">
      <TabsList>
        <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
      </TabsList>
      <TabsContent value="portfolio">
        <div className="grid grid-cols-3 gap-2">
          <img
            src={floralThumb}
            alt="Fine-line floral tattoo on forearm"
            className="aspect-square w-full rounded-md object-cover"
          />
          <img
            src={serpentThumb}
            alt="Blackwork serpent flash design"
            className="aspect-square w-full rounded-md object-cover"
          />
          <img
            src={waveThumb}
            alt="Japanese koi sleeve in progress"
            className="aspect-square w-full rounded-md object-cover"
          />
        </div>
        <p className="mt-2 text-sm text-text-secondary">
          32 healed pieces · fine line, botanical, single needle
        </p>
      </TabsContent>
      <TabsContent value="reviews">
        <p className="text-sm text-text-secondary">Hidden panel</p>
      </TabsContent>
      <TabsContent value="about">
        <p className="text-sm text-text-secondary">Hidden panel</p>
      </TabsContent>
    </Tabs>
  </div>
);

export const BookingStates = () => (
  <div className="max-w-lg">
    <Tabs defaultValue="pending">
      <TabsList>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="past">Past</TabsTrigger>
        <TabsTrigger value="archived" disabled>
          Archived
        </TabsTrigger>
      </TabsList>
      <TabsContent value="pending">
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-md border border-border-color-default px-4 py-3">
            <div>
              <p className="text-sm font-medium">Priya Anand — snake wrap</p>
              <p className="text-xs text-text-secondary">
                Requested Aug 18–29 · budget $400–600
              </p>
            </div>
            <Badge variant="secondary">Awaiting reply</Badge>
          </div>
          <div className="flex items-center justify-between rounded-md border border-border-color-default px-4 py-3">
            <div>
              <p className="text-sm font-medium">Diego Marsh — script rework</p>
              <p className="text-xs text-text-secondary">
                Requested Sep 2 · consult first
              </p>
            </div>
            <Badge variant="secondary">Awaiting reply</Badge>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="upcoming">
        <p className="text-sm text-text-secondary">Hidden panel</p>
      </TabsContent>
      <TabsContent value="past">
        <p className="text-sm text-text-secondary">Hidden panel</p>
      </TabsContent>
    </Tabs>
  </div>
);
