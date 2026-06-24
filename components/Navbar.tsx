"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Start", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Ecosystem", href: "/#ecosystem" },
  { name: "Workspace", href: "/#workspace" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Start");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/about") {
      setActive("About");
    } else if (pathname === "/") {
      const handleHashChange = () => {
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        const found = navLinks.find((l) => l.href.endsWith(hash) && hash !== "");
        if (found) {
          setActive(found.name);
        } else if (typeof window !== "undefined" && window.scrollY < 200) {
          setActive("Start");
        }
      };
      handleHashChange();
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300">
      <div className="mx-auto max-w-[1200px] px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`flex items-center justify-between px-6 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-white/95 border-slate-200/80 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
              : "bg-white/80 border-slate-200/50 backdrop-blur-md shadow-[0_4px_20px_rgba(15,23,42,0.04)]"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3.5 py-1.5 flex-shrink-0">
            <Image
              src="/tech2.png"
              width={64}
              height={64}
              alt="Aarudhra Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-slate-900 font-extrabold text-sm tracking-tight whitespace-nowrap bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-brand-purple">
              Aarudhra Web Solutions
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setActive(l.name)}
                className={`relative text-[13px] px-4 py-2 rounded-full transition-all duration-200 ${
                  active === l.name
                    ? "text-brand-purple font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {l.name}
                {active === l.name && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-brand-purple/[0.06] border border-brand-purple/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="#cta"
              className="flex items-center gap-2 bg-gradient-to-br from-brand-purple to-[#581c87] hover:brightness-110 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full shadow-[0_2px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_24px_rgba(139,92,246,0.45)] hover:-translate-y-px active:translate-y-0 transition-all duration-200"
            >
              Procure Solutions
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] p-2 rounded-full hover:bg-slate-900/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] bg-slate-800 rounded-full transition-all duration-300 ${
                open ? "w-[20px] rotate-45 translate-y-[6.5px]" : "w-[20px]"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-slate-800 rounded-full transition-all duration-300 ${
                open ? "w-4 opacity-0 scale-x-0" : "w-[20px]"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-slate-800 rounded-full transition-all duration-300 ${
                open ? "w-[20px] -rotate-45 -translate-y-[6.5px]" : "w-[20px]"
              }`}
            />
          </button>
        </motion.div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mx-auto max-w-[1200px] px-4 overflow-hidden mt-2"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-brand-purple/15 rounded-2xl p-4 flex flex-col gap-1.5 shadow-xl">
              {navLinks.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => {
                    setActive(l.name);
                    setOpen(false);
                  }}
                  className={`text-left text-sm px-4 py-2.5 rounded-xl transition-all duration-200 ${
                    active === l.name
                      ? "bg-brand-purple/10 text-brand-purple font-medium border border-brand-purple/20"
                      : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900"
                  }`}
                >
                  {l.name}
                </a>
              ))}
              <div className="h-px bg-slate-200 my-2" />
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-1 bg-gradient-to-br from-brand-purple to-[#581c87] text-white text-sm font-semibold py-3 rounded-xl shadow-[0_2px_16px_rgba(139,92,246,0.2)] text-center block"
              >
                Procure Solutions
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
