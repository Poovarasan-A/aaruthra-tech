"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Users, BadgeCheck, Zap } from "lucide-react";

const steps = [
  {
    phase: "01",
    title: "Procure & Architect",
    icon: Briefcase,
    color:  "text-brand-purple",
    glow:   "rgba(139,92,246,0.4)",
    bg:     "bg-brand-purple/10",
    border: "border-brand-purple/30",
    desc:   "Clients post goals. We break down scope into clear, verifiable engineering and marketing milestones.",
  },
  {
    phase: "02",
    title: "Assemble Specialist Squad",
    icon: Users,
    color:  "text-brand-cyan",
    glow:   "rgba(6,182,212,0.4)",
    bg:     "bg-brand-cyan/10",
    border: "border-brand-cyan/30",
    desc:   "Vetted developers and marketing partners are dynamically matched based on technical specialisations.",
  },
  {
    phase: "03",
    title: "Managed Code & QA Reviews",
    icon: BadgeCheck,
    color:  "text-brand-emerald",
    glow:   "rgba(16,185,129,0.4)",
    bg:     "bg-brand-emerald/10",
    border: "border-brand-emerald/30",
    desc:   "Quality controls, peer code reviews, page-speed audits, and marketing metric linting — all automated.",
  },
  {
    phase: "04",
    title: "Deploy & Dominate",
    icon: Zap,
    color:  "text-yellow-400",
    glow:   "rgba(250,204,21,0.35)",
    bg:     "bg-yellow-400/10",
    border: "border-yellow-400/30",
    desc:   "Project launches on top-tier infrastructure with high-converting tracking pipelines and telemetry ready.",
  },
];

export default function Ecosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const beamX   = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);
  const leftY   = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rightY  = useTransform(scrollYProgress, [0, 1], [-20, 30]);

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="relative py-28 overflow-hidden border-y border-white/[0.025]"
    >
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-35" />

      {/* Parallax Orbs */}
      <motion.div style={{ y: leftY }}
        className="absolute top-1/4 left-0 w-[250px] h-[500px] bg-brand-cyan/5 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div style={{ y: rightY }}
        className="absolute bottom-1/4 right-0 w-[250px] h-[500px] bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mono-label text-brand-cyan mb-4"
          >
            // ecosystem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-outfit font-black text-3xl md:text-5xl tracking-tight text-white mb-5"
          >
            The Managed{" "}
            <span className="gradient-text">Synergy Engine</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
          >
            We handle the friction. Clients get elite code and high conversion;
            freelancers focus on doing their best work.
          </motion.p>
        </div>

        {/* ── Desktop Timeline Track ─────────────────────── */}
        <div className="hidden md:block mb-10 max-w-[920px] mx-auto">
          {/* Icon row */}
          <div className="relative grid grid-cols-4">
            {/* Static track rail */}
            <div className="absolute top-[22px] left-[12.5%] right-[12.5%] h-[1px] bg-white/8" />

            {/* Animated beam travelling over the rail */}
            <div className="absolute top-[22px] left-[12.5%] right-[12.5%] h-[1px] overflow-hidden">
              <motion.div
                style={{ left: beamX }}
                className="absolute top-0 w-32 h-full bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-70"
              />
            </div>

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.phase} className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    whileHover={{ scale: 1.15 }}
                    className={`w-11 h-11 rounded-full flex items-center justify-center border ${step.bg} ${step.border} bg-[#030014] cursor-pointer transition-all duration-300`}
                    style={{ boxShadow: `0 0 0 0 ${step.glow}` }}
                  >
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Cards Grid ────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[920px] mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className={`group glow-card rounded-2xl p-6 flex flex-col border ${step.border}/40 hover:${step.border} overflow-hidden relative bg-[#050212]/60`}
              >
                {/* Watermark number */}
                <span className={`absolute right-3 bottom-1 font-outfit font-black text-7xl select-none pointer-events-none opacity-4 group-hover:opacity-8 transition-opacity duration-300 ${step.color}`}>
                  {step.phase}
                </span>

                {/* Mobile icon (hidden on lg) */}
                <div className={`flex md:hidden w-9 h-9 rounded-xl mb-4 items-center justify-center border ${step.bg} ${step.border}`}>
                  <Icon className={`w-4 h-4 ${step.color}`} />
                </div>

                <p className={`mono-label ${step.color} mb-2`}>Phase {step.phase}</p>
                <h3 className="font-outfit font-bold text-sm text-white mb-3 leading-tight group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.desc}
                </p>

                {/* Bottom glow line */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${step.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
