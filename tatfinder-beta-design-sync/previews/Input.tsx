import * as React from 'react';
import { Input, Label } from 'tatfinder-beta';

export const Default = () => (
  <div className="max-w-sm space-y-2 p-4">
    <Label htmlFor="artist-name">Artist or studio name</Label>
    <Input id="artist-name" placeholder="e.g. Iron Lotus Studio" />
  </div>
);

export const Filled = () => (
  <div className="max-w-sm space-y-4 p-4">
    <div className="space-y-2">
      <Label htmlFor="full-name">Full name</Label>
      <Input id="full-name" defaultValue="Riley Chen" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" defaultValue="riley.chen@gmail.com" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="deposit">Deposit amount</Label>
      <Input id="deposit" type="number" defaultValue="150" />
    </div>
  </div>
);

export const States = () => (
  <div className="max-w-sm space-y-4 p-4">
    <div className="space-y-2">
      <Label htmlFor="handle">Instagram handle</Label>
      <Input
        id="handle"
        defaultValue="@ink"
        aria-invalid="true"
        className="border-error focus-visible:ring-error"
      />
      <p className="text-xs text-error">Handle must be at least 5 characters.</p>
    </div>
    <div className="space-y-2">
      <Label htmlFor="studio">Studio</Label>
      <Input id="studio" defaultValue="Iron Lotus Studio" disabled />
      <p className="text-xs text-text-tertiary">Assigned by your studio manager.</p>
    </div>
  </div>
);
