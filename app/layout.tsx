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
    <html lang="en">
      <body className="antialiased bg-[#F8F9FC] text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}


