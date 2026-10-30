import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Target,
  Code2,
  Users,
  Sparkles,
  ArrowRight,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const COMPANY_PILLARS = [
  {
    icon: Target,
    title: "Business-Focused Approach",
    desc: "We design and manage digital assets with your business objectives in mind — customer enquiries, local visibility, and long-term brand authority — not just superficial visuals.",
  },
  {
    icon: Code2,
    title: "Simple & Clear Process",
    desc: "We keep communication straightforward and explain every milestone clearly, so you always understand what is being built, why, and how it will help your business.",
  },
  {
    icon: Users,
    title: "Dedicated Technical Support",
    desc: "You work directly with our core engineering team that understands your business requirements and is always accessible when you need updates or guidance.",
  },
  {
    icon: Sparkles,
    title: "Long-Term Digital Growth",
    desc: "Our websites and digital systems are built on clean, modern architectures that evolve as your business expands, preventing you from starting over every few years.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#0F172A] relative overflow-hidden selection:bg-brand-indigo selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-4 sm:px-6 max-w-[1240px] mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-subtle mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-indigo" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700">
            About Aarudhra Web Solutions
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Technology that works for{" "}
          <span className="text-brand-indigo">your business.</span>
        </h1>

        <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          We partner with small and mid-sized businesses across Tamil Nadu that want a reliable, high-performing digital presence to generate enquiries, build customer trust, and support steady long-term growth.
        </p>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-[1240px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-2">
            Our Foundations
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            How We Approach Every Project
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {COMPANY_PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl p-7 sm:p-8 bg-white border border-slate-200/80 shadow-subtle hover:border-brand-indigo/30 hover:shadow-card transition-all duration-300 flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-indigo/5 border border-brand-indigo/15 flex items-center justify-center text-brand-indigo mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-slate-900 font-heading font-bold text-xl mb-2.5">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white border-y border-slate-200/80">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Leadership &amp; Direction
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Founder &amp; Engineering Lead
            </h2>
          </div>

          <div className="rounded-3xl p-8 sm:p-12 bg-[#F8F7F4] max-w-4xl mx-auto border border-slate-200/80 shadow-card">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Founder Avatar */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-44 h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                  <Image
                    src="/founder.jpeg"
                    alt="Sharan - Founder"
                    fill
                    sizes="176px"
                    className="object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h4 className="text-slate-900 font-heading font-bold text-lg mt-4 text-center">
                  Sharan
                </h4>
                <p className="text-brand-indigo font-semibold text-xs uppercase tracking-wider mt-0.5 text-center font-mono">
                  Founder &amp; Technical Lead
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>

              {/* Bio Details */}
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                  <ShieldCheck className="w-4 h-4 text-brand-indigo" />
                  <span>DIRECT CONSULTATION &amp; ACCOUNTABILITY</span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-slate-900 leading-tight">
                  Bridging Technical Execution With Real Business Growth
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Sharan founded Aarudhra Web Solutions to solve a widespread problem: small and mid-sized businesses frequently invest in websites that look elaborate on paper, but load slowly, confuse customers, and fail to generate practical business leads.
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  With a background in modern web engineering, performant frontend architectures, and local digital visibility, he works directly with business owners to ensure that every website, redesign, and campaign is built on solid foundations, delivered on time, and supported with continuous care.
                </p>

                <div className="mt-6 border-l-4 border-brand-indigo pl-5 py-2 bg-white rounded-r-xl border border-l-0 border-slate-200/70 shadow-subtle">
                  <p className="text-slate-800 italic text-sm leading-relaxed font-medium">
                    &ldquo;We don&apos;t just build web pages. We build dependable digital assets that help established and growing businesses establish credibility and capture more customers.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Focus Strip */}
      <section className="py-16 px-4 sm:px-6 max-w-[1240px] mx-auto text-center">
        <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">
          Serving Businesses Across Tamil Nadu
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto mb-8">
          Chennai • Coimbatore • Madurai • Trichy • Salem • Dindigul • Across Tamil Nadu
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-brand-indigo hover:bg-brand-indigoDark text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-md transition-all shimmer-sweep"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold px-6 py-3.5 rounded-xl border border-slate-200 shadow-subtle transition-all"
          >
            Explore Services
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
