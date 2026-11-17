'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Drawer } from 'vaul'
import { flagship } from '@/lib/locations'
import { v2FontVars } from '@/lib/v2Fonts'

const links = [
  { href: '/menu', label: 'Menu' },
  { href: '/#locations', label: 'Locations' },
  { href: '/about', label: 'Our story' },
  { href: '/#franchise', label: 'Franchise' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="v2-press -ml-1 flex items-center rounded-lg p-1" aria-label="Chatham Burgers home">
          <Image src="/logo-horizontal.png" alt="" width={138} height={48} priority className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
              className="v2-press rounded-full px-4 py-2 text-[15px] font-medium text-ink-soft hover:bg-ink/5 hover:text-ink aria-[current=page]:bg-ink/5 aria-[current=page]:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={flagship.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-press ml-3 rounded-full bg-ketchup px-5 py-2.5 text-[15px] font-semibold text-white hover:bg-ketchup-deep"
          >
            Order pickup
          </a>
        </nav>

        {/* Mobile: order stays one tap away; everything else lives in a bottom sheet */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={flagship.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-press rounded-full bg-ketchup px-4 py-2 text-sm font-semibold text-white"
          >
            Order
          </a>
          <Drawer.Root>
            <Drawer.Trigger className="v2-press grid size-10 place-items-center rounded-full text-ink hover:bg-ink/5" aria-label="Open menu">
              <Menu size={22} />
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 z-50 bg-ink/40" />
              <Drawer.Content className={`${v2FontVars} fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-[28px] bg-paper px-6 pt-3 pb-[max(2rem,env(safe-area-inset-bottom))] font-text text-ink outline-none`}>
                <div aria-hidden="true" className="mx-auto mb-6 h-1.5 w-10 rounded-full bg-ink/15" />
                <Drawer.Title className="sr-only">Site menu</Drawer.Title>
                <nav className="flex flex-col" aria-label="Mobile">
                  {links.map((l) => (
                    <Drawer.Close asChild key={l.href}>
                      <Link
                        href={l.href}
                        className="v2-press border-b border-line py-4 font-display text-2xl font-semibold tracking-tight"
                      >
                        {l.label}
                      </Link>
                    </Drawer.Close>
                  ))}
                </nav>
                <a
                  href={`tel:${flagship.phone}`}
                  className="v2-press mt-6 rounded-full border border-line py-3.5 text-center font-semibold"
                >
                  Call {flagship.phoneDisplay}
                </a>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>
    </header>
  )
}
