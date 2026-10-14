"use client";

import { motion } from "framer-motion";
import {
  Globe,
  RotateCcw,
  MapPin,
  Megaphone,
  Share2,
  ShieldCheck,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    num: "01",
    icon: Globe,
    title: "Website Development",
    desc: "Custom business websites engineered for speed, mobile usability, and customer conversion. Built to communicate credibility and generate enquiries.",
    tags: ["Custom Design", "Mobile-First", "Fast Loading", "Enquiry Forms"],
  },
  {
    num: "02",
    icon: RotateCcw,
    title: "Website Redesign",
    desc: "Modernizing outdated, slow, or cluttered websites that no longer represent your brand or fail to convert visitors into phone calls and enquiries.",
    tags: ["UX Revamp", "Speed Optimization", "Mobile Friendly", "Content Refresh"],
  },
  {
    num: "03",
    icon: MapPin,
    title: "Local SEO & Visibility",
    desc: "Helping your business rank higher on Google Search and Google Maps so nearby customers find you first when searching for your services.",
    tags: ["Google Business Profile", "Local Citations", "Map Rankings", "On-Page SEO"],
  },
  {
    num: "04",
    icon: Megaphone,
    title: "Google & Meta Advertising",
    desc: "Targeted search and social media ad campaigns designed to bring in qualified leads while maintaining complete control over your advertising budget.",
    tags: ["Google Search Ads", "Meta (FB & IG)", "Lead Generation", "Budget Control"],
  },
  {
    num: "05",
    icon: Share2,
    title: "Social Media Management",
    desc: "Consistent, professional content creation and publishing that keeps your business top of mind and reinforces credibility with prospective clients.",
    tags: ["Content Calendar", "Creative Design", "Brand Voice", "Consistency"],
  },
  {
    num: "06",
    icon: ShieldCheck,
    title: "Reputation Management",
    desc: "Systematic review gathering and online profile auditing so prospective customers see proof of your quality before they even contact you.",
    tags: ["Review Generation", "Customer Trust", "Feedback Audits", "Brand Credibility"],
  },
  {
    num: "07",
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    desc: "Clean, responsive mobile applications for iOS and Android built to streamline customer interactions, bookings, or internal operations.",
    tags: ["iOS & Android", "Smooth UX", "Data Sync", "Business Workflows"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-700">
              Core Capabilities
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-[1.1] mb-5">
            Everything you need to build your digital presence.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From your first website to ongoing growth, we help businesses build, improve and manage their digital presence with transparent delivery and dedicated support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((svc, idx) => {
            const Icon = svc.icon;
            const isFeatured = idx === 6; // 7th service spans or highlights cleanly

            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group relative p-7 sm:p-8 rounded-2xl glass-card border border-slate-200/80 flex flex-col justify-between ${
                  isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Accent line indicator on top of card */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-brand-indigo scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-brand-indigo tracking-wider bg-brand-indigo/5 px-2.5 py-1 rounded-md border border-brand-indigo/10 shadow-subtle">
                      {svc.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-center text-slate-700 group-hover:text-brand-indigo group-hover:scale-105 transition-all duration-200 shadow-subtle">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 group-hover:text-brand-indigo transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  {/* Capability Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 rounded-md px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <a
                  href="#contact"
                  className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 group-hover:text-brand-indigo transition-colors"
                >
                  <span>Discuss Requirement</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
