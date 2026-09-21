import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import FeaturedService from "@/components/FeaturedService";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import WhyAarudhra from "@/components/WhyAarudhra";
import QualitativeProof from "@/components/QualitativeProof";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FC] text-[#0F172A] selection:bg-brand-indigo selection:text-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <AboutSection />
      <Services />
      <FeaturedService />
      <Process />
      <CaseStudies />
      <WhyAarudhra />
      <QualitativeProof />
      <FAQ />
      <BottomCTA />
      <CTA />
      <Footer />
    </main>
  );
}
