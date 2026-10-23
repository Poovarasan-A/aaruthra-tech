"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ArrowUp,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Layers,
  TrendingUp,
  CheckCircle2,
  Smartphone,
  Cpu,
  Database,
  Activity,
  Zap,
  Server,
  Terminal,
  Lock,
  GitBranch,
  Laptop,
} from "lucide-react";

const capabilities = [
  {
    num: "01",
    title: "High-Performance Website Development",
    short: "Modern websites engineered with sub-second load times and high conversion velocity.",
    tags: ["Next.js 15", "Core Web Vitals 99+", "SEO Architecture", "Headless CMS"],
    previewText: "Sub-Second Edge Rendering",
    accent: "#793dff",
  },
  {
    num: "02",
    title: "Custom Web Applications & Portals",
    short: "Purpose-built client portals, internal operations dashboards, and SaaS backbones.",
    tags: ["Fullstack React/Node", "PostgreSQL", "Real-Time Telemetry", "Role-Based Auth"],
    previewText: "Custom Database & Role Auth",
    accent: "#8b5cf6",
  },
  {
    num: "03",
    title: "Cross-Platform Mobile Applications",
    short: "Fluid iOS & Android apps designed for smooth gestures, offline capability, and instant load.",
    tags: ["React Native", "Offline First", "Biometric Security", "Push Automations"],
    previewText: "Native iOS & Android Core",
    accent: "#793dff",
  },
  {
    num: "04",
    title: "Targeted Lead Generation & Local Visibility",
    short: "High-intent customer acquisition funnels connected directly to your CRM and sales team.",
    tags: ["Google Ads", "Local Maps Rank", "High-Intent Inbound", "CRM Routing"],
    previewText: "High-Intent Inbound Funnels",
    accent: "#8b5cf6",
  },
  {
    num: "05",
    title: "Systematic Digital Marketing Engines",
    short: "Measurable search and social acquisition campaigns built on data, not vanity metrics.",
    tags: ["Performance Marketing", "Meta Ads", "Content Systems", "Conversion Audits"],
    previewText: "Omnichannel Analytics & Meta API",
    accent: "#793dff",
  },
  {
    num: "06",
    title: "AI Workflows & Intelligent Automations",
    short: "Custom LLM integrations, conversational WhatsApp agents, and automated data pipelines.",
    tags: ["LLM Orchestration", "WhatsApp Bots", "Autonomous Pipelines", "Data Sync"],
    previewText: "Autonomous Webhook Pipelines",
    accent: "#8b5cf6",
  },
];

const whyUsPillars = [
  {
    id: "adaptable",
    index: "01",
    label: "Adaptable",
    title: "Custom to your business. Zero legacy lock-in.",
    lead: "Most agencies force your business into generic templates. We architect around your real operations.",
    body: "From custom workflows to multi-channel customer journeys, our codebases are modular and cleanly documented. You own 100% of your intellectual property, repositories, and cloud accounts from Day 1.",
    metricBadge: "Full IP",
    metricLabel: "Complete Source Code & Asset Transfer",
  },
  {
    id: "cost-efficient",
    index: "02",
    label: "Cost Efficient",
    title: "Rapid velocity. Direct engineering. Zero agency bloat.",
    lead: "No middle managers or billable hour inflation. You work directly with principal builders.",
    body: "We plan, design, and deploy in focused bi-weekly sprints. Every line of code serves a direct purpose for your product speed and business revenue.",
    metricBadge: "Direct",
    metricLabel: "Principal Engineers, Zero Agency Middlemen",
  },
  {
    id: "scalable",
    index: "03",
    label: "Scalable",
    title: "Your digital systems should flow effortlessly.",
    lead: "Built on serverless edge networks that automatically autoscale.",
    body: "Whether you're launching a new local business or scaling transactions across regions, our cloud-native architectures handle traffic spikes with sub-second latency.",
    metricBadge: "Global",
    metricLabel: "Serverless Cloud & Global Edge CDN",
  },
  {
    id: "ai-native",
    index: "04",
    label: "AI-Native",
    title: "Practical AI workflows where they actually save time.",
    lead: "Intelligent automations that eliminate hours of repetitive manual data handling.",
    body: "We implement custom AI assistants, WhatsApp automated qualification bots, and smart document parsers that integrate directly with your databases and spreadsheets.",
    metricBadge: "Active",
    metricLabel: "Autonomous LLM & Data Pipelines",
  },
  {
    id: "secure",
    index: "05",
    label: "Enterprise Secure",
    title: "Hardened security & complete peace of mind.",
    lead: "Built around enterprise encryption, strict authentication, and automated backups.",
    body: "Every application includes role-based access control (RBAC), environment secret isolation, encrypted data storage, and strict automated linting before deployment.",
    metricBadge: "Hardened",
    metricLabel: "Enterprise Encryption & Strict RBAC",
  },
];

const techStackCategories = [
  {
    category: "Frontend & User Interface",
    icon: Laptop,
    description: "Modern, reactive interfaces with instant transitions and sub-second load times.",
    technologies: [
      { name: "Next.js 15", role: "App Router & React Server Components" },
      { name: "React 19", role: "Concurrent Mode & Optimistic State" },
      { name: "TypeScript", role: "Strict Type Safety & Zero Any" },
      { name: "Tailwind CSS", role: "Utility-First Responsive Styling" },
      { name: "Framer Motion", role: "Hardware-Accelerated Fluid Micro-Interactions" },
    ],
  },
  {
    category: "Backend & Cloud Architecture",
    icon: Server,
    description: "Scalable serverless APIs and databases built for high reliability and speed.",
    technologies: [
      { name: "Node.js / Python", role: "High-Throughput API Services" },
      { name: "PostgreSQL", role: "ACID Compliant Relational Database" },
      { name: "Prisma ORM", role: "Type-Safe Database Schema & Queries" },
      { name: "Vercel & AWS", role: "Global Edge Infrastructure & Serverless" },
      { name: "Redis", role: "In-Memory Caching & Session Management" },
    ],
  },
  {
    category: "AI, Automations & Integrations",
    icon: Cpu,
    description: "Intelligent agent workflows that automate manual operations without bloat.",
    technologies: [
      { name: "OpenAI & Claude LLMs", role: "Conversational & Analytical Intelligence" },
      { name: "WhatsApp Business API", role: "Instant Inbound Customer Routing" },
      { name: "LangChain & Function Calling", role: "Autonomous Tool Integration" },
      { name: "Webhook Pipelines", role: "Real-Time CRM & Calendar Sync" },
      { name: "Payment Gateways", role: "Stripe & Razorpay Checkout Flows" },
    ],
  },
  {
    category: "Security & DevOps Standards",
    icon: Lock,
    description: "Hardened development and continuous deployment with zero downtime.",
    technologies: [
      { name: "GitHub Actions CI/CD", role: "Automated Testing & Build Verification" },
      { name: "Role-Based Auth (RBAC)", role: "Secure Multi-Tenant Permissions" },
      { name: "Cloudflare Edge", role: "DDoS Mitigation & Fast SSL Routing" },
      { name: "Automated Backups", role: "Daily Database Snapshots & Recovery" },
      { name: "OWASP Hardening", role: "Sanitized Inputs & XSS / CSRF Defense" },
    ],
  },
];

const architecturalGuarantees = [
  {
    icon: Code2,
    tag: "Clean Code",
    title: "Clean Code Guarantee",
    desc: "Strict TypeScript, modular component architecture, and zero bloated page-builder plugins. Clean, readable code you can maintain for years.",
  },
  {
    icon: ShieldCheck,
    tag: "Full Handover",
    title: "100% IP & Asset Ownership",
    desc: "You receive full ownership of Git repositories, Figma design files, cloud deployment configs, and API keys. No vendor lock-in ever.",
  },
  {
    icon: Zap,
    tag: "Edge Speed",
    title: "Sub-Second Performance",
    desc: "Optimized Core Web Vitals, serverless edge caching, and lightweight bundle assets for top Google search rankings and instantaneous browsing.",
  },
  {
    icon: GitBranch,
    tag: "Direct Access",
    title: "Direct Engineering Access",
    desc: "Collaborate directly with the engineers building your software via dedicated WhatsApp or Slack channels. No agency bureaucracy.",
  },
];

const faqs = [
  [
    "Is this suitable for early-stage startups and small businesses?",
    "Yes. Our work is deliberately tailored for businesses that need a strong, dependable digital foundation without unnecessary technical bloat, inflated retainer fees, or platform lock-in.",
  ],
  [
    "How does your AI and automation integration work?",
    "We identify where your business spends repetitive manual time—such as handling initial customer inquiries, compiling quotes, or routing CRM leads—and build custom automated pipelines using reliable LLMs and APIs.",
  ],
  [
    "Which service should my business start with?",
    "Most clients begin with their core digital presence: an ultra-fast, modern website or customer portal. Once your digital foundation converts visitors reliably, we activate targeted search visibility, marketing campaigns, and workflow automations.",
  ],
  [
    "How involved will our team need to be during the build?",
    "You only need to attend concise milestone reviews (usually 30 minutes weekly) to approve design direction and feature releases. Our engineers handle 100% of the technical execution.",
  ],
  [
    "Do you offer ongoing support, updates, and maintenance?",
    "Yes. We provide continuous maintenance, cloud infrastructure monitoring, security audits, and dedicated monthly development sprints so your platform evolves alongside your business.",
  ],
  [
    "Do we own the source code and designs upon completion?",
    "Yes, completely. Once the project is delivered, full intellectual property, source repositories, assets, and deployment keys belong 100% to your company.",
  ],
];

const whatsapp =
  "https://wa.me/919944100940?text=Hello%20Aarudhra%20Technologies%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const smoothEase = [0.2, 0, 0, 1] as const;

export default function Site() {
  const [activePillar, setActivePillar] = useState(0);
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [notice, setNotice] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "High-Performance Website Development",
    requirement: "",
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setNotice("Please provide your name and phone number.");
      return;
    }
    const msg = `Hello Aarudhra Technologies!\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nRequirement: ${
      form.requirement || "I'd like to schedule a strategy call."
    }`;
    window.open(`https://wa.me/919944100940?text=${encodeURIComponent(msg)}`, "_blank");
    setNotice("Opening WhatsApp with your project brief...");
  };

  return (
    <div className="bg-[#f2f1ed] text-[#121212] min-h-screen selection:bg-[#793dff] selection:text-white font-sans overflow-x-clip">
      {/* Scroll Reading Progress Bar */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-7 right-7 z-50 w-11 h-11 rounded-full bg-[#121212] text-white border border-white/20 flex items-center justify-center shadow-2xl hover:bg-[#793dff] hover:scale-105 transition-all duration-200 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Navigation Header */}
      <Navbar />

      <main id="top" className="pt-[76px]">
        {/* ============================================================
            1. HERO SECTION (Fluent Commerce Dark Theme & Aesthetics)
            ============================================================ */}
        <section id="home" className="relative bg-[#101012] text-white pt-24 pb-28 md:pt-36 md:pb-40 overflow-hidden">
          {/* Ambient Lighting Gradient Orbs */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(121, 61, 255, 0.45) 0%, rgba(56, 189, 248, 0.15) 45%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />

          {/* Dotted Grid Canvas Overlay */}
          <div className="fc-dot-grid-dark absolute inset-0 pointer-events-none opacity-40" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center">
            {/* Kicker Badge */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="font-mono text-xs sm:text-[13px] tracking-[0.14em] uppercase text-white/90 mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#793dff] animate-pulse" />
              <span>hey. we’re Aarudhra Technologies.</span>
            </motion.p>

            {/* Main Editorial Display Headline in Instrument Serif */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: smoothEase }}
              className="font-display font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.02] tracking-[-0.02em] text-white max-w-5xl mx-auto"
            >
              The smart, seamless way to build &amp; scale digital products.
            </motion.h1>

            {/* Subheading with Inline Pill Highlight */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: smoothEase }}
              className="font-sans text-base sm:text-lg md:text-[20px] text-white/80 max-w-2xl mx-auto mt-7 leading-relaxed font-normal"
            >
              We’re quick. We’re nimble. We’re AI-native. We craft{" "}
              <span className="fc-mark--fill">modern web platforms &amp; growth systems</span> that actually harmonize
              with your business. (And never clash with it.)
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
              className="flex flex-wrap items-center justify-center gap-4 mt-9"
            >
              <a href="#contact" className="fc-btn fc-btn--fill">
                <span>Start a project</span>
                <svg className="fc-btn__arrow" width="22" height="14" viewBox="0 0 22 14" fill="none">
                  <path
                    d="M0 7 H19 M14 2 L19 7 L14 12"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a href="#services" className="fc-btn fc-btn--light">
                <span>Explore capabilities</span>
                <svg className="fc-btn__arrow" width="22" height="14" viewBox="0 0 22 14" fill="none">
                  <path
                    d="M0 7 H19 M14 2 L19 7 L14 12"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Live Interactive Architecture Visual (No Fake Numbers) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: smoothEase }}
              className="max-w-4xl mx-auto mt-16 relative"
            >
              <div className="relative rounded-2xl bg-[#17171c] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)] p-6 sm:p-8 text-left overflow-hidden">
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                    <span className="font-mono text-xs text-white/50 ml-3">aarudhra.tech/architecture</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#793dff]/15 border border-[#793dff]/30 text-[11px] font-mono text-[#8b5cf6]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#36b53f] animate-pulse" />
                    <span>Edge Engine Online</span>
                  </div>
                </div>

                {/* Architecture Specs - Honest & Technically Sound */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    <div className="flex items-center justify-between text-white/50 text-xs font-mono mb-1">
                      <span>FRONTEND CORE</span>
                      <Laptop size={14} className="text-[#38bdf8]" />
                    </div>
                    <div className="font-sans text-xl font-semibold text-white">Next.js 15</div>
                    <p className="text-[12px] text-white/60 mt-1">App Router &amp; Server Components</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    <div className="flex items-center justify-between text-white/50 text-xs font-mono mb-1">
                      <span>CODE STANDARD</span>
                      <Code2 size={14} className="text-[#ffd000]" />
                    </div>
                    <div className="font-sans text-xl font-semibold text-white">TypeScript</div>
                    <p className="text-[12px] text-white/60 mt-1">Strict types &amp; zero legacy bloat</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    <div className="flex items-center justify-between text-white/50 text-xs font-mono mb-1">
                      <span>DATA LAYER</span>
                      <Database size={14} className="text-[#793dff]" />
                    </div>
                    <div className="font-sans text-xl font-semibold text-white">PostgreSQL</div>
                    <p className="text-[12px] text-white/60 mt-1">Prisma ORM &amp; real-time sync</p>
                  </div>
                </div>

                {/* Live Activity Wire */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#121215] border border-white/10 text-xs text-white/70">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#793dff]" />
                    <span className="font-mono text-[11px] text-white">AUTOMATION PIPELINE:</span>
                    <span className="hidden sm:inline text-white/60">
                      Inbound Inquiry → Edge Route (&lt;15ms) → WhatsApp Webhook → Instant Lead Capture
                    </span>
                    <span className="sm:hidden text-white/60">Automated Webhook Active</span>
                  </div>
                  <span className="font-mono text-[#36b53f] font-semibold">Active</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            2. INFINITE MARQUEE TICKER BAND (Fluent Style)
            ============================================================ */}
        <div className="fc-marquee-band">
          <div className="fc-marquee-track">
            {[
              "ACCELERATE TIME-TO-MARKET",
              "AI-NATIVE ARCHITECTURES",
              "ENTERPRISE CLOUD SCALABILITY",
              "REVENUE-DRIVEN DIGITAL PLATFORMS",
              "ZERO LEGACY BLOAT",
              "SUB-SECOND CORE WEB VITALS",
              "CHENNAI · COIMBATORE · MADURAI · GLOBAL",
              "ACCELERATE TIME-TO-MARKET",
              "AI-NATIVE ARCHITECTURES",
              "ENTERPRISE CLOUD SCALABILITY",
              "REVENUE-DRIVEN DIGITAL PLATFORMS",
              "ZERO LEGACY BLOAT",
              "SUB-SECOND CORE WEB VITALS",
              "CHENNAI · COIMBATORE · MADURAI · GLOBAL",
            ].map((text, idx) => (
              <span key={idx} className="flex items-center gap-6 font-mono text-[13px] tracking-widest text-[#f2f1ed]/90 uppercase whitespace-nowrap">
                <span>{text}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#793dff]" />
              </span>
            ))}
          </div>
        </div>

        {/* ============================================================
            3. EDITORIAL NARRATIVE SPLIT SECTION (Fluent Style)
            ============================================================ */}
        <section className="py-24 sm:py-32 bg-[#f2f1ed]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-6">
                <h2 className="font-display font-normal text-4xl sm:text-5xl md:text-6xl text-[#121212] leading-[1.05] tracking-tight">
                  You’ll wonder how you managed without it.
                </h2>
              </div>

              <div className="lg:col-span-6 space-y-6 text-[#121212]/75 font-sans text-base sm:text-[18px] leading-relaxed">
                <p className="font-medium text-[#121212]">
                  Aarudhra Technologies is like a world-class conductor.
                </p>
                <p>
                  Always in control. Always one step ahead. Combining clean, modern web engineering with intelligent
                  automation so that you can make decisions based on what’s happening right now. Not two months ago.
                </p>
                <p>
                  No bloated agency retainers. No endless meetings with non-technical middle managers. Just clear, high-velocity
                  craftsmanship delivered on time.
                </p>
                <p className="font-medium text-[#121212] pt-2">
                  Sound like a nice change of pace?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            4. "WHY US" INTERACTIVE CIRCUIT DIAGRAM & STICKY RAIL
            ============================================================ */}
        <section id="why-us" className="py-24 sm:py-32 bg-white border-y border-[rgba(18,18,18,0.12)] relative">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            {/* Section Head */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-widest text-[#793dff] font-semibold mb-3">
                Why Partner With Us?
              </p>
              <h2 className="font-display font-normal text-4xl sm:text-5xl md:text-6xl text-[#121212] leading-[1.05]">
                Finding the right technology team used to be hard. We make it simple.
              </h2>
              <p className="text-[#121212]/60 text-base sm:text-lg mt-4 font-normal">
                (You’re welcome.)
              </p>
            </div>

            {/* Interactive Animated SVG Circuit Strip */}
            <div className="fc-dot-grid rounded-2xl border border-[rgba(18,18,18,0.12)] p-6 sm:p-10 mb-16 relative overflow-hidden bg-[#fafaf8]">
              {/* Circuit SVG Lines */}
              <div className="hidden md:block relative w-full h-[80px]">
                <svg className="w-full h-full" viewBox="0 0 1000 80" preserveAspectRatio="none" fill="none">
                  <path
                    d="M 50 40 H 950"
                    stroke="#793dff"
                    strokeWidth="2"
                    strokeDasharray="6 8"
                    className="fc-circuit-wire"
                  />
                </svg>
              </div>

              {/* 5 Interactive Pillars Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
                {whyUsPillars.map((pillar, idx) => {
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillar(idx)}
                      className={`flex flex-col sm:flex-row items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#793dff] text-white border-[#793dff] shadow-lg scale-[1.02]"
                          : "bg-white text-[#121212] border-[rgba(18,18,18,0.14)] hover:border-[#793dff]"
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${isActive ? "bg-white" : "bg-[#793dff]"}`} />
                      <span className="font-sans font-semibold text-sm whitespace-nowrap">{pillar.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Split Rail: Left Navigation + Right Pane */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Sticky Rail */}
              <div className="lg:col-span-4 sticky top-28 space-y-1">
                {whyUsPillars.map((pillar, idx) => {
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillar(idx)}
                      className={`w-full text-left fc-whyrail__link ${isActive ? "is-active" : ""}`}
                    >
                      <span className="fc-whyrail__index">{pillar.index}</span>
                      <span className="font-sans font-semibold text-[16px] text-left leading-snug">
                        {pillar.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Active Content Display */}
              <div className="lg:col-span-8 bg-[#f2f1ed] border border-[rgba(18,18,18,0.12)] rounded-2xl p-8 sm:p-12 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-[#793dff]/15 text-[#793dff] font-semibold">
                      Pillar {whyUsPillars[activePillar].index}
                    </span>
                    <span className="font-sans text-xs text-[#121212]/50 font-medium">
                      Architectural Commitment
                    </span>
                  </div>

                  <h3 className="font-display font-normal text-3xl sm:text-4xl text-[#121212] leading-[1.1] mb-6">
                    {whyUsPillars[activePillar].title}
                  </h3>

                  <p className="font-sans font-medium text-lg text-[#121212]/90 leading-relaxed mb-4">
                    {whyUsPillars[activePillar].lead}
                  </p>

                  <p className="font-sans text-[#121212]/70 leading-relaxed text-[16px]">
                    {whyUsPillars[activePillar].body}
                  </p>
                </div>

                {/* Architectural Commitment Badge */}
                <div className="pt-8 border-t border-[rgba(18,18,18,0.12)] mt-8 flex flex-wrap items-center gap-4">
                  <div className="px-4 py-2 rounded-xl bg-[#793dff]/15 text-[#793dff] font-mono text-xl sm:text-2xl font-bold">
                    {whyUsPillars[activePillar].metricBadge}
                  </div>
                  <div className="font-sans font-semibold text-sm text-[#121212]/80">
                    {whyUsPillars[activePillar].metricLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            5. NUMBERED CAPABILITIES LIST WITH HOVER SLEEVE PREVIEW
            ============================================================ */}
        <section id="services" className="py-24 sm:py-32 bg-[#f2f1ed]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-16">
              <p className="font-mono text-xs uppercase tracking-widest text-[#793dff] font-semibold mb-3">
                Capabilities
              </p>
              <h2 className="font-display font-normal text-4xl sm:text-5xl md:text-6xl text-[#121212] leading-[1.05]">
                Never box yourself in.
              </h2>
              <p className="font-sans text-[#121212]/70 text-base sm:text-lg mt-4">
                With typical agencies, what you see is all you get. With Aarudhra, it’s just the beginning.
              </p>
            </div>

            {/* Hover Caplist */}
            <div className="fc-caplist">
              {capabilities.map((cap, idx) => (
                <div
                  key={cap.num}
                  className="fc-caprow"
                  onMouseEnter={() => setHoveredCapability(idx)}
                  onMouseLeave={() => setHoveredCapability(null)}
                >
                  <div className="flex items-center gap-6 sm:gap-8 flex-1 min-w-0">
                    <span className="fc-caprow__index">{cap.num}</span>
                    <div>
                      <h3 className="font-sans font-semibold text-lg sm:text-xl md:text-2xl text-[#121212] tracking-tight">
                        {cap.title}
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-[#121212]/60 mt-0.5">
                        {cap.short}
                      </p>
                    </div>
                  </div>

                  {/* Floating Sleeve Preview Card (appears on hover) */}
                  <div className="fc-caprow__sleeve">
                    <div className="p-4 rounded-xl bg-[#121212] text-white border border-white/20 shadow-2xl">
                      <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-2">
                        <span>CAPABILITY BRIEF</span>
                        <span className="text-[#8b5cf6]">{cap.previewText}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {cap.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/90"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="flex-shrink-0 text-sm font-sans font-semibold text-[#121212] hover:text-[#793dff] flex items-center gap-2"
                  >
                    <span className="hidden sm:inline">Discuss</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            6. ANIMATED BENTO FEATURE CARDS ("But wait. There's more.")
            ============================================================ */}
        <section id="solutions" className="py-24 sm:py-32 bg-white border-y border-[rgba(18,18,18,0.12)]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display font-normal text-4xl sm:text-5xl md:text-6xl text-[#121212] leading-[1.05]">
                But wait. There’s more.
              </h2>
              <p className="font-sans font-semibold text-[#121212]/60 text-base sm:text-lg mt-3">
                (Or schedule a discovery call right now?)
              </p>
              <div className="mt-6 flex justify-center">
                <a href="#contact" className="fc-btn fc-btn--dark">
                  <span>Book your slot</span>
                  <svg className="fc-btn__arrow" width="22" height="14" viewBox="0 0 22 14" fill="none">
                    <path
                      d="M0 7 H19 M14 2 L19 7 L14 12"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* 3 Bento Cards with Dotted Canvas & Animated SVG Artwork */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card 1: Release */}
              <div className="border border-[rgba(18,18,18,0.14)] rounded-2xl p-6 sm:p-8 bg-[#fafaf8] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square w-full rounded-xl fc-dot-grid border border-[rgba(18,18,18,0.1)] p-6 flex flex-col justify-between mb-6 bg-white relative overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#121212]/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#121212]/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#121212]/30" />
                  </div>
                  {/* Animated Code Release Diagram */}
                  <div className="space-y-3">
                    <div className="h-2 w-3/4 rounded bg-[#121212]/15" />
                    <div className="h-2 w-1/2 rounded bg-[#121212]/15" />
                    <div className="flex items-center justify-between pt-4 border-t border-[rgba(18,18,18,0.1)]">
                      <div className="w-8 h-8 rounded-full bg-[#793dff] text-white flex items-center justify-center">
                        <Check size={16} />
                      </div>
                      <div className="h-1 flex-1 mx-3 bg-[#e0daeb] rounded overflow-hidden">
                        <div className="h-full bg-[#793dff] w-4/5 animate-pulse" />
                      </div>
                      <ArrowRight size={18} className="text-[#793dff]" />
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-[#121212]/40 uppercase tracking-wider">
                    Continuous Deployment
                  </div>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-2xl text-[#121212] mb-2">
                    Release
                  </h3>
                  <p className="font-sans text-[15px] text-[#121212]/70 leading-relaxed">
                    New features shipped with zero downtime and automated regression safeguards.
                  </p>
                </div>
              </div>

              {/* Card 2: Enable AI */}
              <div className="border border-[rgba(18,18,18,0.14)] rounded-2xl p-6 sm:p-8 bg-[#fafaf8] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square w-full rounded-xl fc-dot-grid border border-[rgba(18,18,18,0.1)] p-6 flex flex-col justify-between mb-6 bg-white relative overflow-hidden">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-xl bg-[#793dff]/15 text-[#793dff] flex items-center justify-center">
                      <Sparkles size={20} />
                    </div>
                    <span className="font-mono text-[10px] bg-[#793dff] text-white px-2 py-0.5 rounded-full">
                      LLM AGENT
                    </span>
                  </div>

                  {/* Fan Wires Diagram */}
                  <div className="grid grid-cols-3 gap-2 my-auto">
                    <div className="p-2 rounded bg-[#f2f1ed] text-center">
                      <Database size={16} className="mx-auto text-[#121212]/60 mb-1" />
                      <span className="text-[9px] font-mono text-[#121212]/70">Database</span>
                    </div>
                    <div className="p-2 rounded bg-[#f2f1ed] text-center">
                      <MessageCircle size={16} className="mx-auto text-[#121212]/60 mb-1" />
                      <span className="text-[9px] font-mono text-[#121212]/70">WhatsApp</span>
                    </div>
                    <div className="p-2 rounded bg-[#f2f1ed] text-center">
                      <Cpu size={16} className="mx-auto text-[#121212]/60 mb-1" />
                      <span className="text-[9px] font-mono text-[#121212]/70">CRM Sync</span>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-[#121212]/40 uppercase tracking-wider">
                    Autonomous Workflows
                  </div>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-2xl text-[#121212] mb-2">
                    Enable
                  </h3>
                  <p className="font-sans text-[15px] text-[#121212]/70 leading-relaxed">
                    AI agents to take action anywhere in your customer communication and operations.
                  </p>
                </div>
              </div>

              {/* Card 3: Scale */}
              <div className="border border-[rgba(18,18,18,0.14)] rounded-2xl p-6 sm:p-8 bg-[#fafaf8] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square w-full rounded-xl fc-dot-grid border border-[rgba(18,18,18,0.1)] p-6 flex flex-col justify-between mb-6 bg-white relative overflow-hidden">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs text-[#121212]/50">GLOBAL CDN</span>
                    <span className="w-2 h-2 rounded-full bg-[#36b53f] animate-ping" />
                  </div>

                  {/* Orbital Graphic */}
                  <div className="relative w-32 h-32 mx-auto my-auto flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#793dff]/40 animate-spin" style={{ animationDuration: "14s" }} />
                    <div className="w-16 h-16 rounded-full bg-[#efeafe] text-[#793dff] flex items-center justify-center font-bold">
                      <Globe2 size={28} />
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-[#121212]/40 uppercase tracking-wider">
                    Elastic Architecture
                  </div>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-2xl text-[#121212] mb-2">
                    Extend
                  </h3>
                  <p className="font-sans text-[15px] text-[#121212]/70 leading-relaxed">
                    The platform to meet every regional expansion and business edge case.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            7. FULL-BLEED DARK WAVE BAND (Fluent Style)
            ============================================================ */}
        <section className="bg-[#121212] text-white py-28 relative overflow-hidden">
          {/* Subtle luminous ambient mesh glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(121, 61, 255, 0.5) 0%, rgba(56, 189, 248, 0.2) 60%, transparent 80%)",
              filter: "blur(90px)",
            }}
          />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center max-w-3xl">
            <h2 className="font-display font-normal text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05]">
              We’re making waves.
            </h2>

            <div className="space-y-4 my-8 text-white/70 font-sans text-base sm:text-lg leading-relaxed">
              <p>
                Engineered for ambitious businesses. We combine startup velocity with the architectural rigor
                of modern software engineering. High performance, zero legacy debt, and complete technical transparency.
              </p>
              <p>
                Very impressive? Yes. A little nerdy? Absolutely.
              </p>
            </div>

            <div className="flex justify-center">
              <a href="#work" className="fc-btn fc-btn--fill">
                <span>View engineering standards</span>
                <svg className="fc-btn__arrow" width="22" height="14" viewBox="0 0 22 14" fill="none">
                  <path
                    d="M0 7 H19 M14 2 L19 7 L14 12"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            8. ARCHITECTURAL GUARANTEES & TECH STACK BLUEPRINT (REPLACED UNPROVEN METRICS)
            ============================================================ */}
        <section id="work" className="py-24 sm:py-32 bg-[#f2f1ed]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-widest text-[#793dff] font-semibold mb-3">
                Engineering Foundations
              </p>
              <h2 className="font-display font-normal text-4xl sm:text-5xl md:text-6xl text-[#121212] leading-[1.05]">
                Built on modern foundations. No legacy shortcuts.
              </h2>
              <p className="font-sans text-[#121212]/70 text-base sm:text-lg mt-4 font-normal">
                We select battle-tested, modern technologies and strict development practices so your software is secure,
                ultra-fast, and built to scale effortlessly.
              </p>
            </div>

            {/* 4 Architectural Commitments / Guarantees Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {architecturalGuarantees.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-7 rounded-2xl bg-white border border-[rgba(18,18,18,0.12)] shadow-sm hover:border-[#793dff] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-[#793dff]/10 text-[#793dff] flex items-center justify-center group-hover:bg-[#793dff] group-hover:text-white transition-colors">
                          <IconComponent size={20} />
                        </div>
                        <span className="font-mono text-[11px] font-semibold text-[#793dff] bg-[#793dff]/10 px-2 py-0.5 rounded">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="font-sans font-semibold text-lg text-[#121212] mb-2.5">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#121212]/65 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Comprehensive Modern Tech Stack Matrix */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl text-[#121212]">
                    Our Technology Stack Matrix
                  </h3>
                  <p className="text-[#121212]/60 text-sm sm:text-base mt-1">
                    Every layer chosen for maximum runtime performance, developer velocity, and maintainability.
                  </p>
                </div>
                <div className="font-mono text-xs text-[#793dff] font-semibold tracking-wider uppercase">
                  Production-Ready Standards
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {techStackCategories.map((cat) => {
                  const CatIcon = cat.icon;
                  return (
                    <div
                      key={cat.category}
                      className="bg-white border border-[rgba(18,18,18,0.12)] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-9 h-9 rounded-lg bg-[#f2f1ed] text-[#793dff] flex items-center justify-center">
                            <CatIcon size={18} />
                          </div>
                          <div>
                            <h4 className="font-sans font-semibold text-lg text-[#121212]">
                              {cat.category}
                            </h4>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-[#121212]/65 mb-6">
                          {cat.description}
                        </p>

                        <div className="space-y-3 border-t border-[rgba(18,18,18,0.08)] pt-4">
                          {cat.technologies.map((tech) => (
                            <div key={tech.name} className="flex items-center justify-between text-xs sm:text-sm py-1">
                              <span className="font-mono font-medium text-[#121212] bg-[#f2f1ed] px-2 py-0.5 rounded">
                                {tech.name}
                              </span>
                              <span className="text-[#121212]/60 text-[12.5px] text-right ml-3">
                                {tech.role}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            9. ABOUT & LEADERSHIP NARRATIVE (Editorial style)
            ============================================================ */}
        <section id="about" className="py-24 sm:py-32 bg-white border-y border-[rgba(18,18,18,0.12)]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Founder Portrait with Fluent Card Framing */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-square max-w-[420px] mx-auto rounded-2xl overflow-hidden border border-[rgba(18,18,18,0.15)] shadow-2xl bg-[#121212]">
                  <Image
                    src="/founder.jpeg"
                    alt="Aarudhra Technologies Founder"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#121212]/85 backdrop-blur-md border border-white/10 text-white">
                    <div className="font-sans font-semibold text-lg">Sharan</div>
                    <div className="text-xs text-white/60 font-mono">Founder &amp; Principal Architect</div>
                  </div>
                </div>
              </div>

              {/* Editorial About Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[#793dff] font-semibold">
                  About Aarudhra Technologies
                </p>
                <h2 className="font-display font-normal text-4xl sm:text-5xl text-[#121212] leading-[1.05]">
                  Technology thinking with a practical business perspective.
                </h2>
                <p className="font-sans text-[#121212]/75 text-base sm:text-lg leading-relaxed">
                  We started Aarudhra because we saw businesses paying exorbitant sums to traditional agencies that delivered
                  sluggish templates, technical debt, and zero commercial accountability.
                </p>
                <p className="font-sans text-[#121212]/75 text-base sm:text-lg leading-relaxed">
                  We combine the agility of modern AI tools, the rigor of clean software architecture, and the focus of direct
                  revenue growth. You talk directly to builders who care about your balance sheet.
                </p>

                {/* 4 Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-[#f2f1ed] border border-[rgba(18,18,18,0.1)]">
                    <div className="font-sans font-semibold text-sm text-[#121212] mb-1">Direct Engineering Access</div>
                    <p className="text-xs text-[#121212]/60">Work directly with core developers, not non-technical account managers.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f2f1ed] border border-[rgba(18,18,18,0.1)]">
                    <div className="font-sans font-semibold text-sm text-[#121212] mb-1">Guaranteed Sprints</div>
                    <p className="text-xs text-[#121212]/60">Fixed milestone scopes and transparent launch dates without surprises.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            10. STRAIGHTFORWARD PROCESS (01 - 05)
            ============================================================ */}
        <section className="py-24 sm:py-32 bg-[#f2f1ed]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-mono text-xs uppercase tracking-widest text-[#793dff] font-semibold mb-3">
                Execution Workflow
              </p>
              <h2 className="font-display font-normal text-4xl sm:text-5xl md:text-6xl text-[#121212] leading-[1.05]">
                Discover. Strategize. Build. Launch. Grow.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: "01", name: "Discover", desc: "Understand your operational bottleneck, target audience, and business targets." },
                { step: "02", name: "Strategize", desc: "Architect the optimal data model, tech stack, and user conversion pathway." },
                { step: "03", name: "Build", desc: "Sprint execution with clean TypeScript code, automated tests, and weekly demos." },
                { step: "04", name: "Launch", desc: "Audited deployment with 99+ Core Web Vitals, security hardening, and DNS sync." },
                { step: "05", name: "Grow", desc: "Telemetry monitoring, conversion optimization, and continuous AI automations." },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white border border-[rgba(18,18,18,0.12)] rounded-xl p-6 flex flex-col justify-between hover:border-[#793dff] transition-colors"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#793dff] mb-4 block">
                      {item.step}
                    </span>
                    <h3 className="font-sans font-semibold text-lg text-[#121212] mb-2">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#121212]/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            11. FAQS ACCORDION SECTION
            ============================================================ */}
        <section id="faqs" className="py-24 sm:py-32 bg-white border-y border-[rgba(18,18,18,0.12)]">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
            <div className="text-center mb-16">
              <p className="font-mono text-xs uppercase tracking-widest text-[#793dff] font-semibold mb-3">
                Questions &amp; Answers
              </p>
              <h2 className="font-display font-normal text-4xl sm:text-5xl text-[#121212] leading-[1.05]">
                Good questions make better projects.
              </h2>
            </div>

            <div className="divide-y divide-[rgba(18,18,18,0.12)] border-y border-[rgba(18,18,18,0.12)]">
              {faqs.map(([q, a], idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={q} className="py-5">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left font-sans font-semibold text-lg text-[#121212] hover:text-[#793dff] transition-colors py-1 cursor-pointer"
                    >
                      <span className="pr-4">{q}</span>
                      <ChevronDown
                        size={18}
                        className={`flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#793dff]" : "text-[#121212]/40"
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="font-sans text-[#121212]/70 text-base leading-relaxed pt-3 pb-1 font-normal">
                            {a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            12. INTERACTIVE CONTACT / WHATSAPP PLANNER (Fluent Style)
            ============================================================ */}
        <section id="contact" className="py-24 sm:py-32 bg-[#121212] text-white relative overflow-hidden">
          {/* Subtle Ambient Radial Lighting */}
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[500px] pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(121, 61, 255, 0.4) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Narrative & Direct Lines */}
              <div className="lg:col-span-5 space-y-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[#793dff] font-semibold">
                  Start a conversation
                </p>
                <h2 className="font-display font-normal text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05]">
                  Have a challenge or idea? Let’s build the solution.
                </h2>
                <p className="font-sans text-white/70 text-base sm:text-lg leading-relaxed">
                  Tell us what you’re working toward. We’ll review your technical requirements and suggest the most
                  cost-efficient, future-proof route forward.
                </p>

                {/* Direct Contacts */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <a
                    href="tel:+919944100940"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#793dff] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#793dff]/15 text-[#793dff] flex items-center justify-center flex-shrink-0 group-hover:bg-[#793dff] group-hover:text-white transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-white text-sm">+91 99441 00940</div>
                      <div className="text-xs text-white/50">Direct Engineering Architecture Line</div>
                    </div>
                  </a>

                  <a
                    href="mailto:aarudhrawebsolutions@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#793dff] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#793dff]/15 text-[#793dff] flex items-center justify-center flex-shrink-0 group-hover:bg-[#793dff] group-hover:text-white transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-white text-sm">aarudhrawebsolutions@gmail.com</div>
                      <div className="text-xs text-white/50">Project RFPs &amp; Documentation</div>
                    </div>
                  </a>

                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#36b53f] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#36b53f]/15 text-[#36b53f] flex items-center justify-center flex-shrink-0 group-hover:bg-[#36b53f] group-hover:text-white transition-colors">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-white text-sm">WhatsApp Instant Chat</div>
                      <div className="text-xs text-[#36b53f]">Response under 30 minutes</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Pill Form */}
              <div className="lg:col-span-7 bg-[#17171c] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl">
                <h3 className="font-sans font-semibold text-xl text-white mb-6">
                  Project Consultation Brief
                </h3>

                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                      Full Name *
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full h-12 px-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#793dff] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                      Phone Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      placeholder="e.g. +91 98765 43210"
                      className="w-full h-12 px-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#793dff] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                      Primary Service Requirement
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-[#1f1f24] border border-white/10 text-white text-sm focus:outline-none focus:border-[#793dff] transition-colors"
                    >
                      {capabilities.map((c) => (
                        <option key={c.title} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                      Brief Requirement or Goals
                    </label>
                    <textarea
                      value={form.requirement}
                      onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                      rows={3}
                      placeholder="Tell us what you want to build, modernize, or achieve..."
                      className="w-full p-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#793dff] transition-colors resize-none"
                    />
                  </div>

                  <AnimatePresence>
                    {notice && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs font-mono text-[#36b53f] pt-1"
                      >
                        {notice}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <button type="submit" className="fc-btn fc-btn--violet w-full justify-center">
                    <span>Submit &amp; Open WhatsApp Brief</span>
                    <svg className="fc-btn__arrow" width="22" height="14" viewBox="0 0 22 14" fill="none">
                      <path
                        d="M0 7 H19 M14 2 L19 7 L14 12"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
