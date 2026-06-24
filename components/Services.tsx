"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Megaphone, Users2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web & Software Engineering",
    tagline: "High-Performance Codebases",
    desc: "From sleek Next.js SaaS apps to robust API integrations. We write clean, accessible, ultra-performant code optimised for conversion.",
    bullets: [
      { label: "Next.js & React Architectures", pct: 98 },
      { label: "Secure API Integrations",        pct: 95 },
      { label: "Database & Backend Design",      pct: 92 },
      { label: "95+ PageSpeed Performance",      pct: 99 },
    ],
    color:     "from-brand-purple/20 to-violet-500/10",
    iconColor: "text-brand-purple",
    barColor:  "bg-brand-purple",
    accentBg:  "bg-brand-purple/10",
    borderHover: "hover:border-brand-purple/40 hover:shadow-[0_30px_60px_-15px_rgba(124,58,237,0.08)]",
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    tagline: "ROI-Focused Scale",
    desc: "Acquire customers through conversion-optimised funnels, targeted search campaigns, paid media, and analytics-backed SEO telemetry.",
    bullets: [
      { label: "Paid Social & Search Ads",    pct: 94 },
      { label: "Lighthouse & SEO Strategy",   pct: 97 },
      { label: "Funnel Conversion Audits",    pct: 91 },
      { label: "Custom Telemetry & GA4",      pct: 96 },
    ],
    color:     "from-brand-cyan/20 to-sky-500/10",
    iconColor: "text-brand-cyan",
    barColor:  "bg-brand-cyan",
    accentBg:  "bg-brand-cyan/10",
    borderHover: "hover:border-brand-cyan/40 hover:shadow-[0_30px_60px_-15px_rgba(8,145,178,0.08)]",
  },
  {
    icon: Users2,
    title: "Managed Talent Squads",
    tagline: "On-Demand Resource Scaling",
    desc: "We align highly specialised, vetted freelancers with your technical specifications. Aarudhra handles contracts, code reviews, and QA.",
    bullets: [
      { label: "Vetted Software Engineers",    pct: 100 },
      { label: "QA & Peer Review Pipelines",   pct: 95 },
      { label: "Milestone Tracking & PMs",     pct: 93 },
      { label: "SaaS & Marketing Specialists", pct: 90 },
    ],
    color:     "from-brand-emerald/20 to-teal-500/10",
    iconColor: "text-brand-emerald",
    barColor:  "bg-brand-emerald",
    accentBg:  "bg-brand-emerald/10",
    borderHover: "hover:border-brand-emerald/40 hover:shadow-[0_30px_60px_-15px_rgba(5,150,105,0.08)]",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="services" ref={sectionRef} className="relative py-28 overflow-hidden bg-white">
      {/* Parallax ambient glow */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-purple/5 rounded-full blur-[180px] pointer-events-none -z-10"
      />
      <div className="tech-grid absolute inset-0 pointer-events-none opacity-30 -z-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mono-label text-brand-purple mb-4"
          >
            // capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-outfit font-black text-3xl md:text-5xl tracking-tight text-slate-900 mb-6"
          >
            Core pillars for{" "}
            <span className="gradient-text">digital dominance</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            We don&apos;t just consult. We assemble the squad, engineer the code,
            run the campaigns, and ensure bulletproof deployment.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`group glow-card rounded-3xl p-8 flex flex-col justify-between h-full border border-slate-200/60 ${svc.borderHover} transition-all duration-350`}
              >
                <div>
                  {/* Icon + tagline row */}
                  <div className="flex items-start justify-between mb-7">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${svc.color} border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${svc.iconColor}`} />
                    </div>
                    <span className={`mono-label ${svc.iconColor} ${svc.accentBg} px-2 py-1 rounded-md border border-current/20`}>
                      {svc.tagline}
                    </span>
                  </div>

                  <h3 className="font-outfit font-black text-xl text-slate-900 mb-3 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-7">
                    {svc.desc}
                  </p>

                  {/* Animated metric bars */}
                  <ul className="space-y-3.5 mb-8">
                    {svc.bullets.map((b, bi) => (
                      <li key={b.label}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[11px] font-medium text-slate-700">{b.label}</span>
                          <span className="mono-label text-slate-500">{b.pct}%</span>
                        </div>
                        <div className="h-1 rounded-full bg-slate-200/80 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${svc.barColor}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${b.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: i * 0.1 + bi * 0.1 + 0.3, ease: "easeOut" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#cta"
                  className={`flex items-center text-xs font-semibold ${svc.iconColor} mt-auto pt-5 border-t border-slate-200/60 w-full`}
                >
                  <span className="flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300">
                    Explore Solution
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
