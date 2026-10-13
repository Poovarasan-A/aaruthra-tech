"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  X,
  CheckCircle2,
} from "lucide-react";

export interface Article {
  id: string;
  category: "technology" | "ai" | "growth" | "business" | "marketing";
  categoryLabel: string;
  title: string;
  readTime: string;
  date: string;
  excerpt: string;
  keyTakeaways: string[];
  fullSummary: string;
}

const ARTICLES: Article[] = [
  {
    id: "art-1",
    category: "technology",
    categoryLabel: "Technology",
    title: "Why Sub-Second Page Velocity & Core Web Vitals Dictate Real Commercial Conversion",
    readTime: "5 min read",
    date: "Updated March 2026",
    excerpt:
      "A slow website does more than hurt Google rankings—it silently drains qualified buyer interest. How modern Next.js architectures prevent mobile bounce rates.",
    keyTakeaways: [
      "Every 100ms of latency reduction correlates with a 1.2% lift in completed customer enquiries.",
      "Mobile visitors abandon sites taking longer than 2.4 seconds to achieve First Contentful Paint.",
      "Next.js 16 Edge SSR delivers pre-rendered content from closest edge servers, ensuring instantaneous interaction.",
    ],
    fullSummary:
      "When customers evaluate a technology or service company, their first subconscious impression is shaped by platform responsiveness. Conventional WordPress and bulky site builders load dozens of unoptimized scripts that degrade user trust. By adopting lightweight Next.js and Tailwind architectures, companies deliver the crisp, immediate experience that today's buyers expect.",
  },
  {
    id: "art-2",
    category: "ai",
    categoryLabel: "AI & Automation",
    title: "Practical AI for Growing Enterprises: Separating Hype from Tangible Operating ROI",
    readTime: "6 min read",
    date: "Updated March 2026",
    excerpt:
      "Artificial intelligence creates the greatest value not in generative parlor tricks, but in deterministic workflows—instant lead triage, invoice OCR, and 24/7 client support.",
    keyTakeaways: [
      "Focus AI adoption on repetitive high-volume bottlenecks rather than broad, unfocused experiments.",
      "Custom vector embeddings allow LLMs to query your private inventory and policy manuals securely.",
      "Combining AI classifiers with instant WhatsApp notifications reduces enquiry response time to under 60 seconds.",
    ],
    fullSummary:
      "Many business owners feel pressured to 'do something with AI' without a clear commercial thesis. The most profitable implementations are pragmatic: intelligent routing of high-value leads, automated extraction of messy PDF bills, and localized chat triage that operates while your staff sleeps.",
  },
  {
    id: "art-3",
    category: "growth",
    categoryLabel: "Digital Growth",
    title: "The Full-Funnel Lead Engine: Converting Inbound Traffic into Predictable Sales Pipelines",
    readTime: "4 min read",
    date: "Updated February 2026",
    excerpt:
      "Traffic without conversion is an expensive vanity metric. How to architect landing pages, search ads, and instant WhatsApp workflows that generate qualified buyers.",
    keyTakeaways: [
      "Landing pages focused on a single clear conversion action convert at 3.4x the rate of generic homepages.",
      "Capturing intent via WhatsApp triggers removes form friction and enables immediate sales rapport.",
      "Server-side attribution via Meta and Google Conversions API preserves tracking accuracy amidst cookie privacy shifts.",
    ],
    fullSummary:
      "Digital growth requires treating website development and customer acquisition as one cohesive engine. Rather than dumping ad traffic onto an unfocused home page, high-performing businesses build dedicated conversion funnels paired with instant messaging integrations that engage prospects while their interest is at its peak.",
  },
  {
    id: "art-4",
    category: "business",
    categoryLabel: "Business Strategy",
    title: "From Fragmented Spreadsheets to Cloud Portals: The Real ROI of Digital Operations",
    readTime: "5 min read",
    date: "Updated January 2026",
    excerpt:
      "How regional businesses scale smoothly by replacing manual spreadsheets and chaotic message groups with centralized web portals and automated databases.",
    keyTakeaways: [
      "Manual data entry across disconnected spreadsheets causes an estimated 14% operational error rate.",
      "Custom web portals give customers real-time visibility into orders, slashing support phone volume.",
      "Centralized PostgreSQL databases provide leadership with trusted, real-time revenue and fulfillment analytics.",
    ],
    fullSummary:
      "As a company grows past 15-20 employees, informal coordination methods begin to break down. Orders get misplaced, inventory counts drift, and key knowledge stays trapped in individual employees' heads. Building purpose-fit internal portals and databases creates an asset that increases operational capacity without proportionate headcount increases.",
  },
  {
    id: "art-5",
    category: "marketing",
    categoryLabel: "Marketing",
    title: "Beyond Vanity Metrics: Building Brand Authority That Drives Commercial Inquiries",
    readTime: "4 min read",
    date: "Updated January 2026",
    excerpt:
      "Why viral social media impressions rarely produce B2B sales, and how authoritative content positioning attracts serious, high-ticket corporate clients.",
    keyTakeaways: [
      "Case studies with concrete Challenge → Solution → Outcome format establish instant institutional credibility.",
      "B2B buyers research 5-7 digital touchpoints before ever initiating contact with a sales team.",
      "Consistent, clear visual identity and thought leadership position your company as the obvious market choice.",
    ],
    fullSummary:
      "Chasing viral social media algorithms often attracts audiences that have no purchasing intent or budget. For professional technology and service companies, marketing should be structured around authority, case studies, transparent methodology, and educational content that directly answers prospective clients' biggest questions.",
  },
];

export default function Insights() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filteredArticles = ARTICLES.filter((art) => {
    if (selectedFilter === "all") return true;
    return art.category === selectedFilter;
  });

  return (
    <section id="insights" className="relative py-24 md:py-32 bg-[#0A0E1A] text-white overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Knowledge &amp; Industry Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ideas for Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
                What Comes Next.
              </span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Perspectives on modern software architecture, practical AI adoption, conversion optimization, and sustainable digital business growth.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-white/[0.04] border border-white/10 rounded-xl backdrop-blur-md self-start md:self-end">
            {[
              { id: "all", label: "All Insights" },
              { id: "technology", label: "Technology" },
              { id: "ai", label: "AI & Automation" },
              { id: "growth", label: "Digital Growth" },
              { id: "business", label: "Business" },
              { id: "marketing", label: "Marketing" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedFilter === f.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="rounded-2xl p-6 sm:p-7 bg-[#0E1424] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg cursor-pointer"
              onClick={() => setActiveArticle(art)}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-semibold">
                    {art.categoryLabel}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {art.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors leading-snug">
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {art.excerpt}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                <span>Read executive brief</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Drawer Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0C1222] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close article brief"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-semibold">
                  {activeArticle.categoryLabel}
                </span>
                <span className="text-slate-400">{activeArticle.date}</span>
                <span className="text-slate-400">• {activeArticle.readTime}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                {activeArticle.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {activeArticle.fullSummary}
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-3">
                  Key Strategic Takeaways
                </h4>
                <div className="space-y-2.5">
                  {activeArticle.keyTakeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-slate-400 font-mono">
                  Aarudhra Web Solutions Knowledge Base
                </span>
                <a
                  href="#contact"
                  onClick={() => setActiveArticle(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md transition-all"
                >
                  <span>Apply this to your project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
