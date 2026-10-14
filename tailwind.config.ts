import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#4F46E5",
          indigoLt: "#6366F1",
          indigoDark: "#3730A3",
          teal: "#0D9488",
          tealLt: "#14B8A6",
          dark: "#0F172A",
          charcoal: "#1E293B",
          slate: "#475569",
          muted: "#64748B",
        },
        surface: {
          bg: "#F8F9FC",
          alt: "#F1F4F9",
          card: "#FFFFFF",
          border: "rgba(15, 23, 42, 0.08)",
          borderHover: "rgba(79, 70, 229, 0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1240px",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(15, 23, 42, 0.05)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -2px rgba(15, 23, 42, 0.03)",
        cardHover: "0 20px 35px -5px rgba(15, 23, 42, 0.08), 0 8px 12px -4px rgba(15, 23, 42, 0.03)",
        elevated: "0 24px 48px -12px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
