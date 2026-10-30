"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home", sectionId: "home" },
  { name: "About", href: "/about", sectionId: "about" },
  { name: "Services", href: "/#services", sectionId: "services" },
  { name: "Work", href: "/#work", sectionId: "work" },
  { name: "Why Us", href: "/#why-us", sectionId: "why-us" },
  { name: "FAQ", href: "/#faq", sectionId: "faq" },
  { name: "Contact", href: "/#contact", sectionId: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>("Home");
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/about") {
      setActive("About");
      return;
    }

    if (pathname === "/") {
      if (typeof window !== "undefined") {
        const hash = window.location.hash.replace("#", "");
        if (hash) {
          const match = navLinks.find((l) => l.sectionId === hash);
          if (match) setActive(match.name);
        } else if (window.scrollY < 250) {
          setActive("Home");
        }
      }

      const sectionIds = [
        "home",
        "services",
        "work",
        "why-us",
        "faq",
        "contact",
      ];
      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const match = navLinks.find(
                (l) => l.sectionId === entry.target.id,
              );
              if (match) {
                setActive(match.name);
              }
            }
          });
        },
        {
          rootMargin: "-25% 0px -55% 0px",
          threshold: 0.1,
        },
      );

      elements.forEach((el) => observer.observe(el));

      const handleHashChange = () => {
        const hash = window.location.hash.replace("#", "");
        if (hash) {
          const match = navLinks.find((l) => l.sectionId === hash);
          if (match) setActive(match.name);
        } else if (window.scrollY < 200) {
          setActive("Home");
        }
      };

      window.addEventListener("hashchange", handleHashChange);

      return () => {
        elements.forEach((el) => observer.unobserve(el));
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, [pathname]);

  const handleNavClick = (link: (typeof navLinks)[0]) => {
    setActive(link.name);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div
          className={`flex items-center justify-between px-5 py-2.5 rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
              : "bg-white/65 backdrop-blur-md border-slate-200/60 shadow-[0_2px_12px_rgba(15,23,42,0.02)]"
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/#home"
            onClick={() => setActive("Home")}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <div className="relative w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/techLogo3.png"
                alt="Aarudhra Logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-slate-900 text-sm tracking-tight leading-tight">
                Aarudhra
              </span>
              <span className="text-[10px] font-medium text-slate-500 tracking-wider uppercase leading-none">
                Web Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive = active === link.name;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link)}
                  className={`relative text-[13px] px-3.5 py-1.5 rounded-xl transition-all duration-200 font-medium ${
                    isActive
                      ? "text-brand-indigo font-bold bg-brand-indigo/10 border border-brand-indigo/20 shadow-xs"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 border border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#contact"
              onClick={() => setActive("Contact")}
              className="inline-flex items-center gap-1.5 bg-brand-indigo hover:bg-brand-indigoDark text-white text-[13px] font-semibold px-6 py-2 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md shimmer-sweep"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mx-auto max-w-[1240px] px-4 pt-2">
          <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-4 shadow-xl flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "text-brand-indigo font-bold bg-brand-indigo/10 border border-brand-indigo/20"
                      : "text-slate-700 hover:text-brand-indigo hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2 mt-1 border-t border-slate-100">
              <a
                href="/#contact"
                onClick={() => {
                  setActive("Contact");
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full bg-brand-indigo text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-sm text-center"
              >
                Let&apos;s Talk
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
