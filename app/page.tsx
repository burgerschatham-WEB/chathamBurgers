import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import BrandMarquee from '@/components/BrandMarquee'
import FeaturedItems from '@/components/FeaturedItems'
import StatsStrip from '@/components/StatsStrip'
import CTABanner from '@/components/CTABanner'
import TestimonialsSection from '@/components/TestimonialsSection'
import LocationSection from '@/components/LocationSection'

export const metadata: Metadata = {
  title: 'Chatham Burgers — Best Burgers in Chatham, Ontario Since 1985',
  description: 'Family-owned burger restaurant in Chatham, Ontario since 1985. Fresh local farm beef, flame-grilled burgers, fresh-cut fries & more. Order online for pickup.',
  alternates: { canonical: 'https://chathamburgers.ca' },
  openGraph: { url: 'https://chathamburgers.ca' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandMarquee />
      <FeaturedItems />
      <StatsStrip />
      <CTABanner />
      <TestimonialsSection />
      <LocationSection />
    </>
  )
}
