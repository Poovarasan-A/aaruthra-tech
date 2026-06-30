import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import MobileAppShowcase from "@/components/MobileAppShowcase";
import DigitalMarketingStats from "@/components/DigitalMarketingStats";
import Ecosystem from "@/components/Ecosystem";
import MidPageCTA from "@/components/MidPageCTA";
import WorkspacePreview from "@/components/WorkspacePreview";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#1A1A2E]">
      <Navbar />
      <Hero />
      <Logos />
      <Services />
      <CaseStudies />
      <Testimonials />
      <MobileAppShowcase />
      <DigitalMarketingStats />
      <Ecosystem />
      <MidPageCTA />
      <WorkspacePreview />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
