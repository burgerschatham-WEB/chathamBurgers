'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

/** Hides the v1 navbar/footer on routes that render the v2 design with its own chrome. */
const V2_ROUTES = ['/', '/menu']
export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname && V2_ROUTES.includes(pathname)) return null
  return <>{children}</>
}
