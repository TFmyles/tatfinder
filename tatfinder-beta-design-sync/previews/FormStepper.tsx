import * as React from 'react';
import { CalendarCheck, MapPin, Palette, Wallet } from 'lucide-react';
import { FormStepper } from 'tatfinder-beta';

const bookingSteps = [
  { label: 'Design details' },
  { label: 'Placement & size' },
  { label: 'Artist & studio' },
  { label: 'Review & deposit' },
];

export const MidProgress = () => (
  <div className="p-6" style={{ maxWidth: 720 }}>
    <FormStepper steps={bookingSteps} currentStep={3} onStepClick={() => {}} />
  </div>
);

export const WithIcons = () => (
  <div className="p-6" style={{ maxWidth: 720 }}>
    <FormStepper
      steps={[
        { label: 'Design', icon: Palette },
        { label: 'Placement', icon: MapPin },
        { label: 'Schedule', icon: CalendarCheck },
        { label: 'Deposit', icon: Wallet },
      ]}
      currentStep={2}
      onStepClick={() => {}}
    />
  </div>
);

export const FinalStep = () => (
  <div className="p-6" style={{ maxWidth: 720 }}>
    <FormStepper
      steps={bookingSteps}
      currentStep={4}
      onStepClick={() => {}}
      allowNavigation="completed"
    />
  </div>
);
