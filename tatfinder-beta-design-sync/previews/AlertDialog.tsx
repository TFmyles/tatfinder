import * as React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from 'tatfinder-beta';

export const CancelBooking = () => (
  <AlertDialog open>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Cancel this appointment?</AlertDialogTitle>
        <AlertDialogDescription>
          You are within 48 hours of your session with Mara Voss, so the $150
          deposit is non-refundable per the studio&apos;s cancellation policy.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Keep appointment</AlertDialogCancel>
        <AlertDialogAction className="bg-error hover:bg-error-dark">
          Cancel booking
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export const DeleteFlashDesign = () => (
  <AlertDialog open>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete &quot;Serpent &amp; Peony&quot;?</AlertDialogTitle>
        <AlertDialogDescription>
          This flash design will be removed from your public portfolio. Clients
          with pending requests for it will be notified.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Keep design</AlertDialogCancel>
        <AlertDialogAction className="bg-error hover:bg-error-dark">
          Delete design
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
