// Factual content sourced from rockdaleschool.in (home, /about, /achievements,
// /gallery, /contact). Copy has been rewritten for clarity and editorial
// tone; facts, names, figures and quotes are preserved as published. Do not
// add statistics, results or facilities that are not verified here.

export const siteConfig = {
  name: "Rockdale School",
  tagline: "A School for Life",
  foundedYear: 1997,
  foundedDateLabel: "10 December 1997",
  phone: "+91 97049 20595",
  phoneHref: "tel:+919704920595",
  email: "rockdale@gmail.com",
  hours: "8:30 AM – 4:00 PM, Monday to Friday",
  whatsappHref:
    "https://api.whatsapp.com/send?phone=919704920595&text=Hi%20I%20would%20like%20to%20know%20more%20about%20the%20school%20and%20the%20admission%20procedure.",
  address: {
    line1: "Rockdale School",
    line2: "Marripalem VUDA Layout, Marripalem",
    line3: "Visakhapatnam, Andhra Pradesh 530009",
    full: "P6WW+HQ5, Marripalem VUDA Layout, Marripalem, Visakhapatnam, Andhra Pradesh 530009",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Rockdale+School+Marripalem+Visakhapatnam",
  },
  curriculum: "CBSE",
  classesOffered:
    "Play School and Pre-Primary (Nursery to UKG) through Grade X",
} as const;

// Contact intentionally isn't a primary nav item — it stays reachable via
// the footer, Admissions and the /contact page itself, keeping the top nav
// spacious rather than competing with Admissions.
export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Student Life", href: "/student-life" },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
] as const;

export const founders = [
  { name: "Pulletikurthy Narayana Murthy", role: "Founder & Director" },
  { name: "Pulletikurthy Uma Devi", role: "Director & Correspondent" },
] as const;

export const heroContent = {
  eyebrow: "Rockdale School · Visakhapatnam",
  headline: ["Learn.", "Grow.", "Belong."],
  supporting:
    "A CBSE school in Visakhapatnam, welcoming students from Play School and Pre-Primary through Grade X.",
  primaryCta: { label: "Explore the School", href: "/about" },
  secondaryCta: { label: "Admissions", href: "/admissions" },
};

// Four Facts — replaces a floating "29+ years" style stat, which ages badly
// and reads as marketing. A founding date is a fact; use it directly.
export const homeFacts = [
  { label: "Since", value: "1997" },
  { label: "Curriculum", value: siteConfig.curriculum },
  { label: "Classes", value: "Play School–Grade X" },
  { label: "Location", value: "Visakhapatnam" },
] as const;

export const aboutContent = {
  homeHeadline: "A school built over time.",
  homeIntro:
    "Founded in Visakhapatnam in 1997, Rockdale School provides education from Play School and Pre-Primary through Grade X under the CBSE curriculum. The school combines classroom learning with activities, sports, arts and opportunities for students to develop confidence beyond academics.",
  pageEyebrow: "About Rockdale",
  pageHeadline: "A school built over time.",
  pageIntro:
    "Founded in Visakhapatnam in 1997, Rockdale School has grown around a simple commitment to meaningful education, strong foundations and the development of the whole student.",
  foundingHeading: "Since 10 December 1997.",
  foundingBody: `Rockdale School was founded on ${siteConfig.foundedDateLabel} by Pulletikurthy Narayana Murthy in Visakhapatnam. Under the ${siteConfig.curriculum} curriculum, it provides education from Play School and Pre-Primary through Grade X.`,
  vision: "To inspire and empower lifelong learners and leaders.",
  mission:
    "To nurture every child's potential through academic excellence, values, and innovation.",
  values: [
    {
      title: "Learning",
      description: `A ${siteConfig.curriculum} curriculum from Play School through Grade X, in digital classrooms with science and computer labs.`,
    },
    {
      title: "Creativity",
      description:
        "Art, music and dance are part of the regular school routine, not an occasional activity.",
    },
    {
      title: "Participation",
      description:
        "Seminars, quiz competitions and public speaking practice for every student, not a select few.",
    },
    {
      title: "Community",
      description:
        "CCTV surveillance and dedicated staff look after every child on campus.",
    },
  ],
} as const;

export const facilities = [
  "Experienced & dedicated teachers",
  "Digital classrooms & science and computer labs",
  "Sports arena & indoor games",
  "Art, music & dance activities",
  "24/7 CCTV surveillance",
  "Seminars & quiz competitions for every student",
  "Public speaking practice for every student",
] as const;

export const academicJourney = [
  { stage: "Play School", detail: "The first step into structured learning." },
  { stage: "Pre-Primary", detail: "Nursery · LKG · UKG" },
  { stage: "Primary", detail: "Building strong foundations." },
  { stage: "Middle School", detail: "Broader subjects, deeper thinking." },
  { stage: "Grade X", detail: "CBSE board preparation and public examinations." },
] as const;

export const academicsContent = {
  eyebrow: "Academics",
  headline: "Learning that grows with the student.",
  intro: `Rockdale provides education from Play School and Pre-Primary through Grade X under the ${siteConfig.curriculum} curriculum.`,
  coCurricular: [
    "Art, music and dance",
    "Sports and indoor games",
    "Seminars and quiz competitions for every student",
    "Public speaking practice for every student",
  ],
  gradeX:
    "As students approach Grade X, classroom teaching shifts toward CBSE board preparation and public examinations, building on the foundations set from Play School onward.",
};

export type LifeCategoryKey = "learn" | "create" | "play" | "belong";

interface LifeCategoryImage {
  image: string;
  caption: string;
  aspect: "landscape" | "portrait" | "square" | "wide";
}

export const lifeCategories: {
  key: LifeCategoryKey;
  title: string;
  description: string;
  images: LifeCategoryImage[];
}[] = [
  {
    key: "learn",
    title: "Learn",
    description: "Classrooms, teachers, science and reading.",
    images: [
      { image: "campus/classroom-learning.jpg", caption: "Classroom learning", aspect: "landscape" },
      { image: "campus/teacher-and-students.jpg", caption: "Teacher and students", aspect: "portrait" },
      { image: "campus/science-lab.jpg", caption: "Science and computer lab", aspect: "square" },
      { image: "campus/library.jpg", caption: "Library and reading", aspect: "landscape" },
      { image: "campus/primary-section.jpg", caption: "Primary section", aspect: "landscape" },
    ],
  },
  {
    key: "create",
    title: "Create",
    description: "Art, music, dance and cultural activities.",
    images: [
      { image: "campus/arts-and-crafts.jpg", caption: "Arts and crafts", aspect: "portrait" },
      { image: "gallery/crafts-exhibition.jpg", caption: "Crafts exhibition", aspect: "landscape" },
      { image: "gallery/annual-day.jpg", caption: "Annual Day performance", aspect: "portrait" },
    ],
  },
  {
    key: "play",
    title: "Play",
    description: "Sports and recreation.",
    images: [
      { image: "campus/sports.jpg", caption: "Sports and recreation", aspect: "wide" },
      { image: "gallery/sports-day.jpg", caption: "Sports Day", aspect: "landscape" },
    ],
  },
  {
    key: "belong",
    title: "Belong",
    description: "Assembly, friendships and everyday school life.",
    images: [
      { image: "campus/morning-assembly.jpg", caption: "Morning assembly", aspect: "square" },
      { image: "gallery/clean-and-green.jpg", caption: "Clean & Green Initiative", aspect: "square" },
      { image: "gallery/school-photos.jpg", caption: "Everyday school life", aspect: "wide" },
    ],
  },
];

export const studentLifeContent = {
  eyebrow: "Student Life",
  headline: "More than the school day.",
  intro:
    "Music, dance, art, drama, sports and public speaking — open to every student, every year.",
  experience:
    "Every student takes part in seminars, quiz competitions and public speaking practice, alongside classroom learning — building confidence and participation habits early, not reserved for a select few.",
};

export const achievements = [
  {
    name: "Ramesh Joga",
    role: "Ph.D. Scholar, Department of Regulatory Affairs, NIPER-Hyderabad",
    description:
      "Studied at Rockdale from Nursery through Class X before going on to doctoral research at NIPER-Hyderabad.",
    featured: true,
  },
  {
    name: "Ch. Surya Pavan",
    role: "Chartered Accountant (qualified 2019)",
    description:
      "Built his academic foundation at Rockdale School before qualifying as a Chartered Accountant, going on to work with PricewaterhouseCoopers (PwC) and Consero Global Solutions.",
    featured: true,
  },
  {
    name: "P. Laxmi Prasad",
    role: "Finance Professional, PepsiCo",
    description:
      "Builds expertise in financial operations, corporate accounting, planning and compliance, currently managing key financial processes and reporting at PepsiCo. He has also mentored students in accounting and finance.",
    featured: false,
  },
] as const;

export const achievementsContent = {
  eyebrow: "Achievements",
  headline: "Where Rockdale leads.",
  intro:
    "The strongest measure of a school is not only what happens inside its classrooms, but where its students go next.",
};

export type GalleryCategory =
  | "Academics"
  | "Events"
  | "Sports"
  | "Arts"
  | "Community"
  | "Campus";

export interface GalleryItem {
  title: string;
  category: GalleryCategory;
  caption: string;
  // One event can have several photos — clicking the tile opens all of
  // them. Add more filenames to the array as more photos come in for an
  // event; the lightbox and the "N photos" badge both pick it up
  // automatically.
  images: string[];
  aspect: "landscape" | "portrait" | "square" | "wide";
}

export const galleryItems: GalleryItem[] = [
  {
    title: "School Photos",
    category: "Campus",
    caption: "The Rockdale campus, in everyday use.",
    images: ["gallery/school-photos.jpg"],
    aspect: "wide",
  },
  {
    title: "Farewell — 2K26 Batch",
    category: "Events",
    caption: "Sending off another graduating batch.",
    images: ["gallery/farewell-2k26.jpg"],
    aspect: "portrait",
  },
  {
    title: "Farewell — 2K25 Batch",
    category: "Events",
    caption: "A tradition of celebrating every senior class.",
    images: ["gallery/farewell-2k25.jpg"],
    aspect: "landscape",
  },
  {
    title: "SSC Success Meet 2025",
    category: "Academics",
    caption: "Celebrating Class X board results.",
    images: ["gallery/ssc-success-meet-2025.jpg"],
    aspect: "square",
  },
  {
    title: "Children's Day Celebrations",
    category: "Events",
    caption: "A day led by teachers, for the students.",
    images: ["gallery/childrens-day.jpg"],
    aspect: "landscape",
  },
  {
    title: "Science Expo",
    category: "Academics",
    caption: "Learning by doing, on display.",
    images: ["gallery/science-expo.jpg"],
    aspect: "square",
  },
  {
    title: "Annual Day Celebrations",
    category: "Arts",
    caption: "Music and dance take centre stage.",
    images: ["gallery/annual-day.jpg"],
    aspect: "portrait",
  },
  {
    title: "Crafts Exhibition",
    category: "Arts",
    caption: "Creativity has many forms.",
    images: ["gallery/crafts-exhibition.jpg"],
    aspect: "landscape",
  },
  {
    title: "Clean & Green Initiative",
    category: "Community",
    caption: "Students taking care of their campus.",
    images: ["gallery/clean-and-green.jpg"],
    aspect: "square",
  },
  {
    title: "Sports Day",
    category: "Sports",
    caption: "Teamwork beyond the classroom.",
    images: ["gallery/sports-day.jpg"],
    aspect: "landscape",
  },
  {
    title: "Teacher's Day Celebrations",
    category: "Community",
    caption: "Students thank the teachers who guide them.",
    images: ["gallery/teachers-day.jpg"],
    aspect: "landscape",
  },
  {
    title: "Charities & Donations",
    category: "Community",
    caption: "Giving back beyond the school gates.",
    images: ["gallery/charities-and-donations.jpg"],
    aspect: "wide",
  },
  {
    title: "Dignitary Visits",
    category: "Events",
    caption: "Guests who visit and encourage our students.",
    images: ["gallery/dignitary-visits.jpg"],
    aspect: "square",
  },
];

export const galleryFilters: ("All" | GalleryCategory)[] = [
  "All",
  "Academics",
  "Events",
  "Sports",
  "Arts",
  "Community",
  "Campus",
];

// Curated highlight reel for the homepage — only items with real photography,
// so the teaser never shows a placeholder. The full set (placeholders
// included) lives on /gallery.
export const homeGalleryHighlights: GalleryItem[] = galleryItems.filter((item) =>
  ["School Photos", "Science Expo", "Annual Day Celebrations", "Clean & Green Initiative", "Sports Day"].includes(
    item.title
  )
);

export const admissionsContent = {
  eyebrow: "Admissions",
  headline: "Start the conversation.",
  intro:
    "For information about admissions, availability and the next steps, contact Rockdale School directly.",
  steps: [
    {
      number: "01",
      title: "Get in touch",
      description: "Call, WhatsApp or email the school office.",
    },
    {
      number: "02",
      title: "Speak with the school",
      description: "Ask about seats, fees and what your child will need.",
    },
    {
      number: "03",
      title: "Understand the next steps",
      description: "The school's office team will guide you through what happens next.",
    },
  ],
};

export const contactContent = {
  eyebrow: "Contact",
  headline: "Come meet Rockdale.",
};

// The recurring bottom-of-page CTA banner (appears on every page) — kept
// separate from admissionsContent since that's the /admissions page's own
// hero copy, a different message for a different context.
export const admissionsCta = {
  eyebrow: "Admissions",
  headline: "Considering Rockdale for your child?",
  body: "Admissions are open. Speak with the school to learn more about the admission process and the next steps.",
  primaryCta: { label: "Enquire Now", href: "/admissions" },
  secondaryCta: { label: "Call the School" },
};
