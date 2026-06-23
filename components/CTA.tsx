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
    <section id="cta" className="relative py-28 overflow-hidden bg-[#030014]/50 border-t border-brand-purple/10">
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-40" />

      {/* Radiant Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-purple/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="mono-label text-brand-purple mb-4">// engage</p>
          <h2 className="font-outfit font-black text-3xl md:text-5xl tracking-tight text-white mb-6">
            Ready to{" "}
            <span className="gradient-text">accelerate your velocity?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you are looking to outsource engineering and marketing execution,
            or you are an elite freelancer seeking vetted projects, we have a workspace for you.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1050px] mx-auto items-stretch">
          {/* Client Request Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glow-card rounded-3xl p-8 bg-[#0c0721]/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-brand-purpleLt" />
                </div>
                <div>
                  <h3 className="text-white font-extrabold text-lg">Procure Core Solutions</h3>
                  <p className="text-[11px] text-slate-400 font-semibold uppercase">For Clients &amp; Companies</p>
                </div>
              </div>

              {submittedClient ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-brand-purple/15 border border-brand-purple/30 rounded-2xl p-6 text-center my-12"
                >
                  <Sparkles className="w-8 h-8 text-brand-purpleLt mx-auto mb-3 animate-pulse" />
                  <h4 className="text-white font-extrabold text-sm mb-1.5">Request Received Successfully</h4>
                  <p className="text-xs text-slate-400">Our architecture board will review your requirements and reach out within 1 business day.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleClientSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      required
                      value={clientForm.name}
                      onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                      className="w-full bg-[#050212] border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-brand-purple/50 backdrop-blur-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Work Email</label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      required
                      value={clientForm.email}
                      onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                      className="w-full bg-[#050212] border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-brand-purple/50 backdrop-blur-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Service Required</label>
                    <select
                      value={clientForm.service}
                      onChange={(e) => setClientForm({ ...clientForm, service: e.target.value })}
                      className="w-full bg-[#050212] border border-white/5 text-white rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-brand-purple/50 backdrop-blur-sm transition-colors"
                    >
                      <option value="development">Web &amp; Software Engineering</option>
                      <option value="marketing">Performance Marketing &amp; SEO</option>
                      <option value="squad">Dedicated Virtual Office Squad</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Project Scope Summary</label>
                    <textarea
                      rows={3}
                      placeholder="Summarize your target milestones and features..."
                      value={clientForm.message}
                      onChange={(e) => setClientForm({ ...clientForm, message: e.target.value })}
                      className="w-full bg-[#050212] border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-brand-purple/50 backdrop-blur-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-purple to-violet-700 hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-brand-purple/10 flex items-center justify-center gap-2 transition-all mt-4"
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glow-card rounded-3xl p-8 bg-[#0c0721]/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-white font-extrabold text-lg">Apply as Network Partner</h3>
                  <p className="text-[11px] text-slate-400 font-semibold uppercase">For Developers &amp; Marketers</p>
                </div>
              </div>

              {submittedPartner ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-brand-cyan/15 border border-brand-cyan/30 rounded-2xl p-6 text-center my-12"
                >
                  <Sparkles className="w-8 h-8 text-brand-cyan mx-auto mb-3 animate-pulse" />
                  <h4 className="text-white font-extrabold text-sm mb-1.5">Application Submitted</h4>
                  <p className="text-xs text-slate-400">Our vetting leads will review your portfolio and reach out regarding onboarding coding/marketing audits.</p>
                </motion.div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      required
                      value={partnerForm.name}
                      onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                      className="w-full bg-[#050212] border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-brand-cyan/50 backdrop-blur-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@smith.com"
                      required
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      className="w-full bg-[#050212] border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-brand-cyan/50 backdrop-blur-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Primary Vetted Capability</label>
                    <select
                      value={partnerForm.skill}
                      onChange={(e) => setPartnerForm({ ...partnerForm, skill: e.target.value })}
                      className="w-full bg-[#050212] border border-white/5 text-white rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-brand-cyan/50 backdrop-blur-sm transition-colors"
                    >
                      <option value="frontend">Frontend React / Next.js Specialist</option>
                      <option value="backend">Backend Node.js &amp; Database Engineer</option>
                      <option value="growth">SEO / Paid Ads Marketing Director</option>
                      <option value="design">UI/UX &amp; Web Copywriter Specialist</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Portfolio / GitHub Link</label>
                    <input
                      type="url"
                      placeholder="https://github.com/johnsmith"
                      value={partnerForm.portfolio}
                      onChange={(e) => setPartnerForm({ ...partnerForm, portfolio: e.target.value })}
                      className="w-full bg-[#050212] border border-white/5 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-xs sm:text-sm outline-none focus:border-brand-cyan/50 backdrop-blur-sm transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-cyan to-teal-600 hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-brand-cyan/10 flex items-center justify-center gap-2 transition-all mt-4"
                  >
                    Submit Application
                    <UserPlus className="w-4.5 h-4.5" />
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
