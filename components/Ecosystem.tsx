"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, BadgeCheck, Zap } from "lucide-react";

const steps = [
  {
    phase: "01",
    title: "Procure & Architect",
    icon: Briefcase,
    color: "text-[#6366F1]",
    glow: "rgba(99,102,241,0.3)",
    bg: "bg-[#6366F1]/10",
    border: "border-[#6366F1]/30",
    desc: "Clients post goals. We break down scope into clear, verifiable engineering and marketing milestones.",
  },
  {
    phase: "02",
    title: "Assemble Specialist Squad",
    icon: Users,
    color: "text-[#06B6D4]",
    glow: "rgba(6,182,212,0.3)",
    bg: "bg-[#06B6D4]/10",
    border: "border-[#06B6D4]/30",
    desc: "Vetted developers and marketing partners are dynamically matched based on technical specialisations.",
  },
  {
    phase: "03",
    title: "Managed Code & QA Reviews",
    icon: BadgeCheck,
    color: "text-emerald-500",
    glow: "rgba(16,185,129,0.3)",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    desc: "Quality controls, peer code reviews, page-speed audits, and marketing metric linting — all automated.",
  },
  {
    phase: "04",
    title: "Deploy & Dominate",
    icon: Zap,
    color: "text-amber-500",
    glow: "rgba(245,158,11,0.35)",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    desc: "Project launches on top-tier infrastructure with high-converting tracking pipelines and telemetry ready.",
  },
];

export default function Ecosystem() {
  const containerRef = useRef(null);

  return (
    <section
      id="ecosystem"
      className="relative py-28 overflow-hidden bg-[#EFEEE9] border-y border-black/5"
    >
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-30" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-[250px] h-[500px] bg-[#06B6D4]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[250px] h-[500px] bg-[#6366F1]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="font-mono uppercase tracking-widest text-xs text-[#6366F1] font-semibold mb-3 block">
            // delivery process
          </span>
          <h2 className="font-outfit font-bold text-3xl md:text-5xl text-[#1A1A2E] tracking-tight mb-5">
            The Managed{" "}
            <span className="gradient-text">Synergy Engine</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            We handle the friction. Clients get elite code and high conversion;
            freelancers focus on doing their best work.
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical dashed connector line (Desktop only) */}
          <div className="absolute left-1/2 top-4 bottom-4 w-px border-l border-dashed border-[#6366F1]/50 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.title}
                  className="flex flex-col md:flex-row items-center md:justify-between relative gap-6 md:gap-0"
                >
                  {/* Left side card block */}
                  <div className={`w-full md:w-[42%] ${isEven ? "md:order-1" : "md:order-3 md:text-right"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="relative bg-white rounded-2xl p-6 border border-black/[0.06] hover:shadow-md hover:border-[#6366F1]/20 transition-all duration-300"
                    >
                      {/* Large watermark step number */}
                      <span
                        className={`absolute right-4 top-3 text-[48px] font-bold text-[#6366F1]/15 select-none font-outfit pointer-events-none`}
                      >
                        {step.phase}
                      </span>

                      <div className={`flex md:hidden w-8 h-8 rounded-lg mb-3 items-center justify-center ${step.bg}`}>
                        <Icon className={`w-4 h-4 ${step.color}`} />
                      </div>

                      <p className={`font-mono text-[9px] uppercase tracking-wider ${step.color} mb-1.5`}>
                        Phase {step.phase}
                      </p>
                      <h3 className="font-outfit font-bold text-sm text-[#1A1A2E] mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Centered Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block md:order-2">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: [0.7, 1.05, 1], opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="w-10 h-10 rounded-full border-2 border-[#6366F1] bg-white flex items-center justify-center shadow-sm relative group"
                    >
                      {/* Outer pulse effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full border border-[#6366F1] opacity-70"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.7, 0, 0.7],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <Icon className={`w-4 h-4 ${step.color}`} />
                    </motion.div>
                  </div>

                  {/* Empty spacer block to maintain alignment */}
                  <div className={`w-full md:w-[42%] hidden md:block ${isEven ? "order-3" : "order-1"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
