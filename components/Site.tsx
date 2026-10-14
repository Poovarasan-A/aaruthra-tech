"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  X,
  Layers,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    desc: "High-performing websites that make a strong first impression, load instantly, and turn interest into qualified customer enquiries.",
    Icon: Globe2,
    tags: [
      "Next.js",
      "Headless CMS",
      "SEO Architecture",
      "Core Web Vitals 99+",
    ],
  },
  {
    title: "Web Applications",
    desc: "Purpose-built web platforms, client portals, and internal tools that streamline business operations and team workflows.",
    Icon: Code2,
    tags: ["Custom Portals", "REST & GraphQL", "Database Architecture"],
  },
  {
    title: "Mobile Applications",
    desc: "Focused mobile experiences for the customers, field teams, and critical workflows that matter to your daily revenue.",
    Icon: MapPin,
    tags: ["iOS & Android", "Cross-Platform", "Offline Support"],
  },
  {
    title: "Lead Generation",
    desc: "Digital foundations and targeted acquisition campaigns engineered to attract and capture relevant commercial opportunities.",
    Icon: ArrowRight,
    tags: ["High-Intent Inbound", "Conversion Funnels", "CRM Sync"],
  },
  {
    title: "Digital Marketing",
    desc: "Clear, systematic marketing systems that connect your brand with high-value audiences across search and social channels.",
    Icon: Share2,
    tags: ["Google Search Ads", "Meta Campaigns", "Local Maps Ranking"],
  },
  {
    title: "AI Solutions & Integrations",
    desc: "Practical workflow automation, AI assistants, and intelligent integrations tailored to enhance productivity without bloat.",
    Icon: Sparkles,
    tags: ["LLM Workflows", "Smart Automation", "Process Optimization"],
  },
] as const;

const faqs = [
  [
    "Is this suitable for small and medium-sized businesses?",
    "Yes. Our work is deliberately practical for businesses that need a strong, dependable digital foundation without unnecessary technical bloat or overhead.",
  ],
  [
    "Do I need all my content ready before we start?",
    "No. We actively help structure, prioritize, and articulate the content needed to make your website commercially useful, clear, and persuasive.",
  ],
  [
    "Which service should I start with?",
    "We begin with your current situation and strategic goals. A modern, high-converting website usually comes first; targeted visibility and marketing campaigns build directly on that foundation.",
  ],
  [
    "How involved will I be during the project?",
    "You will be involved at the key milestone decisions, architecture alignment, and weekly reviews while our team handles all technical execution, design, and infrastructure.",
  ],
  [
    "Is ongoing website support available?",
    "Yes. Dedicated ongoing updates, security maintenance, performance audits, and continuous digital support can be agreed after launch based on your business requirements.",
  ],
];

const whatsapp =
  "https://wa.me/919944100940?text=Hello%20Aarudhra%20Web%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project.";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Solutions", "#solutions"],
  ["Work", "#work"],
  ["About", "#about"],
  ["Insights", "#insights"],
];

const Mark = () => (
  <span className="mark" aria-hidden="true">
    A
  </span>
);

const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function Site() {
  const [open, setOpen] = useState<number | null>(0);
  const [menu, setMenu] = useState(false);
  const [notice, setNotice] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Website Development",
    requirement: "",
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 25);
      setShowBackToTop(y > 380);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "home",
      "services",
      "solutions",
      "work",
      "about",
      "insights",
    ];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentLink = links.find(
              ([, href]) => href === `#${entry.target.id}`,
            );
            if (currentLink) {
              setActiveSection(currentLink[0]);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setNotice("Please add your name and phone number.");
      return;
    }
    const msg = `Hello Aarudhra Web Solutions!\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nRequirement: ${form.requirement || "I'd like to discuss a project."}`;
    window.open(
      `https://wa.me/919944100940?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    setNotice("Your project brief is ready in WhatsApp.");
  };

  return (
    <main>
      {/* Top Reading Progress Bar */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <a href="#home" className="brand">
          <Mark />
          <span>
            Aarudhra <small>WEB SOLUTIONS</small>
          </span>
        </a>

        <nav>
          {links.map(([n, h]) => (
            <a key={n} href={h} className={activeSection === n ? "active" : ""}>
              {n}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s talk <ArrowRight size={15} />
        </a>

        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.24, ease: smoothEase }}
              className="mobile-nav"
            >
              {links.map(([n, h]) => (
                <a key={n} href={h} onClick={() => setMenu(false)}>
                  {n}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenu(false)}>
                Start a project
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: smoothEase }}
        >
          <div className="eyebrow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Digital Partner for Growing Businesses</span>
          </div>

          <h1>
            Building digital solutions that{" "}
            <em className="hero-em">move businesses forward.</em>
          </h1>

          <p className="intro">
            We help ambitious businesses build, scale, and evolve through modern
            technology foundations, revenue-focused web platforms, and practical
            AI automations.
          </p>

          <div className="actions">
            <a className="button" href="#contact">
              Start a project <ArrowRight size={18} />
            </a>
            <a className="text-link" href="#services">
              Explore our capabilities <ArrowRight size={17} />
            </a>
          </div>

          <p className="hero-foot">
            Website Development · Custom Software · Digital Growth · AI
            Automations
          </p>
        </motion.div>

        {/* Hero Media: Living Connected Digital Ecosystem */}
        <div
          className="hero-media ecosystem"
          aria-label="Connected digital ecosystem visual"
        >
          {/* Ambient Lighting Orb */}
          <motion.div
            animate={{
              opacity: [0.35, 0.65, 0.35],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "10%",
              right: "15%",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Browser Mockup */}
          <motion.div
            className="eco-browser"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="eco-top">
              <b />
              <b />
              <b />
              <span>aarudhra.tech/platform</span>
            </div>
            <div className="eco-screen">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <small>YOUR BUSINESS, ONLINE</small>
                <span
                  className="tag-chip"
                  style={{ fontSize: "9px", padding: "2px 6px" }}
                >
                  <span
                    className="eco-pulse-dot"
                    style={{ width: "6px", height: "6px" }}
                  />
                  Live Platform
                </span>
              </div>
              <strong>A clearer way to connect with customers.</strong>

              {/* Simulated mini dashboard analytics */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "6px",
                  height: "28px",
                  background: "#f1f5f9",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  marginTop: "4px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    color: "#2563eb",
                    marginRight: "auto",
                  }}
                >
                  +148% Digital Enquiries
                </span>
                <span className="eco-chart-bar" style={{ height: "40%" }} />
                <span className="eco-chart-bar" style={{ height: "65%" }} />
                <span className="eco-chart-bar" style={{ height: "50%" }} />
                <span className="eco-chart-bar" style={{ height: "85%" }} />
                <span
                  className="eco-chart-bar"
                  style={{ height: "100%", background: "#10b981" }}
                />
              </div>

              <i style={{ width: "88%" }} />
              <i />
            </div>
          </motion.div>

          {/* Phone Mockup with Lead Alert */}
          <motion.div
            className="eco-phone"
            animate={{
              y: [0, 9, 0],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 5.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div />
            {/* Live WhatsApp Lead notification bubble */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                padding: "8px 10px",
                borderRadius: "10px",
                marginBottom: "6px",
                display: "grid",
                gap: "2px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span
                  className="eco-pulse-dot"
                  style={{ width: "5px", height: "5px" }}
                />
                <span
                  style={{
                    fontSize: "8.5px",
                    color: "#38bdf8",
                    fontWeight: 700,
                  }}
                >
                  NEW PROJECT BRIEF
                </span>
              </div>
              <p style={{ fontSize: "11px", color: "#fff", fontWeight: 600 }}>
                Enterprise Portal Project
              </p>
              <span style={{ fontSize: "9px", color: "#94a3b8" }}>
                WhatsApp Enquiry • Just now
              </span>
            </div>
            <span>Mobile Experience</span>
            <b>Built around people</b>
          </motion.div>

          {/* Flow Connector Badge */}
          <motion.div
            className="eco-flow"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1,
            }}
          >
            <span>Operations</span>
            <i />
            <span>Automation</span>
            <i />
            <span>Growth</span>
          </motion.div>

          {/* Connected Note */}
          <motion.div
            className="media-note"
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 5.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.6,
            }}
          >
            <span>Connected by design</span>
            <strong
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <ShieldCheck size={16} color="#2563eb" />
              One ecosystem. Clear outcomes.
            </strong>
          </motion.div>
        </div>
      </section>

      {/* Capabilities / Services Section */}
      <section id="services" className="services section">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
        >
          <div className="eyebrow dark">
            <i />
            <span>Our capabilities</span>
          </div>
          <h2>Solutions built around your business.</h2>
          <p>
            Technology, marketing, and growth support brought together to help
            your business make real progress without technical guesswork.
          </p>
        </motion.div>

        {/* 6 Services Grid with Next-Level Visual Polish */}
        <div className="service-grid">
          {services.map((svc, i) => {
            const IconComponent = svc.Icon;
            const isFirst = i === 0;

            return (
              <motion.article
                className={`service ${isFirst ? "service-featured" : ""}`}
                key={svc.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: smoothEase,
                }}
              >
                <div className="service-top">
                  <span>0{i + 1}</span>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: isFirst
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(37, 99, 235, 0.08)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <IconComponent size={20} />
                  </div>
                </div>

                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>

                {/* Modern Tech & Deliverable Tag Chips */}
                <div className="service-tags">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`tag-chip ${isFirst ? "dark" : ""}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#contact">
                  Talk about this service <ArrowRight size={16} />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Dual Pillar Summary Groups */}
        <motion.div
          className="service-groups"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
        >
          <article>
            <div className="eyebrow dark">
              <i />
              <span>Technology solutions</span>
            </div>
            <h3>
              Build the digital foundations and systems your business needs.
            </h3>
            <p>
              Website development, web applications, mobile applications, custom
              software, and AI solutions &amp; integrations.
            </p>
          </article>
          <article>
            <div className="eyebrow dark">
              <i />
              <span>Business growth solutions</span>
            </div>
            <h3>
              Create better routes to customers and stronger digital momentum.
            </h3>
            <p>
              Lead generation, digital marketing, social media marketing, and
              digital growth solutions.
            </p>
          </article>
        </motion.div>
      </section>

      {/* Solutions / Feature Section */}
      <section id="solutions" className="web-feature">
        <motion.div
          className="feature-image"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: smoothEase }}
        >
          <div className="browser">
            <div className="browser-top">
              <b />
              <b />
              <b />
              <span>your-business.com/platform</span>
            </div>
            <div className="demo">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>Useful technology, clearly presented.</p>
                <span className="tag-chip" style={{ fontSize: "9px" }}>
                  <span
                    className="eco-pulse-dot"
                    style={{ width: "5px", height: "5px" }}
                  />
                  Active System
                </span>
              </div>
              <h3>Digital products with a clear job to do.</h3>
              <div />
              <div />
              <div />
            </div>
          </div>
          <p className="image-caption">
            The right solution should make a meaningful difference to people and
            daily business operations.
          </p>
        </motion.div>

        <motion.div
          className="feature-copy"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: smoothEase }}
        >
          <div className="eyebrow light">
            <i />
            <span>Technology with business purpose</span>
          </div>
          <h2>Build what your business needs next.</h2>
          <p>
            From a clear digital presence to custom software and automation, we
            shape technology around real business requirements—not a
            one-size-fits-all package.
          </p>
          <ul>
            <motion.li
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <CheckCircle2 size={18} color="#34d399" />
              Digital experiences built for customers
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <CheckCircle2 size={18} color="#34d399" />
              Useful systems for evolving operations
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <CheckCircle2 size={18} color="#34d399" />A scalable foundation
              for future ideas
            </motion.li>
          </ul>
          <div className="redesign">
            <b>Integrated capabilities</b>
            <span>
              Technology, marketing, and growth support working together under
              one accountable partner.
            </span>
          </div>
          <a className="button pale" href="#contact">
            Discuss your idea <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>

      {/* Connected Journey Section */}
      <section className="marketing journey-section section">
        <motion.div
          className="marketing-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
        >
          <div className="eyebrow">
            <i />
            <span>A connected journey</span>
          </div>
          <h2>One partner for every stage of your digital journey.</h2>
          <p>
            Build a strong digital foundation, reach more customers, streamline
            operations, and adopt new technology as your business expands.
          </p>
          <a className="text-link" href="#contact">
            Explore the right next step <ArrowRight size={17} />
          </a>
        </motion.div>

        <ol className="journey">
          {[
            {
              step: "01",
              Icon: Globe2,
              title: "Digital presence",
              desc: "Establish a clear, capable, high-converting foundation.",
            },
            {
              step: "02",
              Icon: Search,
              title: "Business growth",
              desc: "Reach relevant customers and consistent business opportunities.",
            },
            {
              step: "03",
              Icon: Code2,
              title: "Digital operations",
              desc: "Improve how systems, teams, and data work together smoothly.",
            },
            {
              step: "04",
              Icon: ArrowRight,
              title: "Automation",
              desc: "Reduce repetitive manual work with dependable digital workflows.",
            },
            {
              step: "05",
              Icon: Sparkles,
              title: "AI & emerging technology",
              desc: "Adopt new intelligent capabilities when they create tangible value.",
            },
          ].map((item, idx) => {
            const ItemIcon = item.Icon;
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: smoothEase,
                }}
              >
                <ItemIcon />
                <span>
                  <b
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      className="tag-chip dark"
                      style={{ padding: "1px 6px", fontSize: "9px" }}
                    >
                      {item.step}
                    </span>
                    {item.title}
                  </b>
                  {item.desc}
                </span>
              </motion.li>
            );
          })}
        </ol>
      </section>

      {/* Work / Solution Examples Section */}
      <section id="work" className="work section">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
        >
          <div className="eyebrow dark">
            <i />
            <span>Solution examples</span>
          </div>
          <h2>Digital solutions shaped around real business challenges.</h2>
          <p>
            Verified case studies will be added as project permissions and
            approved materials become available. Until then, this demonstrates
            the way Aarudhra frames a solution—without representing illustrative
            work as client work.
          </p>
        </motion.div>

        <motion.div
          className="work-frame"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: smoothEase }}
        >
          <span>How we frame a solution</span>
          <div>
            <b style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Search size={18} color="#93c5fd" />
              Business context
            </b>
            <p>
              Understand the customers, operations, and friction worth solving
              before choosing technology.
            </p>
          </div>
          <div>
            <b style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Layers size={18} color="#93c5fd" />
              Connected delivery
            </b>
            <p>
              Bring together the right product experience, system, and growth
              support for the brief.
            </p>
          </div>
          <div>
            <b style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <TrendingUp size={18} color="#93c5fd" />
              Useful progress
            </b>
            <p>
              Deliver a maintainable solution with a clear purpose, ready to
              evolve with the business.
            </p>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <motion.div
          className="about-portrait"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
        >
          <Image
            src="/founder.jpeg"
            alt="Aarudhra Web Solutions leadership"
            fill
            sizes="(max-width: 760px) 100vw, 40vw"
            priority
          />
          {/* Next-level leadership verified card */}
          <div className="founder-badge">
            <div>
              <b>Sharan</b>
              <p style={{ fontSize: "11px", color: "#cbd5e1" }}>
                Founder &amp; Engineering Lead
              </p>
            </div>
            <span>
              <CheckCircle2 size={14} color="#38bdf8" />
              Aarudhra Web Solutions
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: smoothEase }}
        >
          <div className="eyebrow dark">
            <i />
            <span>The team behind the solutions</span>
          </div>
          <h2>Technology thinking with a practical business perspective.</h2>
          <p className="about-lead">
            Aarudhra brings together the digital, technology, and growth
            capabilities businesses need to move from an idea to a useful
            commercial outcome.
          </p>
          <div className="principles">
            {[
              [
                "Business understanding",
                "Solutions aligned with real revenue requirements.",
              ],
              [
                "Integrated capabilities",
                "Engineering, design, and growth working together under one roof.",
              ],
              [
                "Practical technology",
                "Proven speed and maintainability before unnecessary complexity.",
              ],
              [
                "Future-ready thinking",
                "Architected to scale seamlessly as your business expands.",
              ],
            ].map(([title, desc], i) => (
              <motion.span
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.07,
                  ease: smoothEase,
                }}
              >
                <b>{title}</b>
                {desc}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="process section">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
        >
          <div className="eyebrow dark">
            <i />
            <span>A straightforward process</span>
          </div>
          <h2>Discover. Strategize. Build. Launch. Grow.</h2>
        </motion.div>

        <div className="steps five">
          {[
            [
              "01",
              "Discover",
              "Understand the business, audience, challenge, and opportunity.",
            ],
            [
              "02",
              "Strategize",
              "Define a useful scope, priorities, and route forward.",
            ],
            [
              "03",
              "Build",
              "Design and implement the agreed digital solution with clean code.",
            ],
            [
              "04",
              "Launch",
              "Prepare for a confident, thoroughly audited, and considered introduction.",
            ],
            [
              "05",
              "Grow",
              "Review performance, refine systems, and support continuous progress.",
            ],
          ].map(([n, t, d], i) => (
            <motion.article
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: smoothEase }}
            >
              <span className="step-watermark">{n}</span>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section id="innovation" className="insights section">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
        >
          <div className="eyebrow dark">
            <i />
            <span>Technology &amp; innovation</span>
          </div>
          <h2>Technology that evolves with your business.</h2>
          <p>
            Explore practical ways to connect systems, automate repetitive work,
            and introduce intelligent capabilities where they create meaningful
            value.
          </p>
        </motion.div>

        <div className="insight-grid">
          {[
            {
              Icon: Sparkles,
              title: "AI integrations",
              desc: "Practical ways to bring intelligence and automated responses into everyday customer and team experiences.",
              tag: "LLMs & Intelligent Workflows",
            },
            {
              Icon: Code2,
              title: "Business automation",
              desc: "Structured workflows and integrations that eliminate manual data entry and help operations move smoothly.",
              tag: "Operational Efficiency",
            },
            {
              Icon: Globe2,
              title: "Future digital products",
              desc: "Modern, scalable web platforms and services that open up new ways to serve your market and customers.",
              tag: "Next-Gen Software",
            },
          ].map((item, i) => {
            const ItemIcon = item.Icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: smoothEase }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ItemIcon />
                  <span className="tag-chip dark" style={{ fontSize: "9.5px" }}>
                    {item.tag}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Insights Intro Section */}
      <motion.section
        id="insights"
        className="insight-intro section"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: smoothEase }}
      >
        <div className="eyebrow dark">
          <i />
          <span>Insights</span>
        </div>
        <h2>Ideas for building what comes next.</h2>
        <p>
          Future articles on technology, AI and automation, digital growth,
          marketing, and business strategy will live here. The structure is
          intentionally ready for real editorial content rather than placeholder
          articles.
        </p>
      </motion.section>

      {/* FAQs Section */}
      <section id="faqs" className="faq section">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
        >
          <div className="eyebrow dark">
            <i />
            <span>FAQs</span>
          </div>
          <h2>Good questions make better projects.</h2>
          <p>
            Straightforward answers to the most common questions businesses ask
            before partnering with us.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <article key={q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {q}
                  <ChevronDown
                    className={isOpen ? "flip" : ""}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition:
                        "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: smoothEase }}
                      style={{ overflow: "hidden" }}
                    >
                      <p>{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </section>

      {/* Contact Section with Interactive WhatsApp Planner */}
      <section id="contact" className="contact">
        <motion.div
          className="contact-copy"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: smoothEase }}
        >
          <div className="eyebrow light">
            <i />
            <span>Start a conversation</span>
          </div>
          <h2>
            Have a business challenge or idea? Let&apos;s build the solution.
          </h2>
          <p>
            Tell us what you&apos;re working toward. We&apos;ll help you explore
            the right digital and technology solutions for your business with
            clear timelines and transparent pricing.
          </p>
          <div className="contact-lines">
            <a href="tel:+919944100940">
              <Phone />
              <div>
                <b style={{ display: "block", fontSize: "14px" }}>
                  +91 99441 00940
                </b>
                <span style={{ fontSize: "11px", color: "#94a3b8" }}>
                  Direct Engineering Line
                </span>
              </div>
            </a>
            <a href="mailto:aarudhrawebsolutions@gmail.com">
              <Mail />
              <div>
                <b style={{ display: "block", fontSize: "14px" }}>
                  aarudhrawebsolutions@gmail.com
                </b>
                <span style={{ fontSize: "11px", color: "#94a3b8" }}>
                  Project Inquiries &amp; RFPs
                </span>
              </div>
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              <div>
                <b style={{ display: "block", fontSize: "14px" }}>
                  Message us on WhatsApp
                </b>
                <span style={{ fontSize: "11px", color: "#94a3b8" }}>
                  Fastest response (under 30 mins)
                </span>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: smoothEase }}
        >
          <label>
            Full name
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              placeholder="e.g. Anand Kumar"
            />
          </label>
          <label>
            Phone number
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              placeholder="e.g. +91 98765 43210"
            />
          </label>
          <label>
            Service of interest
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              {services.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>
          </label>
          <label>
            Brief project requirement
            <textarea
              value={form.requirement}
              onChange={(e) =>
                setForm({ ...form, requirement: e.target.value })
              }
              rows={3}
              placeholder="Tell us what you want to build, modernize, or achieve..."
            />
          </label>

          <AnimatePresence>
            {notice && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="notice"
              >
                {notice}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            className="button"
            type="submit"
            whileTap={{ scale: 0.98 }}
            whileHover={{ translateY: -1 }}
          >
            Start a conversation <ArrowRight size={18} />
          </motion.button>
        </motion.form>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-top">
          <div>
            <a href="#home" className="brand">
              <Mark />
              <span>
                Aarudhra <small>WEB SOLUTIONS</small>
              </span>
            </a>
            <p>
              High-performance digital solutions, web applications, and
              technology growth support for businesses across Tamil Nadu.
            </p>
          </div>
          <div>
            <b>Explore</b>
            {links.slice(1).map(([n, h]) => (
              <a key={n} href={h}>
                {n}
              </a>
            ))}
          </div>
          <div>
            <b>Services</b>
            {services.map((s) => (
              <a key={s.title} href="#services">
                {s.title}
              </a>
            ))}
          </div>
          <div>
            <b>Serving</b>
            <p>
              Chennai
              <br />
              Coimbatore
              <br />
              Madurai
              <br />
              Trichy
              <br />
              Tamil Nadu
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Aarudhra Web Solutions. All rights
            reserved.
          </span>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp Direct Chat
          </a>
        </div>
      </footer>
    </main>
  );
}
