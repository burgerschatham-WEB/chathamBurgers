import type { Metadata } from 'next'
import MenuClient from '@/components/MenuClient'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Full Menu — Chatham Burgers | Chatham, Ontario',
  description: 'Browse the full Chatham Burgers menu. Classic burgers, smash burgers, wraps, poutine, wings, dinner plates, and more. Fresh local ingredients since 1985.',
  alternates: { canonical: 'https://chathamburgers.ca/menu' },
  openGraph: { url: 'https://chathamburgers.ca/menu' },
}

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Chatham Burgers Menu",
  description: "Full menu featuring flame-grilled burgers, wraps, poutine, wings, and more.",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "The Legends",
      hasMenuItem: [
        { "@type": "MenuItem", name: "Dbl Smash Burger", description: "2 beef patties smashed with onion & seasoning, cheese, standard toppings", offers: { "@type": "Offer", price: "12.99", priceCurrency: "CAD" } },
        { "@type": "MenuItem", name: "1 LB Burger", description: "1 lb patty, standard toppings", offers: { "@type": "Offer", price: "17.50", priceCurrency: "CAD" } },
        { "@type": "MenuItem", name: "Chatham Burger", description: "½ lb patty, standard toppings", offers: { "@type": "Offer", price: "10.99", priceCurrency: "CAD" } },
        { "@type": "MenuItem", name: "Fish & Chips", description: "Crispy haddock served with fresh-cut chips", offers: { "@type": "Offer", price: "15.99", priceCurrency: "CAD" } },
      ],
    },
  ],
}

export default function MenuPage() {
  return (
    <>
      <StructuredData data={menuSchema} />
      <MenuClient />
    </>
  )
}
