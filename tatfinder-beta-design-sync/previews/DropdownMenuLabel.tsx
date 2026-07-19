import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
} from 'tatfinder-beta';

// DropdownMenuLabel is a sub-part — its semibold heading treatment only reads
// inside an open DropdownMenuContent.

export const AccountMenu = () => (
  <div style={{ padding: '48px 48px 280px' }}>
    <DropdownMenu open>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">mara@ironlotus.ink</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>
          <span className="block">Mara Voss</span>
          <span className="block text-xs font-normal text-text-secondary">
            Artist · Iron Lotus Studio
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Portfolio settings</DropdownMenuItem>
        <DropdownMenuItem>Payouts</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export const SectionLabels = () => (
  <div style={{ padding: '48px 48px 320px' }}>
    <DropdownMenu open>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">New…</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Bookings</DropdownMenuLabel>
        <DropdownMenuItem>New booking request</DropdownMenuItem>
        <DropdownMenuItem>Block out time</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Portfolio</DropdownMenuLabel>
        <DropdownMenuItem>Upload flash design</DropdownMenuItem>
        <DropdownMenuItem>Add healed photo</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel inset>Inset label</DropdownMenuLabel>
        <DropdownMenuItem inset>Inset item</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
