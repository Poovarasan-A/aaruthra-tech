"use client";

import { motion } from "framer-motion";

const cases = [
  {
    industry: "E-Commerce",
    metric: "Conversion +148% // Speed 42 → 99",
    result: "Complete rebuild of checkout pipeline in Next.js, eliminating layout shifts and latency.",
    stack: ["Next.js", "PostgreSQL", "Tailwind CSS", "Vercel Edge"],
  },
  {
    industry: "SaaS Platform",
    metric: "Lighthouse Score 47 → 99",
    result: "Engineered a headless dashboard rendering system with optimized server-side telemetry caching.",
    stack: ["React", "TypeScript", "Node.js", "Redis", "AWS"],
  },
  {
    industry: "FinTech App",
    metric: "Cost Per Lead -42%MoM",
    result: "Integrated automated ad telemetry and custom landing pages, boosting organic keywords ranking.",
    stack: ["Next.js", "GA4 Analytics", "Meta Telemetry", "SEO Auditor"],
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="relative py-28 overflow-hidden bg-[#F8F7F4]">
      {/* Decorative Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono uppercase tracking-widest text-xs text-[#6366F1] font-semibold mb-3 block">
            // proven impact
          </span>
          <h2 className="font-outfit font-bold text-3xl md:text-5xl text-[#1A1A2E] tracking-tight mb-5">
            Milestones of <span className="gradient-text">engineering excellence</span>
          </h2>
          <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
            Real performance audits and structural improvements delivered for high-growth digital companies.
          </p>
        </div>

        {/* Horizontal Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.industry}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-white hover:bg-[#EFEEE9]/30 rounded-2xl p-7 border border-black/[0.06] hover:border-[#6366F1]/20 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block font-mono text-[9px] uppercase tracking-widest bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md mb-6 font-bold border border-black/5">
                  {c.industry}
                </span>

                <h3 className="font-outfit font-bold text-lg sm:text-xl text-[#6366F1] mb-3 leading-snug">
                  {c.metric}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
                  {c.result}
                </p>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/[0.04]">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[9px] text-slate-500 bg-[#F8F7F4] border border-black/5 px-2 py-0.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
