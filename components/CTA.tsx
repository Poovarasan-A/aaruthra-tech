"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Website Development",
    requirement: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    const message = `Hello Aarudhra Web Solutions!\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "N/A"}\nService Required: ${form.service}\nRequirement Details:\n${form.requirement || "Interested in discussing a project."}`;
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919944100940?text=${encoded}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F8F9FC] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Information & Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-700">
                  Contact Aarudhra
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.12] mb-5">
                Let&apos;s build something that moves your business forward.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Whether you need a new website, higher local search visibility, or ongoing digital support, we&apos;re ready to help you take the next practical step.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone / WhatsApp */}
              <div className="p-4 rounded-2xl glass-card flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-subtle">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Phone &amp; WhatsApp
                  </h4>
                  <a
                    href="tel:+919944100940"
                    className="font-heading font-bold text-slate-900 text-base hover:text-brand-indigo transition-colors block mt-0.5"
                  >
                    +91 99441 00940
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Available for direct calls &amp; WhatsApp chats
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="p-4 rounded-2xl glass-card flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-brand-indigo flex-shrink-0 shadow-subtle">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Email Address
                  </h4>
                  <a
                    href="mailto:aarudhrawebsolutions@gmail.com"
                    className="font-heading font-bold text-slate-900 text-base hover:text-brand-indigo transition-colors block mt-0.5"
                  >
                    aarudhrawebsolutions@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    We respond within 2 hours during business hours
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-2xl glass-card flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 flex-shrink-0 shadow-subtle">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Business Hours
                  </h4>
                  <p className="font-heading font-bold text-slate-900 text-base mt-0.5">
                    Monday – Saturday: 8:00 AM – 7:00 PM
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Sunday: Emergency Support Only
                  </p>
                </div>
              </div>
            </div>

            {/* Prominent WhatsApp Option */}
            <div className="pt-2">
              <a
                href="https://wa.me/919944100940?text=Hello%20Aarudhra%20Web%20Solutions%2C%20I%27d%20like%20to%20chat%20directly."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#128C7E] hover:underline"
              >
                <MessageSquare className="w-4 h-4" />
                Prefer WhatsApp? Click here to chat immediately →
              </a>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 glass-card rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.06)] p-8 sm:p-10"
          >
            <div className="mb-6">
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-1">
                Tell us about your project
              </h3>
              <p className="text-slate-500 text-sm">
                Share a few brief details and we will review your requirement right away.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-xl text-slate-900">
                  Enquiry Prepared for WhatsApp
                </h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Your project requirements have been formatted and directed to our WhatsApp line. If your browser didn&apos;t automatically open WhatsApp, please use the button below.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/919944100940?text=${encodeURIComponent(
                      `Hello Aarudhra Web Solutions!\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || "N/A"}\nService Required: ${form.service}\nRequirement Details:\n${form.requirement || "Interested in discussing a project."}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#0E7064] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-indigo/30 focus:border-brand-indigo transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 99441 00940"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-indigo/30 focus:border-brand-indigo transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. contact@business.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-indigo/30 focus:border-brand-indigo transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                      Service of Interest *
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-indigo/30 focus:border-brand-indigo transition-all"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Local SEO & Visibility">Local SEO &amp; Visibility</option>
                      <option value="Google & Meta Advertising">Google &amp; Meta Advertising</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Cross-Platform Mobile Apps">Cross-Platform Mobile Apps</option>
                      <option value="Ongoing Support & Growth">Ongoing Support &amp; Growth</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Brief Requirement
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what your business does and what you're looking to build or improve..."
                    value={form.requirement}
                    onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                    className="w-full bg-[#F8F7F4] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-indigo/30 focus:border-brand-indigo transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-indigo hover:bg-brand-indigoDark text-white font-bold text-base py-4 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 shimmer-sweep"
                >
                  <span>Send Enquiry</span>
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-center text-xs text-slate-500 pt-1">
                  We respect your privacy. No spam. You will be connected directly with our core technical team.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
