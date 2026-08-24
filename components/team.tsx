'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const directors = [
  { name: 'Charles Vijay Kumar', role: 'Founder Director', initials: 'CK' },
  { name: 'Ginu Cletus', role: 'Director', initials: 'GC' },
  { name: 'Raja Vijayanand', role: 'Director', initials: 'RV' },
  { name: 'Edward Joseph', role: 'Board Member', initials: 'EJ' },
  { name: 'John Mathew', role: 'Board Member', initials: 'JM' },
  { name: 'Sarath Madanani', role: 'Board Member', initials: 'SM' },
]

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      className={className}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >{children}</motion.div>
  )
}

export function Team() {
  return (
    <section id="team" className="relative py-32 md:py-44 bg-surface-2 overflow-hidden">
      {/* Subtle radial bg */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(168,27,45,0.06) 0%, transparent 70%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <FadeUp>
            <div className="flex items-center gap-4 mb-8">
              <div className="section-line" />
              <span className="text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold" style={{ fontFamily: 'var(--font-body)' }}>Leadership</span>
            </div>
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <FadeUp delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-ink" style={{ fontFamily: 'var(--font-sans)' }}>
                Board of{' '}
                <em className="text-gradient not-italic">Directors.</em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-ink-muted/85 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}>
                Sanctus Redemptor is governed and led by a board with deep expertise across technology, media, education, and organizational management.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-faint/10">
          {directors.map((d, i) => (
            <FadeUp key={d.name} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ backgroundColor: 'rgba(238,221,186,0.75)' }}
                className="group relative h-full bg-surface/60 p-8 transition-all duration-300 overflow-hidden"
              >
                {/* Avatar initials */}
                <div className="w-14 h-14 mb-6 flex items-center justify-center border border-gold/35 group-hover:border-gold/35 transition-colors">
                  <span className="text-xl font-semibold text-gold group-hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>{d.initials}</span>
                </div>

                <h3 className="text-lg font-semibold text-ink mb-1 leading-snug" style={{ fontFamily: 'var(--font-sans)' }}>{d.name}</h3>
                <p className="text-[0.78rem] tracking-[0.18em] uppercase text-ink-muted/75" style={{ fontFamily: 'var(--font-body)' }}>{d.role}</p>

                {d.role.includes('Founder') && (
                  <span className="mt-4 inline-flex items-center px-2.5 py-0.5 text-[0.7rem] tracking-widest uppercase border border-crimson/50 text-crimson" style={{ fontFamily: 'var(--font-body)' }}>
                    Founder
                  </span>
                )}

                {/* Hover accent line bottom */}
                <motion.div
                  animate={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-crimson to-gold origin-left"
                />
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
