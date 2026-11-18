import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/* Add a route here when you add a page. lastModified is left out on purpose:
   Google ignores it unless it is accurate, and a build timestamp is not. */
const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/contact-support', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/pricing', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/payment', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/refund-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/shipping-policy', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === '/' ? '' : r.path}`,
    priority: r.priority,
    changeFrequency: r.changeFrequency,
  }))
}
