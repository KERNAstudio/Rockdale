// Factual content sourced from rockdaleschool.in (home, /about, /achievements,
// /gallery, /contact) on 2026-09-02. Copy has been rewritten for clarity and
// tone; facts, names, figures and quotes are preserved as published.

export const siteConfig = {
  name: "Rockdale School",
  tagline: "A School for Life",
  foundedYear: 1997,
  foundedDateLabel: "10 December 1997",
  yearsOfLearning: new Date().getFullYear() - 1997,
  phone: "+91 97049 20595",
  phoneHref: "tel:+919704920595",
  email: "rockdale@gmail.com",
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

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Student Life", href: "/student-life" },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
] as const;

export const founders = [
  {
    name: "Pulletikurthy Narayana Murthy",
    role: "Founder & Director",
  },
  {
    name: "Pulletikurthy Uma Devi",
    role: "Director & Correspondent",
  },
] as const;

export const legacy = {
  eyebrow: `MORE THAN ${siteConfig.yearsOfLearning}+ YEARS OF LEARNING`,
  statement:
    "At Rockdale, we don't just teach.\nWe inspire, nurture and empower.",
  body: `Founded on ${siteConfig.foundedDateLabel} by Pulletikurthy Narayana Murthy in Visakhapatnam, Rockdale School has grown into a home for holistic education. For more than ${siteConfig.yearsOfLearning} years, it has combined academic rigour with values and character, guiding students from Play School through Grade X under the CBSE curriculum.`,
};

export const visionMission = {
  vision:
    "To inspire and empower lifelong learners and leaders.",
  mission:
    "To nurture every child's potential through academic excellence, values, and innovation.",
};

export const lifePillars = [
  {
    number: "01",
    title: "Holistic Education",
    description:
      "Learning that reaches beyond textbooks, into character, values and everyday life skills.",
  },
  {
    number: "02",
    title: "Academic Excellence",
    description:
      "A CBSE curriculum delivered by experienced, student-centred teachers from Play School to Grade X.",
  },
  {
    number: "03",
    title: "Beyond the Classroom",
    description:
      "Music, dance, art, drama, sports and public speaking, open to every student, every year.",
  },
  {
    number: "04",
    title: "A Caring Community",
    description:
      "Small enough to know every child, with secure campuses, CCTV surveillance and dedicated staff.",
  },
  {
    number: "05",
    title: "A Global Outlook",
    description:
      "Seminars, quizzes and Olympiads that prepare students to compete and belong far beyond Vizag.",
  },
] as const;

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
  { stage: "Primary", detail: "Building the foundations of literacy and numeracy." },
  { stage: "Middle School", detail: "Broader subjects, deeper thinking." },
  { stage: "Grade X", detail: "CBSE board preparation and public examinations." },
] as const;

export const whyRockdale = [
  { stat: `${siteConfig.yearsOfLearning}+`, label: "Years of learning" },
  { stat: "Play School–X", label: "Pre-Primary to Grade X" },
  { stat: "CBSE", label: "Curriculum followed" },
  { stat: "Student-centred", label: "Teaching approach" },
  { stat: "Academics + Life Skills", label: "A balanced education" },
  { stat: "Affordable", label: "Quality education for every family" },
] as const;

export const achievements = [
  {
    name: "Ramesh Joga",
    role: "Ph.D. Scholar, Department of Regulatory Affairs, NIPER-Hyderabad",
    description:
      "Studied at Rockdale from Nursery through Class X before going on to doctoral research at NIPER-Hyderabad.",
  },
  {
    name: "P. Laxmi Prasad",
    role: "Finance Professional, PepsiCo",
    description:
      "Builds expertise in financial operations, corporate accounting, planning and compliance, currently managing key financial processes and reporting at PepsiCo. He has also mentored students in accounting and finance.",
  },
  {
    name: "Ch. Surya Pavan",
    role: "Chartered Accountant (qualified 2019)",
    description:
      "Built his academic foundation at Rockdale School before qualifying as a Chartered Accountant, going on to work with PricewaterhouseCoopers (PwC) and Consero Global Solutions.",
  },
] as const;

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
  image: string;
  aspect: "landscape" | "portrait" | "square" | "wide";
}

export const galleryItems: GalleryItem[] = [
  {
    title: "School Photos",
    category: "Campus",
    caption: "The Rockdale campus, in everyday use.",
    image: "gallery/school-photos.jpg",
    aspect: "wide",
  },
  {
    title: "Farewell — 2K26 Batch",
    category: "Events",
    caption: "Sending off another graduating batch.",
    image: "gallery/farewell-2k26.jpg",
    aspect: "portrait",
  },
  {
    title: "Farewell — 2K25 Batch",
    category: "Events",
    caption: "A tradition of celebrating every senior class.",
    image: "gallery/farewell-2k25.jpg",
    aspect: "landscape",
  },
  {
    title: "SSC Success Meet 2025",
    category: "Academics",
    caption: "Celebrating Class X board results.",
    image: "gallery/ssc-success-meet-2025.jpg",
    aspect: "square",
  },
  {
    title: "Children's Day Celebrations",
    category: "Events",
    caption: "A day led by teachers, for the students.",
    image: "gallery/childrens-day.jpg",
    aspect: "landscape",
  },
  {
    title: "Science Expo",
    category: "Academics",
    caption: "Learning by doing, on display.",
    image: "gallery/science-expo.jpg",
    aspect: "square",
  },
  {
    title: "Annual Day Celebrations",
    category: "Arts",
    caption: "Music and dance take centre stage.",
    image: "gallery/annual-day.jpg",
    aspect: "portrait",
  },
  {
    title: "Crafts Exhibition",
    category: "Arts",
    caption: "Creativity has many forms.",
    image: "gallery/crafts-exhibition.jpg",
    aspect: "landscape",
  },
  {
    title: "Clean & Green Initiative",
    category: "Community",
    caption: "Students taking care of their campus.",
    image: "gallery/clean-and-green.jpg",
    aspect: "square",
  },
  {
    title: "Teacher's Day Celebrations",
    category: "Community",
    caption: "Students thank the teachers who guide them.",
    image: "gallery/teachers-day.jpg",
    aspect: "landscape",
  },
  {
    title: "Charities & Donations",
    category: "Community",
    caption: "Giving back beyond the school gates.",
    image: "gallery/charities-and-donations.jpg",
    aspect: "wide",
  },
  {
    title: "Dignitary Visits",
    category: "Events",
    caption: "Guests who visit and encourage our students.",
    image: "gallery/dignitary-visits.jpg",
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

export const campusExperiences = [
  {
    title: "Classroom Learning",
    caption: "Curiosity begins in the classroom.",
    image: "campus/classroom-learning.jpg",
    aspect: "landscape" as const,
  },
  {
    title: "Teacher & Students",
    caption: "Student-centred teaching, every day.",
    image: "campus/teacher-and-students.jpg",
    aspect: "portrait" as const,
  },
  {
    title: "Science & Computer Labs",
    caption: "Learning by doing.",
    image: "campus/science-lab.jpg",
    aspect: "square" as const,
  },
  {
    title: "Library & Reading",
    caption: "A quiet space to read and think.",
    image: "campus/library.jpg",
    aspect: "landscape" as const,
  },
  {
    title: "Sports & Recreation",
    caption: "Teamwork beyond the classroom.",
    image: "campus/sports.jpg",
    aspect: "wide" as const,
  },
  {
    title: "Morning Assembly",
    caption: "Where every school day begins.",
    image: "campus/morning-assembly.jpg",
    aspect: "square" as const,
  },
  {
    title: "Arts & Crafts",
    caption: "Creativity has many forms.",
    image: "campus/arts-and-crafts.jpg",
    aspect: "portrait" as const,
  },
  {
    title: "Primary Section",
    caption: "Where the youngest learners begin their journey.",
    image: "campus/primary-section.jpg",
    aspect: "landscape" as const,
  },
];

export const testimonials = [
  {
    quote:
      "It was a great experience studying here in this school. Blessed to be a part of this school.",
    author: "Parent",
  },
  {
    quote: "Very good school.",
    author: "Parent",
  },
  {
    quote: "This school provides quality education in the city Vizag.",
    author: "Father",
  },
] as const;

export const faqs = [
  {
    question: "Where is Rockdale School located in Visakhapatnam?",
    answer: `Rockdale School is located at ${siteConfig.address.full}.`,
  },
  {
    question: "What curriculum does Rockdale School follow?",
    answer:
      "Rockdale School follows the CBSE curriculum, focusing on academic excellence alongside co-curricular activities.",
  },
  {
    question: "What classes or grades does the school offer?",
    answer:
      "The school offers education from Play School and Pre-Primary through Class X, catering to a wide age group of students.",
  },
  {
    question: "What are the school timings?",
    answer:
      "Typical school hours are 8:30 AM to 4:00 PM, Monday to Friday. Specific timings may vary by grade.",
  },
  {
    question: "What kind of co-curricular activities are available?",
    answer:
      "Students take part in music, dance, art, drama, sports and public speaking and debate — activities open to every student, not just a select few.",
  },
  {
    question: "How does the school ensure student safety?",
    answer:
      "Rockdale School is equipped with CCTV surveillance, secure access control, and trained staff to look after every student on campus.",
  },
] as const;
