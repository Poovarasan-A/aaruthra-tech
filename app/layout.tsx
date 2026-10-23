import type { Metadata } from "next";
import "./globals.css";
import "./refinements.css";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#f2f1ed] text-[#121212] selection:bg-[#793dff] selection:text-white font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}


