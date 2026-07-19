import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
} from 'tatfinder-beta';
import { ArrowUpDown } from 'lucide-react';

// TableHead is a sub-part — only a full Table composition is a true render.

export const WithinTable = () => (
  <div className="max-w-3xl">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Client</TableHead>
          <TableHead>Piece</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Deposit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Priya Anand</TableCell>
          <TableCell>Snake wrap, right ankle</TableCell>
          <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
          <TableCell className="text-right">$120.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Diego Marsh</TableCell>
          <TableCell>Script rework, collarbone</TableCell>
          <TableCell><Badge>Confirmed</Badge></TableCell>
          <TableCell className="text-right">$80.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export const SortableAndAligned = () => (
  <div className="max-w-3xl">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <span className="inline-flex items-center gap-1">
              Artist <ArrowUpDown className="h-3.5 w-3.5" />
            </span>
          </TableHead>
          <TableHead>Style</TableHead>
          <TableHead className="text-right">
            <span className="inline-flex items-center gap-1">
              Hourly rate <ArrowUpDown className="h-3.5 w-3.5" />
            </span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Mara Voss</TableCell>
          <TableCell>Fine line</TableCell>
          <TableCell className="text-right">$160/hr</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Kaito Ren</TableCell>
          <TableCell>Japanese</TableCell>
          <TableCell className="text-right">$180/hr</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);
