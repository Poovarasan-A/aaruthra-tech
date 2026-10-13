"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  Terminal,
  Zap,
  Shield,
  Smartphone,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

const ARCH_MODES = [
  {
    id: "web-platform",
    title: "Web Platform & SaaS",
    icon: Code2,
    badge: "Next.js 16 • Turbopack",
    description: "Modern, type-safe full-stack web applications with sub-second page loads and fluid user interactions.",
    metrics: [
      { label: "Core Web Vitals", value: "100/100" },
      { label: "Server Response", value: "< 42ms" },
      { label: "Availability", value: "99.99%" },
    ],
    codeSnippet: `// aarudhra.config.ts
export const webPlatform = defineArchitecture({
  framework: "Next.js 16 (App Router)",
  rendering: "Edge Hybrid SSR + ISR",
  styling: "Vanilla CSS & Tailwind System",
  state: "Optimistic React 19 Actions",
  security: "Zero-Trust API Hardening",
  status: "ONLINE & PRODUCTION READY"
});`,
  },
  {
    id: "ai-automation",
    title: "AI & Automation Engine",
    icon: Cpu,
    badge: "LLMs • Workflow Nodes",
    description: "Intelligent agentic workflows, conversational pipelines, and data enrichment designed for practical operations.",
    metrics: [
      { label: "Inference Latency", value: "128ms" },
      { label: "Automation Ratio", value: "78%" },
      { label: "Error Rate", value: "0.01%" },
    ],
    codeSnippet: `// pipeline/agentic-orchestrator.ts
const aiWorkflow = createWorkflow({
  trigger: "inbound_business_lead",
  agents: ["intent_parser", "crm_enricher", "priority_scorer"],
  delivery: ["instant_whatsapp_alert", "calendar_booking"],
  latencyBudgetMs: 250,
  confidenceThreshold: 0.96
});`,
  },
  {
    id: "mobile-suite",
    title: "Mobile App Ecosystem",
    icon: Smartphone,
    badge: "React Native • iOS & Android",
    description: "High-performance cross-platform apps with native gesture handling, offline synchronization, and push notifications.",
    metrics: [
      { label: "Frame Rate", value: "120 FPS" },
      { label: "Bundle Size", value: "< 14 MB" },
      { label: "Store Approval", value: "100%" },
    ],
    codeSnippet: `// mobile/core-engine.tsx
export const mobileRuntime = {
  platforms: ["iOS 17+", "Android 14+"],
  syncEngine: "Offline-First SQLite Cache",
  telemetry: "Real-time Sentry & OpenTelemetry",
  pushDelivery: "APNS & Firebase Cloud Messaging",
  animationDriver: "Reanimated 3 (Native Thread)"
};`,
  },
  {
    id: "growth-engine",
    title: "Growth & Lead Pipeline",
    icon: TrendingUp,
    badge: "Full-Funnel Telemetry",
    description: "Data-driven client acquisition systems connecting ad traffic to high-converting landing pages and instant WhatsApp routing.",
    metrics: [
      { label: "Conversion Lift", value: "+148%" },
      { label: "CAC Reduction", value: "-36%" },
      { label: "Lead Response", value: "< 2 min" },
    ],
    codeSnippet: `// analytics/growth-funnel.ts
const conversionPipeline = {
  sources: ["Google Ads", "Meta Ads", "Organic Search"],
  routing: "Dynamic Value-Based Qualification",
  notification: "Direct Founder & Sales Sync",
  attribution: "Server-Side Conversions API",
  roiMultiplier: "3.8x Target Pipeline"
};`,
  },
];

const TECH_BADGES = [
  "Next.js 16",
  "TypeScript",
  "React 19",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Supabase",
  "OpenAI",
  "React Native",
  "Vercel Edge",
  "Docker",
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const currentArch = ARCH_MODES[activeTab];
  const CurrentIcon = currentArch.icon;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#080C14]">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10">
        <div className="absolute top-[-100px] left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute top-[80px] right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute inset-0 bg-grid-slate opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Technology &amp; Digital Solutions
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              className="font-extrabold text-white tracking-tight leading-[1.08] mb-6 text-4xl sm:text-5xl lg:text-[62px]"
            >
              Building Digital Solutions That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
                Move Businesses Forward.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
              className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-normal"
            >
              We help businesses build, grow and evolve through technology, digital solutions and modern business strategies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-0.5 border border-indigo-400/30 shimmer-sweep"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white font-semibold text-base px-6 py-3.5 rounded-xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-md"
              >
                <span>Explore Our Services</span>
              </a>
            </motion.div>

            {/* Trust Line & Key Capabilities */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Web &amp; Software Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Mobile App Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>AI &amp; Business Growth Systems</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sophisticated Technology Visual */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl"
            >
              {/* Outer Card */}
              <div className="rounded-[15px] bg-[#0C1220]/95 border border-white/10 overflow-hidden backdrop-blur-2xl">
                {/* Window Topbar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#080C14]/90 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400 font-medium flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      aarudhra-cloud-system // live
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ALL SYSTEMS NORMAL
                    </span>
                  </div>
                </div>

                {/* Architecture Mode Selector Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 p-2 gap-1.5 bg-black/40 border-b border-white/5">
                  {ARCH_MODES.map((mode, index) => {
                    const Icon = mode.icon;
                    const isSelected = activeTab === index;
                    return (
                      <button
                        key={mode.id}
                        onClick={() => setActiveTab(index)}
                        className={`flex flex-col items-start p-2.5 rounded-lg text-left transition-all ${
                          isSelected
                            ? "bg-indigo-600/20 border border-indigo-500/40 text-white shadow-sm"
                            : "bg-white/[0.02] border border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-indigo-400" : "text-slate-500"}`} />
                          <span className="text-[11px] font-semibold truncate">{mode.title}</span>
                        </div>
                        <span className="text-[9px] font-mono text-slate-500 truncate w-full">{mode.badge}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Tab Preview Body */}
                <div className="p-5 sm:p-6 space-y-5">
                  {/* Mode Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <CurrentIcon className="w-5 h-5 text-indigo-400" />
                        <h3 className="text-white font-bold text-lg">{currentArch.title}</h3>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono border border-indigo-500/20">
                          {currentArch.badge}
                        </span>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
                        {currentArch.description}
                      </p>
                    </div>
                  </div>

                  {/* Real-time Metric Cards */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {currentArch.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.07] text-left"
                      >
                        <span className="text-[10px] text-slate-400 block font-medium truncate mb-1">
                          {m.label}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Code / Configuration Inspection Box */}
                  <div className="relative rounded-lg bg-[#070A12] border border-white/[0.08] p-3.5 overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2 pb-2 border-b border-white/5">
                      <span className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-cyan-400" />
                        Architecture Specification
                      </span>
                      <span className="text-emerald-400 text-[10px]">VERIFIED STACK</span>
                    </div>

                    <pre className="text-[11px] font-mono text-indigo-200/90 leading-relaxed overflow-x-auto selection:bg-indigo-500/30">
                      <code>{currentArch.codeSnippet}</code>
                    </pre>

                    {/* Gradient accent corner */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
                  </div>

                  {/* Action Link to service */}
                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-indigo-400" />
                      Scalable, maintainable, enterprise-ready
                    </span>
                    <a
                      href="#services"
                      className="inline-flex items-center gap-1 font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>Explore this solution</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Ecosystem Ribbon */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Engineered with modern, reliable industry technologies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            {TECH_BADGES.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.07] hover:border-indigo-500/30 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
