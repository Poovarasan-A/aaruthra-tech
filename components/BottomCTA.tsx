"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="py-20 md:py-28 bg-brand-indigo relative overflow-hidden text-white">
      {/* Subtle geometric and lighting effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full text-indigo-100">
            Let&apos;s Build Together
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            Ready to build a stronger digital presence?
          </h2>

          <p className="text-indigo-100 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Tell us what you&apos;re working on and we&apos;ll help you identify the right next step.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:bg-slate-50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 text-brand-indigo" />
            </a>

            <a
              href="https://wa.me/919944100940?text=Hello%20Aarudhra%20Web%20Solutions%2C%20I%27d%20like%20to%20discuss%20our%20website%20development%20or%20digital%20marketing%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#128C7E] hover:bg-[#0E7064] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
