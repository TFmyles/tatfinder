import * as React from 'react';
import { Alert, AlertTitle, AlertDescription } from 'tatfinder-beta';
import { AlertCircle, CalendarClock, Droplets } from 'lucide-react';

export const HealingReminder = () => (
  <div className="max-w-lg">
    <Alert>
      <Droplets className="h-4 w-4" />
      <AlertTitle>Day 4 of healing</AlertTitle>
      <AlertDescription>
        Time to switch from the wrap to unscented moisturizer — twice daily for
        the next ten days.
      </AlertDescription>
    </Alert>
  </div>
);

export const PaymentFailed = () => (
  <div className="max-w-lg">
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Deposit payment failed</AlertTitle>
      <AlertDescription>
        Your card ending in 4412 was declined. Update your payment method
        within 24 hours to keep your Aug 22 session with Kaito Ren.
      </AlertDescription>
    </Alert>
  </div>
);

export const DescriptionOnly = () => (
  <div className="max-w-lg">
    <Alert>
      <CalendarClock className="h-4 w-4" />
      <AlertDescription>
        Iron Lotus Studio is closed Sep 1–8 for the Portland Tattoo Expo.
        Bookings resume Sep 9.
      </AlertDescription>
    </Alert>
  </div>
);
