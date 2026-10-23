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
        fc: {
          violet: "#793dff",
          violetLight: "#8b5cf6",
          violetBright: "#9747ff",
          violetWash: "#efeafe",
          lilacPale: "#e0daeb",
          ink: "#121212",
          inkDark: "#0a0a0a",
          inkSurface: "#171717",
          bone: "#f2f1ed",
          boneDark: "#e5e3dc",
          offWhite: "#f5f5f5",
          warmGrey: "#e9e5df",
          greyMuted: "#707070",
        },
        brand: {
          indigo: "#793dff",
          indigoLt: "#8b5cf6",
          indigoDark: "#581cd4",
          teal: "#0D9488",
          tealLt: "#14B8A6",
          dark: "#121212",
          charcoal: "#171717",
          slate: "#475569",
          muted: "#707070",
        },
        surface: {
          dark: "#121212",
          light: "#f2f1ed",
          lightest: "#ffffff",
          bg: "#f2f1ed",
          alt: "#ebe8e2",
          card: "#ffffff",
          border: "rgba(18, 18, 18, 0.12)",
          borderHover: "rgba(121, 61, 255, 0.35)",
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"Instrument Sans"', "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ['"Instrument Serif"', "Georgia", "serif"],
        quote: ['"Fraunces"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1280px",
        page: "1440px",
      },
      borderRadius: {
        "pill": "200px",
        "fc": "10.46px",
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(18, 18, 18, 0.05)",
        card: "0 4px 20px -2px rgba(18, 18, 18, 0.05), 0 2px 6px -2px rgba(18, 18, 18, 0.03)",
        cardHover: "0 20px 35px -5px rgba(18, 18, 18, 0.08), 0 8px 12px -4px rgba(18, 18, 18, 0.03)",
        elevated: "0 24px 48px -12px rgba(0, 0, 0, 0.25)",
        violetGlow: "0 0 35px rgba(121, 61, 255, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
