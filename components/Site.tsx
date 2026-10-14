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
  Sparkles,
  X,
} from "lucide-react";

const services = [
  [
    "Website Development",
    "High-performing websites that make a strong first impression and turn interest into action.",
    Globe2,
  ],
  [
    "Web Applications",
    "Purpose-built web platforms that make digital operations more useful and efficient.",
    Code2,
  ],
  [
    "Mobile Applications",
    "Focused mobile experiences for the customers, teams, and workflows that matter.",
    MapPin,
  ],
  [
    "Lead Generation",
    "Digital foundations and campaigns designed to create relevant business opportunities.",
    ArrowRight,
  ],
  [
    "Digital Marketing",
    "Clear marketing systems that connect your business with the right audiences.",
    Share2,
  ],
  [
    "AI Solutions & Integrations",
    "Practical automation and AI integrations that support the way your business works.",
    Sparkles,
  ],
] as const;

const faqs = [
  [
    "Is this suitable for small and medium-sized businesses?",
    "Yes. Our work is deliberately practical for businesses that need a strong digital foundation without unnecessary complexity.",
  ],
  [
    "Do I need all my content ready before we start?",
    "No. We help shape the structure, priorities, and content needed to make your website useful and clear.",
  ],
  [
    "Which service should I start with?",
    "We begin with your current situation and goals. A new or outdated website often comes first; visibility support can build on that foundation.",
  ],
  [
    "How involved will I be during the project?",
    "You will be involved at the important decisions and reviews while we handle the technical and design work.",
  ],
  [
    "Is ongoing website support available?",
    "Yes. Ongoing updates and practical digital support can be agreed after launch based on what your business needs.",
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

const Mark = () => <span className="mark">A</span>;

// Smooth cubic-bezier easing for editorial transitions
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

  // Scroll Progress indicator
  const { scrollYProgress, scrollY } = useScroll();
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

  // Section observer for active nav highlighting
  useEffect(() => {
    const sectionIds = ["home", "services", "solutions", "work", "about", "insights"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentLink = links.find(([, href]) => href === `#${entry.target.id}`);
            if (currentLink) {
              setActiveSection(currentLink[0]);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
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
      "_blank"
    );
    setNotice("Your project brief is ready in WhatsApp.");
  };

  return (
    <main>
      {/* Smooth reading progress bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX }}
      />

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

      {/* Sticky Header */}
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <a href="#home" className="brand">
          <Mark />
          <span>
            Aarudhra <small>WEB SOLUTIONS</small>
          </span>
        </a>

        <nav>
          {links.map(([n, h]) => (
            <a
              key={n}
              href={h}
              className={activeSection === n ? "active" : ""}
            >
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

        {/* Mobile Navigation Drawer with AnimatePresence */}
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
          <p className="eyebrow">
            <i />
            Technology &amp; digital solutions
          </p>
          <h1>
            Building digital solutions that <em>move businesses forward.</em>
          </h1>
          <p className="intro">
            We help businesses build, grow and evolve through technology, digital
            solutions and modern business strategies.
          </p>
          <div className="actions">
            <a className="button" href="#contact">
              Start a project <ArrowRight size={18} />
            </a>
            <a className="text-link" href="#services">
              Explore our services <ArrowRight size={17} />
            </a>
          </div>
          <p className="hero-foot">
            Technology solutions · Business growth · Digital operations · Innovation
          </p>
        </motion.div>

        {/* Hero Media: Living Connected Digital Ecosystem */}
        <div
          className="hero-media ecosystem"
          aria-label="Connected digital ecosystem visual"
        >
          {/* Subtle ambient lighting orb */}
          <motion.div
            animate={{
              opacity: [0.35, 0.65, 0.35],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "15%",
              right: "20%",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(79,125,255,0.22) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Browser Mockup with gentle floating oscillation */}
          <motion.div
            className="eco-browser"
            animate={{
              y: [0, -7, 0],
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
              <span>digital presence</span>
            </div>
            <div className="eco-screen">
              <small>YOUR BUSINESS, ONLINE</small>
              <strong>A clearer way to connect with customers.</strong>
              <i />
              <i />
            </div>
          </motion.div>

          {/* Phone Mockup with counter-phased oscillation */}
          <motion.div
            className="eco-phone"
            animate={{
              y: [0, 8, 0],
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
            <span>Mobile experience</span>
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

          {/* Connected note */}
          <motion.div
            className="media-note"
            animate={{
              y: [0, 3, 0],
            }}
            transition={{
              duration: 5.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.6,
            }}
          >
            <span>Connected by design</span>
            <strong>One ecosystem. Clear outcomes.</strong>
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
          <p className="eyebrow dark">
            <i />
            Our capabilities
          </p>
          <h2>Solutions built around your business.</h2>
          <p>
            Technology, marketing, and growth support brought together to help your
            business make real progress.
          </p>
        </motion.div>

        {/* 6 Services Grid with staggered reveal */}
        <div className="service-grid">
          {services.map(([title, desc, Icon], i) => (
            <motion.article
              className="service"
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: smoothEase }}
            >
              <div className="service-top">
                <span>0{i + 1}</span>
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#contact">
                Talk about this service <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
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
            <p className="eyebrow dark">
              <i />
              Technology solutions
            </p>
            <h3>Build the digital foundations and systems your business needs.</h3>
            <p>
              Website development, web applications, mobile applications, custom
              software, and AI solutions &amp; integrations.
            </p>
          </article>
          <article>
            <p className="eyebrow dark">
              <i />
              Business growth solutions
            </p>
            <h3>Create better routes to customers and stronger digital momentum.</h3>
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
              <span>your-business.com</span>
            </div>
            <div className="demo">
              <p>Useful technology, clearly presented.</p>
              <h3>Digital products with a clear job to do.</h3>
              <div />
              <div />
              <div />
            </div>
          </div>
          <p className="image-caption">
            The right solution should make a meaningful difference to people and
            operations.
          </p>
        </motion.div>

        <motion.div
          className="feature-copy"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: smoothEase }}
        >
          <p className="eyebrow light">
            <i />
            Technology with business purpose
          </p>
          <h2>Build what your business needs next.</h2>
          <p>
            From a clear digital presence to custom software and automation, we
            shape technology around real requirements—not a one-size-fits-all
            package.
          </p>
          <ul>
            <motion.li
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Check />
              Digital experiences built for customers
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Check />
              Useful systems for evolving operations
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Check />A scalable foundation for future ideas
            </motion.li>
          </ul>
          <div className="redesign">
            <b>Integrated capabilities</b>
            <span>
              Technology, marketing, and growth support working together under one
              partner.
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
          <p className="eyebrow">
            <i />A connected journey
          </p>
          <h2>One partner for every stage of your digital journey.</h2>
          <p>
            Build a strong digital foundation, reach more customers, streamline
            operations, and adopt new technology as your business evolves.
          </p>
          <a className="text-link" href="#contact">
            Explore the right next step <ArrowRight size={17} />
          </a>
        </motion.div>

        <ol className="journey">
          {[
            {
              Icon: Globe2,
              title: "Digital presence",
              desc: "Establish a clear, capable foundation.",
            },
            {
              Icon: Search,
              title: "Business growth",
              desc: "Reach relevant customers and opportunities.",
            },
            {
              Icon: Code2,
              title: "Digital operations",
              desc: "Improve how systems and teams work together.",
            },
            {
              Icon: ArrowRight,
              title: "Automation",
              desc: "Reduce repetitive work with useful workflows.",
            },
            {
              Icon: Sparkles,
              title: "AI & emerging technology",
              desc: "Adopt new capabilities when they create value.",
            },
          ].map((item, idx) => {
            const ItemIcon = item.Icon;
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: smoothEase }}
              >
                <ItemIcon />
                <span>
                  <b>{item.title}</b>
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
          <p className="eyebrow dark">
            <i />
            Solution examples
          </p>
          <h2>Digital solutions shaped around real business challenges.</h2>
          <p>
            Verified case studies will be added as project permissions and approved
            materials become available. Until then, this demonstrates the way
            Aarudhra frames a solution—without representing illustrative work as
            client work.
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
            <b>Business context</b>
            <p>
              Understand the customers, operations, and friction worth solving
              before choosing technology.
            </p>
          </div>
          <div>
            <b>Connected delivery</b>
            <p>
              Bring together the right product experience, system, and growth
              support for the brief.
            </p>
          </div>
          <div>
            <b>Useful progress</b>
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
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: smoothEase }}
        >
          <p className="eyebrow dark">
            <i />
            The team behind the solutions
          </p>
          <h2>Technology thinking with a practical business perspective.</h2>
          <p className="about-lead">
            Aarudhra brings together the digital, technology, and growth
            capabilities businesses need to move from an idea to a useful outcome.
          </p>
          <div className="principles">
            {[
              [
                "Business understanding",
                "Solutions aligned with real requirements.",
              ],
              [
                "Integrated capabilities",
                "Technology and growth working together.",
              ],
              [
                "Practical technology",
                "Usefulness before unnecessary complexity.",
              ],
              [
                "Future-ready thinking",
                "Ready to explore what comes next.",
              ],
            ].map(([title, desc], i) => (
              <motion.span
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: smoothEase }}
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
          <p className="eyebrow dark">
            <i />A straightforward process
          </p>
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
              "Design and implement the agreed digital solution.",
            ],
            [
              "04",
              "Launch",
              "Prepare for a confident, considered introduction.",
            ],
            ["05", "Grow", "Review, refine, and support what comes next."],
          ].map(([n, t, d], i) => (
            <motion.article
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: smoothEase }}
            >
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
          <p className="eyebrow dark">
            <i />
            Technology &amp; innovation
          </p>
          <h2>Technology that evolves with your business.</h2>
          <p>
            Explore practical ways to connect systems, automate repetitive work, and
            introduce intelligent capabilities where they create meaningful value.
          </p>
        </motion.div>

        <div className="insight-grid">
          {[
            {
              Icon: Sparkles,
              title: "AI integrations",
              desc: "Practical ways to bring intelligence into everyday customer and team experiences.",
            },
            {
              Icon: Code2,
              title: "Business automation",
              desc: "Workflows that reduce repetitive effort and help operations move with more clarity.",
            },
            {
              Icon: Globe2,
              title: "Future digital products",
              desc: "Modern platforms and services that give businesses new ways to serve their market.",
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
                <ItemIcon />
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
        <p className="eyebrow dark">
          <i />
          Insights
        </p>
        <h2>Ideas for building what comes next.</h2>
        <p>
          Future articles on technology, AI and automation, digital growth,
          marketing, and business strategy will live here. The structure is
          intentionally ready for real editorial content rather than placeholder
          articles.
        </p>
      </motion.section>

      {/* FAQs Section with Buttery-Smooth Accordion */}
      <section id="faqs" className="faq section">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
        >
          <p className="eyebrow dark">
            <i />
            FAQs
          </p>
          <h2>Good questions make better projects.</h2>
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
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
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
          <p className="eyebrow light">
            <i />
            Start a conversation
          </p>
          <h2>Have a business challenge or idea? Let&apos;s build the solution.</h2>
          <p>
            Tell us what you&apos;re working toward. We&apos;ll help you explore the
            right digital and technology solutions for your business.
          </p>
          <div className="contact-lines">
            <a href="tel:+919944100940">
              <Phone />
              +91 99441 00940
            </a>
            <a href="mailto:aarudhrawebsolutions@gmail.com">
              <Mail />
              aarudhrawebsolutions@gmail.com
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Message us on WhatsApp
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
              {services.map(([t]) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            Brief project requirement
            <textarea
              value={form.requirement}
              onChange={(e) => setForm({ ...form, requirement: e.target.value })}
              rows={3}
              placeholder="Tell us what you want to build or achieve..."
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
              Digital solutions and growth support for businesses across Tamil Nadu.
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
            {services.map(([t]) => (
              <a key={t} href="#services">
                {t}
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
          © {new Date().getFullYear()} Aarudhra Web Solutions{" "}
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}
