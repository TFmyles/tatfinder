import * as React from 'react';
import { Input, InputGroup, Label, Textarea } from 'tatfinder-beta';

export const ContactDetails = () => (
  <div className="max-w-md p-4">
    <InputGroup label="Contact details">
      <div className="space-y-2">
        <Label htmlFor="ig-name">Full name</Label>
        <Input id="ig-name" defaultValue="Riley Chen" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="ig-email">Email</Label>
        <Input id="ig-email" type="email" defaultValue="riley.chen@gmail.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="ig-phone">Phone</Label>
        <Input id="ig-phone" type="tel" placeholder="(503) 555-0182" />
      </div>
    </InputGroup>
  </div>
);

export const BookingDetails = () => (
  <div className="max-w-md space-y-4 p-4">
    <InputGroup label="Design brief">
      <div className="space-y-2">
        <Label htmlFor="ig-idea">Tattoo idea</Label>
        <Textarea
          id="ig-idea"
          rows={3}
          defaultValue="Fine-line peony with fern leaves, inner forearm, around 15cm tall."
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="ig-budget">Budget</Label>
        <Input id="ig-budget" defaultValue="$400–600" />
      </div>
    </InputGroup>
    <InputGroup label="Availability">
      <div className="space-y-2">
        <Label htmlFor="ig-dates">Preferred dates</Label>
        <Input id="ig-dates" placeholder="e.g. weekday evenings in June" />
      </div>
    </InputGroup>
  </div>
);
