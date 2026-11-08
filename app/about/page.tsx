import type { Metadata } from 'next'
import AboutClient from '@/components/AboutClient'

export const metadata: Metadata = {
  title: 'Our Story Since 1985 — Chatham Burgers',
  description: 'Flame-grilling burgers in Chatham, Ontario since 1985. Thanks, Chatham — for keeping this place going.',
  alternates: { canonical: 'https://chathamburger.com/about' },
  openGraph: { url: 'https://chathamburger.com/about', images: ['/opengraph-image'] },
}

export default function AboutPage() {
  return <AboutClient />
}
