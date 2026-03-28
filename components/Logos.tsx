const logos = [
  "Accenture", "Shopify", "HubSpot", "Salesforce", "Stripe"
];

export default function Logos() {
  return (
    <section className="relative py-14 border-t border-craftify-border/30">
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-60" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <p className="text-center text-xs tracking-[0.25em] text-craftify-muted uppercase mb-10 font-medium">
          Trusted by modern engineering teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-16">
          {logos.map((name) => (
            <div key={name} className="h-7 px-6 rounded bg-craftify-border/50 flex items-center">
              <span className="text-craftify-muted/50 text-sm font-semibold tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
