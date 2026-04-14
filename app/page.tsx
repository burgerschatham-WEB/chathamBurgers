import HeroSection from '@/components/HeroSection'
import BrandMarquee from '@/components/BrandMarquee'
import FeaturedItems from '@/components/FeaturedItems'
import StatsStrip from '@/components/StatsStrip'
import CTABanner from '@/components/CTABanner'
import TestimonialsSection from '@/components/TestimonialsSection'
import LocationSection from '@/components/LocationSection'

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
