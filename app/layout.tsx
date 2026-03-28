import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

// const geist = localFont({
//   src: [
//     {
//       path: "../public/fonts/Geist-Regular.woff2",
//       weight: "400",
//     },
//     {
//       path: "../public/fonts/Geist-Bold.woff2",
//       weight: "700",
//     },
//   ],
//   variable: "--font-geist",
// });

export const metadata: Metadata = {
  title: "Aarudhra web solutions",
  description:
    "Unites marketers, designers, and developers to create, manage, and optimize impactful web experiences.",

  icons: {
    icon: "/techLogo3.png", // main favicon
    shortcut: "/techLogo3.png", // browser shortcut icon
    apple: "/techLogo3.png", // iPhone/iPad icon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-craftify-bg">{children}</body>
    </html>
  );
}
