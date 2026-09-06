# Image manifest

The site renders a clean, restrained placeholder wherever a photo is missing
(see `components/ImageSlot.tsx` / `ImageTile.tsx` / `lib/images.ts`), so it
runs correctly right now. Drop real photos into `public/images/...` using the
**exact filenames** below and they appear automatically — no code changes
needed.

Guidance for the photos themselves: real Rockdale photography only — the
actual building, real classrooms, real students in correct weekday/Saturday
uniforms. No stock photos, no invented facilities.

**Format:** JPEG, compressed (quality ~80-85). All current photos were
converted from source PNGs using `sharp` (already a transitive dependency via
Next.js) — see git history for the one-off conversion script if you need to
compress new drops. Keep files well under 500KB each; at time of writing the
whole set (15 photos) totals ~3.3MB, down from ~34MB as PNGs.

**Status:** 15 of 21 slots filled. 6 gallery slots (one-off events: both
farewells, SSC success meet, Children's Day, Teacher's Day, dignitary visits,
charities) still show the placeholder.

## Where images are used (V2 structure)

- **Hero** (`public/images/hero/rockdale-building.jpg`) — homepage and About
  page hero.
- **Life categories** (`lib/content.ts` → `lifeCategories`) — the
  Learn/Create/Play/Belong photo sets used on the homepage teaser and the
  full `/student-life` page. Pulls from both `public/images/campus/` and
  `public/images/gallery/`.
- **Gallery** (`lib/content.ts` → `galleryItems`) — the full `/gallery` page
  with category filters, plus a curated 5-photo subset
  (`homeGalleryHighlights`, filtered to only items with real photos) on the
  homepage.
- **Academics page** — a small dedicated classroom-imagery grid
  (`app/academics/page.tsx`), independent of `lifeCategories`.
- **About / Academic Path** — one photo each (`AboutPreview.tsx`,
  `AcademicPath.tsx`).

There is no single flat "campus grid" anymore — photos are distributed
across whichever page/section they're actually relevant to, so the same
photo may legitimately appear on more than one page (e.g. the hero building
shot on both Home and About).

## Filenames on disk

### `public/images/hero/`

| Filename | Status |
|---|---|
| `rockdale-building.jpg` | ✅ filled |

### `public/images/campus/`

| Filename | Status |
|---|---|
| `classroom-learning.jpg` | ✅ filled |
| `teacher-and-students.jpg` | ✅ filled |
| `science-lab.jpg` | ✅ filled |
| `library.jpg` | ✅ filled |
| `sports.jpg` | ✅ filled |
| `morning-assembly.jpg` | ✅ filled |
| `arts-and-crafts.jpg` | ✅ filled |
| `primary-section.jpg` | ✅ filled |

### `public/images/gallery/`

| Filename | Category | Status |
|---|---|---|
| `school-photos.jpg` | Campus | ✅ filled |
| `farewell-2k26.jpg` | Events | ⬜ placeholder |
| `farewell-2k25.jpg` | Events | ⬜ placeholder |
| `ssc-success-meet-2025.jpg` | Academics | ⬜ placeholder |
| `childrens-day.jpg` | Events | ⬜ placeholder |
| `science-expo.jpg` | Academics | ✅ filled |
| `annual-day.jpg` | Arts | ✅ filled |
| `crafts-exhibition.jpg` | Arts | ✅ filled |
| `clean-and-green.jpg` | Community | ✅ filled |
| `sports-day.jpg` | Sports | ✅ filled |
| `teachers-day.jpg` | Community | ⬜ placeholder |
| `charities-and-donations.jpg` | Community | ⬜ placeholder |
| `dignitary-visits.jpg` | Events | ⬜ placeholder |

## Notes

- All image references live in `lib/content.ts` (`lifeCategories`,
  `galleryItems`, `homeGalleryHighlights`) plus two one-off references in
  `AboutPreview.tsx` and `AcademicPath.tsx` — edit there to add, remove or
  re-caption photos without touching layout code.
- The empty `public/images/academics/`, `public/images/students/`, and
  `public/images/events/` folders are scaffolding for future photos beyond
  what's wired into `lib/content.ts` today.
