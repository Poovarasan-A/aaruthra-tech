"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/* ─── Terminal typewriter data ──────────────────────────────────────── */
const TERMINAL_LINES = [
  {
    prompt: "~",
    cmd: "npm run build:prod",
    out: "✓ Built in 1.8s  •  99/100 Lighthouse",
  },
  {
    prompt: "~",
    cmd: "git push origin main",
    out: "✓ Deployed to edge  •  148ms TTFB",
  },
  {
    prompt: "~",
    cmd: "run roi-report --q3",
    out: "✓ ROI +148% MoM  •  48/48 QA passed",
  },
];

/* ─── Ambient particles ─────────────────────────────────────────────── */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: `${(i * 37.3 + 11) % 100}%`,
  y: `${(i * 53.7 + 7) % 100}%`,
  size: i % 3 === 0 ? 2 : 1,
  delay: (i * 0.23) % 4,
  dur: 3 + (i % 4),
}));

/* ─── Stats ─────────────────────────────────────────────────────────── */
const STATS = [
  { val: "140+", label: "Projects Shipped", icon: "🚀" },
  { val: "99", label: "Lighthouse Score", icon: "⚡" },
  { val: "48h", label: "Squad Onboarded", icon: "🛡" },
];

/* ════════════════════════════════════════════════════════════════════ */
export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [termLine, setTermLine] = useState(0);
  const [termPhase, setTermPhase] = useState<"typing" | "showing">("typing");
  const containerRef = useRef<HTMLDivElement>(null);

  /* Parallax */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fragY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  /* Initial entrance */
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  /* Terminal cycling */
  useEffect(() => {
    if (!loaded) return;
    const cycle = () => {
      setTermPhase("typing");
      const show = setTimeout(() => setTermPhase("showing"), 1400);
      const next = setTimeout(() => {
        setTermLine((l) => (l + 1) % TERMINAL_LINES.length);
        setTermPhase("typing");
      }, 3800);
      return () => {
        clearTimeout(show);
        clearTimeout(next);
      };
    };
    const t = setTimeout(cycle, 600);
    return () => clearTimeout(t);
  }, [loaded, termLine]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20"
      style={{ background: "linear-gradient(to bottom, #ffffff, #fafbfc)" }}
    >
      <style>{`
        /* ─ Noise texture overlay ─ */
        .hero-noise::before {
          content:"";
          position:absolute;
          inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-repeat:repeat;
          background-size:128px 128px;
          pointer-events:none;
          z-index:1;
        }



        /* ─ Gradient text ─ */
        .grad-text {
          background: linear-gradient(135deg, #7C3AED 0%, #0891B2 55%, #059669 100%);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
        }
        .grad-text-warm {
          background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
        }

        /* ─ Shimmer wipe on headline ─ */
        @keyframes shimmer-wipe {
          0%   { background-position:200% center; }
          100% { background-position:-200% center; }
        }
        .shimmer-text {
          background: linear-gradient(
            120deg,
            #7c3aed 0%,
            #0891b2 30%,
            #6d28d9 48%,
            #059669 65%,
            #7c3aed 100%
          );
          background-size:250% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation: shimmer-wipe 4s linear infinite;
        }

        /* ─ Floating particles ─ */
        @keyframes float-up {
          0%   { transform:translateY(0) scale(1);  opacity:0.6; }
          50%  { opacity:1; }
          100% { transform:translateY(-30px) scale(0.8); opacity:0; }
        }
        .particle { position:absolute; border-radius:50%; background:#7C3AED; animation: float-up linear infinite; }

        /* ─ Stat card glow ─ */
        .stat-card {
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(124,58,237,0.1);
          border-radius:16px;
          padding:20px 24px;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:6px;
          position:relative;
          overflow:hidden;
          transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
          box-shadow: 0 4px 20px -2px rgba(124,58,237,0.04);
        }
        .stat-card::before {
          content:"";
          position:absolute;
          inset:-1px;
          border-radius:16px;
          background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08), transparent 60%);
          opacity:0;
          transition: opacity 0.3s;
          pointer-events:none;
        }
        .stat-card:hover::before { opacity:1; }
        .stat-card:hover { border-color: rgba(124,58,237,0.3); background: rgba(255,255,255,0.9); box-shadow: 0 10px 30px -4px rgba(124,58,237,0.08); }

        /* ─ Terminal card ─ */
        .terminal {
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 14px;
          backdrop-filter: blur(20px);
          overflow: hidden;
          font-family: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;
          font-size: 12px;
          box-shadow: 0 20px 50px -12px rgba(15, 23, 42, 0.15);
        }
        .terminal-bar {
          background: rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 10px 14px;
          display:flex;
          align-items:center;
          gap:6px;
        }
        .dot { width:10px; height:10px; border-radius:50%; }

        /* ─ Typewriter cursor ─ */
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor { display:inline-block; width:7px; height:13px; background:#06B6D4; border-radius:1px; animation:blink 1s step-end infinite; vertical-align:middle; margin-left:2px; }

        /* ─ Badge pill ─ */
        .badge-pill {
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:6px 18px;
          border-radius:100px;
          border: 1px solid rgba(124,58,237,0.15);
          background: rgba(124,58,237,0.04);
          backdrop-filter: blur(12px);
          font-size:12px;
          letter-spacing:0.08em;
          color:#6d28d9;
          font-family: ui-monospace, monospace;
          text-transform:uppercase;
        }
        .pulse-dot {
          width:6px; height:6px; border-radius:50%;
          animation: pulse-ring 2s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0%,100% { box-shadow:0 0 0 0 currentColor; opacity:1; }
          50% { box-shadow:0 0 0 4px transparent; opacity:0.7; }
        }

        /* ─ Primary CTA button ─ */
        .btn-primary {
          position:relative;
          overflow:hidden;
          background: linear-gradient(135deg, #7C3AED 0%, #4c1d95 100%);
          color:#fff;
          font-weight:600;
          font-size:14px;
          padding:14px 32px;
          border-radius:100px;
          border:none;
          cursor:pointer;
          transition: transform 0.2s, filter 0.2s;
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          gap:8px;
          white-space:nowrap;
        }
        .btn-primary::before {
          content:"";
          position:absolute;
          inset:0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
          opacity:0;
          transition:opacity 0.2s;
        }
        .btn-primary:hover { transform:scale(1.03); filter:brightness(1.12); }
        .btn-primary:hover::before { opacity:1; }
        .btn-primary-glow {
          position:absolute;
          inset:-2px;
          border-radius:100px;
          background: linear-gradient(135deg, #7C3AED, #06B6D4);
          z-index:-1;
          filter:blur(12px);
          opacity:0.5;
        }

        /* ─ Ghost CTA button ─ */
        .btn-ghost {
          background: rgba(255,255,255,0.6);
          color:#334155;
          font-weight:600;
          font-size:14px;
          padding:14px 32px;
          border-radius:100px;
          border:1px solid rgba(15,23,42,0.1);
          cursor:pointer;
          transition: all 0.2s;
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          gap:8px;
          white-space:nowrap;
          backdrop-filter: blur(12px);
        }
        .btn-ghost:hover { background:rgba(15,23,42,0.05); color:#0f172a; transform:scale(1.03); border-color:rgba(15,23,42,0.2); }

        /* ─ Scroll cue ─ */
        @keyframes scroll-bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        .scroll-line {
          width:1px; height:48px;
          background:linear-gradient(to bottom, rgba(124,58,237,0.6), transparent);
          animation: scroll-bob 2s ease-in-out infinite;
        }

        /* ─ Grid lines background ─ */
        .hero-grid {
          position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          pointer-events:none;
        }
      `}</style>

      {/* ─── Noise Texture ─── */}
      <div className="hero-noise absolute inset-0 z-[1] pointer-events-none" />



      {/* ─── Grid Lines ─── */}
      <div className="hero-grid" />

      {/* ─── Central Radial Glow ─── */}
      <motion.div
        // style={{  }}
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)",
          pointerEvents: "none",
          y: glowY,
        }}
      />
      {/* Secondary smaller accent glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "38%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "200px",
          background:
            "radial-gradient(ellipse at center, rgba(16,185,129,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ─── Ambient Particles ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.x,
              top: p.y,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              background:
                p.id % 3 === 0
                  ? "#06B6D4"
                  : p.id % 3 === 1
                    ? "#7C3AED"
                    : "#10B981",
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* ─── Floating Terminal Card ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 20 }}
        animate={loaded ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="terminal absolute bottom-[10%] right-[4%] w-[300px] z-20 hidden lg:block"
      >
        <div className="terminal-bar">
          <div className="dot" style={{ background: "#ff5f57" }} />
          <div className="dot" style={{ background: "#febc2e" }} />
          <div className="dot" style={{ background: "#28c840" }} />
          <span
            style={{
              marginLeft: "auto",
              color: "rgba(148,163,184,0.5)",
              fontSize: "10px",
              fontFamily: "ui-monospace, monospace",
            }}
          >
            aarudhra.dev
          </span>
        </div>
        <div style={{ padding: "16px" }}>
          {/* Prompt line */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              marginBottom: "6px",
            }}
          >
            <span style={{ color: "#10B981" }}>❯</span>
            <TypewriterText
              key={`cmd-${termLine}`}
              text={TERMINAL_LINES[termLine].cmd}
              speed={45}
              color="#e2e8f0"
              showCursor={termPhase === "typing"}
            />
          </div>
          {/* Output */}
          <AnimatePresence>
            {termPhase === "showing" && (
              <motion.div
                key={`out-${termLine}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: "#06B6D4",
                  paddingLeft: "20px",
                  fontSize: "11px",
                }}
              >
                {TERMINAL_LINES[termLine].out}
              </motion.div>
            )}
          </AnimatePresence>
          {/* Second prompt idle */}
          {termPhase === "showing" && (
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <span style={{ color: "#10B981" }}>❯</span>
              <span className="cursor" />
            </div>
          )}
        </div>
      </motion.div>

      {/* ─── Secondary floating badge — top-left ─── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={loaded ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="absolute top-[20%] left-[3%] z-20 hidden lg:flex items-center gap-2.5"
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          border: "1px solid rgba(6,182,212,0.15)",
          borderRadius: "12px",
          padding: "10px 16px",
          backdropFilter: "blur(16px)",
          fontFamily: "ui-monospace, monospace",
          fontSize: "11px",
          color: "#0891b2",
          boxShadow: "0 4px 20px -2px rgba(6,182,212,0.05)",
        }}
      >
        <span style={{ color: "#06B6D4", fontWeight: 700 }}>◈</span>
        <span>score: 99 // Lighthouse</span>
      </motion.div>

      {/* ─── Main Content ─────────────────────────────────── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="badge-pill">
            <span
              className="pulse-dot"
              style={{ background: "#7C3AED", color: "#7C3AED" }}
            />
            Custom Engineering &amp; Performance Marketing
            <span
              className="pulse-dot"
              style={{ background: "#10B981", color: "#10B981" }}
            />
          </div>
        </motion.div>

        {/* Heading — two-line split treatment */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h1
            style={{
              fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            {/* Line 1 — static white, huge */}
            <span
              className="block grad-text-warm"
              style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
            >
              Vaporize Complexity.
            </span>
            {/* Line 2 — shimmer gradient */}
            <span
              className="block shimmer-text"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Engineer Digital Dominance
            </span>
          </h1>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={loaded ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            width: "120px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #7C3AED, #06B6D4, transparent)",
            marginBottom: "24px",
            transformOrigin: "center",
          }}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            color: "#475569",
            maxWidth: "560px",
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.75,
            marginBottom: "40px",
          }}
        >
          Aarudhra bridges premium enterprises with vetted developer squads and
          growth marketers. We orchestrate milestones, secure the source, and
          ship pixel-perfect digital solutions at speed.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            justifyContent: "center",
            marginBottom: "64px",
          }}
        >
          <div style={{ position: "relative" }}>
            <div className="btn-primary-glow" />
            <a href="#cta" className="btn-primary">
              Procure Solutions
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <a href="#about" className="btn-ghost">
            Join as Partner
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3v10M3 8l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* ─── Bento Stats Grid ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            width: "100%",
            maxWidth: "540px",
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
            >
              {/* Top-right inner glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "60px",
                  height: "60px",
                  background:
                    "radial-gradient(circle at top right, rgba(124,58,237,0.15), transparent 70%)",
                  borderRadius: "16px",
                  pointerEvents: "none",
                }}
              />
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(22px, 3vw, 30px)",
                  background: "linear-gradient(135deg, #7c3aed, #0891b2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                }}
              >
                {stat.val}
              </span>
              <span
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                  color: "#475569",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ─── Scroll Cue ─── */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-20 left-20 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() =>
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span
          style={{
            fontFamily: "ui-monospace, monospace",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#334155",
          }}
        >
          scroll to explore
        </span>
        <div className="scroll-line" />
      </motion.div> */}

      {/* ─── Bottom fade ─── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "120px",
          background: "linear-gradient(to top, #f8fafc, transparent)",
        }}
      />
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════ */
/* Typewriter sub-component                                            */
/* ════════════════════════════════════════════════════════════════════ */
function TypewriterText({
  text,
  speed = 50,
  color = "#e2e8f0",
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
        <span className="cursor" />
      )}
    </span>
  );
}
