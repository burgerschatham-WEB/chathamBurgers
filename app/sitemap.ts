import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://chathamburgers.ca',        lastModified: new Date(), changeFrequency: 'weekly',   priority: 1   },
    { url: 'https://chathamburgers.ca/menu',   lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.9 },
    { url: 'https://chathamburgers.ca/order',  lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.8 },
    { url: 'https://chathamburgers.ca/blog',   lastModified: new Date(), changeFrequency: 'weekly',   priority: 0.8 },
    { url: 'https://chathamburgers.ca/about',  lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.7 },
    { url: 'https://chathamburgers.ca/blog/best-burgers-chatham-ontario', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
