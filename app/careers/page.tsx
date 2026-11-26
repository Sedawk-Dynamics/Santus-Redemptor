import { Mail } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { CareersList } from '@/components/careers-list'
import { JsonLd } from '@/components/json-ld'
import { pageMetadata } from '@/lib/seo'
import { jobs, CAREERS_EMAIL } from './jobs'
import { breadcrumbLd, jobListLd } from './structured-data'

/* Built from jobs.ts, so the description stays current as roles change.
   JobPosting markup for Google Jobs lives on each role's page (/careers/[id]). */
export const metadata = pageMetadata({
  title: 'Careers – Jobs in Bangalore',
  path: '/careers',
  description: `${jobs.length} open ${jobs.length === 1 ? 'role' : 'roles'} at Sanctus Redemptor, a technology, media and publishing company in Bangalore: ${jobs
    .map((j) => j.title)
    .join(', ')}. See the full job descriptions and apply.`,
})

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

      <JsonLd data={breadcrumbLd([{ name: 'Careers', path: '/careers' }])} />
      <JsonLd data={jobListLd(jobs)} />
    </div>
  )
}
