import * as React from 'react';
import { Label, Slider } from 'tatfinder-beta';

export const Budget = () => (
  <div className="max-w-sm space-y-3 p-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="budget">Maximum budget</Label>
      <span className="text-sm font-medium text-text-primary">$450</span>
    </div>
    <Slider id="budget" defaultValue={[450]} min={50} max={1000} step={25} />
    <div className="flex justify-between text-xs text-text-tertiary">
      <span>$50</span>
      <span>$1,000</span>
    </div>
  </div>
);

export const Range = () => (
  <div className="max-w-sm space-y-3 p-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="session-length">Session length</Label>
      <span className="text-sm font-medium text-text-primary">2–5 hrs</span>
    </div>
    <Slider id="session-length" defaultValue={[2, 5]} min={1} max={8} step={1} />
    <div className="flex justify-between text-xs text-text-tertiary">
      <span>1 hr</span>
      <span>8 hrs</span>
    </div>
  </div>
);

export const Disabled = () => (
  <div className="max-w-sm space-y-3 p-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="radius" className="opacity-70">
        Search radius
      </Label>
      <span className="text-sm text-text-tertiary">25 mi</span>
    </div>
    <Slider id="radius" defaultValue={[25]} min={5} max={100} step={5} disabled className="opacity-50" />
    <p className="text-xs text-text-tertiary">Set a location to adjust the radius.</p>
  </div>
);
