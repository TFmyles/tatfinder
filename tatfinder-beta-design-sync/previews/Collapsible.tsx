import * as React from 'react';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Button,
} from 'tatfinder-beta';
import { ChevronsUpDown } from 'lucide-react';

export const AftercareOpen = () => (
  <div className="max-w-md space-y-2">
    <Collapsible open>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Aftercare instructions</p>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Toggle aftercare instructions">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="mt-2 space-y-2">
          <div className="rounded-md border border-border-color-default px-4 py-3 text-sm">
            Day 1–3: keep the second-skin wrap on; light plasma buildup is
            normal.
          </div>
          <div className="rounded-md border border-border-color-default px-4 py-3 text-sm">
            Day 4–14: wash twice daily, thin layer of unscented moisturizer.
          </div>
          <div className="rounded-md border border-border-color-default px-4 py-3 text-sm">
            Avoid pools, saunas, and direct sun until fully healed.
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
);

export const Collapsed = () => (
  <div className="max-w-md space-y-2">
    <Collapsible>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Past sessions with Kaito Ren (4)</p>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Toggle past sessions">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border border-border-color-default px-4 py-3 text-sm">
        Most recent: Koi &amp; wave, session 2 — Jul 3, 2026
      </div>
      <CollapsibleContent>
        <div className="mt-2 space-y-2">
          <div className="rounded-md border border-border-color-default px-4 py-3 text-sm">
            Koi &amp; wave, session 1 — Jun 5, 2026
          </div>
          <div className="rounded-md border border-border-color-default px-4 py-3 text-sm">
            Linework consult — May 20, 2026
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
);
