"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Palette, Code2, Search, Headset } from "lucide-react";

const PILLARS = [
  {
    icon: Compass,
    title: "Strategy",
    desc: "Aligning digital decisions with real business objectives, audience expectations, and clear conversion goals.",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Clean, trustworthy aesthetics that elevate brand perception and guide visitors effortlessly.",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Fast, modern, mobile-responsive code engineered for stability, accessibility, and speed.",
  },
  {
    icon: Search,
    title: "Visibility",
    desc: "Local SEO, Google Search rankings, and targeted advertising to connect with ready-to-buy customers.",
  },
  {
    icon: Headset,
    title: "Ongoing Support",
    desc: "Continuous technical maintenance, updates, and strategic guidance so you never get stuck.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F8F9FC] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-700">
                About Aarudhra
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.12]">
              Technology that works for your business.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Aarudhra Web Solutions is a practical digital technology and growth partner for small and mid-sized businesses across Tamil Nadu. We believe a website should be more than a digital brochure—it should be your most dependable sales representative.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Rather than overwhelming you with confusing technical jargon or building bloated systems, we focus on doing the fundamentals right: fast loading, clear communication, trustworthy design, and direct local visibility that drives actual customer enquiries.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-indigo hover:text-brand-indigoDark transition-colors group"
              >
                Learn More About Aarudhra
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Founder Card Spotlight */}
            <div className="mt-8 p-5 rounded-2xl glass-card flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-200/80 flex-shrink-0 bg-slate-100 shadow-subtle">
                <Image
                  src="/founder.jpeg"
                  alt="Sharan - Founder of Aarudhra Web Solutions"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm">
                  Sharan
                </h4>
                <p className="text-xs text-brand-indigo font-medium font-mono">
                  Founder &amp; Digital Solutions Architect
                </p>
                <p className="text-[12px] text-slate-500 mt-1 leading-snug">
                  Working directly with business owners to bridge strategy, engineering, and measurable growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 5 Integrated Disciplines */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
              How We Help Businesses Grow
            </div>

            <div className="space-y-3.5">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 sm:p-6 rounded-2xl glass-card flex flex-col sm:flex-row items-start gap-4 sm:gap-5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center flex-shrink-0 text-brand-indigo shadow-subtle">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-mono text-slate-400">
                          0{idx + 1}
                        </span>
                        <h3 className="font-heading font-bold text-slate-900 text-base">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
