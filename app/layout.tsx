import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Craftify — Your site should do more than look good",
  description: "Craftify unites marketers, designers, and developers to create, manage, and optimize impactful web experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased bg-craftify-bg">{children}</body>
    </html>
  );
}
