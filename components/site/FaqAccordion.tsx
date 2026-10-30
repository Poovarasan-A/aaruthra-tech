"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
] as const;

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <article key={q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              type="button"
            >
              {q}
              <ChevronDown
                className={isOpen ? "flip" : ""}
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease",
                opacity: isOpen ? 1 : 0,
                overflow: "hidden",
              }}
            >
              <div style={{ minHeight: 0 }}>
                <p>{a}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

