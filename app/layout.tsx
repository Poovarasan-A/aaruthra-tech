import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, JetBrains_Mono, Outfit } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aarudhra Web Solutions — Custom Engineering & Performance Marketing",
  description:
    "Aarudhra orchestrates elite vetted developers and growth marketers to build, launch and scale your digital products. Custom web engineering, SEO, paid media.",
  icons: {
    icon: "/techLogo3.png",
    shortcut: "/techLogo3.png",
    apple: "/techLogo3.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${outfit.variable}`}>
      <body className={`antialiased bg-craftify-bg ${spaceGrotesk.className}`}>{children}</body>
    </html>
  );
}
