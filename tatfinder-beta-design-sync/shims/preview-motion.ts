// Skip framer-motion animations ONLY on static preview card pages, so
// entrance animations (whileInView + initial opacity 0) don't race the
// screenshot. Never active in real designs: gated on the card-page URL shape.
import { MotionGlobalConfig } from 'framer-motion';
const isCardPage =
  typeof location !== 'undefined' &&
  (location.protocol === 'file:' || /\/components\/[^/]+\/[^/]+\/[^/]+\.html$/.test(location.pathname));
if (isCardPage) (MotionGlobalConfig as any).skipAnimations = true;
export const dsPreviewMotionGate = true;
