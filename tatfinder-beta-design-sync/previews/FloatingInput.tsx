import * as React from 'react';
import { FloatingInput } from 'tatfinder-beta';

export const Default = () => (
  <div className="max-w-sm space-y-4 p-4">
    <FloatingInput label="Email address" type="email" />
    <FloatingInput label="Phone number" type="tel" />
  </div>
);

export const Filled = () => (
  <div className="max-w-sm space-y-4 p-4">
    <FloatingInput label="Full name" defaultValue="Riley Chen" />
    <FloatingInput label="Preferred city" defaultValue="Portland, OR" />
  </div>
);

export const Validation = () => (
  <div className="max-w-sm space-y-4 p-4">
    <div className="space-y-1">
      <FloatingInput
        label="Email address"
        type="email"
        defaultValue="riley.chen@"
        error={{ type: 'pattern', message: 'Enter a valid email address' } as any}
      />
      <p className="text-xs text-error px-1">Enter a valid email address.</p>
    </div>
    <FloatingInput label="Instagram handle" defaultValue="@rileydraws" success />
  </div>
);

export const Disabled = () => (
  <div className="max-w-sm space-y-1 p-4">
    <FloatingInput label="Studio" defaultValue="Iron Lotus Studio" disabled />
    <p className="text-xs text-text-tertiary px-1">Managed by your studio admin.</p>
  </div>
);
