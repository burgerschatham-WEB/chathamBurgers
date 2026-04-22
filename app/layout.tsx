import type { Metadata } from "next";
import { Bebas_Neue, Oswald, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const OG_IMAGE = 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=1200&q=80'

export const metadata: Metadata = {
  title: {
    default: "Chatham Burgers — Crafted on the Flame",
    template: "%s",
  },
  description:
    "Chatham Burgers — Crafted on the Flame, family built since 1985. Real local farm meat, fresh-baked buns, fresh-cut fries. The best burgers in Chatham, Ontario.",
  keywords: "burgers, fresh local meat, Chatham Ontario, family restaurant, crafted on the flame, since 1985",
  metadataBase: new URL("https://chathamburgers.ca"),
  openGraph: {
    type: "website",
    title: "Chatham Burgers — Crafted on the Flame",
    description: "Crafted on the Flame. Family Built. Since 1985.",
    siteName: "Chatham Burgers",
    url: "https://chathamburgers.ca",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Flame-grilled smash burger at Chatham Burgers, Chatham Ontario" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Chatham Burgers",
  image: "https://chathamburgers.ca/og-image.jpg",
  description: "Family-owned flame-grilled burger restaurant in Chatham, Ontario since 1985.",
  url: "https://chathamburgers.ca",
  telephone: "+15193541414",
  address: {
    "@type": "PostalAddress",
    streetAddress: "215 Grand Ave W",
    addressLocality: "Chatham",
    addressRegion: "ON",
    postalCode: "N7L 1C3",
    addressCountry: "CA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 42.4048, longitude: -82.191 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "10:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday","Saturday"], opens: "10:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "11:00", closes: "20:00" },
  ],
  servesCuisine: ["Burgers", "Canadian", "Fast Food"],
  priceRange: "$$",
  foundingDate: "1985",
  hasMenu: "https://chathamburgers.ca/menu",
  currenciesAccepted: "CAD",
  sameAs: ["https://www.facebook.com/profile.php?id=61575925564207", "https://instagram.com/chathamburgers"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "180", bestRating: "5" },
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
      style={{ background: "#ffffff" }}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ background: "#ffffff", color: "#3D1F0A", fontFamily: "var(--font-lato), sans-serif" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
