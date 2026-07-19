# TatFinder "Studio Ink" — build conventions

## Setup & wrapping
No global provider is required — components are plain React and style themselves
from the stylesheet closure (`styles.css` → tokens, fonts, `_ds_bundle.css`).
Two exceptions, needed only when you use those parts: wrap `Toast` usage in
`ToastProvider` + `ToastViewport`, and radix-based overlays (Dialog, Popover,
DropdownMenu) manage their own portals — give them an `open` state to render.
Typography loads remotely (Gambetta from Fontshare, Inter from Google) via
`styles.css` — never add your own font links.

## Styling idiom: variant props first, semantic utilities second
Components are shadcn/cva style: the design language lives in their props —
`variant`, `size`, `interactive`, `asChild`. Reach for a prop before writing a
class. For your own layout glue, use the DS's SEMANTIC Tailwind vocabulary,
never raw palette classes (no `bg-green-500`, no `text-gray-700`):

| Family | Real names (verified in the shipped CSS) |
|---|---|
| Text | `text-text-primary`, `text-text-secondary`, `text-text-tertiary` |
| Surfaces | `bg-bg-primary`, `bg-bg-secondary`, `bg-bg-elevated` |
| Brand | `bg-brand-accent` (sage-green CTA), `bg-brand-primary` (charcoal structural), `text-brand-primary` |
| Status | `bg-error`, `bg-success`, `bg-warning` |
| Borders/motion | `border-border-color-default`, `duration-normal`, `rounded-lg` |

Buttons: `default`/`accent` = sage CTA; `foundation` = charcoal; plus
`destructive`, `success`, `warning`, `outline`, `secondary`, `ghost`, `link`,
`gradient-primary`, `gradient-accent`. Sizes `xs`–`xl` + `icon` variants.
Headings: `h1` renders Gambetta (serif display) automatically; body text is
Inter. Don't fight these defaults.

## Where the truth lives
Read `styles.css` and its imports (tokens + compiled utilities) before
inventing a class — if a name isn't there, it won't resolve. Each component's
folder has `<Name>.d.ts` (exact props) and `<Name>.prompt.md` (usage). Shadcn
CSS variables (`--background`, `--primary`, `--card`, `--radius`, …) exist for
`var(--*)` needs.

## Idiomatic snippet
```tsx
const { EnhancedCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } = window.TatFinderDS;

<EnhancedCard variant="feature" className="max-w-sm">
  <CardHeader>
    <CardTitle>Fine-line florals</CardTitle>
    <CardDescription>Delicate botanical work by Mara Voss</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-text-secondary">Books open for autumn.</p>
  </CardContent>
  <CardFooter><Button size="sm">Request booking</Button></CardFooter>
</EnhancedCard>
```
Card variants: `default`, `artist`, `portfolio`, `booking` (left accent bar),
`feature` (brand gradient), `glass`. Status badges (`PaymentStatusBadge`,
`InvoiceStatusBadge`, `UserRoleBadge`, …) take a status string and color
themselves — use them instead of hand-built pills.
