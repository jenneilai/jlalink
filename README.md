# JLA Link · 捷联

Modern multi-language website for **JLA Link** — connecting global businesses with China through sourcing, factory visits, trade show support, and import/export consulting.

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **shadcn/ui-style** components
- **Framer Motion** for subtle animations
- **next-intl** for English + Simplified Chinese

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — English is the default locale. Chinese is available at `/zh`.

## Site Structure

```
/                          Home (all sections on one page)
/about                     About Us
/services                  Services
/resources                 Resources & Blog
/contact                   Contact
/privacy                   Privacy Policy

/zh/*                      Chinese versions of all pages
```

### Home Page Sections (in order)

1. **Hero** — Headline, CTAs, Guangzhou skyline background
2. **Trust Bar** — Verified suppliers, local team, bilingual, fast response
3. **About Us** — Company story with prominent **10+ Years** highlight
4. **Services** — Six service cards
5. **Why Choose JLA Link** — Six differentiators
6. **Resources** — Three article previews
7. **CTA Banner** — Consultation call-to-action
8. **Contact** — Form + contact details

## Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for Vercel setup, environment variables, and a post-launch checklist.

## Configuration

Update contact details in `src/lib/site-config.ts` when official information is ready.

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```
