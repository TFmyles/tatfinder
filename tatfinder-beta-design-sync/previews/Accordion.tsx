import * as React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from 'tatfinder-beta';

export const StudioFAQ = () => (
  <div className="max-w-lg">
    <Accordion type="single" collapsible defaultValue="deposits">
      <AccordionItem value="deposits">
        <AccordionTrigger>How do deposits work?</AccordionTrigger>
        <AccordionContent>
          A deposit between $50 and $200 locks in your session and comes off
          the final price. Deposits are refundable up to 72 hours before your
          appointment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="touchups">
        <AccordionTrigger>Are touch-ups included?</AccordionTrigger>
        <AccordionContent>
          Most TatFinder artists include one free touch-up within six months of
          the original session.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="pain">
        <AccordionTrigger>Can I bring a friend to my session?</AccordionTrigger>
        <AccordionContent>
          Studio policies vary — check the studio page or message your artist
          before the session.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export const MultipleOpen = () => (
  <div className="max-w-lg">
    <Accordion type="multiple" defaultValue={['prep', 'aftercare']}>
      <AccordionItem value="prep">
        <AccordionTrigger>Before your session</AccordionTrigger>
        <AccordionContent>
          Eat a full meal, hydrate, and skip alcohol for 24 hours. Wear
          clothing that keeps the placement easy to reach.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="aftercare">
        <AccordionTrigger>Aftercare basics</AccordionTrigger>
        <AccordionContent>
          Keep the wrap on for 2–4 hours, wash gently with unscented soap, and
          moisturize twice daily for two weeks. No pools or direct sun while
          healing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="healing">
        <AccordionTrigger>Healing timeline</AccordionTrigger>
        <AccordionContent>
          Expect light peeling in week one and full surface healing by week
          three.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
