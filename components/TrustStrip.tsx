import React from "react";

const STRIP_ITEMS = [
  "WEBSITE DEVELOPMENT",
  "SEO & VISIBILITY",
  "DIGITAL MARKETING",
  "MOBILE APPS",
  "ONGOING SUPPORT",
];

export default function TrustStrip() {
  return (
    <section className="relative border-y border-slate-200/70 bg-white/60 backdrop-blur-md py-4.5 overflow-hidden select-none">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-y-3 gap-x-6">
          {STRIP_ITEMS.map((item, index) => (
            <React.Fragment key={item}>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo/60" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-700 font-mono">
                  {item}
                </span>
              </div>
              {index < STRIP_ITEMS.length - 1 && (
                <span className="hidden sm:inline-block text-slate-300 select-none">
                  /
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
