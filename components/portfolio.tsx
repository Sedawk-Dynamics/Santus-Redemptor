'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Code2, Film, BookOpen } from 'lucide-react'

const projects = [
  {
    id: 'redemptio',
    num: '01',
    icon: Code2,
    type: 'Software Development · Platform Architecture',
    title: 'REDEMPTIO.app',
    client: 'Liguori Publications, USA',
    desc: 'A full-featured digital content platform delivering eBooks, podcasts, and video to subscribers across devices. We designed the architecture, built the platform, and manage ongoing technical support.',
    bullets: [
      'Platform architecture and technical specification',
      'UX design and interface development',
      'eBook reader, podcast and video integration',
      'Subscriber management and access control',
      'Editorial content management backend',
    ],
    status: 'LIVE',
    link: 'redemptio.app',
  },
  {
    id: 'redacamy',
    num: '02',
    icon: Code2,
    type: 'Education Technology · LMS Development',
    title: 'Redacamy LMS Portal',
    client: 'Liguori Publications, USA',
    desc: 'A dedicated online learning portal in active development, designed to deliver structured courses, assessments, and certifications to learners across geographies at scale.',
    bullets: [
      'LMS platform design and full-stack development',
      'Course authoring and content management tools',
      'Assessment engine and certification workflow',
      'Integration with Liguori content ecosystem',
    ],
    status: 'IN DEVELOPMENT',
    link: 'redacamy.org',
  },
  {
    id: 'hrf',
    num: '03',
    icon: BookOpen,
    type: 'Book and Magazine Publishing · Print Design',
    title: 'HRF Publications Program',
    client: 'Holy Redeemer Foundation',
    desc: 'End-to-end publishing services for an active books and periodical magazines program, covering editorial design, print production, and sales distribution.',
    bullets: [
      'Editorial layout and typographic design',
      'Print-ready file preparation and production',
      'Quality control and press approval',
      'Sales coordination and distribution',
    ],
    status: 'ONGOING',
    link: null,
  },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  )
}

function ProjectCard({ project: proj, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -16 : 16, 0])

  return (
    <motion.div
      ref={ref}
      style={{ x }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative overflow-hidden transition-all duration-500 border-b border-ink-faint/20 last:border-b-0 ${hovered ? 'bg-surface-3' : ''}`}
    >
      <div className="py-10 md:py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-5">
              <div className="flex items-center justify-center w-9 h-9 shrink-0 border border-gold/25 bg-surface/50 text-gold/70 group-hover:border-gold group-hover:text-gold transition-all duration-300">
                <proj.icon className="w-4 h-4" />
              </div>
              <span className="text-xs text-gold/30 font-mono tracking-widest">{proj.num}</span>
              <span className="text-[0.62rem] tracking-[0.15em] uppercase text-ink-muted/35" style={{ fontFamily: 'var(--font-body)' }}>{proj.type}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-light text-ink mb-2 group-hover:text-gold transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)' }}>
              {proj.title}
            </h3>
            <p className="text-sm font-medium mb-5 text-gold/70" style={{ fontFamily: 'var(--font-body)' }}>{proj.client}</p>
            <p className="text-ink-muted/60 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>{proj.desc}</p>
          </div>

          {/* Right */}
          <div className="lg:col-span-5">
            <ul className="space-y-2.5 mb-8">
              {proj.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-ink-muted/50" style={{ fontFamily: 'var(--font-body)', fontSize: '0.83rem' }}>
                  <span className="w-1 h-1 rounded-full bg-gold/40 mt-2 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <span className={`text-[0.58rem] tracking-widest uppercase px-3 py-1 border font-medium ${proj.status === 'LIVE' ? 'border-emerald-500/30 text-emerald-400/80' : proj.status === 'IN DEVELOPMENT' ? 'border-gold/30 text-gold/60' : 'border-ink-faint/20 text-ink-muted/40'}`} style={{ fontFamily: 'var(--font-body)' }}>
                {proj.status}
              </span>
              {proj.link && (
                <a
                  href={`https://${proj.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs text-crimson/70 hover:text-crimson transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {proj.link} <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hover accent bar */}
      <motion.div
        animate={{ width: hovered ? '100%' : '0%' }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-crimson to-gold"
      />
    </motion.div>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 md:py-44 bg-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="section-line" />
                <span className="text-[0.62rem] tracking-[0.28em] uppercase text-gold-dark font-bold" style={{ fontFamily: 'var(--font-body)' }}>Our Work</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-light leading-[1.05] text-ink" style={{ fontFamily: 'var(--font-sans)' }}>
                A cross-section of what{' '}
                <em className="text-gradient not-italic">we have built.</em>
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-5 lg:pt-16">
            <FadeUp delay={0.2}>
              <p className="text-ink-muted/55 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
                Spanning technology, media, and publishing — selected projects that demonstrate our integrated capability and commitment to measurable outcomes.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Project list */}
        <div>
          {projects.map((proj, i) => (
            <FadeUp key={proj.id} delay={i * 0.1}>
              <ProjectCard project={proj} index={i} />
            </FadeUp>
          ))}
        </div>

        {/* Clients marquee */}
        <FadeUp delay={0.3}>
          <div className="mt-24 pt-16 border-t border-ink-faint/15">
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ink-muted font-bold text-center mb-10" style={{ fontFamily: 'var(--font-body)' }}>
              Trusted by Leading Organizations
            </p>
            <div className="overflow-hidden">
              <div className="animate-marquee">
                {['Liguori Publications', 'Holy Redeemer Foundation', 'Redacamy', 'REDEMPTIO App', 'Liguori Publications', 'Holy Redeemer Foundation', 'Redacamy', 'REDEMPTIO App'].map((name, i) => (
                  <div key={i} className="flex items-center gap-16 mx-8 shrink-0">
                    <span className="text-xl font-medium text-ink whitespace-nowrap" style={{ fontFamily: 'var(--font-sans)' }}>{name}</span>
                    <span className="w-1 h-1 rounded-full bg-gold" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
