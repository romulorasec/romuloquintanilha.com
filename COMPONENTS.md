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

### `src/components/animations/gsap-reveal.tsx`
GSAP-based scroll reveal. Use for heavier staggered or timeline animations.

---

## Shared UI

### `src/components/shared/site-button.tsx`
All CTA buttons. Never build a raw `<button>` with manual styles for a CTA.
- Variants follow `tokens.css` button variables
- Always use this for primary and secondary actions

### `src/components/shared/smooth-scroll-provider.tsx`
Lenis smooth scroll. Already mounted in root layout — do not re-add.
- Access instance via `useLenis()` hook when needed (e.g. stop/start on modal open)
