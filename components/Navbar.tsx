"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Globe2, Code2, Smartphone, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

const capabilitiesDropdown = [
  {
    title: "Website Development",
    desc: "High-performing, ultra-fast websites engineered to convert.",
    icon: Globe2,
    href: "/#services",
  },
  {
    title: "Custom Web Applications",
    desc: "Enterprise client portals, internal tools & workflows.",
    icon: Code2,
    href: "/#services",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform iOS & Android mobile product experiences.",
    icon: Smartphone,
    href: "/#services",
  },
  {
    title: "AI Workflows & Automations",
    desc: "LLM agents, smart automations & seamless data pipelines.",
    icon: Sparkles,
    href: "/#services",
  },
  {
    title: "Growth & Lead Generation",
    desc: "Conversion-optimized visibility across search & channels.",
    icon: TrendingUp,
    href: "/#services",
  },
];

const mainNavLinks = [
  { name: "Capabilities", href: "/#services", hasDropdown: true },
  { name: "Why Us", href: "/#why-us" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Work", href: "/#work" },
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>("Capabilities");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/about") {
      setActive("About");
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-white/10 transition-all duration-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-[76px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/#home"
          className="flex items-center gap-3 group flex-shrink-0"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-8 h-8 rounded-lg bg-[#1a1a1f] border border-white/15 flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/techLogo3.png"
              alt="Aarudhra Logo"
              width={22}
              height={22}
              className="w-5 h-5 object-contain"
              priority
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {/* Capabilities with Mega Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsCapabilitiesOpen(true)}
            onMouseLeave={() => setIsCapabilitiesOpen(false)}
          >
            <Link
              href="/#services"
              className="text-[14px] font-sans font-medium text-[#f2f1ed]/80 hover:text-white transition-colors flex items-center gap-1.5 py-2"
            >
              <span>Capabilities</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  isCapabilitiesOpen ? "rotate-180 text-[#793dff]" : "text-white/40"
                }`}
              />
            </Link>

            {/* Dropdown Panel */}
            <AnimatePresence>
              {isCapabilitiesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-[70px] left-0 w-[420px] bg-[#121212] border border-white/10 rounded-xl shadow-2xl p-3 grid gap-1 z-50"
                >
                  <div className="px-3 py-2 text-[11px] font-mono font-medium uppercase tracking-wider text-white/40 border-b border-white/10 mb-1 flex items-center justify-between">
                    <span>Engineering Disciplines</span>
                    <span className="text-[#793dff]">All In-House</span>
                  </div>
                  {capabilitiesDropdown.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setIsCapabilitiesOpen(false)}
                        className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-md bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#793dff]/50 transition-colors">
                          <ItemIcon size={16} className="text-[#793dff]" />
                        </div>
                        <div>
                          <div className="text-[13.5px] font-medium text-white group-hover:text-[#8b5cf6] transition-colors">
                            {item.title}
                          </div>
                          <p className="text-[12px] text-white/50 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#why-us"
            className="text-[14px] font-sans font-medium text-[#f2f1ed]/80 hover:text-white transition-colors"
          >
            Why Us
          </Link>
          <Link
            href="/#solutions"
            className="text-[14px] font-sans font-medium text-[#f2f1ed]/80 hover:text-white transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="/#work"
            className="text-[14px] font-sans font-medium text-[#f2f1ed]/80 hover:text-white transition-colors"
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-[14px] font-sans font-medium transition-colors ${
              pathname === "/about"
                ? "text-white font-semibold"
                : "text-[#f2f1ed]/80 hover:text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/#faqs"
            className="text-[14px] font-sans font-medium text-[#f2f1ed]/80 hover:text-white transition-colors"
          >
            FAQs
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="fc-navcta">
            <span>Start a project</span>
            <svg
              className="fc-navcta__arrow"
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              aria-hidden="true"
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden border-t border-white/10 bg-[#121212] px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/#services"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-medium text-white/90 hover:text-[#793dff] py-1"
              >
                Capabilities
              </Link>
              <Link
                href="/#why-us"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-medium text-white/90 hover:text-[#793dff] py-1"
              >
                Why Us
              </Link>
              <Link
                href="/#solutions"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-medium text-white/90 hover:text-[#793dff] py-1"
              >
                Solutions
              </Link>
              <Link
                href="/#work"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-medium text-white/90 hover:text-[#793dff] py-1"
              >
                Work
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-medium text-white/90 hover:text-[#793dff] py-1"
              >
                About
              </Link>
              <Link
                href="/#faqs"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-medium text-white/90 hover:text-[#793dff] py-1"
              >
                FAQs
              </Link>

              <div className="pt-4 border-t border-white/10 mt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="fc-btn fc-btn--violet w-full justify-center"
                >
                  Start a project
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
