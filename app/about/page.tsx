"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Target,
  Code2,
  Users,
  Sparkles,
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

const smoothEase = [0.2, 0, 0, 1] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f2f1ed] text-[#121212] relative overflow-x-clip selection:bg-[#793dff] selection:text-white font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[rgba(18,18,18,0.12)] shadow-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#793dff]" />
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#121212]/70">
            About Aarudhra Technologies
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: smoothEase }}
          className="font-display font-normal text-4xl sm:text-6xl md:text-7xl text-[#121212] tracking-tight leading-[1.05] max-w-4xl mx-auto mb-6"
        >
          Technology that actually harmonizes with{" "}
          <span className="fc-mark--fill">your business.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
          className="font-sans text-base sm:text-xl text-[#121212]/75 max-w-2xl mx-auto leading-relaxed"
        >
          We partner with ambitious businesses across Tamil Nadu and internationally that want a reliable,
          high-performing digital foundation to generate enquiries, build customer trust, and support steady long-term growth.
        </motion.p>
      </section>

      {/* Principles Section */}
      <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-[rgba(18,18,18,0.12)]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#793dff] block mb-2">
            Our Foundations
          </span>
          <h2 className="font-display font-normal text-3xl sm:text-5xl text-[#121212] tracking-tight leading-[1.1]">
            How We Approach Every Project
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {COMPANY_PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: smoothEase }}
                className="rounded-2xl p-8 bg-white border border-[rgba(18,18,18,0.12)] shadow-sm hover:border-[#793dff] hover:shadow-xl transition-all duration-300 flex flex-col justify-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#793dff]/10 border border-[#793dff]/20 flex items-center justify-center text-[#793dff] mb-6 group-hover:bg-[#793dff] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[#121212] font-sans font-semibold text-xl mb-3">
                  {p.title}
                </h3>
                <p className="text-[#121212]/70 text-[15px] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-12 bg-white border-y border-[rgba(18,18,18,0.12)]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#793dff] block mb-2">
              Leadership &amp; Direction
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-5xl text-[#121212] tracking-tight">
              Founder &amp; Engineering Lead
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="rounded-3xl p-8 sm:p-12 bg-[#f2f1ed] max-w-4xl mx-auto border border-[rgba(18,18,18,0.12)] shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Founder Avatar */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-[rgba(18,18,18,0.15)] shadow-md bg-[#121212]">
                  <Image
                    src="/founder.jpeg"
                    alt="Sharan - Founder"
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
                <h4 className="text-[#121212] font-sans font-bold text-lg mt-4 text-center">
                  Sharan
                </h4>
                <p className="text-[#793dff] font-semibold text-xs uppercase tracking-wider mt-0.5 text-center font-mono">
                  Founder &amp; Technical Lead
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#121212]/60 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#793dff]" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>

              {/* Bio Details */}
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[#121212]/50 text-xs font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#793dff]" />
                  <span>DIRECT CONSULTATION &amp; ARCHITECTURAL ACCOUNTABILITY</span>
                </div>

                <h3 className="font-display font-normal text-2xl sm:text-3xl text-[#121212] leading-tight">
                  Bridging Technical Execution With Real Business Growth
                </h3>

                <p className="text-[#121212]/75 text-sm sm:text-base leading-relaxed">
                  Sharan founded Aarudhra to solve a widespread problem: businesses frequently invest in websites that look elaborate on paper, but load slowly, confuse customers, and fail to generate practical business inquiries.
                </p>

                <p className="text-[#121212]/75 text-sm sm:text-base leading-relaxed">
                  With a background in modern web engineering, performant frontend architectures, and local digital visibility, he works directly with business owners to ensure that every platform, redesign, and campaign is built on solid foundations, delivered on time, and supported with continuous care.
                </p>

                <div className="mt-6 border-l-4 border-[#793dff] pl-5 py-3 bg-white rounded-r-xl border border-l-0 border-[rgba(18,18,18,0.12)]">
                  <p className="font-quote text-[#121212] italic text-base leading-relaxed">
                    &ldquo;We don&apos;t just build web pages. We build dependable digital assets that help established and growing businesses establish authority and capture more customers.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Regional Focus Strip */}
      <section className="py-20 px-4 sm:px-8 max-w-[1440px] mx-auto text-center">
        <h3 className="font-display text-3xl sm:text-4xl text-[#121212] mb-3">
          Serving Businesses Across Tamil Nadu &amp; Beyond
        </h3>
        <p className="font-sans text-[#121212]/60 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Chennai • Coimbatore • Madurai • Trichy • Salem • Dindigul • International
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/#contact" className="fc-btn fc-btn--violet">
            <span>Start a conversation</span>
            <svg className="fc-btn__arrow" width="22" height="14" viewBox="0 0 22 14" fill="none">
              <path
                d="M0 7 H19 M14 2 L19 7 L14 12"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/#services" className="fc-btn fc-btn--dark">
            <span>Explore capabilities</span>
            <svg className="fc-btn__arrow" width="22" height="14" viewBox="0 0 22 14" fill="none">
              <path
                d="M0 7 H19 M14 2 L19 7 L14 12"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
