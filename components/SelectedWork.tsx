"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Clock,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Code2,
  Smartphone,
  Sparkles,
} from "lucide-react";

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  clientType: string;
  category: "Web Application" | "Mobile App" | "AI & Automation" | "Growth Engine";
  icon: any;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  outcome: string;
  techStack: string[];
  gradient: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "logistics-cloud",
    tag: "Enterprise Web Platform",
    title: "Apex Logistics Cloud & Fleet Telematics Portal",
    clientType: "Commercial Freight & Multi-Hub Logistics Operator",
    category: "Web Application",
    icon: Code2,
    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
    metrics: [
      { label: "Dispatch Velocity", value: "+240%" },
      { label: "Weekly Admin Saved", value: "45 Hours" },
      { label: "Operational Uptime", value: "99.98%" },
    ],
    challenge:
      "The client was managing multi-state fleet scheduling and driver dispatch through fragmented WhatsApp threads and manual Excel spreadsheets, leading to lost billing slips, misrouted trucks, and delayed client status updates.",
    solution:
      "Architected a real-time reactive web portal using Next.js 16, Supabase PostgreSQL, and Leaflet GPS tracking. Built automated dispatch routing, driver mobile check-ins, automated digital proof-of-delivery (e-POD), and real-time client tracking links.",
    outcome:
      "Eliminated 45+ hours of weekly manual coordination. Driver turnaround times improved by 240%, customer inquiry phone calls dropped by 65% due to self-service tracking, and zero billing discrepancies reported in 6 months of operation.",
    techStack: ["Next.js 16", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
  },
  {
    id: "retail-mobile-app",
    tag: "Mobile App & Commerce",
    title: "Kaviarasan Omnichannel Mobile App & Fast Checkout",
    clientType: "Regional Retail Chain (5 Locations + Online)",
    category: "Mobile App",
    icon: Smartphone,
    gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
    metrics: [
      { label: "Mobile Checkout", value: "+185%" },
      { label: "30-Day Retention", value: "3.2x" },
      { label: "App Load Speed", value: "< 750ms" },
    ],
    challenge:
      "An outdated web store was suffering an 82% mobile cart abandonment rate. Customers experienced laggy category loading, complicated multi-step checkout forms, and had no unified loyalty rewards across physical branches and online.",
    solution:
      "Engineered a native React Native cross-platform app for iOS and Android paired with a headless Next.js web storefront. Implemented 1-click OTP login, localized Tamil & English UI, instant UPI payment integration, and push-driven flash sale notifications.",
    outcome:
      "Mobile checkout conversions surged by 185% in the first quarter. Repeat 30-day purchases tripled through targeted loyalty reward notifications, and overall customer satisfaction rose to 4.8 / 5 on app stores.",
    techStack: ["React Native", "Expo", "Node.js", "Redis", "Razorpay UPI"],
  },
  {
    id: "ai-clinical-triage",
    tag: "AI & Workflow Automation",
    title: "Zenith Healthcare Intelligent Booking & Triage",
    clientType: "Multi-Specialty Clinic & Diagnostic Network",
    category: "AI & Automation",
    icon: Sparkles,
    gradient: "from-pink-600/20 via-indigo-600/10 to-transparent",
    metrics: [
      { label: "Inbound Call Load", value: "-72%" },
      { label: "No-Show Reduction", value: "48%" },
      { label: "Patient Satisfaction", value: "96%" },
    ],
    challenge:
      "Medical reception staff were overwhelmed with 300+ daily repetitive phone inquiries regarding doctor schedules, lab test requirements, and appointment rescheduling, resulting in long phone hold times and missed consultations.",
    solution:
      "Developed a custom conversational WhatsApp & web triage agent powered by OpenAI embeddings. The assistant provides 24/7 intelligent symptom-based department recommendations, books calendar slots, answers pre-test fasting queries, and issues automated SMS reminders.",
    outcome:
      "Reduced reception phone load by 72%, freeing staff for patient care. Clinic appointment no-shows dropped by 48% due to automated interactive confirmations, and the clinic onboarded 1,400+ new patients digitally in 60 days.",
    techStack: ["OpenAI API", "Python FastAPI", "WhatsApp Cloud API", "PostgreSQL"],
  },
  {
    id: "b2b-growth-pipeline",
    tag: "Lead Generation & Performance",
    title: "MetroScale B2B Growth Engine & Customer Acquisition",
    clientType: "Industrial Equipment & Solar Power Provider",
    category: "Growth Engine",
    icon: TrendingUp,
    gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    metrics: [
      { label: "Qualified B2B Leads", value: "+310%" },
      { label: "CAC Reduction", value: "-42%" },
      { label: "Pipeline Value", value: "₹2.4 Cr+" },
    ],
    challenge:
      "The client relied almost entirely on traditional word-of-mouth and expensive offline trade expos. Their digital presence was an inactive brochure website that generated virtually zero verified commercial project enquiries.",
    solution:
      "Designed high-converting landing pages tailored to B2B decision makers. Deployed precision Google Search campaigns for commercial intent keywords, implemented instant WhatsApp consultation routing, and set up automated email quote follow-ups.",
    outcome:
      "Generated 310% increase in verified high-ticket commercial enquiries within 90 days, reducing client customer acquisition costs by 42% and generating over ₹2.4 Crores in newly closed industrial contracts.",
    techStack: ["Google Ads", "Conversion Rate Optimization", "Landing Pages", "CRM Integration"],
  },
];

export default function SelectedWork() {
  const [activeTabMap, setActiveTabMap] = useState<Record<string, "challenge" | "solution" | "outcome">>({
    "logistics-cloud": "challenge",
    "retail-mobile-app": "challenge",
    "ai-clinical-triage": "challenge",
    "b2b-growth-pipeline": "challenge",
  });

  const setTab = (projectId: string, tab: "challenge" | "solution" | "outcome") => {
    setActiveTabMap((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#080C14] text-white overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Work &amp; Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Digital Solutions Shaped Around{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
                Real Business Challenges.
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Every project is framed with clear business context: diagnose the friction, engineer the right technical solution, and deliver measurable commercial outcomes.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-white transition-all self-start md:self-end"
          >
            <span>Have a project in mind?</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
          </a>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((project) => {
            const Icon = project.icon;
            const currentTab = activeTabMap[project.id] || "challenge";

            return (
              <div
                key={project.id}
                className="rounded-3xl p-6 sm:p-8 bg-[#0C1222] border border-white/10 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden group"
              >
                {/* Background ambient gradient */}
                <div
                  className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${project.gradient} opacity-20 rounded-full blur-2xl pointer-events-none`}
                />

                <div>
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] text-indigo-300 border border-white/5">
                      {project.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {project.clientType}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Measurable Impact Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-[#070A12] border border-white/5 mb-6">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-left">
                        <span className="text-[10px] text-slate-400 block font-medium truncate">
                          {m.label}
                        </span>
                        <span className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-cyan-300 font-mono">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Challenge -> Solution -> Outcome Switcher */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/5 rounded-xl mb-4">
                      {(["challenge", "solution", "outcome"] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setTab(project.id, tab)}
                          className={`flex-1 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all ${
                            currentTab === tab
                              ? "bg-indigo-600 text-white shadow-sm"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content Display */}
                    <div className="min-h-[110px] p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm leading-relaxed text-slate-300">
                      {currentTab === "challenge" && (
                        <div>
                          <b className="text-rose-400 block mb-1 text-xs font-mono">
                            THE BUSINESS CHALLENGE:
                          </b>
                          {project.challenge}
                        </div>
                      )}
                      {currentTab === "solution" && (
                        <div>
                          <b className="text-indigo-400 block mb-1 text-xs font-mono">
                            OUR TECHNICAL SOLUTION:
                          </b>
                          {project.solution}
                        </div>
                      )}
                      {currentTab === "outcome" && (
                        <div>
                          <b className="text-emerald-400 block mb-1 text-xs font-mono">
                            MEASURABLE BUSINESS OUTCOME:
                          </b>
                          {project.outcome}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer: Tech badges & CTA */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex-shrink-0"
                  >
                    <span>Request similar solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future expansion note as requested by client */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 max-w-2xl mx-auto">
          <p className="text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Scalable Case Study Architecture:</span> New verified client case studies and technical teardowns are added continuously as enterprise nondisclosure periods expire.
          </p>
        </div>
      </div>
    </section>
  );
}
