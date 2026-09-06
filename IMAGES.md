# Image manifest

The site renders a clean placeholder wherever a photo is missing (see
`components/ImageSlot.tsx`), so it runs correctly right now. Drop real photos
into `public/images/...` using the **exact filenames** below and they appear
automatically — no code changes needed.

Guidance for the photos themselves (from the brief): real Rockdale photography
only — the actual building, real classrooms, real students in correct
weekday/Saturday uniforms. No stock photos, no AI-generated faces, no
invented facilities.

## Hero — `public/images/hero/`

| Filename | Aspect | Used for |
|---|---|---|
| `rockdale-building.jpg` | portrait/tall (recommend ≥1600×2000px) | Homepage hero — the real Rockdale School building, signage visible |

## Campus / Experience grid — `public/images/campus/`

Used on the homepage "Our Campus" section, About, Academics and Student Life pages.

| Filename | Aspect | Caption used on site |
|---|---|---|
| `classroom-learning.jpg` | landscape (4:3) | Curiosity begins in the classroom. |
| `teacher-and-students.jpg` | portrait (3:4) | Student-centred teaching, every day. |
| `science-lab.jpg` | square (1:1) | Learning by doing. |
| `library.jpg` | landscape (4:3) | A quiet space to read and think. |
| `sports.jpg` | wide (21:9) | Teamwork beyond the classroom. |
| `morning-assembly.jpg` | square (1:1) | Where every school day begins. |
| `arts-and-crafts.jpg` | portrait (3:4) | Creativity has many forms. |
| `primary-section.jpg` | landscape (4:3) | Where the youngest learners begin their journey. |

## Gallery — `public/images/gallery/`

Used on the homepage gallery preview and the full `/gallery` page with filters.

| Filename | Category | Aspect |
|---|---|---|
| `school-photos.jpg` | Campus | wide (21:9) |
| `farewell-2k26.jpg` | Events | portrait (3:4) |
| `farewell-2k25.jpg` | Events | landscape (4:3) |
| `ssc-success-meet-2025.jpg` | Academics | square (1:1) |
| `childrens-day.jpg` | Events | landscape (4:3) |
| `science-expo.jpg` | Academics | square (1:1) |
| `annual-day.jpg` | Arts | portrait (3:4) |
| `crafts-exhibition.jpg` | Arts | landscape (4:3) |
| `clean-and-green.jpg` | Community | square (1:1) |
| `teachers-day.jpg` | Community | landscape (4:3) |
| `charities-and-donations.jpg` | Community | wide (21:9) |
| `dignitary-visits.jpg` | Events | square (1:1) |

## Notes

- All image references live in one place: [`lib/content.ts`](lib/content.ts) —
  edit `galleryItems` or `campusExperiences` there to add, remove or re-caption
  photos without touching component code.
- JPG or PNG both work; keep files reasonably optimized (under ~500KB each)
  since Next.js will further optimize them at build/serve time via
  `next/image`.
- The empty `public/images/academics/`, `public/images/students/`,
  `public/images/sports/` and `public/images/events/` folders are there per
  the brief's suggested structure if you want to add more photos later beyond
  what's wired into `lib/content.ts` today.
