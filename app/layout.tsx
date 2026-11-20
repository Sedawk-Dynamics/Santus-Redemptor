import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { LEGAL_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site'

const _cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
})

const _inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const HOME_TITLE = 'Sanctus Redemptor – Technology, Media & Publishing in Bangalore'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    // Inner pages set just their own name; this adds the brand.
    template: `%s – ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  verification: {
    google: 'ZCWjPOQr7O4Gh37ck8QfXVcBfczxtpvte_H8vCWrtw4',
  },
  keywords: [
    'Sanctus Redemptor',
    'SRPL',
    'technology company Bangalore',
    'media production India',
    'digital publishing',
    'software development',
    'e-learning',
    'Liguorian magazine',
  ],
  authors: [{ name: LEGAL_NAME }],
  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,
  // Share image and icons come from the file conventions in app/:
  // opengraph-image.jpg, favicon.ico, icon.png, apple-icon.png.
  openGraph: {
    title: HOME_TITLE,
    description:
      'A Bangalore-based technology, media and publishing company serving corporates, NGOs and educational institutions across India and internationally.',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description:
      'A Bangalore-based technology, media and publishing company serving corporates, NGOs and educational institutions across India and internationally.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#A70F10',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className="bg-background scroll-smooth">
      <body
        className={`${_cormorant.variable} ${_inter.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {/* Google tag (GTM-KB48QM5X). beforeInteractive puts these in <head>
            ahead of Next's own scripts. Root layout only, so once per page. */}
        <Script
          id="google-tag"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KB48QM5X"
          strategy="beforeInteractive"
          async
        />
        <Script id="google-tag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
