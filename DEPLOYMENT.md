# Deploying JLA Link on Vercel

This project is optimized for [Vercel](https://vercel.com) with Next.js App Router and `next-intl`.

## Prerequisites

- Git repository (GitHub, GitLab, or Bitbucket)
- Vercel account
- Domain (optional, e.g. `jlalink.com`)

## Quick Deploy

1. Push the project to your Git provider.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — keep the default settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** (leave default)
   - **Install Command:** `npm install`
4. Add environment variables (see below).
5. Click **Deploy**.

## Environment Variables

Set these in **Project → Settings → Environment Variables**:

| Variable | Required | Example | Purpose |
|----------|----------|---------|---------|
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://jlalink.com` | Sitemap, Open Graph, JSON-LD canonical URLs |
| `RESEND_API_KEY` | No | `re_xxx` | Sends contact form submissions via [Resend](https://resend.com) |
| `CONTACT_NOTIFY_EMAIL` | No | `contact@jlalink.com` | Inbox for form submissions (defaults to site config email) |
| `CONTACT_FROM_EMAIL` | No | `JLA Link <noreply@your-domain.com>` | Verified sender in Resend |

Copy from `.env.example`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

> Use your production domain (with `https://`). Redeploy after changing this value.

## Recommended Vercel Settings

### Production branch
- Set **Production Branch** to `main` (or your default branch).

### Node.js version
- Vercel uses a compatible Node version automatically for Next.js 16.
- Locally, use Node 20+ for consistency.

### Regions
- Default `iad1` (US East) works globally for a marketing site.
- For faster access from China, consider a CDN in front of Vercel or discuss edge caching with your team — Vercel's edge network still serves static pages efficiently worldwide.

### Custom domain
1. **Project → Settings → Domains**
2. Add `jlalink.com` and `www.jlalink.com`
3. Configure DNS at your registrar (Vercel provides exact records)
4. Enable **Redirect** from `www` → apex (or vice versa) for SEO consistency
5. Update `NEXT_PUBLIC_SITE_URL` to match your primary domain

## Post-Deploy Checklist

- [ ] Visit `/` and `/zh` — confirm both locales load
- [ ] Test language switcher on mobile and desktop
- [ ] Verify `/sitemap.xml` and `/robots.txt`
- [ ] Submit sitemap in [Google Search Console](https://search.google.com/search-console)
- [ ] Update contact details in `src/lib/site-config.ts` and set `isPlaceholder: false`
- [ ] Replace placeholder email/phone before going live
- [ ] Add favicon / OG image in `src/app/[locale]/layout.tsx` metadata (optional enhancement)

## Updating the Site

Every push to the production branch triggers a new deployment automatically.

For preview deployments, open a Pull Request — Vercel creates a unique preview URL per PR.

## Contact Form (Future)

The contact form uses a **Server Action** (`src/app/actions/contact.ts`).

- **Without `RESEND_API_KEY`:** Submissions succeed in the UI; in development they are logged to the console.
- **With `RESEND_API_KEY`:** Emails are sent to `CONTACT_NOTIFY_EMAIL` via Resend.

Add these in Vercel → Settings → Environment Variables before going live.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Wrong URLs in sitemap | Set `NEXT_PUBLIC_SITE_URL` and redeploy |
| 404 on locale routes | Ensure `src/middleware.ts` is present; do not rename |
| Images not loading | Unsplash domain is allowed in `next.config.ts` |
| Build fails | Run `npm run build` locally first |

## CLI Deploy (Alternative)

```bash
npm i -g vercel
vercel login
vercel --prod
```

Set environment variables via the Vercel dashboard or:

```bash
vercel env add NEXT_PUBLIC_SITE_URL production
```