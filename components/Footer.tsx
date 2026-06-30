"use client";

import Image from "next/image";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "FAQs", href: "/#faq" },
    { label: "Contact", href: "/#cta" },
  ],
  "Our Services": [
    { label: "Website Development", href: "/#services" },
    { label: "Website Redesign", href: "/#services" },
    { label: "Local SEO Services", href: "/#services" },
    { label: "Google & Meta Ads", href: "/#services" },
    { label: "Reputation Management", href: "/#services" },
  ],
  "Locations We Serve": [
    { label: "Chennai", href: "/#cta" },
    { label: "Coimbatore", href: "/#cta" },
    { label: "Madurai", href: "/#cta" },
    { label: "Trichy", href: "/#cta" },
    { label: "Across Tamil Nadu", href: "/#cta" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-slate-400 border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/tech2.png"
                width={32}
                height={32}
                alt="Aarudhra Logo"
                className="w-8 h-8 object-contain brightness-125"
              />
              <span className="text-white font-bold text-sm tracking-tight">
                Aarudhra Web Solutions
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Aarudhra Web Solutions
              <br />
              <a
                href="tel:+919944100940"
                className="hover:text-white transition-colors"
              >
                +91 99441 00940
              </a>
              <br />
              <a
                href="mailto:aarudhrawebsolutions@gmail.com"
                className="hover:text-white transition-colors"
              >
                aarudhrawebsolutions@gmail.com
              </a>
            </p>
          </div>

          {/* Links Cols */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="space-y-4">
              <div className="text-white font-bold text-xs uppercase tracking-widest">
                {group}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 text-xs sm:text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons Row */}
        <div className="mt-12 pt-8 border-t border-white/[0.05] flex items-center gap-5 justify-start">
          {/* GitHub Outline Icon */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/10 hover:border-[#6366F1] flex items-center justify-center text-slate-400 hover:text-[#6366F1] hover:scale-105 transition-all duration-200"
            aria-label="GitHub"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          {/* LinkedIn Outline Icon */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/10 hover:border-[#6366F1] flex items-center justify-center text-slate-400 hover:text-[#6366F1] hover:scale-105 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Twitter / X Outline Icon */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/10 hover:border-[#6366F1] flex items-center justify-center text-slate-400 hover:text-[#6366F1] hover:scale-105 transition-all duration-200"
            aria-label="Twitter"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © Copyright Aarudhra Web Solutions. All Rights Reserved. Designed by
            Aarudhra Web Solutions.
          </p>
          <p className="text-slate-500 text-xs font-mono font-medium flex items-center gap-1.5 uppercase tracking-wider select-none">
            Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
