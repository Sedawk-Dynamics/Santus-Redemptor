'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Briefcase, MapPin, Clock, GraduationCap, ChevronDown, Mail } from 'lucide-react'
import type { Job } from '@/app/careers/jobs'
import { CAREERS_EMAIL } from '@/app/careers/jobs'

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

function mailto(job: Job) {
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(job.subject)}`
}

function Bullets({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4
        className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark font-bold mb-3"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-[0.55rem] w-1 h-1 rounded-full bg-crimson shrink-0" />
            <span
              className="text-ink-muted leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.98rem' }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function JobCard({ job, index }: { job: Job; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `job-panel-${job.id}`

  const facts = [
    { icon: Briefcase, label: 'Experience', value: job.experience },
    { icon: MapPin, label: 'Location', value: job.location },
    { icon: Clock, label: 'Work arrangement', value: job.arrangement },
    { icon: GraduationCap, label: 'Education', value: job.education },
  ]

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
              {job.location} &nbsp;·&nbsp; {job.experience}
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

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-8 pt-2 border-t border-ink-faint/30 space-y-8">
                {/* At a glance */}
                <dl className="grid sm:grid-cols-2 gap-5 pt-6">
                  {facts.map((f) => {
                    const Icon = f.icon
                    return (
                      <div key={f.label} className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-gold text-burgundy ring-1 ring-gold/50 shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <dt
                            className="text-[0.7rem] tracking-[0.18em] uppercase text-ink-muted font-bold mb-0.5"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {f.label}
                          </dt>
                          <dd
                            className="text-ink-muted leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
                          >
                            {f.value}
                          </dd>
                        </div>
                      </div>
                    )
                  })}
                </dl>

                <div>
                  <h4
                    className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark font-bold mb-3"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Role overview
                  </h4>
                  <div className="space-y-3">
                    {job.overview.map((p) => (
                      <p
                        key={p.slice(0, 40)}
                        className="text-ink-muted leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.98rem' }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                <Bullets title="Key responsibilities" items={job.responsibilities} />
                <Bullets title="Must-have skills" items={job.mustHave} />
                <Bullets title="Nice to have" items={job.niceToHave} />

                {/* How to apply */}
                <div className="p-6 border border-gold/40 bg-surface">
                  <h4
                    className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark font-bold mb-3"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    How to apply
                  </h4>
                  <p
                    className="text-ink-muted leading-relaxed mb-5"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.98rem' }}
                  >
                    Please send {job.sendWith} to{' '}
                    <a
                      href={`mailto:${CAREERS_EMAIL}`}
                      className="text-crimson hover:text-crimson-light underline underline-offset-2"
                    >
                      {CAREERS_EMAIL}
                    </a>
                    , using the subject line &ldquo;{job.subject}&rdquo;.
                  </p>
                  <a
                    href={mailto(job)}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white text-xs font-bold tracking-[0.1em] uppercase hover:bg-crimson-light transition-all duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Apply for this role
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
