"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Code2,
  Smartphone,
  Cpu,
  Sparkles,
  TrendingUp,
  Target,
  Share2,
  Rocket,
  ArrowRight,
  Check,
  Layers,
  Database,
  BarChart3,
} from "lucide-react";

export type ServiceCategory = "all" | "tech" | "growth";

export interface ServiceItem {
  id: string;
  num: string;
  category: "tech" | "growth";
  categoryLabel: "Technology Solution" | "Business Growth Solution";
  icon: any;
  title: string;
  description: string;
  capabilities: string[];
  tags: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  // Technology Solutions
  {
    id: "web-development",
    num: "01",
    category: "tech",
    categoryLabel: "Technology Solution",
    icon: Globe,
    title: "Website Development",
    description: "High-performing, responsive websites built with Next.js and modern frontend architectures that make a commanding first impression and turn interest into customer enquiries.",
    capabilities: [
      "Custom responsive design & interactive UI",
      "Sub-second Core Web Vitals performance",
      "SEO-first semantic structure & metadata",
      "High-converting enquiry forms & WhatsApp triggers",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "web-applications",
    num: "02",
    category: "tech",
    categoryLabel: "Technology Solution",
    icon: Code2,
    title: "Web Application Development",
    description: "Purpose-built web platforms, client portals, SaaS applications, and operational dashboards engineered for scale, data security, and seamless daily utility.",
    capabilities: [
      "Full-stack architecture with relational databases",
      "Role-based authentication & permissions",
      "Real-time event subscriptions & webhooks",
      "Enterprise API integrations & third-party connectors",
    ],
    tags: ["Next.js 16", "Node.js", "PostgreSQL", "Supabase", "Prisma"],
  },
  {
    id: "mobile-applications",
    num: "03",
    category: "tech",
    categoryLabel: "Technology Solution",
    icon: Smartphone,
    title: "Mobile Application Development",
    description: "Fluid, native-grade iOS and Android mobile experiences engineered with React Native, giving your customers and field teams effortless access anytime, anywhere.",
    capabilities: [
      "Cross-platform iOS and Android codebase",
      "Offline-first synchronization & local storage",
      "Push notification engines & location services",
      "App Store & Google Play launch compliance",
    ],
    tags: ["React Native", "Expo", "iOS", "Android", "Firebase"],
  },
  {
    id: "custom-software",
    num: "04",
    category: "tech",
    categoryLabel: "Technology Solution",
    icon: Database,
    title: "Custom Software Solutions",
    description: "Tailored internal tools, database systems, inventory pipelines, and specialized backends designed specifically to eliminate bottlenecks in your unique business operations.",
    capabilities: [
      "Bespoke backend APIs & microservice design",
      "Legacy system modernization & migration",
      "Automated reporting & internal management portals",
      "Secure cloud infrastructure & backups",
    ],
    tags: ["Python", "Node.js", "Docker", "REST & GraphQL", "AWS"],
  },
  {
    id: "ai-solutions",
    num: "05",
    category: "tech",
    categoryLabel: "Technology Solution",
    icon: Sparkles,
    title: "AI Solutions & Integrations",
    description: "Practical intelligence integrated into existing workflows—intelligent knowledge search, customer triage agents, document parsing, and automated decision workflows.",
    capabilities: [
      "Custom LLM embeddings & proprietary knowledge bots",
      "Automated document extraction & summarization",
      "Intelligent customer query classification",
      "Self-hosted & API-based AI pipeline orchestration",
    ],
    tags: ["OpenAI", "LangChain", "Vector DBs", "Python", "Automation"],
  },

  // Business Growth Solutions
  {
    id: "lead-generation",
    num: "06",
    category: "growth",
    categoryLabel: "Business Growth Solution",
    icon: Target,
    title: "Lead Generation",
    description: "Multi-channel digital acquisition funnels that identify, attract, and qualify high-intent prospects, turning web traffic into predictable business opportunities.",
    capabilities: [
      "Conversion-optimized landing page funnels",
      "Lead qualification & automated WhatsApp alerts",
      "CRM integration & pipeline tracking",
      "High-intent search & discovery capture",
    ],
    tags: ["Funnel Architecture", "Conversion Optimization", "WhatsApp API", "CRM"],
  },
  {
    id: "digital-marketing",
    num: "07",
    category: "growth",
    categoryLabel: "Business Growth Solution",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Performance-focused digital campaigns across Google, Meta, and relevant discovery networks built to maximize ROI, reduce customer acquisition cost, and accelerate market share.",
    capabilities: [
      "Targeted Google Search & Display ad campaigns",
      "Meta (Instagram & Facebook) precision targeting",
      "Server-side attribution & conversion tracking",
      "Continuous A/B testing of ad creatives & messaging",
    ],
    tags: ["Google Ads", "Meta Ads", "Performance Marketing", "Analytics"],
  },
  {
    id: "social-media",
    num: "08",
    category: "growth",
    categoryLabel: "Business Growth Solution",
    icon: Share2,
    title: "Social Media Marketing",
    description: "Consistent, authoritative brand positioning and visual storytelling across major channels that establishes corporate credibility and engages your target audience.",
    capabilities: [
      "Strategic content calendars & industry thought leadership",
      "High-impact visual assets, graphics, and video shorts",
      "Community engagement & reputation monitoring",
      "B2B LinkedIn & B2C Instagram brand building",
    ],
    tags: ["Brand Narrative", "Visual Design", "Content Strategy", "LinkedIn"],
  },
  {
    id: "digital-growth",
    num: "09",
    category: "growth",
    categoryLabel: "Business Growth Solution",
    icon: Rocket,
    title: "Digital Growth Solutions",
    description: "Full-funnel digital strategy connecting your technology assets with customer acquisition, conversion rate optimization (CRO), analytics, and long-term retention loops.",
    capabilities: [
      "Comprehensive digital audit & bottleneck diagnosis",
      "Conversion Rate Optimization (CRO) UX audits",
      "Google Analytics 4 & behavioral event mapping",
      "Post-launch scale advisory & technology alignment",
    ],
    tags: ["Full-Funnel Analytics", "GA4", "CRO", "Retention Systems"],
  },
];

export default function Services() {
  const [filter, setFilter] = useState<ServiceCategory>("all");

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#080C14] text-white overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Solutions Built Around{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Your Business.
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              We present our services as an integrated set of capabilities—bringing together dependable technology and commercial growth solutions under one accountable team.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-2 p-1 bg-white/[0.04] border border-white/10 rounded-xl backdrop-blur-md self-start md:self-end">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Services ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setFilter("tech")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === "tech"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Technology (5)
            </button>
            <button
              onClick={() => setFilter("growth")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === "growth"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Business Growth (4)
            </button>
          </div>
        </div>

        {/* Dual Pillar Overview Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Pillar 1: Technology */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-950/80 border border-indigo-500/20 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-24 h-24 text-indigo-400" />
            </div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 block mb-2">
              Pillar 01 • Engineering &amp; Systems
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">Technology Solutions</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-lg">
              Build the dependable digital foundations, web platforms, mobile ecosystems, and AI integrations your business needs to operate with velocity.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-indigo-300">
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">Web Development</span>
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">Web Applications</span>
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">Mobile Apps</span>
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">Custom Software</span>
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">AI Integrations</span>
            </div>
          </div>

          {/* Pillar 2: Business Growth */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-slate-950/80 border border-cyan-500/20 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp className="w-24 h-24 text-cyan-400" />
            </div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 block mb-2">
              Pillar 02 • Acquisition &amp; Visibility
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">Business Growth Solutions</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-lg">
              Create stronger routes to high-value customers, capture commercial intent, and build compounding momentum through data-driven growth.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-cyan-300">
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">Lead Generation</span>
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">Digital Marketing</span>
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">Social Media</span>
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">Growth Strategy</span>
            </div>
          </div>
        </div>

        {/* Detailed Service Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((service) => {
              const Icon = service.icon;
              const isTech = service.category === "tech";

              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl p-6 sm:p-7 bg-[#0E1424]/90 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/10"
                >
                  <div>
                    {/* Card Top: Number & Category Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all ${
                            isTech
                              ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white"
                              : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                            isTech
                              ? "bg-indigo-500/5 text-indigo-300 border-indigo-500/20"
                              : "bg-cyan-500/5 text-cyan-300 border-cyan-500/20"
                          }`}
                        >
                          {service.categoryLabel}
                        </span>
                      </div>
                      <span className="font-mono text-sm font-bold text-slate-500">
                        {service.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Concrete Capabilities */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                      {service.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech / Tool Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Link to Contact with pre-selected service */}
                    <a
                      href={`#contact`}
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-indigo-600/20 border border-white/[0.08] hover:border-indigo-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-all group-hover:border-indigo-500/30"
                    >
                      <span>Discuss this requirement</span>
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
