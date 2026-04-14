import type { Metadata } from 'next'
import AboutClient from '@/components/AboutClient'

export const metadata: Metadata = {
  title: 'Our Story Since 1985 — Chatham Burgers',
  description: 'Chatham Burgers has been family-owned and flame-grilling since 1985. Real local farm meat, same recipes, same family. Discover our story.',
  alternates: { canonical: 'https://chathamburgers.ca/about' },
  openGraph: { url: 'https://chathamburgers.ca/about' },
}

export default function AboutPage() {
  return <AboutClient />
}
