"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Sparkles, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Journey", href: "#journey" },
  { name: "Work", href: "#work" },
  { name: "Why Us", href: "#why-us" },
  { name: "Process", href: "#process" },
  { name: "Innovation", href: "#innovation" },
  { name: "Team", href: "#team" },
  { name: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080C14]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-800 text-white font-bold text-lg shadow-lg shadow-indigo-500/20 border border-indigo-400/30 group-hover:scale-105 transition-transform duration-300">
              <span>A</span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse border-2 border-[#080C14]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-tight group-hover:text-indigo-300 transition-colors">
                Aarudhra
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                Web Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-indigo-500/20 border border-indigo-500/30 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Accepting Projects</span>
            </div>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 shadow-md shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-0.5 border border-indigo-400/30 shimmer-sweep"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#0A0E1A]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2 mb-4 pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-slate-200 hover:text-white hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/25"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919944100940?text=Hello%20Aarudhra%20Web%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp: +91 99441 00940</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
