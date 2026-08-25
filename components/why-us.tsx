'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Shield, Globe, TrendingUp, Heart } from 'lucide-react'

const reasons = [
  {
    num: '01',
    icon: Layers,
    title: 'Integrated Capability',
    desc: 'Software, media, and publishing under one roof. We eliminate the coordination overhead of managing multiple specialized agencies.',
  },
  {
    num: '02',
    icon: Shield,
    title: 'End-to-End Delivery',
    desc: 'We handle projects from strategy and design through development, production, and post-delivery support. You deal with one accountable team throughout.',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Sector Depth',
    desc: 'We have direct experience working with NGOs, educational institutions, publishers, and social enterprises. We understand the operating environment.',
  },
  {
    num: '04',
    icon: Globe,
    title: 'India-Based, Internationally Experienced',
    desc: 'Headquartered in Bangalore with active international client relationships, including in the United States. World-class quality at a workable cost structure.',
  },
  {
    num: '05',
    icon: Heart,
    title: 'Values-Driven Practice',
    desc: 'We are selective about the work we take on. We commit to clients whose objectives we can genuinely serve, and hold ourselves to high standards of transparency and quality.',
  },
]

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

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-32 md:py-44 bg-void overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(253,224,131,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(167,15,16,0.06) 0%, transparent 70%)' }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="section-line" />
                <span className="text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold" style={{ fontFamily: 'var(--font-body)' }}>Why Choose Us</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-ink" style={{ fontFamily: 'var(--font-sans)' }}>
                What Sets Us{' '}
                <em className="accent-shimmer not-italic">Apart.</em>
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-7 lg:pt-20">
            <FadeUp delay={0.15}>
              <p className="text-ink-muted/85 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}>
                We are not a generalist agency. Our integrated model, sector depth, and values-driven approach distinguish us from vendors who simply execute briefs.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-faint/10">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <FadeUp key={r.num} delay={i * 0.08}>
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(237,237,237,0.7)' }}
                  className="group relative p-8 bg-surface/40 transition-all duration-300"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-gold text-burgundy ring-1 ring-gold/50 -rotate-6 group-hover:rotate-0 group-hover:scale-110 group-hover:bg-crimson group-hover:text-white group-hover:ring-crimson/40 transition-all duration-300">
                      <Icon className="w-5 h-5" strokeWidth={2.25} />
                    </div>
                    <span className="text-3xl font-semibold text-ink-faint/10 select-none" style={{ fontFamily: 'var(--font-sans)' }}>{r.num}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-3 leading-snug" style={{ fontFamily: 'var(--font-sans)' }}>{r.title}</h3>
                  <p className="text-ink-muted/80 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem' }}>{r.desc}</p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 50% 0%, rgba(253,224,131,0.08) 0%, transparent 60%)' }} />
                </motion.div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
