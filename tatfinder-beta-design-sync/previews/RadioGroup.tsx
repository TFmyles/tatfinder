import * as React from 'react';
import { Label, RadioGroup, RadioGroupItem } from 'tatfinder-beta';

export const SessionType = () => (
  <div className="max-w-sm space-y-3 p-4">
    <p className="text-sm font-medium text-text-primary">What kind of session?</p>
    <RadioGroup defaultValue="flash">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="custom" id="session-custom" />
        <Label htmlFor="session-custom">Custom design consult</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="flash" id="session-flash" />
        <Label htmlFor="session-flash">Flash design</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="coverup" id="session-coverup" />
        <Label htmlFor="session-coverup">Cover-up / rework</Label>
      </div>
    </RadioGroup>
  </div>
);

export const WithDescriptions = () => (
  <div className="max-w-md space-y-3 p-4">
    <p className="text-sm font-medium text-text-primary">Deposit preference</p>
    <RadioGroup defaultValue="card" className="gap-4">
      <div className="flex items-start gap-3">
        <RadioGroupItem value="card" id="dep-card" className="mt-0.5" />
        <div className="space-y-1">
          <Label htmlFor="dep-card">Pay deposit now</Label>
          <p className="text-xs text-text-tertiary">
            Secure your slot instantly — refundable up to 72 hours before the session.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <RadioGroupItem value="studio" id="dep-studio" className="mt-0.5" />
        <div className="space-y-1">
          <Label htmlFor="dep-studio">Pay at the studio</Label>
          <p className="text-xs text-text-tertiary">
            The artist confirms manually; slots may be released after 48 hours.
          </p>
        </div>
      </div>
    </RadioGroup>
  </div>
);

export const Disabled = () => (
  <div className="max-w-sm space-y-3 p-4">
    <p className="text-sm font-medium text-text-primary">
      Placement <span className="text-text-tertiary">(locked after deposit)</span>
    </p>
    <RadioGroup defaultValue="forearm" disabled>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="forearm" id="pl-forearm" />
        <Label htmlFor="pl-forearm" className="opacity-70">
          Forearm
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="shoulder" id="pl-shoulder" />
        <Label htmlFor="pl-shoulder" className="opacity-70">
          Shoulder
        </Label>
      </div>
    </RadioGroup>
  </div>
);
