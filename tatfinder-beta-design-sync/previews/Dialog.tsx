import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Input,
  Label,
} from 'tatfinder-beta';

// Overlay components render OPEN and inline — the portal is fixed-positioned,
// so the capture viewport shows the modal centered over the scrim.

export const BookingRequest = () => (
  <Dialog open>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Request a booking with Mara Voss</DialogTitle>
        <DialogDescription>
          Share a few details about your piece. Mara usually replies within two
          business days.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="placement">Placement</Label>
          <Input id="placement" defaultValue="Left forearm, inner" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="size">Approximate size</Label>
          <Input id="size" placeholder='e.g. 4" x 6"' />
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Send request</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const DepositConfirmation = () => (
  <Dialog open>
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle>Deposit received</DialogTitle>
        <DialogDescription>
          Your session with Kaito Ren at Iron Lotus Studio is locked in.
        </DialogDescription>
      </DialogHeader>
      <div className="rounded-lg bg-bg-secondary p-4 text-sm">
        <div className="flex justify-between py-1">
          <span className="text-text-secondary">Session</span>
          <span className="font-medium">Blackwork sleeve, session 2 of 4</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-text-secondary">Date</span>
          <span className="font-medium">Fri, Aug 14 · 1:00 PM</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-text-secondary">Deposit paid</span>
          <span className="font-medium">$150.00</span>
        </div>
      </div>
      <DialogFooter>
        <Button variant="secondary">Add to calendar</Button>
        <Button>Done</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
