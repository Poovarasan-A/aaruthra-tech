"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Send,
} from "lucide-react";

const SERVICES_OPTIONS = [
  "Website Development",
  "Web Application Development",
  "Mobile Application Development",
  "Custom Software Solutions",
  "AI Solutions & Integrations",
  "Lead Generation",
  "Digital Marketing",
  "Social Media Marketing",
  "Digital Growth Solutions",
  "Other / Comprehensive Consultation",
];

const BUDGET_OPTIONS = [
  "Under ₹50,000 / Starter",
  "₹50,000 - ₹1,50,000 / Growth",
  "₹1,50,000 - ₹5,00,000 / Scale",
  "₹5,00,000+ / Enterprise",
  "Flexible / Need Guidance",
];

export default function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "Website Development",
    budget: "₹50,000 - ₹1,50,000 / Growth",
    requirement: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      setErrorMessage("Please enter your name and phone number to continue.");
      return;
    }

    setErrorMessage("");
    setSubmitted(true);

    // Format a high-conversion WhatsApp pre-filled message
    const msg = `Hello Aarudhra Web Solutions!\n\nI would like to discuss a project:\n• Name: ${form.name}\n• Phone: ${form.phone}\n• Email: ${form.email || "Not specified"}\n• Company: ${form.company || "Not specified"}\n• Service: ${form.service}\n• Budget Range: ${form.budget}\n• Requirement: ${form.requirement || "Please arrange an initial consultation."}`;

    // Open WhatsApp in new tab
    const waUrl = `https://wa.me/919944100940?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#080C14] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Consultation Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Start a Project</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Have a Business Challenge or Idea?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
                  Let&apos;s Build the Solution.
                </span>
              </h2>
              <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                Tell us what you&apos;re working toward. We&apos;ll help you explore the right digital and technology solutions for your business.
              </p>
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <a
                href="https://wa.me/919944100940?text=Hello%20Aarudhra%20Web%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-300 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-mono block">INSTANT MESSAGING</span>
                  <strong className="text-base font-bold text-white">Chat on WhatsApp: +91 99441 00940</strong>
                </div>
              </a>

              <a
                href="tel:+919944100940"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 text-slate-300 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">DIRECT PHONE</span>
                  <strong className="text-base font-bold text-white">+91 99441 00940</strong>
                </div>
              </a>

              <a
                href="mailto:aarudhrawebsolutions@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 text-slate-300 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">DIRECT EMAIL</span>
                  <strong className="text-base font-bold text-white">aarudhrawebsolutions@gmail.com</strong>
                </div>
              </a>
            </div>

            {/* Consultation Guarantees */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>Response guaranteed within 4 business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% confidential under mutual non-disclosure (NDA)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Serving Chennai, Coimbatore, Madurai, Trichy, Salem, Across India &amp; Global Remote</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Planner Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-10 bg-[#0C1222] border border-white/10 shadow-2xl relative">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Project Consultation Planner
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill in your project parameters below to initiate an immediate technical discussion.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Project Brief Created Successfully!
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    Your project details have been prepared for WhatsApp dispatch. If WhatsApp did not open automatically, you can message us directly at <strong>+91 99441 00940</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-semibold text-white border border-white/10 transition-all"
                  >
                    <span>Submit another inquiry</span>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="anand@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Enterprises"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service of Interest */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    >
                      {SERVICES_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#080C14] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Budget Range */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Estimated Investment / Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {BUDGET_OPTIONS.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setForm({ ...form, budget: b })}
                          className={`p-2.5 rounded-xl text-[11px] font-semibold text-left border transition-all ${
                            form.budget === b
                              ? "bg-indigo-600/20 border-indigo-500 text-white"
                              : "bg-[#080C14] border-white/10 text-slate-400 hover:text-white"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Requirement Brief */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Brief Project Requirement / Challenges to Solve
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you are building, your primary goals, current bottlenecks, or desired launch timeframe..."
                      value={form.requirement}
                      onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080C14] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 shadow-xl shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-0.5 border border-indigo-400/30 flex items-center justify-center gap-2.5 shimmer-sweep"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-mono">
                    Direct founder review • Instant WhatsApp sync • Zero spam guaranteed
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
