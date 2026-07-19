import * as React from 'react';
import { SearchInput } from 'tatfinder-beta';

const noop = () => {};

export const Default = () => (
  <div className="max-w-md p-4">
    <SearchInput value="" onChange={noop} placeholder="Search artists, studios, or styles..." />
  </div>
);

export const WithQuery = () => (
  <div className="max-w-md p-4">
    <SearchInput value="blackwork portland" onChange={noop} aria-label="Search artists" />
  </div>
);

export const Compact = () => (
  <div className="max-w-xs p-4">
    <SearchInput
      size="sm"
      value="fine line"
      onChange={noop}
      placeholder="Filter clients..."
      aria-label="Filter clients"
    />
  </div>
);

export const Loading = () => (
  <div className="max-w-md p-4">
    <SearchInput value="japanese dragon sleeve" onChange={noop} isLoading aria-label="Search" />
  </div>
);
