import type { Metadata } from 'next'
import AboutClient from '@/components/AboutClient'

export const metadata: Metadata = {
  title: 'Our Story Since 1985 — Chatham Burgers',
  description: 'Flame-grilling in Chatham, Ontario since 1985. Real local farm meat, fresh-baked buns, fresh-cut fries. Thanks, Chatham — for keeping this place going.',
  alternates: { canonical: 'https://chathamburger.com/about' },
  openGraph: { url: 'https://chathamburger.com/about', images: [{ url: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=1200&q=80', width: 1200, height: 630 }] },
}

export default function AboutPage() {
  return <AboutClient />
}
