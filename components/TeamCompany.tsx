"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Code2,
  Cpu,
  TrendingUp,
  Palette,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const TEAM_CAPABILITIES = [
  {
    role: "Full-Stack Web & Software Engineering",
    icon: Code2,
    lead: "Modern Architecture & Performance",
    description: "Type-safe engineering across Next.js 16, TypeScript, Node.js, and PostgreSQL with focus on sub-second load times, security, and scalability.",
    badge: "Engineering Core",
  },
  {
    role: "AI & Intelligent Automation Systems",
    icon: Cpu,
    lead: "Workflows & Agentic Pipelines",
    description: "Building production LLM agents, vector embeddings, data enrichment, and webhook pipelines that eliminate repetitive human operations.",
    badge: "AI Systems",
  },
  {
    role: "Digital Growth & Performance Marketing",
    icon: TrendingUp,
    lead: "Acquisition & Conversion Rate Optimization",
    description: "Designing high-converting ad funnels, targeted Google & Meta campaigns, SEO metadata, and real-time CRM routing for maximum ROI.",
    badge: "Growth Engine",
  },
  {
    role: "UI/UX & Interactive Product Design",
    icon: Palette,
    lead: "User-Centered Interfaces",
    description: "Creating clean, modern, intuitive digital experiences inspired by leading design standards—ensuring effortless clarity for every visitor.",
    badge: "Product Design",
  },
];

const COMPANY_VALUES = [
  {
    title: "Direct Technical Access",
    desc: "You collaborate directly with our technical leadership and core developers—no layers of junior account executives or games of telephone.",
  },
  {
    title: "100% Intellectual Property Ownership",
    desc: "You retain total ownership of all code, repositories, design assets, and database architecture from day one. Zero vendor lock-in.",
  },
  {
    title: "Commercial Alignment",
    desc: "We prioritize features and architecture that generate enquiries, improve operations, and create measurable business value.",
  },
  {
    title: "Long-Term Evolution",
    desc: "We remain your ongoing technical partner, helping you roll out new features, adopt emerging AI tools, and scale smoothly.",
  },
];

export default function TeamCompany() {
  return (
    <section id="team" className="relative py-24 md:py-32 bg-[#080C14] text-white overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Company &amp; Organization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The Team Behind the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
              Solutions.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Technology thinking with a practical business perspective. Aarudhra brings together engineering, design, marketing, and AI capabilities under one unified standard.
          </p>
        </div>

        {/* Leadership Feature Spotlight */}
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#0C1222] border border-white/10 shadow-2xl mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Founder Avatar & Bio Badge */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-2xl bg-[#080C14] group">
                <Image
                  src="/founder.jpeg"
                  alt="Sharan - Founder & Technical Lead"
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/80 via-transparent to-transparent opacity-60" />
              </div>

              <h3 className="text-xl font-bold text-white mt-4">
                Sharan
              </h3>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mt-1">
                Founder &amp; Technical Lead
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2 font-mono">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            {/* Founder Vision & Engineering Stance */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-mono border border-indigo-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>DIRECT CONSULTATION &amp; ACCOUNTABILITY</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Bridging Technical Execution with Practical Commercial Growth
              </h4>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Aarudhra Web Solutions was founded to solve a pervasive frustration among growing businesses: investing significant capital in websites that look elaborate on paper, but load slowly, confuse mobile visitors, and fail to generate practical commercial opportunities.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                With a deep background in modern frontend engineering, cloud database architectures, and digital lead systems, our mission is to deliver dependable digital assets that perform with velocity, establish authority, and scale alongside your business.
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border-l-4 border-indigo-500 border border-white/5 text-sm italic text-slate-200">
                &ldquo;We don&apos;t build digital assets as static vanity projects. We build dependable platforms that make a tangible difference to people, operations, and revenue.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* Multidisciplinary Team Disciplines */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Integrated Capabilities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Disciplines Working Together Under One Roof
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.role}
                  className="p-6 rounded-2xl bg-[#0E1424] border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/5">
                        {cap.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                      {cap.role}
                    </h4>
                    <p className="text-xs text-indigo-400 font-mono mb-3">
                      {cap.lead}
                    </p>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          {COMPANY_VALUES.map((val) => (
            <div key={val.title} className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{val.title}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
