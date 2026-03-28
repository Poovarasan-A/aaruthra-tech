"use client";
import Image from "next/image";
import { useState } from "react";

const navLinks = ["Start", "Features", "Resources", "Help", "Pricing"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      <div className="mx-auto max-w-[1400px] flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* <div className="w-9 h-9 rounded-xlflex items-center justify-center flex-shrink-0"> */}
          <Image
            src={"/techlogo3.png"}
            width={40}
            height={40}
            alt="logo"
            className="w-[5rem] h-[5rem]"
          />
          {/* </div> */}
          <span className="text-white font-bold text-lg tracking-tight">
            Aarudhra Web solutions
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm text-craftify-muted hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#"
            className="text-sm text-craftify-muted hover:text-white transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-craftify-purple hover:bg-craftify-purpleLt text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
          >
            Get started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-6 bg-craftify-muted transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-craftify-muted transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-craftify-muted transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-craftify-surface border-t border-craftify-border/40 px-8 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm text-craftify-muted hover:text-white"
            >
              {l}
            </a>
          ))}
          <a href="#" className="text-sm text-craftify-muted">
            Login
          </a>
          <a
            href="#"
            className="bg-craftify-purple text-white text-sm font-semibold px-6 py-2.5 rounded-xl text-center"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
