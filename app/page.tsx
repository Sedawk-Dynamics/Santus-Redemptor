import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Stats } from '@/components/stats'
import { Services } from '@/components/services'
import { Platforms } from '@/components/platforms'
import { Portfolio } from '@/components/portfolio'
import { Publications } from '@/components/publications'
import { WhyUs } from '@/components/why-us'
import { Team } from '@/components/team'
import { Insights } from '@/components/insights'
import { CtaBanner } from '@/components/cta-banner'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import {
  ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  GSTIN,
  LEGAL_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: LEGAL_NAME,
      alternateName: 'SRPL',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/opengraph-image.jpg`,
      description: SITE_DESCRIPTION,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE.replace(/\s/g, ''),
      vatID: GSTIN,
      foundingDate: '2025',
      address: { '@type': 'PostalAddress', ...ADDRESS },
      areaServed: ['IN', 'US'],
      // Official profiles, so search engines and AI tools link them to the company.
      sameAs: SOCIAL_LINKS.map((s) => s.href),
      // Mirrors components/services.tsx and components/platforms.tsx.
      knowsAbout: [
        'Software development',
        'Web development',
        'Mobile app development',
        'E-commerce development',
        'Learning management systems',
        'Video production',
        'Podcast and audio production',
        'Book publishing',
        'Digital publishing',
        'eBooks and audiobooks',
        'OTT platforms',
      ],
      brand: [
        'Redacamy',
        'Redemptio',
        'Holy Redeemer TV',
        'Holy Redeemer Voice',
        'Holy Redeemer Prayer',
        'Holy Redeemer Store',
      ].map((name) => ({ '@type': 'Brand', name })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: [
          {
            name: 'Software & Web Development',
            description:
              'Custom software, corporate websites, e-commerce, mobile apps, LMS platforms, hosting, IT infrastructure and API integration.',
          },
          {
            name: 'Media Production & Content',
            description:
              'Corporate films, documentaries, training and promotional video, photography, editing, VFX, subtitling, voiceover and podcast production.',
          },
          {
            name: 'Book & Digital Publishing',
            description:
              'Book layout and typesetting, print production, eBooks, audiobooks, magazines and journals, digital subscriptions and distribution.',
          },
        ].map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', ...s, url: `${SITE_URL}/#services` },
        })),
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE.replace(/\s/g, ''),
        areaServed: 'IN',
        availableLanguage: ['en'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '20:00',
        },
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Platforms />
      <Portfolio />
      <Publications />
      <WhyUs />
      <Team />
      <Insights />
      <CtaBanner />
      <Contact />
      <Footer />
      <JsonLd data={organizationLd} />
    </main>
  )
}
