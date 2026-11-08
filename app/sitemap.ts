import type { MetadataRoute } from 'next'

// Fixed dates: bump a page's date only when its content really changes.
const SITE = 'https://chathamburger.com'
const pages: [string, string, MetadataRoute.Sitemap[number]['changeFrequency'], number][] = [
  ['',                                   '2026-11-07', 'weekly',  1],
  ['/menu',                              '2026-11-07', 'monthly', 0.9],
  ['/order',                             '2026-11-07', 'monthly', 0.8],
  ['/offers',                            '2026-11-07', 'weekly',  0.8],
  ['/blog',                              '2026-11-07', 'weekly',  0.7],
  ['/about',                             '2026-11-07', 'yearly',  0.7],
  ['/blog/best-burgers-chatham-ontario', '2026-11-07', 'monthly', 0.7],
  ['/blog/smash-burger-chatham-ontario', '2026-11-07', 'monthly', 0.7],
  ['/blog/history-of-burgers',           '2026-11-07', 'monthly', 0.6],
  ['/sms-terms',                         '2026-11-07', 'yearly',  0.3],
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(([path, date, changeFrequency, priority]) => ({
    url: SITE + path,
    lastModified: new Date(date),
    changeFrequency,
    priority,
  }))
}
