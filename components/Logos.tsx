"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Custom SVG Icons for Tech Stacks ──────────────────────────────── */
const NextjsSVG = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="90" cy="90" r="90" fill="#1A1A2E"/>
    <path d="M149.5 157.5L69.8 54.3V125.8H56.6V42.7H69.8L136.2 128.8L149.5 157.5Z" fill="white"/>
    <rect x="123" y="42.7" width="13.3" height="83.1" fill="white"/>
  </svg>
);

const ReactSVG = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="-11.5 -10.2 23 20.4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const TypeScriptSVG = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0 rounded-[2px]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" fill="#3178C6"/>
    <path d="M72.9 69.4C71 70.3 68.6 71 65.8 71C60.6 71 57.3 67.9 57.3 62.4C57.3 56.7 61.1 53.7 66.5 53.7C69.3 53.7 71.3 54.4 72.8 55.2L70.9 60.1C69.7 59.5 68.2 59.1 66.7 59.1C63.8 59.1 62.5 60.6 62.5 62.6C62.5 64.7 63.8 66.1 66.6 66.1C68.3 66.1 69.9 65.6 71 65L72.9 69.4ZM91 38.6H84.1V69.7H78.8V38.6H71.9V33.8H91V38.6Z" fill="white"/>
  </svg>
);

const PythonSVG = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M55 2C25.7 2 27.6 14.7 27.6 14.7L27.6 27.8H55.4V31.5H16.5S2 29.9 2 59.1S16.5 86.2 27.6 86.2H38.7V73.1S36.9 47 66.6 47H82.5S95.3 47 95.3 19.3S82.5 2 55 2Z" fill="#3776AB"/>
    <path d="M55 108C84.3 108 82.4 95.3 82.4 95.3L82.3 82.2H54.6V78.5H93.5S108 80.1 108 50.9S93.5 23.8 82.4 23.8H71.4V36.9S73.2 63 43.5 63H16.4S3.6 63 3.6 90.7S16.4 108 55 108Z" fill="#FFD43B"/>
  </svg>
);

const NodeSVG = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 0L242.3 66V198L128 256L13.7 198V66L128 0Z" fill="#339933"/>
    <path d="M128 26L219.7 79V185L128 238L36.3 185V79L128 26Z" fill="#1A1A2E"/>
    <path d="M128 50L197.4 90V170L128 210L58.6 170V90L128 50Z" fill="#339933"/>
  </svg>
);

const DatabaseSVG = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const MetaSVG = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.1 11.2C22.6 7.4 19.3 4.5 15.4 4.5C13.2 4.5 11.1 5.4 9.7 7C8.3 5.4 6.2 4.5 4 4.5C1.8 4.5 0 6.3 0 8.5C0 12.3 3.9 15.6 8.7 19.4L9.7 20.2L10.7 19.4C15.5 15.6 19.4 12.3 19.4 8.5C19.4 7.6 18.7 6.9 17.8 6.9C16.9 6.9 16.2 7.6 16.2 8.5C16.2 11.1 13.1 13.6 9.7 16.2C6.3 13.6 3.2 11.1 3.2 8.5C3.2 8.1 3.6 7.7 4 7.7C4.4 7.7 4.8 8.1 4.8 8.5C4.8 11.1 7.9 13.6 11.3 16.2L12 16.7L12.7 16.2C16.1 13.6 19.2 11.1 19.2 8.5C19.2 8.1 19.6 7.7 20 7.7C20.4 7.7 20.8 8.1 20.8 8.5C20.8 11.1 23.9 13.6 27.3 16.2" fill="#0080FF"/>
  </svg>
);

const GoogleAdsSVG = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.3 1.8L4.2 21.1C3.8 21.8 4.3 22.7 5.1 22.7H20.7C21.5 22.7 22 21.8 21.6 21.1L15.3 1.8Z" fill="#F4B400"/>
    <path d="M4.2 21.1L15.3 1.8L9 1.8L0.3 17.1C-0.3 18.1 0.2 19.4 1.3 19.4H6.5C7.2 19.4 7.9 19 8.2 18.3L4.2 21.1Z" fill="#4285F4"/>
  </svg>
);

const GitSVG = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.2 11.3L12.7 0.8C12.3 0.4 11.7 0.4 11.3 0.8L0.8 11.3C0.4 11.7 0.4 12.3 0.8 12.7L11.3 23.2C11.7 23.6 12.3 23.6 12.7 23.2L23.2 12.7C23.6 12.3 23.6 11.7 23.2 11.3ZM12 17.2C10.8 17.2 9.8 16.2 9.8 15C9.8 14.2 10.2 13.5 10.9 13.1V10.9C10.2 10.5 9.8 9.8 9.8 9C9.8 7.8 10.8 6.8 12 6.8C13.2 6.8 14.2 7.8 14.2 9C14.2 9.8 13.8 10.5 13.1 10.9V13.1C13.8 13.5 14.2 14.2 14.2 15C14.2 16.2 13.2 17.2 12 17.2Z" fill="#F05032"/>
  </svg>
);

const DockerSVG = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.983 8.878h-2.228V6.65h2.228v2.228zm2.748 0h-2.228V6.65h2.228v2.228zm-5.496 0H9.007V6.65h2.228v2.228zm2.748-2.748h-2.228V3.902h2.228v2.228zm2.748 0h-2.228V3.902h2.228v2.228zm-8.244 2.748H6.26V6.65h2.228v2.228zm2.748-5.496H9.007V1.154h2.228v2.228zM24 13.014c-.09.09-.54.36-.99.36H.99c-.45 0-.9-.27-.99-.36v-.9h24v.9z" fill="#2496ED"/>
  </svg>
);

const GoogleAnalyticsSVG = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 19.5H8.5V9.5H5.5V19.5ZM10.5 19.5H13.5V4.5H10.5V19.5ZM15.5 19.5H18.5V12.5H15.5V19.5ZM0.5 19.5H3.5V15.5H0.5V19.5Z" fill="#E37400"/>
  </svg>
);

const AwsSVG = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2ZM9 15.5H7.5V9.5H9V15.5ZM12.5 15.5H11V9.5H12.5V15.5ZM16.5 15.5H15V9.5H16.5V15.5Z" fill="#FF9900"/>
  </svg>
);

const row1 = [
  { name: "Next.js & React",        icon: NextjsSVG },
  { name: "TypeScript",             icon: TypeScriptSVG },
  { name: "Python / AI Solutions",  icon: PythonSVG },
  { name: "Node & PostgreSQL",      icon: NodeSVG },
  { name: "Meta & Google Ads",      icon: MetaSVG },
  { name: "Git & CI/CD",            icon: GitSVG },
  { name: "Google Ads Growth",      icon: GoogleAdsSVG },
  { name: "Docker & DevOps",        icon: DockerSVG },
];

const row2 = [
  { name: "GA4 Analytics",          icon: GoogleAnalyticsSVG },
  { name: "AWS Cloud Scalability",  icon: AwsSVG },
  { name: "TypeScript Integrations",icon: TypeScriptSVG },
  { name: "React Web Architecture", icon: ReactSVG },
  { name: "Node.js Serverless",     icon: NodeSVG },
  { name: "Meta Conversion Ads",    icon: MetaSVG },
  { name: "Next.js Static Edge",    icon: NextjsSVG },
  { name: "PostgreSQL Database",    icon: DatabaseSVG },
];

function TickerRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex select-none overflow-hidden gap-4">
      <div className={`flex gap-4 ${reverse ? "animate-infinite-scroll-rev" : "animate-infinite-scroll"} py-2.5 whitespace-nowrap`}>
        {doubled.map((cap, i) => {
          const SVGIcon = cap.icon;
          return (
            <div
              key={`${cap.name}-${i}`}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/60 backdrop-blur-[8px] border border-black/10 shadow-sm hover:border-[#6366F1]/30 hover:bg-white/90 transition-all duration-300 flex-shrink-0"
            >
              <SVGIcon />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-900 transition-colors">
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
  const bgY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section ref={ref} className="relative py-14 overflow-hidden border-y border-black/5 bg-[#EFEEE9]">
      {/* Fade masks on left & right edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#EFEEE9] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#EFEEE9] to-transparent z-10 pointer-events-none" />

      {/* Subtle parallax background shift */}
      <motion.div style={{ y: bgY }}
        className="absolute inset-0 bg-[#6366F1]/[0.01] pointer-events-none -z-10"
      />

      <div className="max-w-[1200px] mx-auto px-6 mb-8 text-center">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#6366F1]">
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
