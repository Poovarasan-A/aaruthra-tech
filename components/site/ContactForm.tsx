"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const SERVICE_OPTIONS = [
  "Website Development",
  "Web Applications",
  "Mobile Applications",
  "Lead Generation",
  "Digital Marketing",
  "AI Solutions & Integrations",
] as const;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Website Development",
    requirement: "",
  });
  const [notice, setNotice] = useState("");

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
      "noopener,noreferrer"
    );
    setNotice("Your project brief is ready in WhatsApp.");
  };

  return (
    <form onSubmit={submit}>
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
          {SERVICE_OPTIONS.map((t) => (
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

      {notice && <p className="notice">{notice}</p>}

      <button className="button" type="submit">
        Start a conversation <ArrowRight size={18} />
      </button>
    </form>
  );
}
