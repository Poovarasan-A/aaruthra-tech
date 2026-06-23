"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const models = [
  {
    name: "Sprint Model",
    price: "$3,500",
    period: "/project starting",
    tagline: "Fixed Scope, Guaranteed Launch",
    desc: "Perfect for discrete project needs: a custom web application, an SEO launch audit, or a high-converting marketing funnel.",
    features: [
      "Vetted specialists assigned in 48 hours",
      "Fixed scope, timeline & cost milestones",
      "Managed QA reviews & code compliance",
      "Complete deployment & ownership handoff",
    ],
    cta: "Procure Project Sprint",
    popular: false,
    highlight: false,
  },
  {
    name: "Managed Agile Retainer",
    price: "$6,800",
    period: "/month retainer",
    tagline: "Integrated Product Velocity",
    desc: "Best for scaling businesses needing ongoing product iterations, new developer features, and performance marketing optimization.",
    features: [
      "Dedicated developer & growth marketer squad",
      "Bi-weekly sprint planning & direct management",
      "Continuous speed & telemetry auditing",
      "Flexible month-to-month scope adjustments",
    ],
    cta: "Secure Retainer Allocation",
    popular: true,
    highlight: true,
  },
  {
    name: "Dedicated Squad Scale",
    price: "Custom",
    period: "",
    tagline: "Virtual Engineering Office",
    desc: "Enterprise scale. We hire, train, and manage a dedicated development and growth team working directly under your protocols.",
    features: [
      "Custom-recruited full-time engineers",
      "Aarudhra internal lead reviewer oversight",
      "Direct Slack/Jira integration & standups",
      "Premium data isolation & NDA security",
    ],
    cta: "Contact Architecture Board",
    popular: false,
    highlight: false,
  },
];

export default function EngagementModels() {
  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="mono-label text-brand-purple mb-4">
            // engagement tiers
          </p>
          <h2 className="font-outfit font-black text-3xl md:text-5xl tracking-tight text-white mb-6">
            Predictable models,{" "}
            <span className="gradient-text">bulletproof execution</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Select the structured workflow that matches your development pace
            and scaling goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {models.map((model, idx) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-300
                ${
                  model.highlight
                    ? "bg-[#0b061d]/80 border-2 border-brand-purple shadow-2xl shadow-brand-purple/20"
                    : "glow-card bg-[#0c0721]/30"
                }`}
            >
              {model.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-md shadow-brand-purple/35">
                    Recommended Tier
                  </span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-8">
                  <div className="text-white font-extrabold text-xl mb-1.5">
                    {model.name}
                  </div>
                  <div className="text-xs text-slate-400 font-semibold mb-6">
                    {model.tagline}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-white font-black text-4xl sm:text-5xl">
                      {model.price}
                    </span>
                    {model.period && (
                      <span className="text-slate-400 text-xs sm:text-sm">
                        {model.period}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
                  {model.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-10 pt-6 border-t border-white/[0.03]">
                  {model.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <div className="w-4.5 h-4.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-brand-purpleLt" />
                      </div>
                      <span className="text-slate-300 text-xs sm:text-sm font-medium">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="#cta"
                className={`w-full py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-200 text-center block
                  ${
                    model.highlight
                      ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-white shadow-lg shadow-brand-purple/20 hover:scale-[1.02]"
                      : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white hover:scale-[1.02]"
                  }`}
              >
                {model.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
