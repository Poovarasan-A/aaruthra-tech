import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <AppPreview />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
