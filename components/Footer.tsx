const footerLinks = {
  Product: ["Features", "Solutions", "Pricing"],
  Community: ["Showcase", "Documentation", "Status"],
  Company: ["Privacy Policy", "Terms of Service", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-craftify-bgDark border-t border-craftify-border/30">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-white font-bold text-xl mb-4">Craftify</div>
            <p className="text-craftify-muted text-sm leading-relaxed">
              Defining the next generation of web design through depth, light, and performance.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-white font-bold text-sm mb-5">{group}</div>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-craftify-muted text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-craftify-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-craftify-muted/60 text-xs">
            © 2024 Craftify Inc. Built for the Luminescent Void.
          </p>
          <div className="flex items-center gap-4">
            {/* Globe */}
            <a href="#" className="text-craftify-muted/50 hover:text-craftify-muted transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
            {/* Chat */}
            <a href="#" className="text-craftify-muted/50 hover:text-craftify-muted transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </a>
            {/* Share */}
            <a href="#" className="text-craftify-muted/50 hover:text-craftify-muted transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
