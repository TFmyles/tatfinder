import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  Badge,
} from 'tatfinder-beta';

// TableCaption is a sub-part — it renders caption-bottom inside a full Table.

export const WithinTable = () => (
  <div className="max-w-3xl">
    <Table>
      <TableCaption>Upcoming sessions at Iron Lotus Studio.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Client</TableHead>
          <TableHead>Artist</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Lena Okafor</TableCell>
          <TableCell>Mara Voss</TableCell>
          <TableCell>Sep 5 · 10:00 AM</TableCell>
          <TableCell><Badge>Confirmed</Badge></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Sam Whitfield</TableCell>
          <TableCell>Sol Reyes</TableCell>
          <TableCell>Sep 9 · 2:30 PM</TableCell>
          <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export const DescriptiveCaption = () => (
  <div className="max-w-3xl">
    <Table>
      <TableCaption>
        Deposits collected July 2026 — payouts land in your account within
        three business days of each completed session.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Session</TableHead>
          <TableHead className="text-right">Deposit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Koi &amp; wave, session 2 — Kaito Ren</TableCell>
          <TableCell className="text-right">$120.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Fine-line peony — Mara Voss</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);
