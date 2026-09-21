"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Smartphone,
  Search,
  MessageSquareCheck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const PROOF_POINTS = [
  {
    icon: Gauge,
    title: "Performance-Focused Development",
    desc: "Lightweight architectures engineered for sub-second loading speeds, reduced bounce rates, and frictionless browsing on any connection.",
    benefit: "Faster browsing, higher user retention",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experiences",
    desc: "Thoughtfully crafted touch interactions, legible typography, and responsive grid layouts tested meticulously across iOS and Android devices.",
    benefit: "Seamless customer booking on phones",
  },
  {
    icon: Search,
    title: "SEO-Ready Websites",
    desc: "Clean semantic markup, optimized metadata, and local directory alignment designed to be easily discovered and indexed by Google.",
    benefit: "Greater discovery in regional search",
  },
  {
    icon: MessageSquareCheck,
    title: "Transparent Communication",
    desc: "Clear timelines, straightforward milestone tracking, and direct consultation without technical runaround or hidden costs.",
    benefit: "Zero guesswork throughout the project",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Support",
    desc: "Ongoing website security updates, content refreshes, and consultative growth reviews so your company never falls behind competitors.",
    benefit: "A partner you can contact anytime",
  },
];

export default function QualitativeProof() {
  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-indigo/15 blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 shadow-subtle mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-tealLt" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-300">
              Our Quality Standard
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.1] mb-5">
            Built for reliability. Delivered with accountability.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We don&apos;t rely on vanity numbers. We measure success by whether your website is fast, reliable, easy to find, and capable of generating genuine customer inquiries.
          </p>
        </div>

        {/* 5 Qualitative Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROOF_POINTS.map((item, idx) => {
            const Icon = item.icon;
            const isFull = idx === 4;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-7 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-brand-indigoLt/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between ${
                  isFull ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-brand-tealLt mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-semibold text-brand-tealLt">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{item.benefit}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
