import type { Metadata } from "next";
import { Bebas_Neue, Oswald, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chatham Burgers — Crafted on the Flame",
  description:
    "Chatham Burgers — Crafted on the Flame, family built since 1985. Real local farm meat, fresh-baked buns, fresh-cut fries. The best burgers in Chatham, Ontario.",
  keywords: "burgers, fresh local meat, Chatham Ontario, family restaurant, crafted on the flame, since 1985",
  openGraph: {
    title: "Chatham Burgers — Crafted on the Flame",
    description: "Crafted on the Flame. Family Built. Since 1985.",
    siteName: "Chatham Burgers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${oswald.variable} ${lato.variable} h-full`}
      style={{ background: "#0a0a0a" }}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ background: "#0a0a0a", color: "#ffffff", fontFamily: "var(--font-lato), sans-serif" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
