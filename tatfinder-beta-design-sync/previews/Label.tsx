import * as React from 'react';
import { Checkbox, Input, Label, Switch } from 'tatfinder-beta';

export const Default = () => (
  <div className="max-w-sm space-y-2 p-4">
    <Label htmlFor="city">Preferred city</Label>
    <Input id="city" placeholder="e.g. Portland, OR" />
  </div>
);

export const Required = () => (
  <div className="max-w-sm space-y-4 p-4">
    <div className="space-y-2">
      <Label htmlFor="req-name" required>
        Full name
      </Label>
      <Input id="req-name" placeholder="As shown on your ID" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="req-email" required>
        Email
      </Label>
      <Input id="req-email" type="email" placeholder="you@example.com" />
    </div>
  </div>
);

export const WithControls = () => (
  <div className="max-w-sm space-y-4 p-4">
    <div className="flex items-center gap-2">
      <Checkbox id="consent" defaultChecked />
      <Label htmlFor="consent">I confirm I am 18 or older</Label>
    </div>
    <div className="flex items-center justify-between gap-4">
      <Label htmlFor="reminders">Session reminders</Label>
      <Switch id="reminders" defaultChecked />
    </div>
  </div>
);
