"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send, Sparkles } from "lucide-react";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Website Development",
    requirement: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    // Construct WhatsApp message
    const message = `Hello Aarudhra Web Solutions!\n\nMy Name: ${form.name}\nPhone: ${form.phone}\nService Required: ${form.service}\nRequirement: ${form.requirement}`;
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919944100940?text=${encoded}`;

    // Open WhatsApp link in new tab
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="cta"
      className="relative py-28 overflow-hidden bg-[#EFEEE9] border-t border-black/5"
    >
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-40" />

      {/* Radiant Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6366F1]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="font-mono uppercase tracking-widest text-xs text-[#6366F1] font-semibold mb-3 block">
            // contact us
          </span>
          <h2 className="font-outfit font-bold text-3xl md:text-5xl text-[#1A1A2E] tracking-tight mb-5">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions or want to discuss a potential project? Fill out our
            simple requirement form or get in touch directly.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-[1000px] mx-auto">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-2xl p-8 bg-white border border-black/[0.06] shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[#1A1A2E] font-bold text-xl mb-1.5 font-outfit">
                Tell Us About Your Requirement
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Share a few details about your business or what you're looking
                to improve. We'll review it and get back to you within 2 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[#6366F1]/5 border border-[#6366F1]/20 rounded-2xl p-8 text-center my-8"
                >
                  <Sparkles className="w-10 h-10 text-[#6366F1] mx-auto mb-3 animate-pulse" />
                  <h4 className="text-[#1A1A2E] font-bold text-base mb-2 font-outfit">
                    Requirement Sent to WhatsApp
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Your details have been pre-filled and directed to our
                    WhatsApp. If the page did not redirect automatically, please
                    click below.
                  </p>
                  <a
                    href={`https://wa.me/919944100940?text=${encodeURIComponent(
                      `Hello Aarudhra Web Solutions!\n\nMy Name: ${form.name}\nPhone: ${form.phone}\nService Required: ${form.service}\nRequirement: ${form.requirement}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white font-semibold text-xs py-2.5 px-5 rounded-lg transition-colors"
                  >
                    Open WhatsApp Manually
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-[#F8F7F4] border border-black/5 text-[#1A1A2E] placeholder-slate-400 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#6366F1]/40 focus:ring-4 focus:ring-[#6366F1]/5 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 99441 00940"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full bg-[#F8F7F4] border border-black/5 text-[#1A1A2E] placeholder-slate-400 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#6366F1]/40 focus:ring-4 focus:ring-[#6366F1]/5 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Select Service
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full bg-[#F8F7F4] border border-black/5 text-[#1A1A2E] rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#6366F1]/40 focus:ring-4 focus:ring-[#6366F1]/5 transition-all duration-300"
                    >
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Online Advertising">
                        Online Advertising
                      </option>
                      <option value="Digital Marketing Support">
                        Digital Marketing Support
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Brief Requirement
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your business or what you are looking to improve..."
                      value={form.requirement}
                      onChange={(e) =>
                        setForm({ ...form, requirement: e.target.value })
                      }
                      className="w-full bg-[#F8F7F4] border border-black/5 text-[#1A1A2E] placeholder-slate-400 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#6366F1]/40 focus:ring-4 focus:ring-[#6366F1]/5 transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all mt-4 shimmer-sweep"
                  >
                    Submit / WhatsApp
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-start space-y-6"
          >
            {/* Location */}
            {/* <div className="flex gap-4 p-5 rounded-xl bg-white border border-black/[0.04] shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-sm text-[#1A1A2E]">Location</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Dindigul, Tamil Nadu, India</p>
              </div>
            </div> */}

            {/* Email */}
            <div className="flex gap-4 p-5 rounded-xl bg-white border border-black/[0.04] shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-sm text-[#1A1A2E]">
                  Email Address
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  <a
                    href="mailto:aarudhrawebsolutions@gmail.com"
                    className="hover:underline"
                  >
                    aarudhrawebsolutions@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Call / WhatsApp */}
            <div className="flex gap-4 p-5 rounded-xl bg-white border border-black/[0.04] shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center text-[#10B981] flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-sm text-[#1A1A2E]">
                  Call / WhatsApp
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  <a href="tel:+919944100940" className="hover:underline">
                    +91 99441 00940
                  </a>
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-4 p-5 rounded-xl bg-white border border-black/[0.04] shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-outfit font-bold text-sm text-[#1A1A2E]">
                  Business Hours
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Mon-Sat: 8AM - 7PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
