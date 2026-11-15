import type { Metadata } from 'next'
import Header from '@/components/v2/Header'
import SiteFooter from '@/components/v2/SiteFooter'
import { v2FontVars } from '@/lib/v2Fonts'

export const metadata: Metadata = {
  title: 'Chatham Burgers — v2 preview',
  robots: { index: false, follow: false },
}

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${v2FontVars} min-h-screen bg-paper font-text text-ink antialiased`}>
      <Header />
      {children}
      <SiteFooter />
    </div>
  )
}
