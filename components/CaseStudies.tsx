"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Check } from "lucide-react";

const PROJECTS = [
  {
    category: "Website",
    title: "Corporate & Industrial Services Portal",
    desc: "A responsive company website engineered to highlight manufacturing capabilities, establish credibility with enterprise buyers, and capture quote inquiries.",
    deliverables: [
      "Custom Brand Architecture",
      "Mobile-First Responsive Layout",
      "Quote Request Workflow",
      "On-Page SEO Optimization",
    ],
  },
  {
    category: "E-Commerce",
    title: "Regional Direct-to-Consumer Storefront",
    desc: "A streamlined e-commerce experience built for fast browsing, straightforward product selection, secure checkout, and automated customer order messaging.",
    deliverables: [
      "Catalog Structure",
      "Payment Gateway Integration",
      "Fast Checkout Experience",
      "WhatsApp Order Alerts",
    ],
  },
  {
    category: "Digital Marketing",
    title: "Healthcare & Local Clinic Visibility",
    desc: "Google Business Profile optimization and localized search campaigns targeted at nearby patients needing specialized consultations.",
    deliverables: [
      "Local Map Rankings",
      "Google Search Ads",
      "Reputation & Review Systems",
      "Direct Call Tracking",
    ],
  },
  {
    category: "Web Application",
    title: "Service Booking & Lead Portal",
    desc: "A custom web portal allowing customers to calculate requirements, schedule visits, and submit requests without tedious back-and-forth communication.",
    deliverables: [
      "Interactive Requirement Calculator",
      "Appointment Scheduling",
      "Lead Capture Database",
      "Automated Email Alerts",
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#F8F9FC] border-t border-slate-200/70 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-700">
                Selected Work &amp; Solutions
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-[1.1]">
              Engineered for real business results.
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
            A sample of the digital solutions, websites, and growth systems we build for businesses across Tamil Nadu.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-8 rounded-2xl glass-card border border-slate-200/80 flex flex-col justify-between group"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold font-mono uppercase tracking-wider text-brand-indigo bg-brand-indigo/5 border border-brand-indigo/15 px-3 py-1 rounded-md">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    {project.category}
                  </span>

                  <span className="text-slate-400 group-hover:text-brand-indigo transition-colors">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-3 group-hover:text-brand-indigo transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Services Delivered:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.deliverables.map((del) => (
                      <li
                        key={del}
                        className="flex items-center gap-2 text-xs font-medium text-slate-700"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Client Solution Showcase</span>
                <a
                  href="#contact"
                  className="text-brand-indigo hover:text-brand-indigoDark font-bold"
                >
                  Request Similar Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
