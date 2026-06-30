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
    title: "Business-Focused Approach",
    desc: "We design and manage digital assets with your business objectives in mind — customer enquiries, visibility, and long-term growth — not just visuals.",
    color: "from-[#6366F1]/20 to-indigo-500/5",
    iconColor: "text-[#6366F1]",
    glow: "rgba(99, 102, 241, 0.04)",
  },
  {
    icon: Code,
    title: "Simple & Clear Process",
    desc: "We keep communication straightforward and explain every step clearly, so you always know what is being done and why.",
    color: "from-[#06B6D4]/20 to-cyan-500/5",
    iconColor: "text-[#06B6D4]",
    glow: "rgba(6, 182, 212, 0.04)",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    desc: "You work directly with a consistent team that understands your business and is available when you need guidance or updates.",
    color: "from-emerald-500/20 to-teal-500/5",
    iconColor: "text-emerald-500",
    glow: "rgba(16, 185, 129, 0.04)",
  },
  {
    icon: Sparkles,
    title: "Long-Term Growth",
    desc: "Our websites and digital strategies are built to evolve as your business grows, helping you stay relevant instead of starting over every few years.",
    color: "from-amber-500/20 to-yellow-500/5",
    iconColor: "text-amber-500",
    glow: "rgba(245, 158, 11, 0.04)",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#1A1A2E] relative overflow-hidden">
      <Navbar />

      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#6366F1]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-[#06B6D4]/3 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-40" />

      {/* Hero Header */}
      <section className="pt-36 pb-16 px-6 max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-full px-4 py-1.5 text-xs font-semibold text-[#6366F1] uppercase tracking-wider"
        >
          <Award className="w-3.5 h-3.5" />
          Who We Are
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-outfit font-bold text-4xl sm:text-6xl tracking-tight text-[#1A1A2E] mb-6 leading-[1.05]"
          style={{ letterSpacing: "-0.03em" }}
        >
          About Aarudhra Web Solutions
          <br />
          <span className="gradient-text text-xl sm:text-3xl font-medium mt-3 block tracking-wider">
            A practical digital marketing and website development agency for
            small and mid-sized businesses
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed"
        >
          We work with small and mid-sized businesses across Tamil Nadu that
          want a reliable digital presence they can actually use to grow.
          Whether you are launching a new website, redesigning an outdated one,
          or trying to improve your visibility online, we focus on doing the
          fundamentals right — clear messaging, structured design, and digital
          strategies that support real business goals.
        </motion.p>
      </section>

      {/* About Section - Bento Grid */}
      <section className="py-12 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[#6366F1] font-semibold mb-3">
            // core value propositions
          </p>
          <h2 className="font-outfit font-bold text-2xl sm:text-4xl text-[#1A1A2E] tracking-tight">
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
                className="rounded-2xl p-6 bg-white flex gap-5 border border-black/[0.06] shadow-sm relative overflow-hidden hover:border-[#6366F1]/20 transition-all duration-300"
              >
                {/* Background glow tint */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-20"
                  style={{
                    background: p.iconColor.includes("F1")
                      ? "rgba(99,102,241,0.6)"
                      : "rgba(6,182,212,0.6)",
                  }}
                />

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} border border-slate-200/50 flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`w-6 h-6 ${p.iconColor}`} />
                </div>

                <div>
                  <h3 className="text-[#1A1A2E] font-bold text-base mb-2 font-outfit">
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
      <section className="py-20 px-6 bg-[#EFEEE9] border-t border-black/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-[#6366F1] font-semibold mb-3">
              // corporate vision
            </p>
            <h2 className="font-outfit font-bold text-2xl sm:text-4xl text-[#1A1A2E] tracking-tight">
              Founder &amp; Architecture Board
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 lg:p-12 bg-white max-w-4xl mx-auto border border-black/[0.06] shadow-sm"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14">
              {/* Founder Avatar Column */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border border-black/5 bg-gradient-to-tr from-[#6366F1]/10 to-[#06B6D4]/10 flex items-center justify-center shadow-inner group">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] via-[#4f46e5] to-[#06B6D4] opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <span className="relative z-10 text-white font-bold text-5xl tracking-tighter select-none font-outfit">
                    P
                  </span>

                  <div className="absolute inset-2 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-4 border border-white/10 border-dashed rounded-full animate-[spin_6s_linear_infinite_reverse]" /> */}
                  <img src="/founder.jpeg" alt="Founder" />
                </div>

                <h4 className="text-[#1A1A2E] font-bold text-lg mt-5 text-center font-outfit">
                  Sharan
                </h4>
                <p className="text-[#6366F1] font-semibold text-xs uppercase tracking-wider mt-1 text-center font-mono">
                  Founder
                </p>

                <div className="flex gap-3 mt-4">
                  <a
                    href="#"
                    className="p-2 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-[#6366F1] hover:border-[#6366F1]/20 transition-all duration-200"
                    aria-label="LinkedIn"
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
                    className="p-2 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-[#06B6D4] hover:border-[#06B6D4]/20 transition-all duration-200"
                    aria-label="GitHub"
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
                    <Bookmark className="w-3.5 h-3.5 text-[#6366F1]" />
                    <span>FOUNDER PROFILE // 2026</span>
                  </div>

                  <h3 className="font-outfit font-bold text-xl sm:text-2xl text-[#1A1A2E] leading-tight">
                    Vaporizing Technical Complexity for Growing Brands
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Sharan founded Aarudhra Web Solutions to address a recurring
                    industry challenge: the mismatch between core enterprise
                    business objectives and developer sprint outputs. As a
                    full-stack engineer and digital systems architect, he works
                    with team directors to vet elite talent, optimize
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
                <div className="mt-8 border-l-4 border-[#6366F1] pl-5 py-2.5 bg-[#6366F1]/[0.02] rounded-r-xl">
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
        <h3 className="font-outfit font-bold text-2xl sm:text-3xl text-[#1A1A2E] mb-4">
          Ready to kickstart your next project?
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto mb-8">
          Request a project roadmap assessment, or share a few details about
          what you're looking to improve.
        </p>
        <a
          href="/#cta"
          className="inline-flex items-center gap-2 bg-[#6366F1] hover:bg-[#4f46e5] hover:scale-[1.03] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm transition-all shimmer-sweep"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>

      <Footer />
    </main>
  );
}
