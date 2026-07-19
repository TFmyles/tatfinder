import * as React from 'react';
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetDescription,
  Button,
} from 'tatfinder-beta';

// BottomSheetHeader is a sub-part — the only true render is inside an open
// BottomSheet composition.

export const TitleAndDescription = () => (
  <BottomSheet open>
    <BottomSheetContent>
      <BottomSheetHeader>
        <BottomSheetTitle>Reschedule your session</BottomSheetTitle>
        <BottomSheetDescription>
          Pick a new time with Mara Voss. Your deposit carries over
          automatically.
        </BottomSheetDescription>
      </BottomSheetHeader>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" size="sm">Thu, Aug 20 · 2:00 PM</Button>
        <Button variant="outline" size="sm">Fri, Aug 21 · 10:00 AM</Button>
        <Button variant="outline" size="sm">Fri, Aug 21 · 3:30 PM</Button>
        <Button variant="outline" size="sm">Mon, Aug 24 · 1:00 PM</Button>
      </div>
    </BottomSheetContent>
  </BottomSheet>
);

export const TitleOnly = () => (
  <BottomSheet open>
    <BottomSheetContent>
      <BottomSheetHeader>
        <BottomSheetTitle>Share this artist</BottomSheetTitle>
      </BottomSheetHeader>
      <div className="grid grid-cols-2 gap-2 pb-2">
        <Button variant="secondary" size="sm">Copy link</Button>
        <Button variant="secondary" size="sm">Message</Button>
        <Button variant="secondary" size="sm">Email</Button>
        <Button variant="secondary" size="sm">More…</Button>
      </div>
    </BottomSheetContent>
  </BottomSheet>
);
