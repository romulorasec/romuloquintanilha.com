# CLAUDE.md — romuloquintanilha.com

## Project Overview
Personal portfolio for Rômulo Quintanilha, conversion-focused web
designer in California. This site sells results, not design.
Target client: local business owners (restaurants, clinics, shops).
Primary emotion: TRUST and COMPETENCE.

## Stack
See @package.json for all dependencies.
See @SETUP-NOTES.md for installed libs and key file paths.

## Reusable Components
See @COMPONENTS.md — always check before creating any new UI component.

- Framework: Next.js App Router
- Language: TypeScript strict mode
- Styling: Tailwind CSS + CSS custom properties via tokens.css
- Components: shadcn/ui
- Animation: Framer Motion (purposeful only) + GSAP for scroll reveals
- Smooth scroll: Lenis (already configured in SmoothScrollProvider)
- Icons: Lucide React
- Forms: React Hook Form + Zod
- Toasts: Sonner

## Design Tokens
Full tokens: @src/styles/tokens.css

### Typography
- All text: Plus Jakarta Sans (Google Fonts)
- Hero H1 "Hello": Plus Jakarta Sans Light 300
- H2 / H3: Plus Jakarta Sans SemiBold 600
- Body / Nav / Labels: Plus Jakarta Sans Regular 400
- Emphasis: Plus Jakarta Sans Medium 500
- NEVER use Inter, Roboto, DM Sans, Fraunces, Outfit, or system fonts

### Color Palette
Full token values: @src/styles/tokens.css (authoritative — never use hardcoded hex values, always reference CSS variables by name)

Key variable names to know:
- Background: `var(--color-bg)`, `var(--color-bg-dark)` (dark sections)
- Text: `var(--color-text)`, `var(--color-text-muted)`, `var(--color-text-inverse)`
- Accent: `var(--color-accent)`, `var(--color-accent-mid)`, `var(--color-accent-soft)`
- Surface: `var(--color-surface)`, `var(--color-surface-raised)`
- Border: `var(--color-border)`, `var(--color-border-dark)`

### Motion Rules (NON-NEGOTIABLE)
- Hero entrance: fade + translateY, 600ms ease-out, use MotionFade
- Card hover: left border accent 3px + scale 1.02
- Scroll reveal: use MotionFade with viewport once: true

### Border and Shadow
- Border radius: 4px everywhere
- Shadow (project cards only): 0 2px 16px rgba(26,46,74,0.08)
- NO decorative gradients; functional gradient overlays for text legibility on photo backgrounds are allowed
- NO glass morphism except portrait hero CTA button (backdrop-filter blur on dark photo overlay)
- NO noise textures

## Hero Layout (editorial bold style)
- Full viewport height (100dvh), background var(--color-bg)
- Left side: text content, right side: photo absolute-positioned occupying 50–60% of viewport width
- Photo: full height anchored to bottom, no frame, no shadow, grayscale filter; art-directed via <picture> (desktop 1600x1800, tablet 1200x1600)
- Left decorative strip (clamp 58–148px wide): "Web Designer" vertical text near top, thin border line, "2026" vertical text near bottom — all color var(--color-text-muted)
- Stats row (top of text column, padding-top 180px): "+37 Projects completed" and "100% Satisfaction Guaranteed", font weight 300, size clamp(32px, 5vw, 56px)
- Center left: large greeting "Hello" in Plus Jakarta Sans Light 300,
  font-size clamp(50px, 12vw, 200px), line-height 0.9, color var(--color-text); block offset -80px translateY
- Below greeting: "— It's Rômulo, a conversion-focused web designer" in
  Plus Jakarta Sans Regular 400, color var(--color-text-muted), max-width 320px
- Bottom left: "Scroll down ↓" label (sem âncora, `<span>`), Plus Jakarta Sans SemiBold 600, font-size 16px,
  color var(--color-text), positioned absolute at bottom 48px left 168px
- Navbar: logo left, links center, "Start your project ↗" right with arrow icon
- Year "2026" vertical text in decorative left strip, color var(--color-text-muted)

## Portrait Hero (phones + portrait tablets)
- Full-bleed photo covering 100svh, object-fit cover, object-position top center, grayscale filter
- Art-directed via <picture>: portrait tablet ≥768px uses 1200x1600, tall phones (<768px, ≥850px height) uses 1290x1920, default mobile uses 1080x1600
- Gradient overlay from transparent at 45% → rgba(13,15,18,0.72) at 62% → rgba(13,15,18,0.88) at 100% (functional, for text legibility)
- Bottom overlay pinned to bottom of image, padding 24–56px horizontal + safe-area-inset bottom:
  - Left: stats stacked vertically ("+37 / Projects completed", "100% / Satisfaction Guaranteed"), then "Freelancer" + "Designer & Developer" professional info below
  - Right: "Start your project ↗" CTA button with frosted glass style (backdrop-filter blur)

## Site Structure (single-page)

1. Hero: editorial first impression, large profile image on the right, minimal identity statement, key stats and subtle CTA.
2. About Me: large rounded card directly connected to the hero image, with no visual gap between the profile image and the card’s top border. Two-column layout with intro text, learn more button and visual skill indicators.
3. Positioning Statement: high-contrast black section with one strong brand/value statement focused on trust, clarity and business value.
4. What I Do: concise service section with premium cards focused on Brand Identity, Website Design, UX/UI Design and Digital Strategy. Avoid making it feel like a generic list of services.
5. Portfolio / Selected Work: selected projects with image, category, short strategic context and one-line outcome. Use a refined black background and alternating layouts.
6. How I Work: interactive sequential process section with 5 steps: Discovery, Strategy, Design, Build and Launch. Include a short philosophy line inside this section so it explains not only the process, but also the thinking behind the process.
7. Client Words: short and specific testimonials that reinforce trust, clarity, professionalism and client experience.
8. Final CTA: *(pendente — não implementada)* Headline de fechamento forte com um botão claro convidando o visitante a iniciar uma conversa. Quando implementada, deve receber `id="contact"` para resolver os hrefs existentes em navbar, hero e how-i-work.
9. Footer: minimal contact area with name, role, location, email, phone and social links.


## siteConfig
- name: "Rômulo Quintanilha"
- description: "Conversion-focused web designer helping local businesses get more customers"
- defaultLocale: "en-US"

## Code Conventions
- Functional components only, no class components
- CSS variables exclusively, NO hardcoded hex colors
- Semantic HTML always (section, nav, main, article, header, footer)
- Mobile-first responsive
- Inline styles are used for design token values (colors, typography, spacing) for precision; Tailwind classes handle breakpoint utilities and orientation switching (e.g. hero-landscape, hero-portrait)
- Sections in src/components/sections/
- Shared components in src/components/shared/
- Animations via existing MotionFade and GsapReveal components

## What to NEVER do
- No purple-blue SaaS gradients
- No floating device mockups
- No symmetrical identical card grids
- No generic star-rating testimonial sections
- No hero background images or patterns
- No hardcoded hex colors outside tokens.css
- Nothing that looks like a Webflow or Squarespace template
- NEVER use Inter, Roboto, DM Sans, Fraunces, Outfit, or system fonts

## Deployment & Infrastructure

- **GitHub**: https://github.com/romulorasec/romuloquintanilha.com (branch: `main`)
- **CI**: `.github/workflows/ci.yml` — runs TypeScript check, ESLint, and production build on every push/PR; must stay green
- **Vercel**: not yet connected — pending domain setup at `romuloquintanilha.com`
- **Environment variables**: template in `.env.example`; real values go in `.env.local` (gitignored) or Vercel dashboard

### Key production files (do not delete)
- `public/robots.txt` — crawler rules
- `src/app/sitemap.ts` — dynamic sitemap served at `/sitemap.xml`
- `src/app/icon.svg` — RQ monogram favicon (Next.js picks it up automatically)
- `.env.example` — documents all required env vars; safe to commit, must stay up to date

### Git hygiene rules
- Never commit `.env.local`, `.claude/settings.local.json`, or `.playwright-mcp/`
- Never commit screenshot PNGs or working documents to the repo root
- `public/images/` contains production photo assets — do not delete or overwrite

### Known issues
- `postcss <8.5.10` vulnerability inside `node_modules/next/node_modules/postcss` — unfixable without breaking Next.js; tracked upstream, low risk (build-time only)