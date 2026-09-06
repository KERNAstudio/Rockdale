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

All factual copy (contact details, curriculum, achievements, testimonials,
FAQs, gallery captions) lives in one place: [`lib/content.ts`](lib/content.ts).
Edit that file to update text without touching component code.

## Photos

The site ships with clean placeholder tiles wherever a real photo hasn't been
added yet — see [`IMAGES.md`](IMAGES.md) for the exact filenames and folders
to drop real Rockdale photography into (`public/images/...`). Once a file
exists at the expected path it renders automatically.

## Structure

- `app/` — one route per page (`/`, `/about`, `/academics`, `/achievements`,
  `/gallery`, `/admissions`, `/contact`, `/student-life`)
- `components/` — reusable, mostly server-rendered sections
- `lib/content.ts` — factual content, data-driven
- `lib/images.ts` — server-only helper that checks whether a photo exists yet
