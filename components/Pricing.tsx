const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/forever",
    features: ["3 Active Projects", "Standard Templates", "Basic SEO Tools"],
    cta: "Start Free",
    popular: false,
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    features: ["Unlimited Projects", "Custom Domains", "Advanced AI Features", "Team Collaboration"],
    cta: "Get Started with Pro",
    popular: true,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Priority Support", "Custom Integrations", "Dedicated Server"],
    cta: "Contact Sales",
    popular: false,
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="dot-grid absolute inset-0 pointer-events-none opacity-70" />
      <div className="pricing-glow absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight">
            Built for every stage of growth
          </h2>
          <p className="text-craftify-muted text-lg max-w-xl mx-auto leading-relaxed">
            Scale your digital presence with transparent, predictable pricing that grows with your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col
                ${plan.highlight
                  ? "bg-craftify-bgDark border-2 border-craftify-purple shadow-2xl shadow-craftify-purple/20 -mt-8 pb-10 pt-10"
                  : "bg-craftify-card/70 border border-craftify-border/50"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="bg-craftify-purple text-white text-xs font-bold px-5 py-2 rounded-full tracking-widest uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <div className="text-white font-bold text-xl mb-3">{plan.name}</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-white font-black text-5xl">{plan.price}</span>
                  {plan.period && <span className="text-craftify-muted text-base">{plan.period}</span>}
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-craftify-purple flex-shrink-0" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={`text-sm ${plan.highlight ? "text-white" : "text-craftify-muted"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold text-sm transition-colors
                  ${plan.highlight
                    ? "bg-craftify-purple hover:bg-craftify-purpleLt text-white shadow-lg shadow-craftify-purple/30"
                    : "bg-transparent border border-craftify-border hover:border-craftify-border/80 text-white"
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
