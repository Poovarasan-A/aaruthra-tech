"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Smartphone,
  Search,
  MessageSquare,
  Maximize2,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Professional Design",
    desc: "Custom layouts aligned with your brand, establishing immediate authority with prospective clients.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    desc: "Designed ground-up for smartphones where over 70% of local customers discover services.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    desc: "Lightweight, optimized code providing rapid page loads that keep visitors from bouncing.",
  },
  {
    icon: Search,
    title: "SEO-Ready Structure",
    desc: "Built with clean semantic markup so search engines can easily index and rank your pages.",
  },
  {
    icon: MessageSquare,
    title: "Enquiry Integrations",
    desc: "One-click WhatsApp triggers, phone call links, and streamlined requirement forms.",
  },
  {
    icon: Maximize2,
    title: "Easy Future Expansion",
    desc: "Modular structure allowing you to add new services, pages, or marketing funnels whenever needed.",
  },
];

export default function FeaturedService() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F9FC] border-y border-slate-200/70 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Explanation & Points (approx 45%) */}
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
                Flagship Service
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.12]">
              Your website should work as hard as your business.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              We design and engineer websites that do more than look good. Every section is intentionally structured to answer customer questions, build trust, and prompt immediate action.
            </p>

            {/* 6 Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {FEATURES.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-brand-indigo flex-shrink-0" />
                      <h4 className="font-heading font-bold text-slate-900 text-sm">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-indigo hover:bg-brand-indigoDark text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 shimmer-sweep"
              >
                Build Your Website
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Large Browser Visual Mockup (approx 55%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl glass-card border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden">
              {/* Browser Header Bar */}
              <div className="px-5 py-3.5 bg-slate-50/80 border-b border-slate-200/70 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="ml-3 px-3 py-1 rounded-md bg-white border border-slate-200/80 text-xs font-mono text-slate-600 flex items-center gap-1.5 shadow-subtle">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    https://yourbusiness.com
                  </div>
                </div>
                <div className="text-[11px] font-mono font-medium text-slate-400 hidden sm:block">
                  High Performance Build
                </div>
              </div>

              {/* Mockup Canvas */}
              <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-slate-50/50 space-y-6">
                {/* Website Navigation Simulation */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-brand-indigo flex items-center justify-center text-white text-xs font-bold">
                      A
                    </div>
                    <span className="font-heading font-bold text-slate-900 text-sm">
                      Company Brand
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-500">
                    <span>Services</span>
                    <span>About</span>
                    <span>Case Studies</span>
                    <span>Contact</span>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-indigo bg-brand-indigo/10 px-3 py-1 rounded-md">
                    Inquire Now
                  </span>
                </div>

                {/* Hero Showcase Inset */}
                <div className="rounded-xl p-6 bg-slate-900 text-white space-y-4 shadow-sm">
                  <div className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-200">
                    <span>● Verified Local Business</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl leading-snug">
                    Premium Quality Services For Your Home &amp; Enterprise
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                    Providing dependable solutions with certified experts, clear pricing, and 24-hour response across Tamil Nadu.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="px-4 py-2 rounded-lg bg-brand-indigo text-xs font-semibold text-white">
                      Request Consultation
                    </span>
                    <span className="px-4 py-2 rounded-lg bg-white/10 text-xs font-semibold text-slate-200">
                      View Gallery
                    </span>
                  </div>
                </div>

                {/* 3 Quick Value Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-subtle">
                    <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      Instant WhatsApp
                    </div>
                    <p className="text-[11px] text-slate-500">Direct lead notifications</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-subtle">
                    <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      Optimized Images
                    </div>
                    <p className="text-[11px] text-slate-500">Fast visual delivery</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-subtle">
                    <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      SEO Meta Tags
                    </div>
                    <p className="text-[11px] text-slate-500">Search ranking foundation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
