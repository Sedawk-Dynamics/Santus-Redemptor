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
