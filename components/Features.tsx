const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#8b6fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" fill="#6c47ff" opacity="0.5"/>
      </svg>
    ),
    title: "Drag-and-Drop Precision",
    desc: "Every pixel matters. Our canvas gives you absolute control with smart snapping and auto-layout logic.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#8b6fff" strokeWidth="1.5"/>
        <path d="M12 8v4l3 3" stroke="#6c47ff" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill="#8b6fff" opacity="0.6"/>
      </svg>
    ),
    title: "AI-Powered Optimization",
    desc: "Automatic asset compression, semantic HTML generation, and SEO suggestions delivered in real-time.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3" stroke="#8b6fff" strokeWidth="1.5"/>
        <circle cx="17" cy="7" r="3" stroke="#8b6fff" strokeWidth="1.5"/>
        <path d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#8b6fff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 14c2.21 0 4 1.79 4 4" stroke="#6c47ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Team Collaboration",
    desc: "Multi-user editing, branch-based version control, and contextual commenting for fast shipping.",
  },
];

export default function Features() {
  return (
    <section className="relative py-28 border-t border-craftify-border/30">
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-70" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-craftify-card/80 border border-craftify-border/50 rounded-2xl p-8 hover:border-craftify-purple/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-craftify-surface flex items-center justify-center mb-6 border border-craftify-border/60">
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-craftify-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
