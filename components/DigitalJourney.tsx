"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  TrendingUp,
  Workflow,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  ArrowDown,
} from "lucide-react";

const JOURNEY_STAGES = [
  {
    step: "01",
    id: "stage-presence",
    title: "Digital Presence",
    subtitle: "Establish a Credible, High-Performing Foundation",
    icon: Globe,
    color: "from-blue-500 to-indigo-600",
    summary:
      "Every modern business requires an authoritative online presence. We build custom websites, progressive web platforms, and mobile apps engineered for speed, mobile responsiveness, and high conversion.",
    milestones: [
      "Sub-second page load times across all mobile & desktop devices",
      "Brand positioning that commands industry trust on day one",
      "Lead capture architecture linked directly to your communication channels",
      "Technical SEO foundation configured for search indexing",
    ],
    techStack: ["Next.js 16", "React", "TypeScript", "Tailwind CSS", "Vercel Edge"],
    nextPrompt: "Once your foundation is solid, we activate customer acquisition channels.",
  },
  {
    step: "02",
    id: "stage-growth",
    title: "Business Growth",
    subtitle: "Generate Qualified Customer Demand & Pipeline",
    icon: TrendingUp,
    color: "from-indigo-500 to-violet-600",
    summary:
      "A high-performing digital presence must generate real commercial activity. We engineer targeted lead generation funnels, search marketing campaigns, and performance advertising to drive verified client enquiries.",
    milestones: [
      "Direct inbound lead flows via targeted Google & Meta campaigns",
      "Automated lead routing to WhatsApp, email, and sales reps in < 2 mins",
      "Reduced customer acquisition cost (CAC) through ongoing A/B testing",
      "Full-funnel attribution tracking with transparent ROI dashboards",
    ],
    techStack: ["Google Ads", "Meta Conversions API", "WhatsApp Business API", "GA4"],
    nextPrompt: "As customer demand increases, manual operations begin to hit limits.",
  },
  {
    step: "03",
    id: "stage-operations",
    title: "Digital Operations",
    subtitle: "Streamline Internal Workflows & Customer Platforms",
    icon: Workflow,
    color: "from-violet-500 to-purple-600",
    summary:
      "When business expands, spreadsheets and scattered tools slow down delivery. We build custom web applications, client portals, inventory dashboards, and internal software to bring clarity to daily operations.",
    milestones: [
      "Role-based client and staff dashboards with real-time permissions",
      "Centralized databases replacing fragmented spreadsheets and messaging apps",
      "End-to-end operational visibility from order placement to fulfillment",
      "Enterprise security, automated daily backups, and audit trails",
    ],
    techStack: ["PostgreSQL", "Supabase", "Node.js REST/GraphQL", "Prisma", "Docker"],
    nextPrompt: "With centralized systems in place, repetitive tasks can be fully automated.",
  },
  {
    step: "04",
    id: "stage-automation",
    title: "Automation",
    subtitle: "Eliminate Repetitive Tasks with Connected Pipelines",
    icon: Zap,
    color: "from-purple-500 to-pink-600",
    summary:
      "Free your team from copying data between systems, manual customer follow-ups, and invoice generation. We architect custom event-driven automation pipelines and webhook orchestrations.",
    milestones: [
      "Zero-touch data synchronization across CRM, accounting, and communication tools",
      "Automated trigger-based client alerts, onboarding emails, and status updates",
      "Dramatically reduced manual administrative hours every week",
      "Instant error logging and self-healing alert monitoring",
    ],
    techStack: ["Webhooks", "Serverless Functions", "Cloudflare Workers", "Cron Queues"],
    nextPrompt: "Now your business is primed to capitalize on artificial intelligence.",
  },
  {
    step: "05",
    id: "stage-ai",
    title: "AI & Emerging Technology",
    subtitle: "Deploy Intelligent Agents & Predictive Intelligence",
    icon: Sparkles,
    color: "from-pink-500 to-cyan-400",
    summary:
      "Adopt artificial intelligence where it creates measurable commercial impact. We integrate custom LLMs, document understanding pipelines, intelligent customer routing, and predictive business features.",
    milestones: [
      "Custom AI assistants trained on your internal documentation and catalog",
      "Automated document processing, invoice OCR, and instant data extraction",
      "Intelligent lead qualification and 24/7 conversational customer triage",
      "Future-proof architecture ready for autonomous agentic workflows",
    ],
    techStack: ["OpenAI API", "Vector Databases", "Embeddings", "Python AI Runtime"],
    nextPrompt: "Complete end-to-end digital maturity that keeps your business ahead.",
  },
];

export default function DigitalJourney() {
  const [activeStage, setActiveStage] = useState(0);

  const current = JOURNEY_STAGES[activeStage];
  const CurrentIcon = current.icon;

  return (
    <section id="journey" className="relative py-24 md:py-32 bg-[#0A0E1A] text-white overflow-hidden">
      {/* Background Grid & Lighting */}
      <div className="absolute inset-0 bg-grid-slate opacity-20 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>Digital + Technology Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            One Partner for Every Stage of Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-400">
              Digital Journey.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Our capabilities connect logically together. Whether you are launching your first modern digital presence or adopting advanced AI automation, Aarudhra scales with you.
          </p>
        </div>

        {/* Visual Interconnected Pipeline Nodes */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative">
            {JOURNEY_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`relative p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between group ${
                    isActive
                      ? "bg-gradient-to-b from-white/10 to-white/5 border-indigo-400/50 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-400/40"
                      : "bg-[#0E1424]/60 border-white/5 hover:border-white/20 hover:bg-[#0E1424]"
                  }`}
                >
                  {/* Top indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STAGE {stage.step}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-gradient-to-br " + stage.color + " text-white"
                          : "bg-white/[0.05] text-slate-400 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <div>
                    <h3
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      {stage.subtitle}
                    </p>
                  </div>

                  {/* Active bottom accent bar */}
                  {isActive && (
                    <motion.div
                      layoutId="journey-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl p-6 sm:p-10 bg-[#0C1222] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gradient corner */}
          <div
            className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${current.color} opacity-10 rounded-full blur-3xl pointer-events-none`}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Stage Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${current.color} text-white shadow-lg`}
                >
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                    STAGE {current.step} OF 05
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                {current.summary}
              </p>

              {/* Concrete deliverables / milestones */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Key Outcomes Delivered at this Stage
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.milestones.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Tech & Transition Card */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Production Technologies
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {current.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200 leading-relaxed mb-6">
                  <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    How this powers your next stage:
                  </div>
                  {current.nextPrompt}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md transition-all"
                >
                  <span>Build at this stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                {activeStage < JOURNEY_STAGES.length - 1 && (
                  <button
                    onClick={() => setActiveStage(activeStage + 1)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-all"
                  >
                    <span>Next: Stage {JOURNEY_STAGES[activeStage + 1].step}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
