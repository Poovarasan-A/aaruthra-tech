"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Laptop, RotateCw, MapPin, Megaphone, Share2, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Website Development",
    tagline: "Custom Business Sites",
    desc: "Professional business websites that clearly explain your services, build credibility, and support customer enquiries. (Mobile Friendly)",
    bullets: [
      { label: "React & Next.js Architectures", pct: 98 },
      { label: "Mobile-First Design", pct: 99 },
      { label: "Fast Page Loading Speed", pct: 95 },
      { label: "Enquiry Form Integrations", pct: 92 },
    ],
    leftAccent: "border-l-[3px] border-l-[#6366F1]",
    iconColor: "text-[#6366F1]",
    barColor: "bg-[#6366F1]",
    accentBg: "bg-[#6366F1]/10",
  },
  {
    icon: RotateCw,
    title: "Website Redesign",
    tagline: "Fix Outdated Sites",
    desc: "Fixing outdated, slow, or confusing websites that are hurting your credibility with modern design and faster speeds.",
    bullets: [
      { label: "Site Speed Audits", pct: 96 },
      { label: "Modern UI/UX Overhauls", pct: 94 },
      { label: "Broken Link Corrections", pct: 91 },
      { label: "Content Structuring", pct: 93 },
    ],
    leftAccent: "border-l-[3px] border-l-[#06B6D4]",
    iconColor: "text-[#06B6D4]",
    barColor: "bg-[#06B6D4]",
    accentBg: "bg-[#06B6D4]/10",
  },
  {
    icon: MapPin,
    title: "Local SEO & Visibility",
    tagline: "Get Found Nearby",
    desc: "Helping your business appear in local search results and Google maps so nearby customers can easily find and trust your services.",
    bullets: [
      { label: "Google Business Optimization", pct: 97 },
      { label: "Local Keywords Targeting", pct: 94 },
      { label: "Map Directory Citations", pct: 90 },
      { label: "On-Page SEO Audit", pct: 92 },
    ],
    leftAccent: "border-l-[3px] border-l-[#A855F7]",
    iconColor: "text-[#A855F7]",
    barColor: "bg-[#A855F7]",
    accentBg: "bg-[#A855F7]/10",
  },
  {
    icon: Megaphone,
    title: "Google & Meta Advertising",
    tagline: "Targeted Leads",
    desc: "Targeted advertising campaigns focused on relevant traffic, enquiries, and controlled spending.",
    bullets: [
      { label: "Google Search Ads", pct: 95 },
      { label: "Meta (FB / IG) Campaigns", pct: 93 },
      { label: "Lead Funnel Optimization", pct: 92 },
      { label: "Ad Spend Tracking & ROI", pct: 94 },
    ],
    leftAccent: "border-l-[3px] border-l-[#F59E0B]",
    iconColor: "text-[#F59E0B]",
    barColor: "bg-[#F59E0B]",
    accentBg: "bg-[#F59E0B]/10",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    tagline: "Engaging Content",
    desc: "Managing your social profiles with consistent content and messaging aligned to your business goals.",
    bullets: [
      { label: "Content Calendars Planning", pct: 91 },
      { label: "Graphics & Carousel Design", pct: 95 },
      { label: "Profile Bio & Branding Setup", pct: 93 },
      { label: "Community Interactions", pct: 88 },
    ],
    leftAccent: "border-l-[3px] border-l-[#10B981]",
    iconColor: "text-[#10B981]",
    barColor: "bg-[#10B981]",
    accentBg: "bg-[#10B981]/10",
  },
  {
    icon: ShieldCheck,
    title: "Reputation Management",
    tagline: "Build Trust Online",
    desc: "Monitoring and improving customer reviews and online feedback so your business builds trust before customers contact you.",
    bullets: [
      { label: "Review Acquisition Strategy", pct: 92 },
      { label: "Negative Feedback Auditing", pct: 90 },
      { label: "Customer Trust Signals", pct: 95 },
      { label: "Brand Mentions Monitoring", pct: 89 },
    ],
    leftAccent: "border-l-[3px] border-l-[#F43F5E]",
    iconColor: "text-[#F43F5E]",
    barColor: "bg-[#F43F5E]",
    accentBg: "bg-[#F43F5E]/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden bg-[#F8F7F4]">
      {/* Decorative Warm Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-mono uppercase tracking-widest text-xs text-[#6366F1] font-semibold mb-3 block">
            // capabilities
          </span>
          <h2 className="font-outfit font-bold text-3xl md:text-5xl text-[#1A1A2E] tracking-tight mb-5">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Practical digital services designed for small and mid-sized businesses that want visibility, enquiries, and long-term support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className={`group bg-white rounded-2xl p-8 flex flex-col justify-between h-full border border-[#6366F1]/12 ${svc.leftAccent} hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.10)] transition-all duration-300`}
              >
                <div>
                  {/* Icon & tagline */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 border border-black/5 group-hover:scale-105 transition-transform duration-300">
                      <Icon className={`w-5 h-5 ${svc.iconColor}`} />
                    </div>
                    <span className={`font-mono text-[9px] uppercase tracking-wider ${svc.iconColor} ${svc.accentBg} px-2.5 py-1 rounded-md border border-current/10 font-bold`}>
                      {svc.tagline}
                    </span>
                  </div>

                  <h3 className="font-outfit font-bold text-xl text-[#1A1A2E] mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  {/* Bullet progress tracks */}
                  <ul className="space-y-4 mb-8">
                    {svc.bullets.map((b, bi) => (
                      <li key={b.label}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[11px] font-medium text-slate-700">{b.label}</span>
                          <span className="font-mono text-[10px] font-bold text-slate-500">{b.pct}%</span>
                        </div>
                        <div className="h-1 rounded-full bg-slate-100 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${svc.barColor}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${b.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.2 + bi * 0.08, ease: "easeOut" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#cta"
                  className={`flex items-center text-xs font-bold ${svc.iconColor} mt-auto pt-5 border-t border-black/[0.04] w-full`}
                >
                  <span className="flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300">
                    Get in Touch
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
