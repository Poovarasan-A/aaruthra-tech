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
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Building,
} from "lucide-react";

const COMPANY_PILLARS = [
  {
    icon: Target,
    title: "Business-Focused Approach",
    desc: "We design and engineer digital assets with clear commercial objectives in mind: qualified enquiries, local visibility, brand authority, and measurable ROI—not just superficial visuals.",
  },
  {
    icon: Code2,
    title: "Simple & Clear Process",
    desc: "We keep communication transparent and explain technical decisions clearly, so you always understand what is being built, why, and how it will tangibly help your operations.",
  },
  {
    icon: Users,
    title: "Direct Technical Access",
    desc: "You collaborate directly with our technical leadership and core developers who understand your domain, without layers of junior account executives or bureaucratic delays.",
  },
  {
    icon: Sparkles,
    title: "Future-Ready Scalability",
    desc: "Our web platforms, mobile apps, and systems are built on clean, modern Next.js and cloud architectures that evolve as your business expands, preventing costly rewrites.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080C14] text-[#F3F4F6] relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[450px] pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />
          <div className="absolute top-10 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-[150px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <Building className="w-3.5 h-3.5" />
          <span>About Aarudhra Web Solutions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white mb-6 leading-[1.1]"
        >
          Technology that works for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
            your business.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Aarudhra Web Solutions is a technology and digital solutions company that helps businesses build their digital presence, generate business opportunities, improve digital operations, and adopt modern technology with confidence.
        </motion.p>
      </section>

      {/* Principles Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 block mb-2">
            Our Foundations
          </span>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
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
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl p-7 sm:p-8 bg-[#0E1424] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-start group hover:-translate-y-1 shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2.5 group-hover:text-indigo-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#0A0E1A] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 block mb-2">
              Leadership &amp; Direction
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Founder &amp; Engineering Lead
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-12 bg-[#0C1222] max-w-4xl mx-auto border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* Founder Avatar */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-xl bg-[#080C14]">
                  <Image
                    src="/founder.jpeg"
                    alt="Sharan - Founder"
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
                <h4 className="text-white font-bold text-lg mt-4 text-center">
                  Sharan
                </h4>
                <p className="text-indigo-400 font-semibold text-xs uppercase tracking-wider mt-0.5 text-center font-mono">
                  Founder &amp; Technical Lead
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>

              {/* Bio Details */}
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-indigo-300 text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>DIRECT ACCOUNTABILITY &amp; TECHNICAL CARE</span>
                </div>

                <h3 className="font-bold text-2xl text-white leading-tight">
                  Bridging Technical Execution With Real Business Growth
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Sharan founded Aarudhra Web Solutions to solve a widespread problem: businesses frequently invest heavily in websites and IT setups that look elaborate on paper, but load slowly, confuse mobile visitors, and fail to generate practical commercial opportunities.
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">
                  With a background in modern web engineering, performant full-stack architectures, and digital lead acquisition, he works directly with business owners to ensure that every platform, redesign, and campaign is built on solid foundations, delivered on time, and supported with continuous technical care.
                </p>

                <div className="mt-6 border-l-4 border-indigo-500 pl-5 py-2 bg-white/[0.02] rounded-r-xl border border-white/5">
                  <p className="text-slate-200 italic text-sm leading-relaxed">
                    &ldquo;We don&apos;t just build web pages. We build dependable digital assets that help established and growing businesses establish credibility, improve operations, and capture more customers.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Regional Focus Strip */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <h3 className="font-bold text-2xl text-white mb-3">
          Serving Businesses Across Tamil Nadu &amp; Global Remote
        </h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8 font-mono">
          Chennai • Coimbatore • Madurai • Trichy • Salem • Dindigul • Across India &amp; Global
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 transition-all shimmer-sweep"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/10 text-white text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/10 transition-all"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
