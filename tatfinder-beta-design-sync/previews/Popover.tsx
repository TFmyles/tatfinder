import * as React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Badge,
} from 'tatfinder-beta';

// Open state rendered inline; content portals next to the trigger, so give the
// trigger breathing room inside the capture viewport.

export const ArtistAvailability = () => (
  <div style={{ padding: '48px 48px 280px' }}>
    <Popover open>
      <PopoverTrigger asChild>
        <Button variant="outline">Check availability</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Mara Voss — next openings</p>
            <p className="text-sm text-text-secondary">
              Books close for autumn on Sep 1
            </p>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Thu, Aug 20</span>
              <span className="text-text-secondary">2:00 PM · 3h</span>
            </li>
            <li className="flex justify-between">
              <span>Fri, Aug 21</span>
              <span className="text-text-secondary">10:00 AM · 5h</span>
            </li>
            <li className="flex justify-between">
              <span>Mon, Aug 24</span>
              <span className="text-text-secondary">1:00 PM · 3h</span>
            </li>
          </ul>
          <Button size="sm" className="w-full">Request one of these</Button>
        </div>
      </PopoverContent>
    </Popover>
  </div>
);

export const PricingBreakdown = () => (
  <div style={{ padding: '48px 48px 260px' }}>
    <Popover open>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">How is this priced?</Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <p className="font-medium">Estimate breakdown</p>
            <Badge variant="secondary">Half sleeve</Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Hourly rate</span>
            <span>$180/hr</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Estimated time</span>
            <span>6–8 hours</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Deposit (applied)</span>
            <span>−$150</span>
          </div>
          <div className="flex justify-between border-t border-border-color-default pt-2 font-medium">
            <span>Estimated total</span>
            <span>$930 – $1,290</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
);
