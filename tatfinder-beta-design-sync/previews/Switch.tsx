import * as React from 'react';
import { Label, Switch } from 'tatfinder-beta';

export const Default = () => (
  <div className="flex items-center gap-3 p-4">
    <Switch id="books-open" defaultChecked />
    <Label htmlFor="books-open">Books open</Label>
  </div>
);

export const NotificationSettings = () => (
  <div className="max-w-sm space-y-4 p-4">
    <p className="text-sm font-medium text-text-primary">Notifications</p>
    <div className="flex items-center justify-between gap-4">
      <div>
        <Label htmlFor="nf-email">Email reminders</Label>
        <p className="text-xs text-text-tertiary">Booking confirmations and session reminders</p>
      </div>
      <Switch id="nf-email" defaultChecked />
    </div>
    <div className="flex items-center justify-between gap-4">
      <div>
        <Label htmlFor="nf-sms">SMS alerts</Label>
        <p className="text-xs text-text-tertiary">Day-of reminders 2 hours before</p>
      </div>
      <Switch id="nf-sms" defaultChecked />
    </div>
    <div className="flex items-center justify-between gap-4">
      <div>
        <Label htmlFor="nf-marketing">Flash drops &amp; guest spots</Label>
        <p className="text-xs text-text-tertiary">News from artists you follow</p>
      </div>
      <Switch id="nf-marketing" />
    </div>
  </div>
);

export const Disabled = () => (
  <div className="max-w-sm space-y-3 p-4">
    <div className="flex items-center gap-3">
      <Switch id="sw-locked-on" defaultChecked disabled />
      <Label htmlFor="sw-locked-on" className="opacity-70">
        Deposit required (studio policy)
      </Label>
    </div>
    <div className="flex items-center gap-3">
      <Switch id="sw-locked-off" disabled />
      <Label htmlFor="sw-locked-off" className="opacity-70">
        Instant book (verify your studio first)
      </Label>
    </div>
  </div>
);
