import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { CareersList } from '@/components/careers-list'
import { jobs, CAREERS_EMAIL } from './jobs'

export const metadata: Metadata = {
  title: 'Careers – Sanctus Redemptor',
  description:
    'Open roles at Sanctus Redemptor Private Limited, Bangalore: Manager – Digital Technology & Platforms, Digital Content Lead, and Digital Content & Community Associate.',
  alternates: { canonical: '/careers' },
}

/* JobPosting structured data so the roles can be picked up by job search engines. */
function jobPostingLd() {
  const org = {
    '@type': 'Organization',
    name: 'Sanctus Redemptor Private Limited',
    sameAs: 'https://srplblr.com',
  }
  const address = {
    '@type': 'PostalAddress',
    streetAddress: 'No. 9/1, Clarke Road, Richards Town',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560084',
    addressCountry: 'IN',
  }
  return {
    '@context': 'https://schema.org',
    '@graph': jobs.map((job) => ({
      '@type': 'JobPosting',
      title: job.title,
      description: [...job.overview, ...job.responsibilities].join(' '),
      employmentType: 'FULL_TIME',
      hiringOrganization: org,
      jobLocation: { '@type': 'Place', address },
      applicantLocationRequirements: { '@type': 'Country', name: 'India' },
      directApply: false,
      educationRequirements: job.education,
      experienceRequirements: job.experience,
    })),
  }
}

export default function CareersPage() {
  return (
    <div className="bg-void min-h-screen">
      <ScrollProgress />
      <Navigation />

      {/* pt clears the fixed h-20 header */}
      <main className="max-w-5xl mx-auto px-6 lg:px-0 pt-36 pb-16 lg:pt-40 lg:pb-24">
        <span
          className="text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Careers
        </span>
        <h1
          className="mt-4 text-4xl lg:text-5xl font-medium text-ink text-balance"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Build with us in Bangalore
        </h1>
        <div className="section-line mt-6 mb-10" />

        <div className="max-w-3xl space-y-4 mb-14">
          <p
            className="text-ink-muted leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}
          >
            Sanctus Redemptor Private Limited is a Bangalore-based technology, media and publishing
            company working across software and web development, media production and content, and
            book and digital publishing &mdash; for NGOs, educational institutions, publishers and
            corporates in India and the United States.
          </p>
          <p
            className="text-ink-muted leading-relaxed"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}
          >
            The roles below are open now. Select a role to read the full description and how to
            apply.
          </p>
        </div>

        <h2
          className="text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold mb-6"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Open Positions &nbsp;&middot;&nbsp; {jobs.length}
        </h2>

        <CareersList jobs={jobs} />

        {/* General enquiries */}
        <div className="mt-14 p-7 border border-gold/40 bg-surface">
          <h2
            className="text-xl font-semibold text-ink mb-3"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Don&apos;t see your role?
          </h2>
          <p
            className="text-ink-muted leading-relaxed mb-6 max-w-2xl"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
          >
            We are always glad to hear from people whose work fits what we do. Send your resume and
            a short note about the kind of work you are looking for, and we will keep it on file.
          </p>
          <a
            href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent('General application – Sanctus Redemptor')}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white text-xs font-bold tracking-[0.1em] uppercase hover:bg-crimson-light transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Mail className="w-3.5 h-3.5" />
            {CAREERS_EMAIL}
          </a>
        </div>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingLd()) }}
      />
    </div>
  )
}
