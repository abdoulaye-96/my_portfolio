# Deployment Guide

## Local Development

```bash
cd portfolio-next
npm install
npm run dev
# Opens at http://localhost:3000
```

## Deploy to Vercel (Recommended)

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
# Follow prompts, link to your Vercel account
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a new GitHub repo (e.g. `portfolio-next`)
2. Go to vercel.com → New Project
3. Import the repo
4. Framework: Next.js (auto-detected)
5. Deploy → done

## Before deploying
- Add your real CV PDF as `public/cv.pdf` so the Resume button works
- Update the OG image by adding `public/og-image.png` (1200×630px)
- Update `src/app/layout.tsx` metadata URL to your actual Vercel domain

## Environment variables
None required for this static portfolio.

## Custom domain
In Vercel dashboard → Settings → Domains → add `abdoulaye-sene.dev` (or your domain)
