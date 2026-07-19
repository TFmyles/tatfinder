import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  Badge,
} from 'tatfinder-beta';

export const BookingQueue = () => (
  <div className="max-w-3xl">
    <Table>
      <TableCaption>Booking requests received this week.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Client</TableHead>
          <TableHead>Piece</TableHead>
          <TableHead>Preferred date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Deposit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Priya Anand</TableCell>
          <TableCell>Snake wrap, right ankle</TableCell>
          <TableCell>Aug 18</TableCell>
          <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
          <TableCell className="text-right">$120.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Diego Marsh</TableCell>
          <TableCell>Script rework, collarbone</TableCell>
          <TableCell>Sep 2</TableCell>
          <TableCell><Badge>Confirmed</Badge></TableCell>
          <TableCell className="text-right">$80.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Lena Okafor</TableCell>
          <TableCell>Fine-line peony, shoulder</TableCell>
          <TableCell>Sep 5</TableCell>
          <TableCell><Badge>Confirmed</Badge></TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Sam Whitfield</TableCell>
          <TableCell>Blackwork band, wrist</TableCell>
          <TableCell>Sep 9</TableCell>
          <TableCell><Badge variant="destructive">Declined</Badge></TableCell>
          <TableCell className="text-right">—</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export const PayoutSummary = () => (
  <div className="max-w-2xl">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Session</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Koi &amp; wave, session 2 — Kaito Ren</TableCell>
          <TableCell>Jul 3</TableCell>
          <TableCell className="text-right">$540.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Fine-line florals — Mara Voss</TableCell>
          <TableCell>Jul 11</TableCell>
          <TableCell className="text-right">$310.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Walk-in flash — Sol Reyes</TableCell>
          <TableCell>Jul 15</TableCell>
          <TableCell className="text-right">$140.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>July payout</TableCell>
          <TableCell className="text-right">$990.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </div>
);
