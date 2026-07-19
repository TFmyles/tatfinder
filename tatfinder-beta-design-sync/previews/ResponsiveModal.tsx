import * as React from 'react';
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalDescription,
  ResponsiveModalFooter,
  Button,
  Badge,
} from 'tatfinder-beta';

// ResponsiveModal renders a centered Dialog above 767px and a BottomSheet
// below. The 900x700 capture viewport exercises the desktop Dialog branch.

export const BookingDetails = () => (
  <ResponsiveModal open>
    <ResponsiveModalContent>
      <ResponsiveModalHeader>
        <ResponsiveModalTitle>Booking #TF-2189</ResponsiveModalTitle>
        <ResponsiveModalDescription>
          Requested by Priya Anand · 3 hours ago
        </ResponsiveModalDescription>
      </ResponsiveModalHeader>
      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-text-secondary">Status</span>
          <Badge variant="secondary">Pending review</Badge>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Piece</span>
          <span className="font-medium">Snake wrap, right ankle</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Preferred dates</span>
          <span className="font-medium">Aug 18 – Aug 29</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Budget</span>
          <span className="font-medium">$400 – $600</span>
        </div>
      </div>
      <ResponsiveModalFooter>
        <Button variant="outline">Decline</Button>
        <Button>Accept &amp; propose time</Button>
      </ResponsiveModalFooter>
    </ResponsiveModalContent>
  </ResponsiveModal>
);

export const ConsentReminder = () => (
  <ResponsiveModal open>
    <ResponsiveModalContent className="max-w-md">
      <ResponsiveModalHeader>
        <ResponsiveModalTitle>Consent form required</ResponsiveModalTitle>
        <ResponsiveModalDescription>
          Iron Lotus Studio needs a signed consent and medical-history form
          before Saturday&apos;s session.
        </ResponsiveModalDescription>
      </ResponsiveModalHeader>
      <ResponsiveModalFooter>
        <Button variant="ghost">Later</Button>
        <Button>Sign form now</Button>
      </ResponsiveModalFooter>
    </ResponsiveModalContent>
  </ResponsiveModal>
);
