# Setup Notes

Este projeto foi criado com o script premium anime para websites.

## Stack instalada

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lenis
- GSAP
- @gsap/react
- Inspira UI support
- React Hook Form
- Zod
- Sonner
- Vaul
- Lucide React
- next-themes
- @tailwindcss/typography

## Arquivos importantes

- `src/lib/utils.ts`
- `src/lib/animations/gsap.ts`
- `src/components/shared/smooth-scroll-provider.tsx`
- `src/components/animations/gsap-reveal.tsx`
- `src/components/animations/motion-fade.tsx`
- `src/components/shared/site-button.tsx`
- `src/config/site.ts`
- `src/styles/tokens.css`
- `.env.example` — template de variáveis de ambiente (commitar); copiar para `.env.local` com os valores reais
- `public/robots.txt`
- `src/app/sitemap.ts`
- `src/app/icon.svg`
- `.github/workflows/ci.yml`

## Idiomas configurados

- `pt-BR`
- `pt-PT`
- `en-US`
- `es-419`

## Lenis

Para ativar o smooth scroll globalmente, importe o provider no layout:

```tsx
import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider"
```
