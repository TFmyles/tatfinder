import * as React from 'react';
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetDescription,
  BottomSheetFooter,
  Button,
  Badge,
} from 'tatfinder-beta';

export const BookingSummary = () => (
  <BottomSheet open>
    <BottomSheetContent>
      <BottomSheetHeader>
        <BottomSheetTitle>Session summary</BottomSheetTitle>
        <BottomSheetDescription>
          Review the details before confirming your deposit.
        </BottomSheetDescription>
      </BottomSheetHeader>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-text-secondary">Artist</span>
          <span className="font-medium">Kaito Ren · Iron Lotus Studio</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Piece</span>
          <span className="font-medium">Koi &amp; wave, upper arm</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Date</span>
          <span className="font-medium">Sat, Aug 22 · 11:00 AM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Deposit due</span>
          <span className="font-medium">$120.00</span>
        </div>
      </div>
      <BottomSheetFooter>
        <Button variant="outline">Back</Button>
        <Button>Pay deposit</Button>
      </BottomSheetFooter>
    </BottomSheetContent>
  </BottomSheet>
);

export const StyleFilters = () => (
  <BottomSheet open>
    <BottomSheetContent>
      <BottomSheetHeader>
        <BottomSheetTitle>Filter by style</BottomSheetTitle>
        <BottomSheetDescription>
          Showing 42 artists near Portland, OR
        </BottomSheetDescription>
      </BottomSheetHeader>
      <div className="flex flex-wrap gap-2">
        <Badge>Blackwork</Badge>
        <Badge>Fine line</Badge>
        <Badge variant="secondary">Neo-traditional</Badge>
        <Badge variant="secondary">Japanese</Badge>
        <Badge variant="secondary">Realism</Badge>
        <Badge variant="secondary">Dotwork</Badge>
        <Badge variant="secondary">Watercolor</Badge>
        <Badge variant="secondary">American traditional</Badge>
      </div>
      <BottomSheetFooter>
        <Button variant="ghost">Clear all</Button>
        <Button>Show 12 artists</Button>
      </BottomSheetFooter>
    </BottomSheetContent>
  </BottomSheet>
);
