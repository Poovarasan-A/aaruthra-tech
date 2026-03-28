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
          bg:       "#0d0b1e",
          bgDark:   "#07060f",
          surface:  "#13112a",
          card:     "#181630",
          border:   "#2a2550",
          purple:   "#6c47ff",
          purpleLt: "#8b6fff",
          muted:    "#8b85b0",
          star:     "#f5c842",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
