import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
  Button,
} from 'tatfinder-beta';

// TableCell is a sub-part — only a full Table composition is a true render.

export const WithinTable = () => (
  <div className="max-w-3xl">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Session</TableHead>
          <TableHead>Artist</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Koi &amp; wave, session 2</TableCell>
          <TableCell>Kaito Ren</TableCell>
          <TableCell>Jul 3, 2026</TableCell>
          <TableCell className="text-right">$540.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Fine-line florals</TableCell>
          <TableCell>Mara Voss</TableCell>
          <TableCell>Jul 11, 2026</TableCell>
          <TableCell className="text-right">$310.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export const MixedContent = () => (
  <div className="max-w-3xl">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Client</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Notes</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-secondary text-xs font-semibold">
                PA
              </span>
              <span className="font-medium">Priya Anand</span>
            </div>
          </TableCell>
          <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
          <TableCell className="text-text-secondary">
            First tattoo — wants a consult call
          </TableCell>
          <TableCell className="text-right">
            <Button variant="outline" size="xs">Review</Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-secondary text-xs font-semibold">
                DM
              </span>
              <span className="font-medium">Diego Marsh</span>
            </div>
          </TableCell>
          <TableCell><Badge>Confirmed</Badge></TableCell>
          <TableCell className="text-text-secondary">
            Returning client · covers old script
          </TableCell>
          <TableCell className="text-right">
            <Button variant="outline" size="xs">Open</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);
