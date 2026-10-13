"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Layers,
  Wrench,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";

const VALUE_PILLARS = [
  {
    num: "01",
    title: "Business Understanding",
    tagline: "Technology Aligned with Real Commercial Requirements",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-600",
    description:
      "We begin by understanding your revenue model, customer acquisition journey, and operational friction points before writing a line of code. We do not push complex technology for the sake of novelty—every architectural decision is tied directly to a tangible business objective.",
    deliverables: [
      "Commercial requirement mapping before design",
      "Solutions shaped for actual conversion, not just aesthetics",
      "Direct founder and engineering lead consultation",
      "Elimination of wasteful feature bloat and technical debt",
    ],
  },
  {
    num: "02",
    title: "Integrated Capabilities",
    tagline: "Engineering, Design & Growth Under One Roof",
    icon: Layers,
    color: "from-indigo-500 to-violet-600",
    description:
      "Traditional businesses struggle when juggling separate web designers, backend developers, and marketing agencies who blame each other when results stall. Aarudhra bridges full-stack engineering, performance marketing, and digital growth seamlessly under one accountable roof.",
    deliverables: [
      "Unified vision across product, website, and ad funnels",
      "No agency finger-pointing or fragmented communication",
      "Synchronized tech stack with marketing tracking and analytics",
      "Faster time-to-market with unified cross-functional execution",
    ],
  },
  {
    num: "03",
    title: "Practical Technology",
    tagline: "Usefulness & Measurable Value Before Complexity",
    icon: Wrench,
    color: "from-violet-500 to-purple-600",
    description:
      "We believe the best technology is dependable, maintainable, and invisible in the best way. Our platforms are built on modern, battle-tested tools (Next.js, TypeScript, PostgreSQL) that your team can confidently own and operate for years without fragility.",
    deliverables: [
      "100% intellectual property and code repository ownership",
      "Zero reliance on opaque, locked-in website builders",
      "Performant architectures with high uptime and low hosting costs",
      "Clear technical documentation and handoff training",
    ],
  },
  {
    num: "04",
    title: "Future-Ready Architecture",
    tagline: "Engineered to Adopt Automation, AI & New Channels",
    icon: Sparkles,
    color: "from-purple-500 to-cyan-400",
    description:
      "Your company will look different 18 months from now. We build modular, API-first foundations that allow you to seamlessly plug in AI capabilities, automated customer workflows, mobile applications, and internal tools without having to throw everything away and start over.",
    deliverables: [
      "API-first modular microservice readiness",
      "Seamless integration pathways for LLM agents and webhooks",
      "Scalable database models built for compound business growth",
      "Continuous technology advisory as emerging tools mature",
    ],
  },
];

export default function WhyAarudhra() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-[#0A0E1A] text-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why Aarudhra Web Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Built for Businesses That Value{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
              Clarity &amp; Real Outcomes.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            We are not a bloated IT agency that disappears behind account managers. We are hands-on technologists and digital growth partners committed to your long-term success.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-3xl p-7 sm:p-9 bg-[#0E1424] border border-white/10 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden group"
              >
                {/* Subtle top gradient glow */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${pillar.color} opacity-10 rounded-full blur-2xl pointer-events-none group-hover:opacity-20 transition-opacity`}
                />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${pillar.color} text-white shadow-lg`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-500">
                      PILLAR {pillar.num}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-mono text-indigo-400 block mb-4">
                    {pillar.tagline}
                  </span>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* Concrete Deliverables */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    {pillar.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contrast Comparison Table: Traditional Agencies vs Aarudhra */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#070A12] border border-white/10 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Direct Comparison
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              The Aarudhra Difference
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Typical Agency */}
            <div className="p-6 rounded-2xl bg-rose-950/10 border border-rose-500/20">
              <div className="flex items-center gap-2 mb-4 text-rose-400 font-semibold text-sm">
                <XCircle className="w-4 h-4" />
                <span>Conventional IT &amp; Web Agencies</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  Generic templates recycled with sluggish page builder plugins
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  Opaque layers of account managers; no direct access to developers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  Technology built in isolation without understanding business lead flow
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  Vendor lock-in: difficult to modify or scale code independently
                </li>
              </ul>
            </div>

            {/* Aarudhra Web Solutions */}
            <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/30">
              <div className="flex items-center gap-2 mb-4 text-indigo-300 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Aarudhra Web Solutions</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Bespoke Next.js &amp; modern code with sub-second page performance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Direct collaboration with core engineers and technical leadership
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Integrated technology + lead generation pipeline designed for ROI
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  100% intellectual property ownership with modern, clean source code
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
