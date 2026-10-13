import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DigitalJourney from "@/components/DigitalJourney";
import SelectedWork from "@/components/SelectedWork";
import WhyAarudhra from "@/components/WhyAarudhra";
import Process from "@/components/Process";
import TechInnovation from "@/components/TechInnovation";
import TeamCompany from "@/components/TeamCompany";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080C14] text-[#F3F4F6] relative selection:bg-indigo-500 selection:text-white">
      {/* Sticky Floating Frosted Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services: Solutions Built Around Your Business */}
      <Services />

      {/* 3. Digital + Technology Journey */}
      <DigitalJourney />

      {/* 4. Selected Work (Case Studies: Challenge -> Solution -> Outcome) */}
      <SelectedWork />

      {/* 5. Why Aarudhra (4 Value Pillars) */}
      <WhyAarudhra />

      {/* 6. Our Process (Discover -> Strategize -> Build -> Launch -> Grow) */}
      <Process />

      {/* 7. Technology & Innovation (AI & Emerging Technology) */}
      <TechInnovation />

      {/* 8. Team / Company: The Team Behind the Solutions */}
      <TeamCompany />

      {/* 9. Insights (Tech, AI, Growth, Business, Marketing) */}
      <Insights />

      {/* 10. Frequently Asked Questions */}
      <FAQ />

      {/* 11. Final CTA: Project Consultation Planner */}
      <ContactCTA />

      {/* Comprehensive Modern Footer */}
      <Footer />
    </main>
  );
}
