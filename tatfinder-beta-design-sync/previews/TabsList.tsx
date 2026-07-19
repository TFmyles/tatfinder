import * as React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'tatfinder-beta';

// TabsList only renders meaningfully inside a Tabs provider — full
// compositions with a selected trigger and its panel.

export const DashboardTabs = () => (
  <div className="max-w-lg">
    <Tabs defaultValue="queue">
      <TabsList>
        <TabsTrigger value="queue">Booking queue</TabsTrigger>
        <TabsTrigger value="calendar">Calendar</TabsTrigger>
        <TabsTrigger value="clients">Clients</TabsTrigger>
        <TabsTrigger value="payouts">Payouts</TabsTrigger>
      </TabsList>
      <TabsContent value="queue">
        <p className="text-sm text-text-secondary">
          6 requests waiting · oldest from 2 days ago
        </p>
      </TabsContent>
    </Tabs>
  </div>
);

export const FullWidthSegmented = () => (
  <div className="max-w-md">
    <Tabs defaultValue="artists">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="artists">Artists</TabsTrigger>
        <TabsTrigger value="studios">Studios</TabsTrigger>
      </TabsList>
      <TabsContent value="artists">
        <p className="text-sm text-text-secondary">
          42 artists near Portland, OR
        </p>
      </TabsContent>
    </Tabs>
  </div>
);
