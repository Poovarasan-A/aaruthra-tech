"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Cpu,
  Workflow,
  Zap,
  Globe2,
  Terminal,
  Activity,
  CheckCircle2,
  ArrowRight,
  Database,
  Layers,
  Radio,
} from "lucide-react";

const INNOVATION_PILLARS = [
  {
    id: "ai-integrations",
    title: "AI Integrations",
    icon: Sparkles,
    tag: "Practical Intelligence",
    description:
      "Deploy custom LLMs, proprietary embeddings, and intelligent agents tailored to your catalog and business rules—delivering 24/7 responsiveness without hiring massive support teams.",
    capabilities: [
      "Domain-specific conversational assistants",
      "Vector search across internal knowledge bases",
      "Smart sentiment and priority classification",
    ],
  },
  {
    id: "automation",
    title: "Business Automation",
    icon: Zap,
    tag: "Zero-Touch Operations",
    description:
      "Eliminate repetitive copy-pasting between disparate software. We engineer automated event pipelines linking your website, CRM, invoicing, and messaging apps.",
    capabilities: [
      "Real-time webhook routing & multi-app sync",
      "Automated WhatsApp & SMS customer notifications",
      "Trigger-based invoice & receipt generation",
    ],
  },
  {
    id: "intelligent-workflows",
    title: "Intelligent Workflows",
    icon: Workflow,
    tag: "Contextual Processing",
    description:
      "Transform chaotic inbound paperwork and inquiries into structured database records with automated document OCR, validation logic, and priority routing.",
    capabilities: [
      "Automated PDF document & receipt extraction",
      "Dynamic lead scoring & VIP customer routing",
      "Anomaly detection and real-time staff alerts",
    ],
  },
  {
    id: "emerging-tech",
    title: "Emerging Technologies",
    icon: Cpu,
    tag: "Modern Infrastructure",
    description:
      "We build on top of resilient edge runtimes, distributed cloud databases, and serverless architectures designed to handle traffic spikes effortlessly.",
    capabilities: [
      "Edge-deployed SSR with global sub-40ms latency",
      "Modern serverless architectures with near-zero idle cost",
      "WebSocket channels for real-time multiplayer updates",
    ],
  },
  {
    id: "future-products",
    title: "Future Digital Products",
    icon: Globe2,
    tag: "Modular SaaS Scalability",
    description:
      "We architect software from day one with clean APIs and multi-tenant database models, enabling traditional businesses to launch their own digital product spin-offs.",
    capabilities: [
      "API-first architecture ready for third-party integrations",
      "Multi-tenant data isolation and permissions",
      "Subscription billing engines & Stripe integration",
    ],
  },
];

const SIMULATOR_SCENARIOS = [
  {
    id: "lead-routing",
    name: "Scenario 1: Inbound Lead Triage & WhatsApp Alert",
    trigger: "New Enterprise Inquiry received on Aarudhra Web Platform",
    steps: [
      { step: "01 Input", desc: "User submits requirement brief with phone & budget" },
      { step: "02 AI Evaluation", desc: "LLM analyzes intent, scores commercial value (0.94 score)" },
      { step: "03 CRM Sync", desc: "Record inserted into PostgreSQL with instant tag: High-Intent" },
      { step: "04 Dispatch", desc: "WhatsApp alert sent to Founder & sales team in 850ms" },
    ],
    telemetry: { latency: "850ms", reliability: "99.99%", costPerExec: "$0.0004" },
  },
  {
    id: "support-agent",
    name: "Scenario 2: 24/7 Intelligent Customer Support Assistant",
    trigger: "Customer asks complex pricing query via WhatsApp",
    steps: [
      { step: "01 Inbound", desc: "Customer message captured via WhatsApp Cloud Webhook" },
      { step: "02 Semantic Search", desc: "Vector DB retrieves exact pricing clause & service terms" },
      { step: "03 Response Generation", desc: "AI formats clear, polite, localized Tamil/English answer" },
      { step: "04 Output", desc: "Message delivered instantly with option to speak to human team" },
    ],
    telemetry: { latency: "1.12s", reliability: "99.95%", costPerExec: "$0.0008" },
  },
  {
    id: "doc-processing",
    name: "Scenario 3: Automated Invoice & Payment Verification",
    trigger: "Client uploads vendor bill image to operations portal",
    steps: [
      { step: "01 Upload", desc: "File streamed to secure encrypted cloud storage bucket" },
      { step: "02 Vision OCR", desc: "Vision AI extracts Line Items, GSTIN, Total Amount, Due Date" },
      { step: "03 Verification", desc: "System matches PO number against internal ledger database" },
      { step: "04 Approval", desc: "Pre-filled payment voucher routed to accounts lead for 1-click approval" },
    ],
    telemetry: { latency: "1.45s", reliability: "99.98%", costPerExec: "$0.0012" },
  },
];

export default function TechInnovation() {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenario = SIMULATOR_SCENARIOS[activeScenario];

  return (
    <section id="innovation" className="relative py-24 md:py-32 bg-[#0A0E1A] text-white overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>Technology &amp; Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Technology That Evolves With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400">
              Your Business.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            We explore practical ways to connect systems, automate repetitive work, and introduce intelligent capabilities where they create meaningful commercial value—without unnecessary complexity.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {INNOVATION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="rounded-2xl p-6 sm:p-7 bg-[#0E1424] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/5">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {pillar.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Live Simulator (Forethought / Runway Style) */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#070A12] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                Interactive Systems Simulator
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Live Intelligent Workflow Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Test how Aarudhra orchestrates intelligent automation pipelines between user actions, AI agents, databases, and multi-channel notifications.
              </p>
            </div>

            {/* Scenario Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {SIMULATOR_SCENARIOS.map((scen, idx) => (
                <button
                  key={scen.id}
                  onClick={() => setActiveScenario(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeScenario === idx
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25"
                      : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  Scenario {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Scenario Flow Display */}
          <div className="space-y-6">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between flex-wrap gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-cyan-400 font-bold">TRIGGER:</span>
                <span>{scenario.trigger}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 text-[11px]">
                <span>Pipeline Latency: <strong className="text-emerald-400 font-mono">{scenario.telemetry.latency}</strong></span>
                <span>Uptime SLA: <strong className="text-white font-mono">{scenario.telemetry.reliability}</strong></span>
              </div>
            </div>

            {/* 4 Pipeline Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {scenario.steps.map((st, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#0B101E] border border-white/5 relative group hover:border-cyan-500/40 transition-colors"
                >
                  <div className="text-[10px] font-mono text-cyan-400 font-bold mb-1.5 uppercase">
                    {st.step}
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                Deterministic, audited, and secured with zero-trust credentials
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Automate your business processes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
