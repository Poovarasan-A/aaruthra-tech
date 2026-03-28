export default function CTA() {
  return (
    <section className="relative py-36 overflow-hidden">
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-60" />
      <div className="cta-glow absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 text-center">
        <h2 className="text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
          Join the revolution<br />
          <span className="text-craftify-purple">in web building</span>
        </h2>
        <p className="text-craftify-muted text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Ready to transform your ideas into luminescent digital experiences? Join 50,000+ creators building on Craftify today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full sm:flex-1 bg-craftify-surface/80 border border-craftify-border/60 text-white placeholder-craftify-muted rounded-xl px-6 py-4 text-sm outline-none focus:border-craftify-purple/60 backdrop-blur-sm"
          />
          <button className="w-full sm:w-auto bg-craftify-purple hover:bg-craftify-purpleLt text-white font-bold px-8 py-4 rounded-xl text-sm transition-colors whitespace-nowrap shadow-lg shadow-craftify-purple/30">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
}
