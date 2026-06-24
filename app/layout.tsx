import type { Metadata } from "next";
import "./globals.css";
import { Poppins, JetBrains_Mono } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const poppinsHeading = Poppins({
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
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrainsMono.variable} ${poppinsHeading.variable}`}
    >
      <body className={`antialiased bg-craftify-bg ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
