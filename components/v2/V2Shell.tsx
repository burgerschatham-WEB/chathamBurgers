import Header from '@/components/v2/Header'
import SiteFooter from '@/components/v2/SiteFooter'
import { v2FontVars } from '@/lib/v2Fonts'

/** v2 page chrome: fonts, header and footer. SiteChrome hides the v1 navbar/footer on these routes. */
export default function V2Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${v2FontVars} min-h-screen bg-paper font-text text-ink antialiased`}>
      <Header />
      {children}
      <SiteFooter />
    </div>
  )
}
