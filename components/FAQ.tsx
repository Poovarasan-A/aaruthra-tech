"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";

const FAQS = [
  {
    q: "Is this suitable for small and medium-sized businesses?",
    a: "Yes, absolutely. Our work is deliberately practical for growing businesses that need a strong, dependable digital foundation without unnecessary agency bloat or over-engineered complexity. We scope projects specifically around what produces real business results.",
  },
  {
    q: "Do I need all my content and copy ready before we start?",
    a: "No. You do not need polished copy ready. We collaborate with you to structure your value proposition, service offerings, messaging priorities, and customer conversion paths. We help shape the content so it speaks clearly to your target market.",
  },
  {
    q: "Which service should I start with?",
    a: "We begin with your current commercial stage and bottlenecks. If your current website is slow, outdated, or hard to use on mobile devices, modernizing that presence is the foundational first step. Once your platform converts reliably, we activate lead generation and advertising campaigns.",
  },
  {
    q: "How involved will our team need to be during the project?",
    a: "You will be involved primarily during milestone reviews and strategic feedback checkpoints (discovery, wireframe sign-off, staging demo review). We handle 100% of the design, engineering, QA, and deployment so you can continue focusing on operating your business.",
  },
  {
    q: "Is ongoing website maintenance and support available?",
    a: "Yes. Post-launch maintenance, security updates, server monitoring, and feature iteration packages are available. Furthermore, you retain 100% intellectual property ownership of your codebase, meaning you are never locked in.",
  },
  {
    q: "How do you approach AI integrations without unnecessary risk?",
    a: "We only introduce AI where it delivers verified commercial utility—such as 24/7 conversational customer triage, automated WhatsApp lead qualification, or document data extraction. We build deterministic safeguards to ensure your brand reputation is protected.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#0A0E1A] text-white overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Good Questions Make{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
              Better Projects.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Everything you need to know about partnering with Aarudhra Web Solutions.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-[#0E1424] border border-white/10 hover:border-white/20 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-white/[0.04] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-indigo-600/30 text-indigo-300" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Have more questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white mb-0.5">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-slate-400">
              Speak directly with our technical leadership for a candid assessment.
            </p>
          </div>
          <a
            href="https://wa.me/919944100940?text=Hello%20Aarudhra%2C%20I%20have%20a%20question%20regarding%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-semibold text-white border border-white/10 transition-all flex-shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
