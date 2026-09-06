import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import LifeAtRockdale from "@/components/LifeAtRockdale";
import CampusSection from "@/components/CampusSection";
import AcademicJourney from "@/components/AcademicJourney";
import WhyRockdale from "@/components/WhyRockdale";
import AchievementsSection from "@/components/AchievementsSection";
import GalleryPreview from "@/components/GalleryPreview";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <LifeAtRockdale />
      <CampusSection />
      <AcademicJourney />
      <WhyRockdale />
      <AchievementsSection />
      <GalleryPreview />
      <AdmissionsCTA />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
