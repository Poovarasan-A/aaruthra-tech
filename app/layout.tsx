import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

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
    <html lang="en" className={poppins.className}>
      <body className="antialiased bg-craftify-bg">{children}</body>
    </html>
  );
}
