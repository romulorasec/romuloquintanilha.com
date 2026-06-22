# Component Registry

**Check this file before creating any new UI component.** If a component exists here, use it — do not duplicate. This ensures visual consistency across the project.

---

## Modals

### `src/components/shared/info-modal.tsx`
Base modal shell. Use for any dialog or overlay.
- Controlled or uncontrolled (`open` / `onOpenChange` props)
- `85svh` max-height, scrollable body, Lenis-aware (stops/resumes smooth scroll)
- Props: `trigger`, `title`, `children`, `open?`, `onOpenChange?`

### `src/components/shared/start-project-modal.tsx`
Contact form modal. Use wherever a "Start your project" CTA appears.
- Wraps `InfoModal` + `ContactForm`
- Uncontrolled (hero, how-i-work): pass `trigger` prop — onClick injected via `React.cloneElement`
- Controlled (navbar): pass `open` + `onOpenChange` props
- Props: `trigger?`, `sourcePage?`, `open?`, `onOpenChange?`

---

## Forms

### `src/components/forms/contact-form.tsx`
Full contact form with Turnstile CAPTCHA, Zod validation, React Hook Form.
- Do not duplicate or create another contact form
- Props: `sourcePage?`, `onSuccess?`

### `src/components/forms/contact-success.tsx`
Post-submit confirmation state. Reusable in any form success flow.
- Animated CheckCircle + headline + subtext + Close button
- Auto-dismisses after `autoDismissMs` (default 2500ms) via `useEffect` with cleanup
- If `onDismiss` is undefined: no auto-dismiss, no Close button
- Props: `onDismiss?`, `autoDismissMs?`

---

## Animations

### `src/components/animations/motion-fade.tsx`
Framer Motion fade + translateY entrance. Use for section scroll reveals.
- Respects `prefers-reduced-motion` automatically
- Props: `children`, `className?`, `delay?` (default 0), `y?` (default 16), `scale?` (default 1)

### `src/components/animations/gsap-reveal.tsx`
GSAP-based scroll reveal with blur. Use for heavier staggered or timeline animations.
- Props: `children`, `className?`, `delay?` (default 0), `y?` (default 24)

---

## Interactive UI

### `src/components/ui/interactive-image-accordion.tsx` — `InteractiveImageAccordion`
Step-by-step process accordion used in the How I Work section.
- Desktop: horizontal panels that expand on hover/click
- Mobile (≤899px): vertical collapsible accordion
- Fully data-driven — pass an array of `AccordionStep` objects
- Props: `steps: AccordionStep[]`
- Type: `AccordionStep { number, title, subtitle, description }`

### `src/components/ui/testimonial-slider-1.tsx` — `TestimonialSlider`
Animated testimonial slider with directional transitions, used in the Client Words section.
- Props: `reviews: Review[]`, `className?`
- Type: `Review { id, name, affiliation, quote, imageSrc, thumbnailSrc }`

---

## Icons

### `src/components/ui/icons.tsx` — `Icons`
Project-specific SVG icons. Do not recreate or use external packages for these.
- `Icons.logo` — RQ monogram / slash mark logo
- `Icons.twitter` — X (Twitter) brand icon
- `Icons.gitHub` — GitHub brand icon

---

## Shared UI

### `src/components/shared/site-button.tsx` — `SiteButton`
All CTA buttons. Never build a raw `<button>` with manual styles for a CTA.
- Variants: `"primary"` | `"primary-inverse"` | `"primary-icon"` | `"secondary"`
- Renders as `<a>` when `href` is provided, `<button>` otherwise
- Props: `variant`, `children`, `href?`, `onClick?`, `className?`, `aria-label?`

### `src/components/shared/smooth-scroll-provider.tsx`
Lenis smooth scroll. Already mounted in root layout — do not re-add.
- Access instance via `useLenis()` hook when needed (e.g. stop/start on modal open)

---

## Utilities & Lib

### `src/lib/utils.ts` — `cn()`
Tailwind class merger (clsx + tailwind-merge). Always use instead of string concatenation.
```ts
import { cn } from "@/lib/utils"
```

### `src/lib/animations/gsap.ts`
GSAP entry point with `useGSAP` pre-registered. Always import GSAP from here — never directly from `gsap`.
```ts
import { gsap, useGSAP } from "@/lib/animations/gsap"
```

### `src/lib/validations/contact.ts`
Zod schemas for the contact form. Do not duplicate.
- `contactClientSchema` — client-side (no turnstileToken)
- `contactSchema` — full server-side schema
- Types: `ContactClientValues`, `ContactFormValues`
