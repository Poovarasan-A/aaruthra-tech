import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const plusJakartaHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${plusJakartaHeading.variable}`}
    >
      <body className={`antialiased bg-[#F8F7F4] text-[#1A1A2E] ${plusJakarta.className}`}>
        {children}
      </body>
    </html>
  );
}
