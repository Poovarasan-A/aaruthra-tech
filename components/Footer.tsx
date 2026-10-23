"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

const whatsapp =
  "https://wa.me/919944100940?text=Hello%20Aarudhra%20Technologies%2C%20I%27d%20like%20to%20discuss%20a%20project.";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#f2f1ed] border-t border-white/10 relative overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/#home" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-[#1a1a1f] border border-white/15 flex items-center justify-center overflow-hidden">
                <Image
                  src="/techLogo3.png"
                  alt="Aarudhra Logo"
                  width={22}
                  height={22}
                  className="w-5 h-5 object-contain"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-semibold text-white tracking-tight text-[16px]">
                  Aarudhra
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[#793dff] uppercase px-1.5 py-0.5 rounded bg-[#793dff]/15 font-bold">
                  TECH
                </span>
              </div>
            </Link>

            <p className="text-white/60 text-[15px] font-sans leading-relaxed max-w-md">
              AI-native software engineering, high-converting digital platforms, and revenue growth engines built to harmonize with modern enterprises.
            </p>

            {/* Operational Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/70">
              <span className="w-2 h-2 rounded-full bg-[#36b53f] animate-pulse" />
              <span className="font-mono text-[11px] tracking-wide text-white/80">
                All Systems Operational · Modern Cloud Infrastructure
              </span>
            </div>

            <div className="space-y-2 pt-1 text-sm text-white/60">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#793dff]" />
                <a
                  href="tel:+919944100940"
                  className="hover:text-white transition-colors"
                >
                  +91 99441 00940
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#793dff]" />
                <a
                  href="mailto:aarudhrawebsolutions@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  aarudhrawebsolutions@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[12px] font-mono font-medium uppercase tracking-wider text-white/40">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-[14px] text-white/70">
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#8b5cf6] transition-colors"
                >
                  High-Performance Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#8b5cf6] transition-colors"
                >
                  Web Applications & Portals
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#8b5cf6] transition-colors"
                >
                  Cross-Platform Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#8b5cf6] transition-colors"
                >
                  AI Agents & Automations
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#8b5cf6] transition-colors"
                >
                  Lead Gen & Channel Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Presence (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h4 className="text-[12px] font-mono font-medium uppercase tracking-wider text-white/40">
                Explore
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-[14px] text-white/70">
                <li>
                  <Link href="/#home" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#why-us" className="hover:text-white transition-colors">
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/#faqs" className="hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="fc-btn fc-btn--fill w-full justify-center"
              >
                <span>WhatsApp Instant Inquiry</span>
                <svg
                  className="fc-btn__arrow"
                  width="22"
                  height="14"
                  viewBox="0 0 22 14"
                  fill="none"
                >
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
        </div>

        {/* Wordmark Graphic Band */}
        <div className="border-t border-white/10 pt-12 pb-8 flex flex-col items-center">
          <span className="font-display text-[clamp(44px,8vw,110px)] font-normal tracking-tight text-white/[0.07] leading-none select-none text-center">
            AARUDHRA TECH
          </span>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/50">
          <p>© {new Date().getFullYear()} Aarudhra Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Chennai · Coimbatore · Madurai · Global</span>
            <a
              href="#top"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
