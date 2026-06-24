"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Target,
  Code,
  Sparkles,
  Users,
  Award,
  ArrowRight,
  Bookmark,
} from "lucide-react";

const COMPANY_PILLARS = [
  {
    icon: Target,
    title: "Milestone-Driven Execution",
    desc: "We align all code delivery with business outcomes. Every sprint concludes with clear, demonstrable value to minimize project delays.",
    color: "from-brand-purple/20 to-violet-500/5",
    iconColor: "text-brand-purple",
    glow: "rgba(124, 58, 237, 0.04)",
  },
  {
    icon: Code,
    title: "Uncompromising Quality",
    desc: "Our vetting audit ensures only developers who write clean, performant, and secure architectures manage your repositories.",
    color: "from-brand-cyan/20 to-teal-500/5",
    iconColor: "text-brand-cyan",
    glow: "rgba(6, 182, 212, 0.04)",
  },
  {
    icon: Sparkles,
    title: "ROI-Focused Growth",
    desc: "We unify custom product engineering with target acquisition strategies, ensuring SEO, paid marketing, and design convert visits to sales.",
    color: "from-amber-500/20 to-yellow-500/5",
    iconColor: "text-amber-500",
    glow: "rgba(245, 158, 11, 0.04)",
  },
  {
    icon: Users,
    title: "Agile Virtual Office Squads",
    desc: "We scale dedicated development teams and marketing boards in under 48 hours to secure immediate velocity for enterprise projects.",
    color: "from-emerald-500/20 to-teal-500/5",
    iconColor: "text-brand-emerald",
    glow: "rgba(16, 185, 129, 0.04)",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-craftify-bg relative overflow-hidden">
      <Navbar />

      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-purple/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-brand-cyan/3 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-40" />

      {/* Hero Header */}
      <section className="pt-36 pb-16 px-6 max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 bg-brand-purple/5 border border-brand-purple/15 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-purple uppercase tracking-wider"
        >
          <Award className="w-3.5 h-3.5" />
          Who We Are
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-outfit font-black text-4xl sm:text-6xl tracking-tight text-slate-900 mb-6 leading-[1.05]"
        >
          We build digital weapons.
          <br />
          <span className="shimmer-text">You dominate the market.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Aarudhra orchestrates elite, pre-vetted squads of developers and
          high-growth marketers to scale digital products. We bridge the gap
          between complex code systems and performance acquisitions.
        </motion.p>
      </section>

      {/* About Section - Bento Grid */}
      <section className="py-12 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="mono-label text-brand-purple mb-3">
            // corporate execution
          </p>
          <h2 className="font-outfit font-black text-2xl sm:text-4xl text-slate-900 tracking-tight">
            Our Core Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {COMPANY_PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glow-card rounded-2xl p-6 bg-white flex gap-5 border border-slate-200/60 relative overflow-hidden"
              >
                {/* Background glow tint */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-20"
                  style={{
                    background: p.iconColor.includes("purple")
                      ? "rgba(124,58,237,0.6)"
                      : "rgba(6,182,212,0.6)",
                  }}
                />

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} border border-slate-200/50 flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`w-6 h-6 ${p.iconColor}`} />
                </div>

                <div>
                  <h3 className="text-slate-900 font-extrabold text-base mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6 bg-slate-50/50 border-t border-slate-200/50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="mono-label text-brand-purple mb-3">
              // corporate vision
            </p>
            <h2 className="font-outfit font-black text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Founder &amp; Architecture Board
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glow-card rounded-3xl p-8 lg:p-12 bg-white max-w-4xl mx-auto border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14">
              {/* Founder Avatar Column */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-brand-purple/20 bg-gradient-to-tr from-brand-purple/10 to-brand-cyan/10 flex items-center justify-center shadow-inner group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-violet-600 to-brand-cyan opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <span className="relative z-10 text-white font-extrabold text-5xl tracking-tighter select-none">
                    S
                  </span>
                  {/* Decorative inner rotating rings */}
                  <div className="absolute inset-2 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-4 border border-white/10 border-dashed rounded-full animate-[spin_6s_linear_infinite_reverse]" />
                </div>

                <h4 className="text-slate-900 font-extrabold text-lg mt-5 text-center">
                  Sharan
                </h4>
                <p className="text-brand-purple font-semibold text-xs uppercase tracking-wider mt-1 text-center">
                  Founder
                </p>

                <div className="flex gap-3 mt-4">
                  <a
                    href="#"
                    className="p-2 rounded-full border border-slate-200/85 text-slate-500 hover:bg-slate-50 hover:text-brand-purple transition-all duration-200"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full border border-slate-200/85 text-slate-500 hover:bg-slate-50 hover:text-brand-cyan transition-all duration-200"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Founder Bio Column */}
              <div className="flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                    <Bookmark className="w-3.5 h-3.5 text-brand-purple" />
                    <span>FOUNDER PROFILE // 2026</span>
                  </div>

                  <h3 className="font-outfit font-black text-xl sm:text-2xl text-slate-900 leading-tight">
                    Vaporizing Technical Complexity for High-Growth Brands
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Poovarasan A founded Aarudhra Web Solutions to address a
                    recurring industry challenge: the mismatch between core
                    enterprise business objectives and developer sprint outputs.
                    As a full-stack engineer and digital systems architect, he
                    works with team directors to vet elite talent, optimize
                    engineering velocity, and oversee roadmap deliveries.
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Under his direction, Aarudhra orchestrates project
                    milestones with full repository security, transparent
                    documentation, and tight KPI reporting—helping companies
                    ship code fast and scale their conversion funnels.
                  </p>
                </div>

                {/* Personal Vision Quote Block */}
                <div className="mt-8 border-l-4 border-brand-purple pl-5 py-2.5 bg-brand-purple/[0.02] rounded-r-xl">
                  <p className="text-slate-800 italic text-xs sm:text-sm leading-relaxed font-medium">
                    &ldquo;We don't just supply standard resources or write raw
                    code. We construct premium, high-impact digital solutions
                    that help brands acquire users and dominate their market
                    fields.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Step CTA Bridge */}
      <section className="py-20 px-6 text-center max-w-[1200px] mx-auto">
        <h3 className="font-outfit font-black text-2xl sm:text-3xl text-slate-900 mb-4">
          Ready to kickstart your next sprint?
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto mb-8">
          Request a project roadmap assessment, or learn how to join our network
          of pre-vetted builders.
        </p>
        <a
          href="/#cta"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-purple to-violet-700 hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg shadow-brand-purple/15 transition-all"
        >
          Procure Core Solutions
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>

      <Footer />
    </main>
  );
}
