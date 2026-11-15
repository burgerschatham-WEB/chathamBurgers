import Image from 'next/image'
import Link from 'next/link'
import { flagship } from '@/lib/locations'

export default function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-5 py-12 text-[15px] text-ink-soft sm:px-8">
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
        <Image src="/logo-horizontal.png" alt="Chatham Burgers" width={115} height={40} className="h-9 w-auto self-start sm:self-auto" />
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          <Link href="/menu" className="hover:text-ink">Menu</Link>
          <Link href="/about" className="hover:text-ink">Our story</Link>
          <Link href="/offers" className="hover:text-ink">Offers</Link>
          <Link href="/blog" className="hover:text-ink">Blog</Link>
          <a href="https://instagram.com/chathamburgers" className="hover:text-ink">Instagram</a>
        </nav>
      </div>
      <p className="mt-8 border-t border-line pt-6">
        © {new Date().getFullYear()} Chatham Burgers · {flagship.street}, {flagship.city}, {flagship.region}
      </p>
    </footer>
  )
}
