import { Briefcase, MapPin, Clock, GraduationCap, Mail } from 'lucide-react'
import type { Job } from '@/app/careers/jobs'
import { CAREERS_EMAIL } from '@/app/careers/jobs'

/* The full description of a role. Shared by the expandable card on /careers
   and the role's own page at /careers/[id]. No hooks, so it renders on the
   server in both places. */

type Heading = 'h2' | 'h4'

function mailto(job: Job) {
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(job.subject)}`
}

function Bullets({ title, items, as: H }: { title: string; items: string[]; as: Heading }) {
  return (
    <div>
      <H
        className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark font-bold mb-3"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {title}
      </H>
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

/** headingLevel: h4 inside a card on /careers (under h2/h3), h2 on the role's own page (under its h1). */
export function JobDetails({ job, headingLevel: H = 'h4' }: { job: Job; headingLevel?: Heading }) {
  const facts = [
    { icon: Briefcase, label: 'Experience', value: job.experience },
    { icon: MapPin, label: 'Location', value: job.location },
    { icon: Clock, label: 'Work arrangement', value: job.arrangement },
    { icon: GraduationCap, label: 'Education', value: job.education },
  ].filter((f) => f.value)

  return (
    <>
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
        <H
          className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark font-bold mb-3"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Role overview
        </H>
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

      <Bullets as={H} title="Key responsibilities" items={job.responsibilities} />
      <Bullets as={H} title="Must-have skills" items={job.mustHave} />
      <Bullets as={H} title="Nice to have" items={job.niceToHave} />
      {job.benefits && <Bullets as={H} title="What you'll get" items={job.benefits} />}

      {/* How to apply */}
      <div className="p-6 border border-gold/40 bg-surface">
        <H
          className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark font-bold mb-3"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          How to apply
        </H>
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
        {job.applyNotes?.map((note) => (
          <p
            key={note.slice(0, 40)}
            className="text-ink-muted leading-relaxed mb-5 -mt-2"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.98rem' }}
          >
            {note}
          </p>
        ))}
        <a
          href={mailto(job)}
          className="group inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white text-xs font-bold tracking-[0.1em] uppercase hover:bg-crimson-light transition-all duration-300"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <Mail className="w-3.5 h-3.5" />
          Apply for this role
        </a>
      </div>
    </>
  )
}
