import type { Metadata } from 'next'
import OffersClient from '@/components/OffersClient'

export const metadata: Metadata = {
  title: 'Free Fries Club — Chatham Burgers, Chatham ON',
  description: 'Join the Chatham Burgers Club: text BURGER to 226-242-3234 for free small fries with any burger. Flame-grilled since 1985.',
  alternates: { canonical: 'https://chathamburger.com/offers' },
  openGraph: { url: 'https://chathamburger.com/offers', images: ['/opengraph-image'] },
}

export default function OffersPage() {
  return <OffersClient />
}
