# Rockdale School — Website

A Next.js (App Router) + TypeScript + Tailwind CSS site for Rockdale School,
Marripalem, Visakhapatnam.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All factual copy (contact details, curriculum, achievements, gallery
captions) lives in one place: [`lib/content.ts`](lib/content.ts). Edit that
file to update text without touching component code. Each fact has exactly
one source — e.g. the founding year lives in `siteConfig.foundedYear` and
is referenced everywhere else, rather than being retyped per page.

## Photos

The site ships with clean placeholder tiles wherever a real photo hasn't been
added yet — see [`IMAGES.md`](IMAGES.md) for the exact filenames and folders
to drop real Rockdale photography into (`public/images/...`). Once a file
exists at the expected path it renders automatically.

## Structure

- `app/` — one route per page (`/`, `/about`, `/academics`, `/student-life`,
  `/achievements`, `/gallery`, `/admissions`, `/contact`), plus
  `sitemap.ts`, `robots.ts` and `not-found.tsx`
- `components/` — reusable, mostly server-rendered sections
- `lib/content.ts` — factual content, data-driven
- `lib/images.ts` — server-only helper that checks whether a photo exists yet
- `lib/basePath.ts` — the GitHub Pages `/Rockdale` basePath, shared by
  `next.config.ts` and the image components (`next/image` doesn't
  auto-prefix it for plain `<img>` output under `images.unoptimized`)

## Deployment

Deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to
`main`. Static export (`output: "export"`) — see `next.config.ts` for the
basePath handling.
