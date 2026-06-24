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
        craftify: {
          bg: "var(--craftify-bg)",
          bgDark: "var(--craftify-bg-dark)",
          surface: "var(--craftify-surface)",
          card: "var(--craftify-card)",
          border: "var(--craftify-border)",
          purple: "var(--craftify-purple)",
          purpleLt: "var(--craftify-purple-lt)",
          muted: "var(--craftify-muted)",
          star: "var(--craftify-star)",
        },
        brand: {
          purple: "#6366F1", // Indigo Accent
          purpleLt: "#4f46e5",
          cyan: "#06B6D4", // Cyan Accent
          cyanLt: "#0891b2",
          emerald: "#059669",
          emeraldLt: "#10b981",
          talentPurple: "#A855F7", // Talent Section Purple Accent
        },
        warm: {
          bg: "#F8F7F4",
          alt: "#EFEEE9",
          card: "#FFFFFF",
          text: "#1A1A2E",
          indigo: "#6366F1",
          cyan: "#06B6D4",
        },
      },
      fontFamily: {
        sans: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 30s linear infinite",
        "infinite-scroll-rev": "infinite-scroll-rev 35s linear infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "scan-line": "scanLine 4s linear infinite",
        blink: "blink 1s step-end infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "infinite-scroll-rev": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": {
            opacity: "0.4",
            boxShadow: "0 0 20px rgba(139,92,246,0.3)",
          },
          "50%": {
            opacity: "0.9",
            boxShadow:
              "0 0 40px rgba(139,92,246,0.6), 0 0 60px rgba(6,182,212,0.2)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
