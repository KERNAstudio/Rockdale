import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import CampusSection from "@/components/CampusSection";
import WhyRockdale from "@/components/WhyRockdale";
import AchievementsSection from "@/components/AchievementsSection";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import AdmissionsCTA from "@/components/AdmissionsCTA";

// Kept deliberately tight: full Life at Rockdale lives on /student-life,
// full academic journey on /academics, full achievements on /achievements,
// FAQ + full contact details on /contact. This page teases each and links
// out via nav/CTAs rather than repeating them in full.
export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <CampusSection />
      <WhyRockdale />
      <AchievementsSection limit={1} />
      <GalleryPreview />
      <Testimonials />
      <AdmissionsCTA />
    </>
  );
}
