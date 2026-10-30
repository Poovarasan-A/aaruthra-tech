"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Solutions", "#solutions"],
  ["Work", "#work"],
  ["About", "#about"],
  ["Insights", "#insights"],
];

const Mark = () => <span className="mark">A</span>;

export default function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "services", "solutions", "work", "about", "insights"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

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

  return (
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
        aria-expanded={menu}
      >
        {menu ? <X size={22} /> : <Menu size={22} />}
      </button>

      {menu && (
        <div className="mobile-nav" style={{ display: "grid" }}>
          {links.map(([n, h]) => (
            <a key={n} href={h} onClick={() => setMenu(false)}>
              {n}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenu(false)}>
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}

