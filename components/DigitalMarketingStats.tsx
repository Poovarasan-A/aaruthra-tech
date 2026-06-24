"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { val: "4.2x", label: "Average Campaign ROAS" },
  { val: "2Cr+", label: "Ad Spend Managed" },
  { val: "500+", label: "SEO Keywords Ranked" },
  { val: "3.1x", label: "Average CTR Improvement" },
];

function DecimalCountUp({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const isDecimal = value.includes(".");
  const numericPart = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.]/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = numericPart;
    if (start === end) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = progress * (end - start) + start;
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, numericPart, duration]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function DigitalMarketingStats() {
  return (
    <section id="marketing-stats" className="relative py-28 overflow-hidden bg-[#1A1A2E]">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#6366F1]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#06B6D4]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-mono uppercase tracking-widest text-xs text-[#6366F1] font-semibold mb-3 block">
            // performance telemetry
          </span>
          <h2 className="font-outfit font-bold text-3xl md:text-5xl text-white tracking-tight mb-5">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">measurable growth</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
            Data-backed performance marketing campaigns driven by analytics dashboards.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#6366F1]/30 transition-colors duration-300 text-center flex flex-col justify-between"
            >
              <div className="mb-4">
                <span className="font-outfit font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#06B6D4] block leading-none mb-3">
                  <DecimalCountUp value={s.val} />
                </span>
              </div>
              <p className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
