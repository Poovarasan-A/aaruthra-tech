"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Aman Malhotra",
    role: "CTO, Finova Group",
    quote: "Aarudhra's developer squads delivered our Next.js frontend in record time. The code coverage was above 95% and speed audits hit a perfect 99 score.",
    stars: 5,
    avatar: "AM",
  },
  {
    name: "Samantha Reed",
    role: "Growth Lead, CloudStream",
    quote: "Our Cost-Per-Lead was slashed by 40% in just two months after implementing their performance analytics pipeline and SEO architecture changes.",
    stars: 5,
    avatar: "SR",
  },
  {
    name: "Vikram Sen",
    role: "Founder, Zenith SaaS",
    quote: "Managed squads are the future. Having access to high-end vetted developers on-demand with internal peer reviews saved us hundreds of QA hours.",
    stars: 5,
    avatar: "VS",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-[#EFEEE9] border-y border-black/5">
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono uppercase tracking-widest text-xs text-[#6366F1] font-semibold mb-3 block">
            // reviews
          </span>
          <h2 className="font-outfit font-bold text-3xl md:text-5xl text-[#1A1A2E] tracking-tight mb-5">
            Endorsed by <span className="gradient-text">industry leaders</span>
          </h2>
          <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
            What our clients say about our custom engineering sprints and growth campaigns.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-white rounded-2xl p-8 border border-black/[0.06] shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, idx) => (
                    <span key={idx} className="text-[#f59e0b] text-base">★</span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* User row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-black/[0.04]">
                <div className="w-10 h-10 rounded-full bg-[#6366F1]/10 text-[#6366F1] font-bold text-xs flex items-center justify-center border border-[#6366F1]/20">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xs text-[#1A1A2E] leading-none mb-1">
                    {t.name}
                  </h4>
                  <p className="text-[10px] font-mono text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel Layout */}
        <div className="block md:hidden relative min-h-[300px] flex flex-col justify-between items-center">
          <div className="w-full relative overflow-hidden h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 bg-white rounded-2xl p-6 border border-black/[0.06] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonials[activeIdx].stars }).map((_, idx) => (
                      <span key={idx} className="text-[#f59e0b] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm italic leading-relaxed mb-6">
                    &ldquo;{testimonials[activeIdx].quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-black/[0.04]">
                  <div className="w-9 h-9 rounded-full bg-[#6366F1]/10 text-[#6366F1] font-bold text-xs flex items-center justify-center border border-[#6366F1]/20">
                    {testimonials[activeIdx].avatar}
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-xs text-[#1A1A2E] leading-none mb-1">
                      {testimonials[activeIdx].name}
                    </h4>
                    <p className="text-[9px] font-mono text-slate-500">{testimonials[activeIdx].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIdx === i ? "bg-[#6366F1] w-4" : "bg-slate-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
