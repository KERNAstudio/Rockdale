# Image manifest

The site renders a clean placeholder wherever a photo is missing (see
`components/ImageSlot.tsx` / `lib/images.ts`), so it runs correctly right
now. Drop real photos into `public/images/...` using the **exact filenames**
below and they appear automatically — no code changes needed.

Guidance for the photos themselves (from the brief): real Rockdale photography
only — the actual building, real classrooms, real students in correct
weekday/Saturday uniforms. No stock photos, no invented facilities.

**Status (2026-09-06):** 15 of 21 slots are filled, sourced from a curated
Google Drive folder of Rockdale-branded photography and mapped to the
closest-matching slot below. 6 slots (mostly one-off events: farewells,
SSC success meet, Children's Day, Teacher's Day, dignitary visits, charities)
still show the placeholder — drop matching photos in whenever they're
available.

## Hero — `public/images/hero/`

| Filename | Status | Used for |
|---|---|---|
| `rockdale-building.png` | ✅ filled | Homepage hero — the Rockdale School building, signage visible |

## Campus / Experience grid — `public/images/campus/`

Used on the homepage "Our Campus" section, About, Academics and Student Life pages.

| Filename | Status | Caption used on site |
|---|---|---|
| `classroom-learning.png` | ✅ filled | Curiosity begins in the classroom. |
| `teacher-and-students.png` | ✅ filled | Student-centred teaching, every day. |
| `science-lab.png` | ✅ filled | Learning by doing. |
| `library.png` | ✅ filled | A quiet space to read and think. |
| `sports.png` | ✅ filled | Teamwork beyond the classroom. |
| `morning-assembly.png` | ✅ filled | Where every school day begins. |
| `arts-and-crafts.png` | ✅ filled | Creativity has many forms. |
| `primary-section.png` | ✅ filled | Where the youngest learners begin their journey. |

## Gallery — `public/images/gallery/`

Used on the homepage gallery preview and the full `/gallery` page with filters.

| Filename | Category | Status |
|---|---|---|
| `school-photos.png` | Campus | ✅ filled |
| `farewell-2k26.jpg` | Events | ⬜ placeholder |
| `farewell-2k25.jpg` | Events | ⬜ placeholder |
| `ssc-success-meet-2025.jpg` | Academics | ⬜ placeholder |
| `childrens-day.jpg` | Events | ⬜ placeholder |
| `science-expo.png` | Academics | ✅ filled |
| `annual-day.png` | Arts | ✅ filled |
| `crafts-exhibition.png` | Arts | ✅ filled |
| `clean-and-green.png` | Community | ✅ filled |
| `sports-day.png` | Sports | ✅ filled (new — fills the previously-empty Sports filter) |
| `teachers-day.jpg` | Community | ⬜ placeholder |
| `charities-and-donations.jpg` | Community | ⬜ placeholder |
| `dignitary-visits.jpg` | Events | ⬜ placeholder |

## Notes

- All image references live in one place: [`lib/content.ts`](lib/content.ts) —
  edit `galleryItems` or `campusExperiences` there to add, remove or re-caption
  photos without touching component code.
- JPG or PNG both work; keep files reasonably optimized (under ~500KB each)
  since Next.js optimizes them further at build/serve time via `next/image`
  (disabled only for the static GitHub Pages export, where `next/image` falls
  back to plain `<img>`).
- The empty `public/images/academics/`, `public/images/students/`, and
  `public/images/events/` folders are there per the brief's suggested
  structure if you want to add more photos later beyond what's wired into
  `lib/content.ts` today.
