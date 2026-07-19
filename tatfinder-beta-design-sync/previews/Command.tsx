import * as React from 'react';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from 'tatfinder-beta';
import { CalendarDays, MapPin, Palette, Search, UserRound } from 'lucide-react';

// cmdk renders inline (no portal) — wrap in a bordered shell the way the app's
// command palette dialog frames it.

export const SearchArtists = () => (
  <div className="max-w-md rounded-lg border border-border-color-default shadow-md">
    <Command>
      <CommandInput placeholder="Search artists, studios, styles…" />
      <CommandList>
        <CommandGroup heading="Artists">
          <CommandItem>
            <UserRound className="mr-2 h-4 w-4" />
            Mara Voss — fine line
          </CommandItem>
          <CommandItem>
            <UserRound className="mr-2 h-4 w-4" />
            Kaito Ren — Japanese
          </CommandItem>
          <CommandItem>
            <UserRound className="mr-2 h-4 w-4" />
            Sol Reyes — blackwork
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Studios">
          <CommandItem>
            <MapPin className="mr-2 h-4 w-4" />
            Iron Lotus Studio — Portland, OR
          </CommandItem>
          <CommandItem>
            <MapPin className="mr-2 h-4 w-4" />
            Black Thorn Collective — Seattle, WA
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </div>
);

export const QuickActions = () => (
  <div className="max-w-md rounded-lg border border-border-color-default shadow-md">
    <Command>
      <CommandInput placeholder="Type a command…" />
      <CommandList>
        <CommandGroup heading="Quick actions">
          <CommandItem>
            <CalendarDays className="mr-2 h-4 w-4" />
            New booking request
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Palette className="mr-2 h-4 w-4" />
            Browse flash designs
            <CommandShortcut>⌘F</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Search className="mr-2 h-4 w-4" />
            Find artists near me
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </div>
);

export const NoResults = () => (
  <div className="max-w-md rounded-lg border border-border-color-default shadow-md">
    <Command>
      <CommandInput placeholder="Search artists, studios, styles…" />
      <CommandList>
        <CommandEmpty>No artists match &quot;biomech dragons&quot;.</CommandEmpty>
      </CommandList>
    </Command>
  </div>
);
