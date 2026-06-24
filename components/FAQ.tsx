"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How does your vetting process work for developers and marketers?",
    a: "We perform technical audits, inspect past production repositories, check conversion telemetry execution, and verify delivery consistency. Only the top 3% of developers and marketers are onboarded to our synergy squads.",
  },
  {
    q: "What is the typical timeline for starting and delivering projects?",
    a: "Specialists are allocated to your milestone board within 48 hours. Flat-rate sprints usually launch in 2 to 4 weeks, while dedicated squads run on continuous weekly agile delivery cycles.",
  },
  {
    q: "What post-launch support and telemetry auditing do you provide?",
    a: "Every launch includes 30 days of free site reliability auditing, performance checks, and validation of event tracking pipelines to ensure zero data drop-offs.",
  },
  {
    q: "How are your pricing models structured for sprints vs squads?",
    a: "We offer flat-rate sprints for defined deliverables (e.g., Next.js landing pages or analytics setups) and monthly retainer contracts for scaling squads.",
  },
  {
    q: "What is your NDA policy regarding client source code and data?",
    a: "Full mutual NDAs are signed before scoping begins. All intellectual property, source files, design layouts, and ad accounts remain 100% owned by you.",
  },
  {
    q: "Should I build a mobile app or a web app first?",
    a: "We recommend web apps for initial distribution, conversion funnels, and organic SEO. Mobile apps are ideal when native push notifications, offline states, or deep mobile hardware integrations are required.",
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
          <p className="text-slate-600 text-base max-w-md mx-auto leading-relaxed">
            Everything you need to know about our engineering squads, timelines, and pricing model.
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
