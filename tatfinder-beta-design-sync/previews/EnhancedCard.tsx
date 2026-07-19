import * as React from 'react';
import { EnhancedCard, Button } from 'tatfinder-beta';
// Card parts are ambiguous star-exports (see NOTES.md) — deep-import the canonical file.
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'tatfinder-beta/components/ui/card';

export const Default = () => (
  <EnhancedCard className="max-w-sm">
    <CardHeader>
      <CardTitle>Fine-line florals</CardTitle>
      <CardDescription>Delicate botanical work by Mara Voss</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-text-secondary">
        Specializing in single-needle botanical pieces, from minimal stems to
        full sleeve compositions. Books open for autumn.
      </p>
    </CardContent>
    <CardFooter>
      <Button size="sm">Request booking</Button>
    </CardFooter>
  </EnhancedCard>
);

export const Variants = () => (
  <div className="grid gap-4 p-2" style={{ maxWidth: 420 }}>
    <EnhancedCard variant="booking" size="sm">
      <p className="font-medium">Session with Kaito — Fri 3:00 PM</p>
      <p className="text-sm text-text-secondary">Deposit paid · 2h blackwork touch-up</p>
    </EnhancedCard>
    <EnhancedCard variant="feature" size="sm">
      <p className="font-medium">Featured studio: Iron Lotus</p>
      <p className="text-sm text-text-secondary">4.9 ★ · 320 reviews · Portland, OR</p>
    </EnhancedCard>
    <EnhancedCard variant="glass" size="sm">
      <p className="font-medium">Glass panel</p>
      <p className="text-sm text-text-secondary">Backdrop-blur surface for overlays</p>
    </EnhancedCard>
  </div>
);

export const Interactive = () => (
  <EnhancedCard interactive size="sm" className="max-w-xs">
    <p className="font-medium">Traditional Americana</p>
    <p className="text-sm text-text-secondary">128 artists near you</p>
  </EnhancedCard>
);
