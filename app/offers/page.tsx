import type { Metadata } from 'next'
import OffersClient from '@/components/OffersClient'

export const metadata: Metadata = {
  title: 'Deals & Offers — Chatham Burgers | Free Fries & Weekly Specials',
  description: 'Join the Chatham Burgers Club for exclusive deals. Text BURGER to 262-242-3234 for FREE fries and weekly specials. Family-owned since 1985.',
  alternates: { canonical: 'https://chathamburgers.ca/offers' },
  openGraph: { url: 'https://chathamburgers.ca/offers', images: [{ url: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=1200&q=80', width: 1200, height: 630 }] },
}

export default function OffersPage() {
  return <OffersClient />
}
