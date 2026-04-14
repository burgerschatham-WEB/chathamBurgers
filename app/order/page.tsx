import type { Metadata } from 'next'
import OrderClient from '@/components/OrderClient'

export const metadata: Metadata = {
  title: 'Order Online — Chatham Burgers Pickup | Chatham, ON',
  description: 'Order Chatham Burgers online for pickup. Fresh flame-grilled burgers, fries, and more ready when you arrive. Now serving Chatham, Ontario.',
  alternates: { canonical: 'https://chathamburgers.ca/order' },
  openGraph: { url: 'https://chathamburgers.ca/order', images: [{ url: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=1200&q=80', width: 1200, height: 630 }] },
}

export default function OrderPage() {
  return <OrderClient />
}
