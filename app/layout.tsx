import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aarudhra Web Solutions — Digital Technology & Growth Partner",
  description:
    "We design and build high-performing websites, digital experiences, local SEO, and growth systems that help growing businesses get discovered, build trust, and generate customer enquiries.",
  keywords: [
    "Website Development",
    "Website Redesign",
    "Local SEO",
    "Tamil Nadu Web Agency",
    "Chennai Web Development",
    "Digital Marketing Partner",
    "Small Business Websites",
    "Aarudhra Web Solutions",
  ],
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
      className={`${plusJakarta.variable} ${inter.variable}`}
    >
      <body className={`antialiased bg-[#F8F9FC] text-[#0F172A] ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}


