"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, UserPlus, Briefcase, Sparkles } from "lucide-react";

export default function CTA() {
  const [clientForm, setClientForm] = useState({ name: "", email: "", service: "development", message: "" });
  const [partnerForm, setPartnerForm] = useState({ name: "", email: "", skill: "frontend", portfolio: "" });
  const [submittedClient, setSubmittedClient] = useState(false);
  const [submittedPartner, setSubmittedPartner] = useState(false);

  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientForm.name || !clientForm.email) return;
    setSubmittedClient(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.name || !partnerForm.email) return;
    setSubmittedPartner(true);
  };

  return (
    <section id="cta" className="relative py-28 overflow-hidden bg-[#EFEEE9] border-t border-black/5">
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-40" />

      {/* Radiant Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6366F1]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-mono uppercase tracking-widest text-xs text-[#6366F1] font-semibold mb-3 block">
            // engage
          </span>
          <h2 className="font-outfit font-bold text-3xl md:text-5xl text-[#1A1A2E] tracking-tight mb-5">
            Ready to{" "}
            <span className="gradient-text">accelerate your velocity?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether you are looking to outsource engineering and marketing execution,
            or you are an elite freelancer seeking vetted projects, we have a workspace for you.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1050px] mx-auto items-stretch">
          {/* Client Request Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 bg-white border border-black/[0.06] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#6366F1]" />
                </div>
                <div>
                  <h3 className="text-[#1A1A2E] font-bold text-lg leading-tight">Procure Core Solutions</h3>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">For Clients &amp; Companies</p>
                </div>
              </div>

              {submittedClient ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[#6366F1]/5 border border-[#6366F1]/25 rounded-2xl p-6 text-center my-12"
                >
                  <Sparkles className="w-8 h-8 text-[#6366F1] mx-auto mb-3 animate-pulse" />
                  <h4 className="text-[#1A1A2E] font-bold text-sm mb-1.5">Request Received Successfully</h4>
                  <p className="text-xs text-slate-600">Our architecture board will review your requirements and reach out within 1 business day.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleClientSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      required
                      value={clientForm.name}
                      onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-black/5 text-[#1A1A2E] placeholder-slate-400 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#6366F1]/40 focus:ring-4 focus:ring-[#6366F1]/5 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Work Email</label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      required
                      value={clientForm.email}
                      onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-black/5 text-[#1A1A2E] placeholder-slate-400 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#6366F1]/40 focus:ring-4 focus:ring-[#6366F1]/5 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Service Required</label>
                    <select
                      value={clientForm.service}
                      onChange={(e) => setClientForm({ ...clientForm, service: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-black/5 text-[#1A1A2E] rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#6366F1]/40 focus:ring-4 focus:ring-[#6366F1]/5 transition-all duration-300"
                    >
                      <option value="development">Web &amp; Software Engineering</option>
                      <option value="marketing">Performance Marketing &amp; SEO</option>
                      <option value="squad">Dedicated Virtual Office Squad</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Project Scope Summary</label>
                    <textarea
                      rows={3}
                      placeholder="Summarize your target milestones and features..."
                      value={clientForm.message}
                      onChange={(e) => setClientForm({ ...clientForm, message: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-black/5 text-[#1A1A2E] placeholder-slate-400 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#6366F1]/40 focus:ring-4 focus:ring-[#6366F1]/5 transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#6366F1] hover:bg-[#4f46e5] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all mt-4 shimmer-sweep"
                  >
                    Request Project Scope
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Partner Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 bg-white border border-black/[0.06] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <div>
                  <h3 className="text-[#1A1A2E] font-bold text-lg leading-tight">Apply as Network Partner</h3>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">For Developers &amp; Marketers</p>
                </div>
              </div>

              {submittedPartner ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[#06B6D4]/5 border border-[#06B6D4]/25 rounded-2xl p-6 text-center my-12"
                >
                  <Sparkles className="w-8 h-8 text-[#06B6D4] mx-auto mb-3 animate-pulse" />
                  <h4 className="text-[#1A1A2E] font-bold text-sm mb-1.5">Application Submitted</h4>
                  <p className="text-xs text-slate-600">Our vetting leads will review your portfolio and reach out regarding onboarding coding/marketing audits.</p>
                </motion.div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      required
                      value={partnerForm.name}
                      onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-black/5 text-[#1A1A2E] placeholder-slate-400 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#06B6D4]/40 focus:ring-4 focus:ring-[#06B6D4]/5 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@smith.com"
                      required
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-black/5 text-[#1A1A2E] placeholder-slate-400 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#06B6D4]/40 focus:ring-4 focus:ring-[#06B6D4]/5 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Primary Vetted Capability</label>
                    <select
                      value={partnerForm.skill}
                      onChange={(e) => setPartnerForm({ ...partnerForm, skill: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-black/5 text-[#1A1A2E] rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#06B6D4]/40 focus:ring-4 focus:ring-[#06B6D4]/5 transition-all duration-300"
                    >
                      <option value="frontend">Frontend React / Next.js Specialist</option>
                      <option value="backend">Backend Node.js &amp; Database Engineer</option>
                      <option value="growth">SEO / Paid Ads Marketing Director</option>
                      <option value="design">UI/UX &amp; Web Copywriter Specialist</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Portfolio / GitHub Link</label>
                    <input
                      type="url"
                      placeholder="https://github.com/johnsmith"
                      value={partnerForm.portfolio}
                      onChange={(e) => setPartnerForm({ ...partnerForm, portfolio: e.target.value })}
                      className="w-full bg-[#F8F7F4] border border-black/5 text-[#1A1A2E] placeholder-slate-400 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-[#06B6D4]/40 focus:ring-4 focus:ring-[#06B6D4]/5 transition-all duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#06B6D4] hover:bg-[#0891b2] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all mt-4 shimmer-sweep"
                  >
                    Submit Application
                    <UserPlus className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
