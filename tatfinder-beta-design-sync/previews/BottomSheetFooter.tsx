import * as React from 'react';
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetDescription,
  BottomSheetFooter,
  Button,
} from 'tatfinder-beta';

// BottomSheetFooter is a sub-part — rendered inside an open BottomSheet, where
// its top border and action alignment are visible.

export const PairedActions = () => (
  <BottomSheet open>
    <BottomSheetContent>
      <BottomSheetHeader>
        <BottomSheetTitle>Confirm cancellation</BottomSheetTitle>
        <BottomSheetDescription>
          Your Tuesday consult with Iron Lotus Studio will be released to the
          waitlist.
        </BottomSheetDescription>
      </BottomSheetHeader>
      <BottomSheetFooter>
        <Button variant="outline">Keep consult</Button>
        <Button variant="destructive">Cancel consult</Button>
      </BottomSheetFooter>
    </BottomSheetContent>
  </BottomSheet>
);

export const SingleAction = () => (
  <BottomSheet open>
    <BottomSheetContent>
      <BottomSheetHeader>
        <BottomSheetTitle>Aftercare guide sent</BottomSheetTitle>
        <BottomSheetDescription>
          We emailed your healing schedule and product list for the new
          fine-line piece.
        </BottomSheetDescription>
      </BottomSheetHeader>
      <BottomSheetFooter>
        <Button className="w-full sm:w-auto">Got it</Button>
      </BottomSheetFooter>
    </BottomSheetContent>
  </BottomSheet>
);
