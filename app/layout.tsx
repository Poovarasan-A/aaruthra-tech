import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./refinements.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaruthra-tech.netlify.app"),
  title: "Aarudhra Web Solutions — Technology & Digital Growth Solutions",
  description:
    "Aarudhra helps businesses build, grow and evolve through websites, applications, digital marketing, automation and AI solutions.",
  keywords: [
    "Website Development",
    "Web Applications",
    "Mobile Application Development",
    "Custom Software Solutions",
    "AI Solutions",
    "Digital Marketing",
    "Aarudhra Web Solutions",
  ],
  icons: {
    icon: "/techLogo3.png",
    shortcut: "/techLogo3.png",
    apple: "/techLogo3.png",
  },
  openGraph: {
    title: "Aarudhra Web Solutions",
    description: "Professional websites, local visibility and digital marketing for growing businesses.",
    images: ["/agency-hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-[#0B0F19] text-[#F1F5F9] selection:bg-indigo-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}


