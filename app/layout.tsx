import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

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

export const metadata: Metadata = {
  title: 'Sanctus Redemptor – Technology, Media & Publishing',
  description:
    'Sanctus Redemptor Private Limited is a Bangalore-based technology, media, and education company delivering digital learning, media, and community solutions for individuals, families, corporates, NGOs, and educational institutions across India and internationally.',
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
  authors: [{ name: 'Sanctus Redemptor Private Limited' }],
  creator: 'Sanctus Redemptor Private Limited',
  openGraph: {
    title: 'Sanctus Redemptor – Technology, Media & Publishing',
    description:
      'A Bangalore-based multi-disciplinary technology and media company serving corporates, NGOs, and educational institutions across India and internationally.',
    url: 'https://srplblr.com',
    siteName: 'Sanctus Redemptor',
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true },
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
    <html lang="en" className="bg-background scroll-smooth">
      <body
        className={`${_cormorant.variable} ${_inter.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {children}
      </body>
    </html>
  )
}
