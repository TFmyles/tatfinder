import * as React from 'react';
import { Checkbox, Label } from 'tatfinder-beta';

export const Default = () => (
  <div className="flex items-center gap-2 p-4">
    <Checkbox id="aftercare" defaultChecked />
    <Label htmlFor="aftercare">I have read the studio aftercare policy</Label>
  </div>
);

export const StyleFilters = () => (
  <div className="max-w-xs space-y-3 p-4">
    <p className="text-sm font-medium text-text-primary">Filter by style</p>
    <div className="flex items-center gap-2">
      <Checkbox id="style-blackwork" defaultChecked />
      <Label htmlFor="style-blackwork">Blackwork</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="style-fineline" defaultChecked />
      <Label htmlFor="style-fineline">Fine line</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="style-japanese" />
      <Label htmlFor="style-japanese">Japanese (Irezumi)</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="style-realism" />
      <Label htmlFor="style-realism">Realism</Label>
    </div>
  </div>
);

export const Disabled = () => (
  <div className="max-w-xs space-y-3 p-4">
    <div className="flex items-center gap-2">
      <Checkbox id="deposit-paid" defaultChecked disabled />
      <Label htmlFor="deposit-paid" className="opacity-70">
        Deposit paid (locked)
      </Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox id="walkins" disabled />
      <Label htmlFor="walkins" className="opacity-70">
        Accepting walk-ins
      </Label>
    </div>
  </div>
);
