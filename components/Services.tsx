"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Megaphone, Users, ArrowRight } from "lucide-react";

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
    leftAccent: "border-l-[3px] border-l-[#6366F1]",
    iconColor: "text-[#6366F1]",
    barColor: "bg-[#6366F1]",
    accentBg: "bg-[#6366F1]/10",
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
    leftAccent: "border-l-[3px] border-l-[#06B6D4]",
    iconColor: "text-[#06B6D4]",
    barColor: "bg-[#06B6D4]",
    accentBg: "bg-[#06B6D4]/10",
  },
  {
    icon: Users,
    title: "Managed Talent Squads",
    tagline: "On-Demand Resource Scaling",
    desc: "We align highly specialised, vetted freelancers with your technical specifications. Aarudhra handles contracts, code reviews, and QA.",
    bullets: [
      { label: "Vetted Software Engineers",    pct: 100 },
      { label: "QA & Peer Review Pipelines",   pct: 95 },
      { label: "Milestone Tracking & PMs",     pct: 93 },
      { label: "SaaS & Marketing Specialists", pct: 90 },
    ],
    leftAccent: "border-l-[3px] border-l-[#A855F7]",
    iconColor: "text-[#A855F7]",
    barColor: "bg-[#A855F7]",
    accentBg: "bg-[#A855F7]/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden bg-[#F8F7F4]">
      {/* Decorative Warm Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-mono uppercase tracking-widest text-xs text-[#6366F1] font-semibold mb-3 block">
            // capabilities
          </span>
          <h2 className="font-outfit font-bold text-3xl md:text-5xl text-[#1A1A2E] tracking-tight mb-5">
            Core pillars for{" "}
            <span className="gradient-text">digital dominance</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            We don&apos;t just consult. We assemble the squad, engineer the code,
            run the campaigns, and ensure bulletproof deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className={`group bg-white rounded-2xl p-8 flex flex-col justify-between h-full border border-[#6366F1]/12 ${svc.leftAccent} hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.10)] transition-all duration-300`}
              >
                <div>
                  {/* Icon & tagline */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 border border-black/5 group-hover:scale-105 transition-transform duration-300">
                      <Icon className={`w-5 h-5 ${svc.iconColor}`} />
                    </div>
                    <span className={`font-mono text-[9px] uppercase tracking-wider ${svc.iconColor} ${svc.accentBg} px-2.5 py-1 rounded-md border border-current/10 font-bold`}>
                      {svc.tagline}
                    </span>
                  </div>

                  <h3 className="font-outfit font-bold text-xl text-[#1A1A2E] mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  {/* Bullet progress tracks */}
                  <ul className="space-y-4 mb-8">
                    {svc.bullets.map((b, bi) => (
                      <li key={b.label}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[11px] font-medium text-slate-700">{b.label}</span>
                          <span className="font-mono text-[10px] font-bold text-slate-500">{b.pct}%</span>
                        </div>
                        <div className="h-1 rounded-full bg-slate-100 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${svc.barColor}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${b.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.2 + bi * 0.08, ease: "easeOut" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#cta"
                  className={`flex items-center text-xs font-bold ${svc.iconColor} mt-auto pt-5 border-t border-black/[0.04] w-full`}
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
