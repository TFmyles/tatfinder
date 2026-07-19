import * as React from 'react';
import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from 'tatfinder-beta';

export const Closed = () => (
  <div className="max-w-xs space-y-4 p-4">
    <div className="space-y-2">
      <Label>Tattoo style</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a style" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="fine-line">Fine line</SelectItem>
          <SelectItem value="blackwork">Blackwork</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label>Preferred artist</Label>
      <Select defaultValue="mara">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mara">Mara Voss</SelectItem>
          <SelectItem value="kaito">Kaito Ishikawa</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label className="opacity-70">Studio location</Label>
      <Select defaultValue="pdx" disabled>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pdx">Iron Lotus — Portland, OR</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-xs text-text-tertiary">Set by your studio membership.</p>
    </div>
  </div>
);

export const Open = () => (
  <div className="p-4" style={{ minHeight: 400, maxWidth: 340 }}>
    <div className="space-y-2">
      <Label>Filter by style</Label>
      <Select defaultOpen defaultValue="fine-line">
        <SelectTrigger className="w-[280px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Popular styles</SelectLabel>
            <SelectItem value="fine-line">Fine line</SelectItem>
            <SelectItem value="blackwork">Blackwork</SelectItem>
            <SelectItem value="traditional">American traditional</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>More styles</SelectLabel>
            <SelectItem value="japanese">Japanese (Irezumi)</SelectItem>
            <SelectItem value="neo-trad">Neo-traditional</SelectItem>
            <SelectItem value="realism" disabled>
              Realism — waitlist only
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
);
