import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Aarudhra Web Solutions",
  description: "Learn about Aarudhra's mission to deliver custom engineering, performance marketing, and read about our founder Poovarasan A.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
