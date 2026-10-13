"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  FileCode2,
  Cpu,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    name: "Discover",
    title: "Understanding Business & Opportunity",
    duration: "Week 01",
    icon: Compass,
    color: "from-blue-500 to-indigo-600",
    description:
      "We begin with a deep exploration into your business model, customer touchpoints, competitive landscape, and specific technical requirements. We identify what will truly move the needle.",
    deliverables: [
      "Discovery consultation & stakeholder interviews",
      "Competitive benchmarking & tech assessment",
      "Scope prioritization & success metrics alignment",
    ],
  },
  {
    step: "02",
    name: "Strategize",
    title: "Architecture & User Experience",
    duration: "Week 01 - 02",
    icon: FileCode2,
    color: "from-indigo-500 to-violet-600",
    description:
      "We define the technical blueprint, database schema, API integration pathways, and intuitive wireframes. You see exactly how the platform will look and behave before development starts.",
    deliverables: [
      "System architecture & data schema blueprint",
      "Interactive UI/UX prototypes & user flow maps",
      "Transparent project timeline & milestone agreement",
    ],
  },
  {
    step: "03",
    name: "Build",
    title: "Agile Engineering & Development",
    duration: "Week 02 - 04+",
    icon: Cpu,
    color: "from-violet-500 to-purple-600",
    description:
      "Our engineering team develops the application in focused sprints using clean Next.js, TypeScript, and modern backend stacks. You receive regular interactive preview links to test progress.",
    deliverables: [
      "Production-grade frontend & backend engineering",
      "Rigorous unit testing & security validation",
      "Bi-weekly interactive staging demo check-ins",
    ],
  },
  {
    step: "04",
    name: "Launch",
    title: "Performance QA & Deployment",
    duration: "Launch Week",
    icon: Rocket,
    color: "from-purple-500 to-pink-600",
    description:
      "We run end-to-end performance audits, Core Web Vitals checks, mobile stress tests, and automated backups before executing a seamless, zero-downtime production deployment.",
    deliverables: [
      "Comprehensive cross-browser & mobile stress testing",
      "Sub-second Core Web Vitals & technical SEO setup",
      "Live production deployment & full code IP transfer",
    ],
  },
  {
    step: "05",
    name: "Grow",
    title: "Optimization & Continuous Scale",
    duration: "Ongoing",
    icon: TrendingUp,
    color: "from-pink-500 to-cyan-400",
    description:
      "Launch is just the beginning. We review user analytics, optimize conversion funnels, ensure platform stability, and support your evolution with AI integrations and feature iterations.",
    deliverables: [
      "Conversion tracking & analytics event monitoring",
      "Proactive maintenance, security patches, & updates",
      "Roadmap expansion into AI automation & mobile apps",
    ],
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#080C14] text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Discover. Strategize. Build. Launch.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
              Grow.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            A transparent, disciplined engineering process designed to eliminate confusion, prevent budget overruns, and deliver dependable software on time.
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-5 bg-[#0C1222] border transition-all duration-300 flex flex-col justify-between group ${
                  isCurrent
                    ? "border-indigo-400/60 bg-[#10172B] shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-400/30"
                    : "border-white/10 hover:border-white/20 hover:bg-[#0E1528]"
                }`}
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      STEP {step.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.color} text-white shadow-md`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Step Name & Title */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs text-indigo-400 font-medium mb-3">
                    {step.title}
                  </p>

                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {step.duration}
                  </span>
                  <span className="text-indigo-400 font-semibold">Inspect</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Highlight Drawer */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl p-6 sm:p-8 bg-[#0C1222] border border-white/10 shadow-xl max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                STEP {PROCESS_STEPS[activeStep].step}
              </span>
              <h4 className="text-xl font-bold text-white">
                {PROCESS_STEPS[activeStep].name}: {PROCESS_STEPS[activeStep].title}
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              Typical Timeline: {PROCESS_STEPS[activeStep].duration}
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
            {PROCESS_STEPS[activeStep].description}
          </p>

          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-3">
              Key Deliverables for this Phase:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PROCESS_STEPS[activeStep].deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
