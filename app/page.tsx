import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import Ecosystem from "@/components/Ecosystem";
import WorkspacePreview from "@/components/WorkspacePreview";
import EngagementModels from "@/components/EngagementModels";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <Services />
      <Ecosystem />
      <WorkspacePreview />
      {/* <EngagementModels /> */}
      <CTA />
      <Footer />
    </main>
  );
}
