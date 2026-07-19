import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuCheckboxItem,
  Button,
} from 'tatfinder-beta';

export const BookingRowActions = () => (
  <div style={{ padding: '48px 48px 300px' }}>
    <DropdownMenu open>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Booking #TF-2189</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          View details
          <DropdownMenuShortcut>⏎</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>Reschedule session</DropdownMenuItem>
        <DropdownMenuItem>Message Priya Anand</DropdownMenuItem>
        <DropdownMenuItem disabled>Mark as completed</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-error focus:text-error">
          Cancel booking
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export const StyleFilter = () => (
  <div style={{ padding: '48px 48px 300px' }}>
    <DropdownMenu open>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="sm">Styles (2)</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-52">
        <DropdownMenuLabel>Filter artists by style</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Blackwork</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked>Fine line</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Neo-traditional</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Japanese</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Realism</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
