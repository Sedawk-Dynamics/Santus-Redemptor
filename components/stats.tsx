'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 3, suffix: '', label: 'Core Service Verticals', desc: 'Software, Media & Publishing under one roof' },
  { value: 6, suffix: '', label: 'Board Directors', desc: 'Deep expertise across multiple domains' },
  { value: 2, suffix: '+', label: 'Countries Served', desc: 'India and the United States' },
  { value: 3, suffix: '', label: 'Active Projects', desc: 'Live platforms and ongoing engagements' },
]

function Counter({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1600
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])
  return <span>{count}{suffix}</span>
}

export function Stats() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 bg-void overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Gold rule top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      {/* Subtle grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, #FDE083 0, #FDE083 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, #FDE083 0, #FDE083 1px, transparent 0, transparent 60px)',
      }} />
      <div className="absolute inset-0 bg-gradient-to-r from-crimson/8 via-transparent to-gold/5 pointer-events-none" />

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-ink-faint/15">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center px-6 py-4"
            >
              <div className="text-6xl md:text-7xl font-semibold mb-3 accent-shimmer leading-[1.25] pb-1" style={{ fontFamily: 'var(--font-sans)', fontVariantNumeric: 'lining-nums' }}>
                <Counter end={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-base font-medium text-ink mb-1.5 tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
                {stat.label}
              </div>
              <div className="text-ink-muted/75 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '0.86rem' }}>
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  )
}
