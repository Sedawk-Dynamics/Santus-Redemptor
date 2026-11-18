import type { Metadata } from 'next'
import { SITE_NAME } from '@/lib/site'

/* app/opengraph-image.jpg. Once a page defines its own `openGraph`, Next.js
   stops applying the inherited file-based image, so it is named here too. */
const SHARE_IMAGE = {
  url: '/opengraph-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Sanctus Redemptor — software and web development, media production and content, and book and digital publishing',
}

/**
 * Metadata for an inner page. Next.js replaces (not merges) the `openGraph`
 * and `twitter` objects a page defines, so each page sets the full set here;
 * otherwise every page would share the homepage's share title and URL.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  /** Page name only; the root layout's template appends " – Sanctus Redemptor". */
  title: string
  description: string
  /** Route path, e.g. "/careers". Resolved against metadataBase. */
  path: string
}): Metadata {
  const fullTitle = `${title} – ${SITE_NAME}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [SHARE_IMAGE],
    },
  }
}
