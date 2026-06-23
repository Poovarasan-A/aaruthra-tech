"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CODE_FRAGMENTS = [
  { text: "const launch = await deploy()", x: "5%", y: "22%", delay: 0 },
  { text: "score: 99 // Lighthouse", x: "72%", y: "18%", delay: 0.5 },
  { text: "npm run build:prod", x: "8%", y: "68%", delay: 1.2 },
  { text: "ROI: +148% MoM", x: "70%", y: "72%", delay: 0.8 },
  { text: "✓ QA passed 48/48", x: "50%", y: "85%", delay: 1.6 },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [ended, setEnded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const fragmentsY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* ─── Background Video ─────────────────────────────── */}
      <motion.div
        style={{ y: videoY }}
        className={`absolute inset-0 -z-20 overflow-hidden transition-opacity duration-1000 ${loaded && !ended ? "opacity-100" : "opacity-0"}`}
      >
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setLoaded(true)}
          onEnded={() => setEnded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${loaded && !ended ? "opacity-35" : "opacity-0"}`}
        >
          <source src="/techv.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#030014]/80" />
      </motion.div>

      {/* ─── Animated Tech Grid Mesh ──────────────────────── */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 tech-grid pointer-events-none opacity-60 -z-10"
      />

      {/* ─── Ambient Hero Glow ────────────────────────────── */}
      <div className="hero-glow absolute inset-0 pointer-events-none -z-10" />

      {/* ─── Floating Orbs ────────────────────────────────── */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-1/4 right-[8%] w-[280px] h-[280px] bg-brand-cyan/8 rounded-full blur-[100px] -z-10 pointer-events-none animate-float"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-1/3 left-[4%] w-[320px] h-[320px] bg-brand-emerald/8 rounded-full blur-[110px] -z-10 pointer-events-none animate-float-delayed"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-purple/6 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* ─── Floating Code Fragments ──────────────────────── */}
      <motion.div
        style={{ y: fragmentsY }}
        className="absolute inset-0 pointer-events-none -z-10"
      >
        {CODE_FRAGMENTS.map((frag) => (
          <motion.div
            key={frag.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.55, y: 0 }}
            transition={{ delay: frag.delay + 1.5, duration: 0.8 }}
            className="absolute code-badge animate-float"
            style={{
              left: frag.x,
              top: frag.y,
              animationDelay: `${frag.delay * 0.5}s`,
            }}
          >
            {frag.text}
          </motion.div>
        ))}
      </motion.div>

      {/* ─── Main Content ─────────────────────────────────── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full border border-brand-purple/25 bg-brand-purple/8 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          <span className="mono-label text-slate-300">
            Custom Engineering &amp; Performance Marketing
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-outfit font-black text-4xl sm:text-6xl md:text-7xl lg:text-[60px] leading-[1.04] tracking-tight text-white mb-4"
        >
          Vaporize Complexity.
          <br />
          <span className="gradient-text">Engineer Digital Dominance</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
          className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed mb-10 px-4"
        >
          Aarudhra bridges premium enterprises with vetted developer squads and
          growth marketers. We orchestrate milestones, secure the source code,
          and deliver pixel-perfect digital solutions at speed.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.33, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#cta"
            className="w-full sm:w-auto bg-gradient-to-br from-brand-purple to-[#4c1d95] hover:brightness-110 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-sm shadow-lg shadow-brand-purple/20 hover:scale-[1.03] text-center neon-border"
          >
            Procure Solutions
          </a>
          <a
            href="#cta"
            className="w-full sm:w-auto bg-white/4 hover:bg-white/8 text-slate-200 font-semibold px-8 py-3.5 rounded-full border border-white/8 transition-all duration-200 text-sm backdrop-blur-md hover:text-white hover:scale-[1.03] text-center"
          >
            Join as Partner
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 sm:gap-16 border-t border-white/5 pt-10"
        >
          {[
            { val: "140+", label: "Projects Shipped" },
            { val: "99", label: "Lighthouse Score" },
            { val: "48h", label: "Squad On-boarded" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-outfit font-black text-2xl sm:text-3xl gradient-text">
                {stat.val}
              </span>
              <span className="mono-label text-slate-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() =>
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="mono-label text-slate-500">scroll to explore</span>
        <div className="w-[18px] h-[30px] rounded-full border border-slate-600 flex justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan scroll-indicator" />
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#030014] to-transparent pointer-events-none" />
    </section>
  );
}
