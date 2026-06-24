"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MobileAppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Scroll Parallax offsets */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const phone1Y = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const phone2Y = useTransform(scrollYProgress, [0, 1], [-20, 60]);

  return (
    <section
      ref={containerRef}
      id="mobile-showcase"
      className="relative py-28 overflow-hidden bg-[#F8F7F4]"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="font-mono uppercase tracking-widest text-xs text-[#6366F1] font-semibold mb-3 block">
              // mobile development
            </span>
            <h2 className="font-outfit font-bold text-3xl md:text-5xl text-[#1A1A2E] tracking-tight leading-[1.1]">
              Cross-Platform <span className="gradient-text">Native Experiences</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We design and engineer high-performance iOS and Android applications. 
              By leveraging modern frameworks like React Native and Flutter, we deliver 
              pixel-perfect native UX, optimized data syncing, and shared codebases 
              that scale with your company.
            </p>

            <ul className="space-y-3 pt-4">
              {[
                "Shared logic pipelines for 2x deployment speed",
                "React Native & Flutter native bridges",
                "App Store & Google Play compliance tracking",
                "Realtime telemetry & offline synchronization",
              ].map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Parallax CSS Phones */}
          <div className="relative flex justify-center items-center min-h-[440px]">
            {/* Phone 1 (Back left) */}
            <motion.div
              style={{ y: phone1Y }}
              className="absolute left-[15%] sm:left-[22%] z-10"
            >
              <div className="relative w-[190px] h-[380px] bg-slate-950 rounded-[36px] border-[6px] border-slate-900 shadow-2xl overflow-hidden flex-shrink-0">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-20" />
                {/* Screen Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] to-[#4f46e5] p-5 flex flex-col justify-between text-white">
                  <div className="mt-8">
                    <span className="font-mono text-[9px] text-white/50">// analytics</span>
                    <h3 className="font-outfit font-bold text-lg leading-tight mt-1">Telemetry Live</h3>
                  </div>
                  
                  {/* Miniature Graph */}
                  <div className="h-20 flex items-end gap-1.5 pb-2">
                    <div className="w-full bg-white/20 h-[30%] rounded-sm" />
                    <div className="w-full bg-white/40 h-[60%] rounded-sm animate-pulse" />
                    <div className="w-full bg-white/30 h-[45%] rounded-sm" />
                    <div className="w-full bg-white/60 h-[80%] rounded-sm" />
                    <div className="w-full bg-[#06B6D4] h-[95%] rounded-sm" />
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-mono text-white/80">
                    <span>99 Lighthouse</span>
                    <span>✓ Ready</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone 2 (Front right) */}
            <motion.div
              style={{ y: phone2Y }}
              className="absolute right-[15%] sm:right-[22%] z-20"
            >
              <div className="relative w-[190px] h-[380px] bg-slate-950 rounded-[36px] border-[6px] border-slate-900 shadow-2xl overflow-hidden flex-shrink-0">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-20" />
                {/* Screen Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#6366F1] p-5 flex flex-col justify-between text-white">
                  <div className="mt-8">
                    <span className="font-mono text-[9px] text-white/50">// engagement</span>
                    <h3 className="font-outfit font-bold text-lg leading-tight mt-1">Growth Engine</h3>
                  </div>

                  {/* Circle Stat */}
                  <div className="relative w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center mx-auto my-4">
                    <div className="absolute inset-0 rounded-full border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                    <div className="text-center">
                      <span className="font-outfit font-bold text-lg">4.2x</span>
                      <p className="text-[7px] font-mono text-white/70">ROAS</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-mono text-white/80">
                    <span>Active Telemetry</span>
                    <span>● Live</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
