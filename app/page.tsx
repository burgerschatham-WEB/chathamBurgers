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
  description: 'Flame-grilled burgers made with local farm beef, plus gyros and poutine, on Grand Ave West in Chatham, Ontario. Since 1985. Order online for pickup.',
  alternates: { canonical: 'https://chathamburger.com' },
  openGraph: { url: 'https://chathamburger.com' },
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
