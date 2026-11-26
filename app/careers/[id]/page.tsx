import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { JobDetails } from '@/components/job-details'
import { JsonLd } from '@/components/json-ld'
import { pageMetadata } from '@/lib/seo'
import { jobs } from '../jobs'
import { breadcrumbLd, jobPostingLd } from '../structured-data'

/* One page per open role, generated from jobs.ts at build time. Each carries
   its own JobPosting markup so the role can appear in Google's job results. */

export const dynamicParams = false

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }))
}

const findJob = (id: string) => jobs.find((j) => j.id === id)

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const job = findJob((await params).id)
  if (!job) return {}
  return pageMetadata({
    title: job.remote
      ? `${job.title} – Remote Job`
      : `${job.title} – Job in ${job.location.split(',')[0]}`,
    path: `/careers/${job.id}`,
    // Kept short so Google shows it whole (~160 characters).
    description: `Full-time ${job.title} job at Sanctus Redemptor, ${job.location}.${job.experience ? ` ${job.experience} experience.` : ''} Read the full role description and apply.`,
  })
}

export default async function JobPage({ params }: { params: Promise<{ id: string }> }) {
  const job = findJob((await params).id)
  if (!job) notFound()

  return (
    <div className="bg-void min-h-screen">
      <ScrollProgress />
      <Navigation />

      {/* pt clears the fixed h-20 header */}
      <main className="max-w-5xl mx-auto px-6 lg:px-0 pt-36 pb-16 lg:pt-40 lg:pb-24">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold hover:text-crimson transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Careers
        </Link>
        <p
          className="mt-6 text-[0.72rem] tracking-[0.22em] uppercase text-ink-muted font-bold"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Reports to {job.reportsTo}
        </p>
        <h1
          className="mt-3 text-4xl lg:text-5xl font-medium text-ink text-balance"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {job.title}
        </h1>
        <p
          className="mt-4 text-ink-muted"
          style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
        >
          {[job.location, job.experience].filter(Boolean).join('  ·  ')}
        </p>
        <div className="section-line mt-6 mb-4" />

        <article className="border border-ink-faint/40 bg-surface-3 px-6 md:px-8 pb-8 pt-2 space-y-8">
          <JobDetails job={job} headingLevel="h2" />
        </article>

        <Link
          href="/careers"
          className="mt-10 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.15em] uppercase font-bold text-crimson hover:text-crimson-light"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          See all open positions
        </Link>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbLd([
          { name: 'Careers', path: '/careers' },
          { name: job.title, path: `/careers/${job.id}` },
        ])}
      />
      <JsonLd data={jobPostingLd(job)} />
    </div>
  )
}
