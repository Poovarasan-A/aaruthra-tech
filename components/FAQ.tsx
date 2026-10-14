"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Is this suitable for small and mid-sized businesses?",
    a: "Yes. Our services are intentionally structured for small and mid-sized businesses. Whether you are launching your first website, refreshing an outdated digital presence, or looking for local lead generation, we provide practical, right-sized solutions without corporate bloat.",
  },
  {
    q: "Do I need everything ready before contacting you?",
    a: "Not at all. Many of our clients come to us with just a basic idea or an incomplete setup. We guide you through planning the structure, content, and features step by step so you don't need to have every detail figured out beforehand.",
  },
  {
    q: "What service should I start with?",
    a: "It depends on your current business priority. If you don't have a modern website or your current one isn't mobile-friendly, starting with Website Development or Redesign is best. If you already have a solid website, starting with Local SEO and Google Search visibility will help attract more nearby customers.",
  },
  {
    q: "How involved do I need to be in the process?",
    a: "We keep your involvement structured and efficient. We will need your inputs during the initial discovery, review key milestone previews, and approve the final launch. We handle all technical execution, design, and setup so it doesn't distract you from running your daily business.",
  },
  {
    q: "Do you provide ongoing support after the website is launched?",
    a: "Yes. We offer continuous website maintenance, security updates, content changes, and digital growth consulting. You have a dependable team available whenever you need updates or technical assistance.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F8F9FC] relative overflow-hidden">
      <div className="max-w-[860px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-700">
              Clear Answers
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-[1.1] mb-4">
            Frequently asked questions.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to know about working with Aarudhra Web Solutions.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.q}
                className="glass-card rounded-2xl border border-slate-200/80 overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left gap-4 transition-colors hover:bg-slate-50/50"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-heading font-bold text-base sm:text-lg leading-snug transition-colors ${
                      isOpen ? "text-brand-indigo" : "text-slate-900"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen
                        ? "bg-brand-indigo text-white border-brand-indigo"
                        : "bg-slate-50 text-slate-500 border-slate-200"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-white">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Extra question prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-subtle">
          <p className="text-sm font-medium text-slate-700">
            Have a question that isn&apos;t covered here?{" "}
            <a
              href="https://wa.me/919944100940?text=Hello%20Aarudhra%20Web%20Solutions%2C%20I%20have%20a%20question%20regarding%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-indigo font-bold hover:underline"
            >
              Ask us directly on WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
