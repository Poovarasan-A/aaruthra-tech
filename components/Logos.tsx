"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Terminal, Database, LineChart, Megaphone, Globe, Cpu, Layers, Rocket, GitBranch } from "lucide-react";

const row1 = [
  { name: "Next.js & React",        icon: Layers,      color: "text-brand-purple" },
  { name: "TypeScript",             icon: Code2,        color: "text-blue-400" },
  { name: "Python / AI Solutions",  icon: Cpu,          color: "text-yellow-400" },
  { name: "Node & PostgreSQL",      icon: Database,     color: "text-brand-emerald" },
  { name: "Meta & Google Ads",      icon: Megaphone,    color: "text-red-400" },
  { name: "Git & CI/CD",            icon: GitBranch,    color: "text-orange-400" },
  { name: "Serverless & Edge",      icon: Rocket,       color: "text-brand-cyan" },
  { name: "Docker & DevOps",        icon: Terminal,     color: "text-indigo-400" },
];

const row2 = [
  { name: "GA4 Analytics",          icon: LineChart,    color: "text-brand-cyan" },
  { name: "SEO Performance",        icon: Globe,        color: "text-teal-400" },
  { name: "SaaS Architecture",      icon: Terminal,     color: "text-indigo-400" },
  { name: "API Integrations",       icon: GitBranch,    color: "text-orange-400" },
  { name: "Lighthouse 99+",         icon: Rocket,       color: "text-yellow-400" },
  { name: "TypeScript",             icon: Code2,        color: "text-blue-400" },
  { name: "Cloud & AWS",            icon: Cpu,          color: "text-brand-purple" },
  { name: "Paid Media ROAS",        icon: Megaphone,    color: "text-red-400" },
];

function TickerRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={`flex select-none overflow-hidden gap-4 ${reverse ? "" : ""}`}>
      <div className={`flex gap-4 ${reverse ? "animate-infinite-scroll-rev" : "animate-infinite-scroll"} py-2 whitespace-nowrap`}>
        {doubled.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <div
              key={`${cap.name}-${i}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.025] border border-white/[0.05] backdrop-blur-sm hover:border-brand-purple/30 hover:bg-white/[0.04] transition-all duration-300 flex-shrink-0"
            >
              <Icon className={`w-3.5 h-3.5 ${cap.color} flex-shrink-0`} />
              <span className="mono-label text-slate-400 hover:text-slate-200 transition-colors">
                {cap.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Logos() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={ref} className="relative py-14 overflow-hidden border-y border-white/[0.025]">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0  w-28 bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none" />

      {/* Parallax subtle glow */}
      <motion.div style={{ y: bgY }}
        className="absolute inset-0 bg-brand-purple/3 pointer-events-none -z-10"
      />

      <div className="max-w-[1200px] mx-auto px-6 mb-8">
        <p className="text-center mono-label text-slate-500">
          // engineered_with industry-leading stacks &amp; tools
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <TickerRow items={row1} />
        <TickerRow items={row2} reverse />
      </div>
    </section>
  );
}
