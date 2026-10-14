"use client";

import { motion } from "framer-motion";
import { Search, Compass, Code2, TrendingUp } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "We learn about your business, audience, and goals.",
    detail: "We identify your target customers, what challenges your current digital setup faces, and what specific outcomes matter most.",
    icon: Search,
  },
  {
    num: "02",
    title: "Plan",
    desc: "We define the structure, content, and digital strategy.",
    detail: "We map out the sitemap, clear section messaging, conversion flow, and required integrations so there are no surprises.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Build",
    desc: "We design and develop the solution with performance and usability in mind.",
    detail: "Clean visual design, mobile responsiveness, fast load speeds, and straightforward enquiry options are engineered together.",
    icon: Code2,
  },
  {
    num: "04",
    title: "Grow",
    desc: "We support visibility, improvements, and long-term digital growth.",
    detail: "Once live, we help ensure your website gets discovered via local SEO, search advertising, and ongoing technical support.",
    icon: TrendingUp,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-700">
              Simple &amp; Transparent
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-[1.1] mb-5">
            From idea to launch, without the complexity.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We guide you through a predictable four-step process designed to keep projects on schedule and focused on real business results.
          </p>
        </div>

        {/* Timeline Desktop Grid & Mobile Stack */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-[2px] bg-slate-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-start bg-[#F8F7F4] lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none border border-slate-200/80 lg:border-none"
                >
                  {/* Step circle node */}
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-center justify-center text-brand-indigo mb-6 relative group">
                    <Icon className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 bg-brand-indigo text-white text-[10px] font-bold font-mono px-2 py-0.5 rounded-full shadow-sm">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm font-semibold text-brand-indigo mb-2 leading-snug">
                    {step.desc}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
