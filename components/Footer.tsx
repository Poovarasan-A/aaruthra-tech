"use client";

import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Engineering", href: "#services" },
    { label: "Growth Marketing", href: "#services" },
    { label: "Talent Squads", href: "#services" },
  ],
  Ecosystem: [
    { label: "Synergy Cycle", href: "#ecosystem" },
    { label: "Dashboard Workspace", href: "#workspace" },
    { label: "Telemetry & QA", href: "#workspace" },
  ],
  Engagement: [
    { label: "Project Sprints", href: "#pricing" },
    { label: "Retainers", href: "#pricing" },
    { label: "Post a RFP", href: "#cta" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#fafbfc] border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/tech2.png"
                width={32}
                height={32}
                alt="Aarudhra Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-slate-900 font-extrabold text-sm tracking-tight">
                Aarudhra Web Solutions
              </span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              Custom software engineering, performance growth marketing, and vetted 
              talent brokered through automated testing pipelines and expert code auditors.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="space-y-4">
              <div className="text-slate-900 font-bold text-xs uppercase tracking-widest">{group}</div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-600 text-xs sm:text-sm hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Aarudhra Web Solutions. All rights reserved. Vetted Talent Network.
          </p>
          <div className="flex items-center gap-5">
            {/* Globe */}
            <a href="#" className="text-slate-400 hover:text-brand-purple hover:scale-110 transition-all duration-200" aria-label="Website">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
            {/* Email Contact */}
            <a href="mailto:info@aarudhra.com" className="text-slate-400 hover:text-brand-purple hover:scale-110 transition-all duration-200" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
