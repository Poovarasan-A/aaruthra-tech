"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Users,
  Activity,
  Terminal,
  Code,
  Cpu,
} from "lucide-react";

export default function WorkspacePreview() {
  const [activeTab, setActiveTab] = useState<"milestones" | "squad" | "qa">(
    "milestones",
  );

  return (
    <section
      id="workspace"
      className="relative py-28 overflow-hidden bg-white"
    >
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-50" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="mono-label text-brand-emerald mb-4">
            // delivery workspace
          </p>
          <h2
            className="font-outfit font-black text-3xl md:text-5xl tracking-tight text-slate-900 mb-6"
          >
            Complete transparency{" "}
            <span className="gradient-text-emerald">in execution</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Monitor commits, track ad account setup, inspect automated linting,
            and review milestone sign-offs inside your client dashboard.
          </p>
        </div>

        {/* Dashboard Frame Container */}
        <div className="relative mx-auto max-w-[1000px] rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-[0_30px_70px_-15px_rgba(15,23,42,0.08),0_0_0_1px_rgba(15,23,42,0.01)] overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4.5 border-b border-slate-200 bg-slate-50/80">
            <div className="flex items-center gap-3">
              {/* Dot indicators */}
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-cyan" />
                <span className="font-mono text-xs text-slate-600">
                  workspace://aarudhra-delta-prod
                </span>
              </div>
            </div>

            {/* Simulated environment state pill */}
            <div className="flex items-center gap-2 bg-brand-emerald/10 border border-brand-emerald/30 rounded-full px-4 py-1 text-xs font-medium text-brand-emerald">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
              QA Engine Active
            </div>
          </div>

          <div className="flex flex-col md:flex-row min-h-[500px]">
            {/* Dashboard Sidebar */}
            <div className="w-full md:w-[260px] border-r border-slate-200/80 p-5 flex flex-col gap-1.5 bg-[#fafbfc]">
              <span className="mono-label text-slate-400 px-3 mb-2 block">
                // nav
              </span>

              <button
                onClick={() => setActiveTab("milestones")}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative ${
                  activeTab === "milestones"
                    ? "bg-brand-purple/[0.06] text-brand-purpleLt border border-brand-purple/15 shadow-[0_2px_8px_rgba(124,58,237,0.03)]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-900/[0.02] border border-transparent"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                Milestone Track
              </button>

              <button
                onClick={() => setActiveTab("squad")}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative ${
                  activeTab === "squad"
                    ? "bg-brand-purple/[0.06] text-brand-purpleLt border border-brand-purple/15 shadow-[0_2px_8px_rgba(124,58,237,0.03)]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-900/[0.02] border border-transparent"
                }`}
              >
                <Users className="w-4 h-4" />
                Vetted Squad
              </button>

              <button
                onClick={() => setActiveTab("qa")}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative ${
                  activeTab === "qa"
                    ? "bg-brand-purple/[0.06] text-brand-purpleLt border border-brand-purple/15 shadow-[0_2px_8px_rgba(124,58,237,0.03)]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-900/[0.02] border border-transparent"
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                QA Telemetry
              </button>

              <div className="mt-auto pt-6 border-t border-slate-200 hidden md:block">
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200">
                  <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">
                    Procured Budget
                  </div>
                  <div className="text-slate-900 font-extrabold text-lg">
                    $14,500
                  </div>
                  <div className="text-[9px] text-brand-emerald font-semibold mt-1">
                    ✓ 3 Milestones Paid
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Content Panel */}
            <div className="flex-1 p-6 md:p-8 bg-white">
              <AnimatePresence mode="wait">
                {activeTab === "milestones" && (
                  <motion.div
                    key="milestones"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-outfit font-bold text-lg text-slate-900 mb-1 flex items-center gap-2">
                        Project Roadmap &amp; Approvals
                      </h3>
                      <p className="text-slate-600 text-xs">
                        Tracks client specification to agency sign-off.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      {[
                        {
                          name: "UX Scoping & Copywriting Approval",
                          date: "June 08",
                          status: "Approved",
                          signoff: "Vetted by Agency Lead",
                          success: true,
                        },
                        {
                          name: "Next.js Mobile-Responsive Architecture",
                          date: "June 14",
                          status: "Approved",
                          signoff: "98% Coverage & Tech Lead Sign-off",
                          success: true,
                        },
                        {
                          name: "SEO Funnel Setup & Analytics Mapping",
                          date: "June 20",
                          status: "Approved",
                          signoff: "Vetted by Growth Director",
                          success: true,
                        },
                        {
                          name: "Lead Database Sync & CRM Connectors",
                          date: "June 24 (In Review)",
                          status: "QA Inspection",
                          signoff: "Under automated code review",
                          success: false,
                        },
                      ].map((item, idx) => (
                        <div
                          key={item.name}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-[#fafbfc] border border-slate-200/60 hover:bg-white hover:border-brand-purple/25 hover:shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300 gap-3"
                        >
                          <div className="flex items-start gap-3">
                            {item.success ? (
                              <CheckCircle2 className="w-5 h-5 text-brand-emerald mt-0.5 flex-shrink-0" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-brand-cyan/60 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
                              </div>
                            )}
                            <div>
                              <div className="text-sm font-semibold text-slate-900">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-slate-500 mt-0.5">
                                {item.signoff}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 sm:text-right">
                            <span className="text-[10px] font-semibold text-slate-500">
                              {item.date}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                                item.success
                                  ? "bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20"
                                  : "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "squad" && (
                  <motion.div
                    key="squad"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-outfit font-bold text-lg text-slate-900 mb-1">
                        Dedicated Vetted Specialists
                      </h3>
                      <p className="text-slate-600 text-xs">
                        Talent network assigned to your architectural
                        milestones.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {[
                        {
                          name: "Nikolai V.",
                          role: "Lead React & Next Specialist",
                          xp: "8+ yrs XP // Vetted 97%",
                          bullets: [
                            "Static Rendering pipelines",
                            "Next.js Core integration",
                          ],
                        },
                        {
                          name: "Sarah M.",
                          role: "Growth & Analytics Architect",
                          xp: "6+ yrs XP // Vetted 99%",
                          bullets: [
                            "Conversion Rig Auditing",
                            "Meta Ad telemetry setup",
                          ],
                        },
                        {
                          name: "Alexey B.",
                          role: "DevOps & Cloud Engineer",
                          xp: "7+ yrs XP // Vetted 95%",
                          bullets: [
                            "AWS serverless scaling",
                            "Docker/CD pipelines",
                          ],
                        },
                        {
                          name: "Aarudhra Core",
                          role: "QA Lead & Code Auditor",
                          xp: "Internal Review Engine",
                          bullets: [
                            "Pull Request peer review",
                            "Security checks",
                          ],
                        },
                      ].map((member) => (
                        <div
                          key={member.name}
                          className="p-5 rounded-xl bg-slate-50/50 border border-slate-200/80 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <span className="text-sm font-bold text-slate-900">
                                {member.name}
                              </span>
                              <span className="text-[9px] font-semibold text-brand-purpleLt uppercase border border-brand-purple/20 px-2 py-0.5 rounded-full bg-brand-purple/5">
                                {member.xp}
                              </span>
                            </div>
                            <div className="text-xs text-brand-cyan font-semibold mt-1">
                              {member.role}
                            </div>
                            <ul className="space-y-1 mt-4">
                              {member.bullets.map((b) => (
                                <li
                                  key={b}
                                  className="text-[11px] text-slate-600 flex items-center gap-1.5"
                                >
                                  <span className="w-1 h-1 rounded-full bg-slate-500" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "qa" && (
                  <motion.div
                    key="qa"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-outfit font-bold text-lg text-slate-900 mb-1">
                        Telemetry &amp; Launch Analytics
                      </h3>
                      <p className="text-slate-600 text-xs">
                        Continuous speed and tracking audits.
                      </p>
                    </div>

                    {/* Gauges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        {
                          label: "Performance Score",
                          val: "99",
                          note: "Lighthouse core web vitals",
                        },
                        {
                          label: "SEO Integrity",
                          val: "100",
                          note: "Zero broken tags/headers",
                        },
                        {
                          label: "Code Coverage",
                          val: "94%",
                          note: "Automated unit specs",
                        },
                        {
                          label: "Tracking Telemetry",
                          val: "Pass",
                          note: "Conversion event tests",
                        },
                      ].map((gauge) => (
                        <div
                          key={gauge.label}
                          className="p-4 rounded-xl bg-slate-50/50 border border-slate-200/80 text-center"
                        >
                          <div className="mono-label text-slate-500 mb-2">
                            {gauge.label}
                          </div>
                          <div className="font-outfit font-black text-3xl gradient-text-emerald">
                            {gauge.val}
                          </div>
                          <div className="text-[9px] text-slate-500 mt-2 leading-tight">
                            {gauge.note}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Code logger output */}
                    <div className="rounded-lg bg-black/70 p-4 border border-white/5 font-mono text-[11px] text-slate-400 space-y-1.5 max-h-[180px] overflow-y-auto">
                      <div>
                        <span className="text-slate-500">[08:42:01]</span>{" "}
                        Running automated test suite...
                      </div>
                      <div>
                        <span className="text-slate-500">[08:42:03]</span> 48
                        spec files parsed successfully.
                      </div>
                      <div>
                        <span className="text-slate-500">[08:42:05]</span>{" "}
                        <span className="text-brand-emerald">PASS</span>:
                        Lighthouse audit simulated (Desktop speed: 99ms, mobile
                        speed: 96ms).
                      </div>
                      <div>
                        <span className="text-slate-500">[08:42:06]</span>{" "}
                        <span className="text-brand-emerald">PASS</span>: Meta
                        Pixel connection verified on submission paths.
                      </div>
                      <div>
                        <span className="text-slate-500">[08:42:07]</span> Code
                        coverage: 94.5%. Pull request approved.
                      </div>
                      <div className="text-brand-cyan animate-pulse">
                        &gt; Ready for client deployment sign-off.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
