"use client";

import { motion } from "framer-motion";
import { Briefcase, Cpu, MessageSquareCheck, HeartHandshake } from "lucide-react";

const PILLARS = [
  {
    icon: Briefcase,
    title: "Business-First Thinking",
    desc: "We focus on what actually drives enquiries, trust, and customer growth—not on vanity metrics or superficial trends.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    desc: "Clean, fast, mobile-optimized engineering that keeps your digital presence responsive, secure, and ready for future scale.",
  },
  {
    icon: MessageSquareCheck,
    title: "Clear Communication",
    desc: "Direct communication without confusing jargon. You know exactly what is being built, when it will launch, and how it works.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    desc: "We don't disappear after launch. We remain your dependable digital partner for ongoing updates, technical maintenance, and guidance.",
  },
];

export default function WhyAarudhra() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-700">
              Why Partner With Us
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-[1.1] mb-5">
            More than a website. A digital partner.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We work with growing businesses that want a reliable digital presence they can actually use to grow, backed by practical advice and transparent execution.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-7 rounded-2xl glass-card border border-slate-200/80 flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 shadow-subtle flex items-center justify-center text-brand-indigo mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
