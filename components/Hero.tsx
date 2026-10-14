"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Smartphone, Globe, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8F9FC]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1240px] h-[580px] pointer-events-none -z-10">
        <div className="absolute top-[-80px] left-1/4 w-[520px] h-[520px] rounded-full bg-brand-indigo/6 blur-[130px]" />
        <div className="absolute top-[60px] right-1/4 w-[460px] h-[460px] rounded-full bg-brand-teal/6 blur-[140px]" />
        <div className="dot-grid absolute inset-0 opacity-30" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-indigo animate-pulse" />
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                Digital Partner for Growing Businesses
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              className="font-heading font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6 text-4xl sm:text-6xl lg:text-[68px]"
            >
              Digital experiences built for{" "}
              <span className="text-brand-indigo">business growth.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
              className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl font-normal"
            >
              We design and build high-performing websites, digital experiences and growth systems that help growing businesses get discovered, build trust and generate enquiries.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-indigo hover:bg-brand-indigoDark text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 shimmer-sweep"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass-panel hover:bg-white text-slate-800 font-semibold text-base px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 pt-4 border-t border-slate-200/80 w-full"
            >
              <ShieldCheck className="w-4 h-4 text-brand-teal flex-shrink-0" />
              <span>Web Development • Digital Marketing • SEO • Ongoing Support</span>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Desktop Mockup Card with subtle glassmorphism */}
            <div className="relative rounded-2xl glass-card border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.07)] p-4 sm:p-5 overflow-hidden">
              {/* Browser Top Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/80 border border-slate-200/70 text-[11px] text-slate-600 font-mono shadow-subtle">
                  <Globe className="w-3 h-3 text-brand-indigo" />
                  <span>aarudhra.com/client-preview</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Mockup Internal Screen Preview */}
              <div className="rounded-xl bg-slate-50/70 border border-slate-100 p-4 space-y-4">
                {/* Hero preview banner inside the mock browser */}
                <div className="bg-white rounded-lg p-4 border border-slate-200/70 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-indigo font-mono bg-brand-indigo/5 px-2 py-0.5 rounded">
                      Client Growth Portal
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live &amp; Optimized
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    Turn Website Visitors Into Qualified Business Inquiries
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Fast mobile navigation, clean value proposition, and frictionless contact forms tailored to local search visibility.
                  </p>
                </div>

                {/* 2 Micro KPI Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-slate-200/70 shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      Mobile First
                    </div>
                    <p className="text-[11px] text-slate-500">100% Responsive on all screen sizes</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200/70 shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-indigo" />
                      Local SEO
                    </div>
                    <p className="text-[11px] text-slate-500">Structured for Google Maps &amp; search</p>
                  </div>
                </div>

                {/* Simulated Quick Action bar */}
                <div className="p-3 rounded-lg bg-brand-indigo/5 border border-brand-indigo/15 flex items-center justify-between">
                  <span className="text-xs font-medium text-brand-indigo">
                    Ready to launch your business website?
                  </span>
                  <span className="text-[11px] font-bold text-white bg-brand-indigo px-3 py-1 rounded-md shadow-sm">
                    Book Call
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Mobile Card Overlap */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hidden sm:flex absolute -bottom-6 -left-6 bg-slate-900 text-white rounded-2xl p-4 shadow-xl border border-slate-800 items-center gap-3.5 max-w-[260px]"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-indigo flex items-center justify-center flex-shrink-0 text-white">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Cross-Device Ready</p>
                <p className="text-[11px] text-slate-400">Desktop, tablet, and mobile perfected</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
