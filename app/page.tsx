import type { Metadata } from 'next'
import V2Shell from '@/components/v2/V2Shell'
import Hero from '@/components/v2/Hero'
import Favourites from '@/components/v2/Favourites'
import Story from '@/components/v2/Story'
import Locations from '@/components/v2/Locations'
import Franchise from '@/components/v2/Franchise'

export const metadata: Metadata = {
  title: 'Chatham Burgers — Best Burgers in Chatham, Ontario Since 1985',
  description: 'Flame-grilled burgers made with local farm beef, plus gyros and poutine, on Grand Ave West in Chatham, Ontario. Since 1985. Order online for pickup.',
  alternates: { canonical: 'https://chathamburger.com' },
  openGraph: { url: 'https://chathamburger.com' },
}

export default function HomePage() {
  return (
    <V2Shell>
      <Hero />
      <Favourites />
      <Story />
      <Locations />
      <Franchise />
    </V2Shell>
  )
}
