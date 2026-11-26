'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import type { Job } from '@/app/careers/jobs'
import { JobDetails } from '@/components/job-details'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >{children}</motion.div>
  )
}

function JobCard({ job, index }: { job: Job; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `job-panel-${job.id}`

  return (
    <FadeUp delay={index * 0.08}>
      <article id={job.id} className="scroll-mt-28 border border-ink-faint/40 bg-surface-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-6 hover:bg-surface-2 transition-colors duration-300 group"
        >
          <div>
            <p
              className="text-[0.72rem] tracking-[0.22em] uppercase text-ink-muted font-bold mb-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Reports to {job.reportsTo}
            </p>
            <h3
              className="text-2xl md:text-[1.7rem] font-semibold text-ink leading-snug group-hover:text-crimson transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {job.title}
            </h3>
            <p
              className="mt-3 text-ink-muted"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
            >
              {[job.location, job.experience].filter(Boolean).join('  ·  ')}
            </p>
          </div>
          <span
            className="shrink-0 flex items-center gap-2 text-[0.72rem] tracking-[0.15em] uppercase font-bold text-crimson"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span className="hidden sm:inline">{open ? 'Close' : 'View role'}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </span>
        </button>

        {/* Always rendered (collapsed when closed) so the full description is in
            the server HTML that search engines read; `inert` keeps the hidden
            panel out of the tab order and screen readers. */}
        <motion.div
          id={panelId}
          initial={false}
          animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
          inert={!open}
        >
          <div className="px-6 md:px-8 pb-8 pt-2 border-t border-ink-faint/30 space-y-8">
            <JobDetails job={job} />
            <Link
              href={`/careers/${job.id}`}
              className="inline-flex items-center gap-1.5 text-[0.72rem] tracking-[0.15em] uppercase font-bold text-crimson hover:text-crimson-light"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Open role page to share
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </article>
    </FadeUp>
  )
}

export function CareersList({ jobs }: { jobs: Job[] }) {
  return (
    <div className="space-y-6">
      {jobs.map((job, i) => (
        <JobCard key={job.id} job={job} index={i} />
      ))}
    </div>
  )
}
