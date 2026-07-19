import * as React from 'react';
import { Label, Textarea } from 'tatfinder-beta';

export const Default = () => (
  <div className="max-w-md space-y-2 p-4">
    <Label htmlFor="idea">Describe your tattoo idea</Label>
    <Textarea
      id="idea"
      placeholder="Tell the artist about the design, placement, and size you have in mind..."
      rows={4}
    />
    <p className="text-xs text-text-tertiary">
      Include references to styles you like — it helps the artist quote accurately.
    </p>
  </div>
);

export const Filled = () => (
  <div className="max-w-md space-y-2 p-4">
    <Label htmlFor="request">Booking request details</Label>
    <Textarea
      id="request"
      rows={5}
      defaultValue={
        'Looking for a fine-line botanical half-sleeve on my left forearm — ' +
        'peonies and fern leaves, roughly 20cm. I have two reference photos ' +
        'from your flash book. Available weekday evenings after 5pm.'
      }
    />
  </div>
);

export const States = () => (
  <div className="max-w-md space-y-4 p-4">
    <div className="space-y-2">
      <Label htmlFor="policy">Aftercare notes</Label>
      <Textarea
        id="policy"
        rows={3}
        defaultValue="Keep the wrap on for 24 hours, then wash gently twice a day."
        disabled
      />
      <p className="text-xs text-text-tertiary">Studio policy text is managed by admins.</p>
    </div>
    <div className="space-y-2">
      <Label htmlFor="review">Your review</Label>
      <Textarea
        id="review"
        rows={2}
        defaultValue="Great"
        aria-invalid="true"
        className="border-error focus-visible:ring-error"
      />
      <p className="text-xs text-error">Reviews must be at least 20 characters.</p>
    </div>
  </div>
);
