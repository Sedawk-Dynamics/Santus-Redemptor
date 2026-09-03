'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const articles = [
  {
    cat: 'Sector Insights',
    title: 'Why Integrated Technology and Media Capability Is a Competitive Advantage for NGOs',
    excerpt: 'Organizations doing substantive work often lack access to coordinated technology and media resources. Here is why an integrated partner changes the equation.',
    readTime: '5 min read',
  },
  {
    cat: 'Publishing',
    title: 'From Print to Platform: What Publishers Need to Know About Digital Transition',
    excerpt: 'The shift from physical to digital is not just a format change — it is a complete rethinking of how content reaches readers and generates value.',
    readTime: '7 min read',
  },
  {
    cat: 'Media',
    title: 'What to Look for in a Media Production Partner: A Practical Checklist for Organizations',
    excerpt: 'Before signing with a production house, there are five questions every organisation should ask to ensure quality, reliability, and genuine creative alignment.',
    readTime: '4 min read',
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

export function Insights() {
  return (
    <section id="insights" className="relative py-14 md:py-20 bg-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-[88rem] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="section-line" />
                <span className="text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold" style={{ fontFamily: 'var(--font-body)' }}>Insights</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-ink" style={{ fontFamily: 'var(--font-sans)' }}>
                Perspectives on{' '}
                <em className="text-gradient not-italic">our craft.</em>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <a href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-crimson hover:gap-3 transition-all tracking-[0.08em] uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              View all articles <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </FadeUp>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-ink-faint/10">
          {articles.map((art, i) => (
            <FadeUp key={art.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ backgroundColor: 'rgba(237,237,237,0.75)' }}
                className="group relative h-full flex flex-col bg-surface/50 p-8 cursor-pointer transition-all duration-300 overflow-hidden"
              >
                {/* Accent top bar */}
                <div className={`absolute top-0 left-0 w-8 h-0.5 transition-all duration-500 group-hover:w-full ${i === 1 ? 'bg-gold' : 'bg-crimson'}`} />

                <div className="flex flex-col gap-4 pt-4 flex-1">
                  <span className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark font-bold" style={{ fontFamily: 'var(--font-body)' }}>
                    {art.cat}
                  </span>
                  <h3 className="text-xl font-semibold leading-snug text-ink group-hover:text-crimson transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                    {art.title}
                  </h3>
                  <p className="text-ink-muted/80 leading-relaxed flex-1" style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem' }}>
                    {art.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-ink-faint/15 mt-auto">
                    <p className="text-ink-muted/90" style={{ fontFamily: 'var(--font-body)', fontSize: '0.84rem' }}>{art.readTime}</p>
                    <motion.div
                      whileHover={{ x: 2, y: -2 }}
                      className="w-7 h-7 border border-ink-faint/40 flex items-center justify-center text-ink-muted/90 group-hover:border-gold/50 group-hover:text-gold transition-all"
                    >
                      <ArrowUpRight className="w-3 h-3" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
