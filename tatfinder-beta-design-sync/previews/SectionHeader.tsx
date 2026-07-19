import * as React from 'react';
import { SectionHeader } from 'tatfinder-beta';

export const Centered = () => (
  <div className="p-6">
    <SectionHeader
      title="Find your artist"
      description="Browse portfolios from 2,400+ verified tattoo artists, filtered by style, city, and availability."
    />
  </div>
);

export const LeftAligned = () => (
  <div className="p-6">
    <SectionHeader
      align="left"
      title="How booking works"
      description="Pick a flash design or bring your own concept — deposits are held in escrow until your session is confirmed."
    />
  </div>
);
