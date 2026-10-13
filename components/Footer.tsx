"use client";

import Link from "next/link";
import { ArrowUpRight, MessageSquare, Phone, Mail, MapPin, Heart, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05080E] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-bold text-lg flex items-center justify-center border border-indigo-400/30">
                A
              </div>
              <div>
                <span className="font-bold text-white text-base tracking-tight block">
                  Aarudhra Web Solutions
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Technology &amp; Digital Solutions
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Helping businesses build their digital presence, generate commercial opportunities, improve daily digital operations, and adopt modern technology with clarity and confidence.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">
                All Systems Operational • Accepting New Projects
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">Digital Journey</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Aarudhra</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#innovation" className="hover:text-white transition-colors">Innovation &amp; AI</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Company &amp; Team</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Insights</a></li>
            </ul>
          </div>

          {/* Technology Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web Application Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Application Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Software Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Solutions &amp; Integrations</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Lead Generation Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Performance Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Growth Strategy</a></li>
            </ul>
          </div>

          {/* Regional Reach & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Regional Coverage
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Serving businesses across Tamil Nadu, India, and global markets:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">Chennai</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">Coimbatore</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">Madurai</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">Trichy</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">Salem</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">Bangalore</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">Global Remote</span>
            </div>

            <div className="pt-2 space-y-1.5 text-xs text-slate-300">
              <a href="tel:+919944100940" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <span>+91 99441 00940</span>
              </a>
              <a href="mailto:aarudhrawebsolutions@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>aarudhrawebsolutions@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Aarudhra Web Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/919944100940?text=Hello%20Aarudhra%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <a href="#home" className="hover:text-slate-300 transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
