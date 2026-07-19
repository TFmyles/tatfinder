import * as React from 'react';
import { Button } from 'tatfinder-beta';

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3 p-4">
    <Button>Book appointment</Button>
    <Button variant="foundation">View portfolio</Button>
    <Button variant="destructive">Cancel booking</Button>
    <Button variant="outline">Message artist</Button>
    <Button variant="secondary">Save for later</Button>
    <Button variant="ghost">Skip</Button>
    <Button variant="link">See all styles</Button>
  </div>
);

export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-3 p-4">
    <Button size="xs">Tiny</Button>
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra large</Button>
  </div>
);

export const States = () => (
  <div className="flex flex-wrap items-center gap-3 p-4">
    <Button disabled>Fully booked</Button>
    <Button variant="outline" disabled>Unavailable</Button>
    <Button variant="gradient-accent">Featured flash</Button>
    <Button variant="success">Confirmed</Button>
    <Button variant="warning">Pending deposit</Button>
  </div>
);
