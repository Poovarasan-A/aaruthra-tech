"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is this suitable for small and mid-sized businesses?",
    a: "Yes. We primarily work with small and mid-sized businesses that want a clear and reliable digital presence. Whether you are just starting your digital journey or fixing an existing setup, our approach is practical and scalable.",
  },
  {
    q: "Do I need to have everything ready before contacting you?",
    a: "No. Most clients come to us with incomplete or unclear digital setups. We help you understand what you need, what you don't, and where to start — step by step.",
  },
  {
    q: "What services do you usually start with?",
    a: "It depends on your current situation. For some businesses, it starts with a website or redesign. For others, it may be local visibility, ads, or social media management. We recommend only what makes sense for your business stage.",
  },
  {
    q: "How involved do I need to be in the process?",
    a: "We keep your involvement minimal and structured. We'll need your inputs at key stages, but we handle the execution and ongoing management without daily follow-ups.",
  },
  {
    q: "Do you offer long-term support after the initial work?",
    a: "Yes. Many clients work with us on an ongoing basis for website support, visibility, and digital management. You can start small and continue based on what works for your business.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 overflow-hidden bg-[#EFEEE9] border-y border-black/5">
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-[800px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono uppercase tracking-widest text-xs text-[#6366F1] font-semibold mb-3 block">
            // support
          </span>
          <h2 className="font-outfit font-bold text-3xl md:text-5xl text-[#1A1A2E] tracking-tight mb-5">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
            Everything you need to know about our services, support, and onboarding process.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-black/[0.06] overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <span className={`font-outfit font-bold text-sm sm:text-base leading-snug transition-colors duration-200 ${isOpen ? "text-[#6366F1]" : "text-[#1A1A2E]"}`}>
                    {faq.q}
                  </span>
                  <span className={`text-xl font-light w-5 h-5 flex items-center justify-center transition-transform duration-300 ${isOpen ? "text-[#6366F1] rotate-45" : "text-slate-400"}`}>
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-black/[0.03] pt-4 bg-slate-50/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
