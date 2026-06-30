"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function MidPageCTA() {
  const perks = [
    "Review your current website & visibility",
    "Identify clear next steps",
    "No obligation or long-term commitment",
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-[#1A1A2E] text-white border-y border-white/[0.05]">
      {/* Decorative Warm Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#6366F1]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-10" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Column 1: Copy */}
          <div className="lg:col-span-7 space-y-5">
            <span className="font-mono uppercase tracking-widest text-[10px] sm:text-xs text-[#06B6D4] font-bold block">
              // no-pitch consult
            </span>
            <h2 className="font-outfit font-bold text-2xl sm:text-4xl leading-tight tracking-tight">
              Not sure where to start with your digital presence?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
              If your website, online visibility, or digital efforts feel unclear or ineffective, a short discussion can help identify what needs fixing and what doesn't. No sales pitch — just practical direction.
            </p>
          </div>

          {/* Column 2: Perks & CTA */}
          <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 sm:p-8 backdrop-blur-md space-y-6">
            <ul className="space-y-3.5">
              {perks.map((perk, i) => (
                <motion.li
                  key={perk}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-300"
                >
                  <div className="w-5 h-5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/25 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#06B6D4]" />
                  </div>
                  <span className="leading-snug">{perk}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="https://wa.me/919944100940?text=Hello%20Aarudhra%20Web%20Solutions%2C%20I%27d%20like%20to%20do%20a%20short%20consultation%20about%20our%20digital%20presence."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#128C7E] hover:bg-[#075E54] text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md hover:scale-[1.02] transition-all duration-200 w-full text-center shimmer-sweep"
            >
              Chat with Us on WhatsApp
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.035-4.408c1.662.986 3.302 1.492 5.922 1.493 5.465 0 9.91-4.444 9.913-9.91.002-2.647-1.03-5.136-2.902-7.01-1.874-1.874-4.366-2.903-7.015-2.904-5.463 0-9.903 4.443-9.907 9.91-.001 2.15.561 4.254 1.627 6.095l-1.071 3.91 4.024-1.057zm11.233-5.32c-.3-.149-1.772-.874-2.046-.973-.274-.1-.474-.149-.674.15-.2.299-.774.973-.949 1.172-.175.199-.35.224-.65.075-.3-.149-1.267-.467-2.413-1.489-.892-.796-1.494-1.779-1.669-2.079-.175-.299-.019-.461.13-.61.135-.134.3-.349.45-.524.15-.175.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.674-1.622-.924-2.221-.244-.588-.492-.51-.674-.519-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.299-1.05 1.024-1.05 2.5 0 1.472 1.071 2.891 1.221 3.091.15.199 2.107 3.216 5.105 4.51.713.308 1.27.492 1.704.631.716.227 1.368.195 1.883.118.574-.085 1.772-.724 2.022-1.422.25-.699.25-1.297.175-1.422-.075-.125-.275-.199-.575-.349z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
