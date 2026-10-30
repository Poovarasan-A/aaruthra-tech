import Image from "next/image";
import {
  ArrowRight,
  Check,
  Code2,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Share2,
  Sparkles,
} from "lucide-react";
import SiteHeader from "@/components/site/SiteHeader";
import ScrollProgress from "@/components/site/ScrollProgress";
import BackToTop from "@/components/site/BackToTop";
import FaqAccordion from "@/components/site/FaqAccordion";
import ContactForm from "@/components/site/ContactForm";

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

export default function Site() {
  return (
    <main>
      {/* Smooth reading progress bar */}
      <ScrollProgress />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Sticky Header with navigation & mobile drawer */}
      <SiteHeader />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-copy">
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
        </div>

        {/* Hero Media: Living Connected Digital Ecosystem with GPU CSS Animation */}
        <div
          className="hero-media ecosystem"
          aria-label="Connected digital ecosystem visual"
        >
          {/* Subtle ambient lighting orb */}
          <div className="eco-orb" />

          {/* Browser Mockup with gentle floating oscillation */}
          <div className="eco-browser">
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
          </div>

          {/* Phone Mockup with counter-phased oscillation */}
          <div className="eco-phone">
            <div />
            <span>Mobile experience</span>
            <b>Built around people</b>
          </div>

          {/* Flow Connector Badge */}
          <div className="eco-flow">
            <span>Operations</span>
            <i />
            <span>Automation</span>
            <i />
            <span>Growth</span>
          </div>

          {/* Connected note */}
          <div className="media-note">
            <span>Connected by design</span>
            <strong>One ecosystem. Clear outcomes.</strong>
          </div>
        </div>
      </section>

      {/* Capabilities / Services Section */}
      <section id="services" className="services section">
        <div className="section-head">
          <p className="eyebrow dark">
            <i />
            Our capabilities
          </p>
          <h2>Solutions built around your business.</h2>
          <p>
            Technology, marketing, and growth support brought together to help your
            business make real progress.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="service-grid">
          {services.map(([title, desc, Icon], i) => (
            <article className="service" key={title}>
              <div className="service-top">
                <span>0{i + 1}</span>
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#contact">
                Talk about this service <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        {/* Dual Pillar Summary Groups */}
        <div className="service-groups">
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
        </div>
      </section>

      {/* Solutions / Feature Section */}
      <section id="solutions" className="web-feature">
        <div className="feature-image">
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
        </div>

        <div className="feature-copy">
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
            <li>
              <Check />
              Digital experiences built for customers
            </li>
            <li>
              <Check />
              Useful systems for evolving operations
            </li>
            <li>
              <Check />A scalable foundation for future ideas
            </li>
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
        </div>
      </section>

      {/* Connected Journey Section */}
      <section className="marketing journey-section section">
        <div className="marketing-copy">
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
        </div>

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
          ].map((item) => {
            const ItemIcon = item.Icon;
            return (
              <li key={item.title}>
                <ItemIcon />
                <span>
                  <b>{item.title}</b>
                  {item.desc}
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Work / Solution Examples Section */}
      <section id="work" className="work section">
        <div className="section-head">
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
        </div>

        <div className="work-frame">
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="about-portrait">
          <Image
            src="/founder.jpeg"
            alt="Aarudhra Web Solutions leadership"
            fill
            sizes="(max-width: 760px) 100vw, 40vw"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
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
            ].map(([title, desc]) => (
              <span key={title}>
                <b>{title}</b>
                {desc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process section">
        <div className="section-head">
          <p className="eyebrow dark">
            <i />A straightforward process
          </p>
          <h2>Discover. Strategize. Build. Launch. Grow.</h2>
        </div>

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
          ].map(([n, t, d]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section id="innovation" className="insights section">
        <div className="section-head">
          <p className="eyebrow dark">
            <i />
            Technology &amp; innovation
          </p>
          <h2>Technology that evolves with your business.</h2>
          <p>
            Explore practical ways to connect systems, automate repetitive work, and
            introduce intelligent capabilities where they create meaningful value.
          </p>
        </div>

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
          ].map((item) => {
            const ItemIcon = item.Icon;
            return (
              <article key={item.title}>
                <ItemIcon />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Insights Intro Section */}
      <section id="insights" className="insight-intro section">
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
      </section>

      {/* FAQs Section with Optimized Accordion */}
      <section id="faqs" className="faq section">
        <div className="section-head">
          <p className="eyebrow dark">
            <i />
            FAQs
          </p>
          <h2>Good questions make better projects.</h2>
        </div>

        <FaqAccordion />
      </section>

      {/* Contact Section with Interactive WhatsApp Planner */}
      <section id="contact" className="contact">
        <div className="contact-copy">
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
        </div>

        <ContactForm />
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
