import type { Metadata } from 'next'
import OrderClient from '@/components/OrderClient'

export const metadata: Metadata = {
  title: 'Order Online — Chatham Burgers Pickup | Chatham, ON',
  description: 'Order Chatham Burgers online for pickup. Fresh flame-grilled burgers, fries, and more ready when you arrive. Now serving Chatham, Ontario.',
  alternates: { canonical: 'https://chathamburger.com/order' },
  openGraph: { url: 'https://chathamburger.com/order', images: ['/opengraph-image'] },
}

export default function OrderPage() {
  return <OrderClient />
}
