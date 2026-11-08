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

export const metadata: Metadata = {
  title: {
    default: "Chatham Burgers — Crafted on the Flame",
    template: "%s",
  },
  description:
    "Chatham Burgers — flame-grilled burgers, gyros and poutine in Chatham, Ontario. Serving Chatham since 1985.",
  keywords: "burgers, gyros, poutine, smash burger, Chatham Ontario, flame-grilled burgers, since 1985",
  metadataBase: new URL("https://chathamburger.com"),
  verification: { google: "HgIV8eOZ6aq8K3s9gHdrgXQkas6f6-WR4J8uMbUZ8Pg" },
  openGraph: {
    type: "website",
    title: "Chatham Burgers — Crafted on the Flame",
    description: "Crafted on the Flame. Serving Chatham since 1985.",
    siteName: "Chatham Burgers",
    url: "https://chathamburger.com",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Chatham Burger",
  alternateName: "Chatham Burgers",
  image: "https://chathamburger.com/opengraph-image",
  logo: "https://chathamburger.com/CB-1.png",
  description: "Flame-grilled burger restaurant in Chatham, Ontario since 1985.",
  url: "https://chathamburger.com",
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
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday","Monday","Tuesday","Wednesday","Thursday"], opens: "11:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday","Saturday"], opens: "11:00", closes: "21:00" },
  ],
  servesCuisine: ["Hamburgers", "Greek", "Gyros", "Poutine", "Fish and Chips", "Fast Food"],
  priceRange: "$10–20",
  acceptsReservations: false,
  foundingDate: "1985",
  hasMenu: "https://chathamburger.com/menu",
  currenciesAccepted: "CAD",
  potentialAction: {
    "@type": "OrderAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://order.toasttab.com/online/chathamburgers",
      actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
    },
    deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModePickUp"],
  },
  sameAs: ["https://www.facebook.com/profile.php?id=61575925564207", "https://instagram.com/chathamburgers"],
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
      style={{ background: "#FFFAF2" }}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ background: "#FFFAF2", color: "#3D1F0A", fontFamily: "var(--font-lato), sans-serif" }}
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
