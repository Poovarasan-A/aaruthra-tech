"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

const TERMINAL_LINES = [
  {
    cmd: "git push origin main",
    out: "✓ Deployed to Netlify  •  120ms TTFB",
  },
  {
    cmd: "run seo-audit --local",
    out: "✓ Local SEO Score 98%  •  Rank #1 in Tamil Nadu",
  },
  {
    cmd: "npm run build:prod",
    out: "✓ 100/100 Mobile Speed  •  0.4s LCP",
  },
];

const STATS = [
  { val: "100+", label: "Business Websites Delivered", icon: "🚀" },
  { val: "5+", label: "Years in Services", icon: "📅" },
  { val: "Ongoing", label: "Website & Consultant Support", icon: "🛡️" },
];

function CountUp({
  value,
  duration = 1.5,
}: {
  value: string;
  duration?: number;
}) {
  const hasDigits = /\d/.test(value);
  if (!hasDigits) {
    return <span>{value}</span>;
  }
  const numericPart = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = numericPart;
    if (isNaN(end) || start === end) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, numericPart, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function TypewriterText({
  text,
  speed = 45,
  color = "#E2E8F0",
  showCursor = true,
}: {
  text: string;
  speed?: number;
  color?: string;
  showCursor?: boolean;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);

  return (
    <span style={{ color }}>
      {displayed}
      {showCursor && displayed.length < text.length && (
        <span className="inline-block w-1.5 h-3.5 bg-[#06B6D4] animate-pulse ml-0.5" />
      )}
    </span>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [termLine, setTermLine] = useState(0);
  const [termPhase, setTermPhase] = useState<"typing" | "showing">("typing");
  const containerRef = useRef<HTMLDivElement>(null);

  /* Parallax values */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  /* Terminal cycle */
  useEffect(() => {
    if (!loaded) return;
    const cycle = () => {
      setTermPhase("typing");
      const show = setTimeout(() => setTermPhase("showing"), 1200);
      const next = setTimeout(() => {
        setTermLine((l) => (l + 1) % TERMINAL_LINES.length);
        setTermPhase("typing");
      }, 3800);
      return () => {
        clearTimeout(show);
        clearTimeout(next);
      };
    };
    const t = setTimeout(cycle, 400);
    return () => clearTimeout(t);
  }, [loaded, termLine]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24 bg-[#F8F7F4] animated-dot-grid"
    >
      {/* ─── Central Large Indigo Radial Glow ─── */}
      <motion.div
        style={{ y: glowY }}
        className="absolute pointer-events-none w-[700px] h-[700px] rounded-full bg-[#6366F1] opacity-30 blur-[120px] -z-10"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.28, 0.32, 0.28],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ─── Main Content ─── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full"
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full border border-black/5 bg-white/70 backdrop-blur-md text-[11px] font-mono tracking-widest text-[#6366F1] uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-ping" />
            Website Development &amp; Digital Marketing Agency for Growing
            Businesses
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-outfit font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#4f46e5] to-[#06B6D4] mb-6 leading-[1.08] max-w-4xl"
          style={{
            fontSize: "clamp(2.5rem, 7.5vw, 5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Vaporize Complexity.
          <br />
          Engineer Digital Dominance
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-600 max-w-3xl text-base sm:text-lg leading-relaxed mb-10"
        >
          We help small and mid-sized businesses in Tamil Nadu build a strong
          digital presence through reliable websites, local SEO, targeted
          advertising, and structured social media management that generates
          visibility, enquiries, and long-term growth.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <a
            href="https://wa.me/919944100940?text=Hello%20Aarudhra%20Web%20Solutions%2C%20I%27d%20like%20to%20discuss%20our%20website%20development%20or%20digital%20marketing%20requirement."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#128C7E] hover:bg-[#075E54] text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-md hover:scale-[1.03] transition-all duration-200 shimmer-sweep"
          >
            Chat with Us on WhatsApp
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.035-4.408c1.662.986 3.302 1.492 5.922 1.493 5.465 0 9.91-4.444 9.913-9.91.002-2.647-1.03-5.136-2.902-7.01-1.874-1.874-4.366-2.903-7.015-2.904-5.463 0-9.903 4.443-9.907 9.91-.001 2.15.561 4.254 1.627 6.095l-1.071 3.91 4.024-1.057zm11.233-5.32c-.3-.149-1.772-.874-2.046-.973-.274-.1-.474-.149-.674.15-.2.299-.774.973-.949 1.172-.175.199-.35.224-.65.075-.3-.149-1.267-.467-2.413-1.489-.892-.796-1.494-1.779-1.669-2.079-.175-.299-.019-.461.13-.61.135-.134.3-.349.45-.524.15-.175.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.674-1.622-.924-2.221-.244-.588-.492-.51-.674-.519-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.299-1.05 1.024-1.05 2.5 0 1.472 1.071 2.891 1.221 3.091.15.199 2.107 3.216 5.105 4.51.713.308 1.27.492 1.704.631.716.227 1.368.195 1.883.118.574-.085 1.772-.724 2.022-1.422.25-.699.25-1.297.175-1.422-.075-.125-.275-.199-.575-.349z" />
            </svg>
          </a>
          <a
            href="#cta"
            className="flex items-center gap-2 bg-white/70 hover:bg-white/95 text-slate-800 font-semibold text-sm px-7 py-3.5 rounded-full border border-black/[0.06] hover:scale-[1.03] transition-all duration-200 backdrop-blur-md"
          >
            Schedule a Discussion
          </a>
        </motion.div>

        {/* Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap gap-3 justify-center max-w-2xl mb-14"
        >
          {[
            { text: "New Business Websites", icon: "🌐" },
            { text: "Website Redesign", icon: "🔄" },
            { text: "Local SEO Visibility", icon: "📍" },
            { text: "Online Review Management", icon: "⭐" },
            { text: "Customer Trust & Leads", icon: "📈" },
          ].map((item) => (
            <div
              key={item.text}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm text-xs font-semibold text-slate-700 shadow-sm"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Stat counters grid */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/10 w-full max-w-[750px] bg-white/60 backdrop-blur-md rounded-3xl border border-black/[0.06] p-8 shadow-sm"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-4 py-4 sm:py-0 text-center"
            >
              <span className="text-3xl mb-3">{stat.icon}</span>
              <span className="font-outfit font-bold text-3xl sm:text-4xl text-[#1A1A2E] leading-tight mb-2">
                <CountUp value={stat.val} />
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] font-semibold tracking-wider text-slate-500 uppercase leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div> */}
      </motion.div>

      {/* Floating Terminal Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-[8%] right-[4%] w-[320px] rounded-xl border border-black/5 bg-[#1A1A2E]/95 shadow-xl hidden lg:block overflow-hidden backdrop-blur-md"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-black/20 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-auto font-mono text-[9px] text-slate-400 select-none">
            aarudhra.dev
          </span>
        </div>

        {/* Terminal Content */}
        <div
          className="p-5 font-mono text-left text-[11px]"
          style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}
        >
          {/* Prompt line */}
          <div className="flex gap-1.5 items-center mb-1.5">
            <span className="text-[10px] text-[#06B6D4] font-semibold flex-shrink-0">
              aarudhra.dev ❯
            </span>
            <TypewriterText
              key={`cmd-${termLine}`}
              text={TERMINAL_LINES[termLine].cmd}
              speed={45}
              color="#F8F7F4"
              showCursor={termPhase === "typing"}
            />
          </div>

          {/* Output line */}
          <AnimatePresence mode="wait">
            {termPhase === "showing" && (
              <motion.div
                key={`out-${termLine}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="text-[#06B6D4] pl-5 text-[11px]"
              >
                {TERMINAL_LINES[termLine].out}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Prompt idle line */}
          {termPhase === "showing" && (
            <div className="flex gap-1.5 items-center mt-3">
              <span className="text-[10px] text-[#06B6D4] font-semibold flex-shrink-0">
                aarudhra.dev ❯
              </span>
              <span className="inline-block w-1.5 h-3 bg-[#06B6D4] animate-[pulse_1s_infinite]" />
            </div>
          )}
        </div>
      </motion.div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#EFEEE9]/80 to-transparent pointer-events-none" />
    </section>
  );
}
