'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

/** Hides the current site's navbar/footer on /preview, which brings its own v2 chrome. */
export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname?.startsWith('/preview')) return null
  return <>{children}</>
}
