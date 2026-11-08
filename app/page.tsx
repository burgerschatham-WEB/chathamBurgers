import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import BrandMarquee from '@/components/BrandMarquee'
import SMSOfferSection from '@/components/SMSOfferSection'
import FeaturedItems from '@/components/FeaturedItems'
import StatsStrip from '@/components/StatsStrip'
import TestimonialsSection from '@/components/TestimonialsSection'
import LocationSection from '@/components/LocationSection'
import FAQSection from '@/components/FAQSection'
import SMSStickyBar from '@/components/SMSStickyBar'

export const metadata: Metadata = {
  title: 'Chatham Burgers — Best Burgers in Chatham, Ontario Since 1985',
  description: 'Flame-grilled burgers in Chatham, Ontario since 1985. Fresh local farm beef, fresh-cut fries & more. Order online for pickup.',
  alternates: { canonical: 'https://chathamburger.com' },
  openGraph: { url: 'https://chathamburger.com', images: [{ url: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=1200&q=80', width: 1200, height: 630 }] },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandMarquee />
      <SMSOfferSection />
      <FeaturedItems />
      <StatsStrip />
      <TestimonialsSection />
      <LocationSection />
      <FAQSection />
      <SMSStickyBar />
    </>
  )
}
