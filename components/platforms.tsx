'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

type Platform = {
  name: string
  tagline: string
  desc: string
  /* null until a web-ready logo (PNG/SVG) is supplied — PDFs cannot be rendered */
  logo: string | null
  status?: string
}

const platforms: Platform[] = [
  {
    name: 'Redacamy',
    tagline: 'Learning & spiritual formation',
    desc: 'A digital learning and spiritual formation platform offering Journey of Faith, Managing Scrupulosity, the Spiritual Strengths Profile, training-the-trainer programs, online spiritual direction with qualified directors, and opportunities for institutions to offer formation programs.',
    logo: '/brand/redacamy.png',
  },
  {
    name: 'Redemptio',
    tagline: 'Digital content platform',
    desc: 'A digital platform for Liguori Publications offering eBooks, audiobooks, videos, and podcasts.',
    logo: '/brand/redemptio.png',
  },
  {
    name: 'Holy Redeemer TV',
    tagline: 'Video & OTT',
    desc: 'An international video and OTT platform for TV and mobile devices, bringing together faith-based content from Redemptorist creators around the world.',
    logo: '/brand/hr-tv.png',
  },
  {
    name: 'Holy Redeemer Voice',
    tagline: 'Podcasts & internet radio',
    desc: 'An audio-based mobile platform featuring podcasts and internet radio. Three Indian-language radio channels are already functional, with more languages planned.',
    logo: '/brand/hr-voice.png',
  },
  {
    name: 'Holy Redeemer Prayer',
    tagline: 'Prayer & faith app',
    desc: 'A prayer and faith app designed to help individuals and groups pray together, grow in their spiritual life, and access resources such as our digital Mass Companion.',
    logo: '/brand/hr-prayer.png',
    status: 'Coming soon',
  },
  {
    name: 'Holy Redeemer Store',
    tagline: 'E-commerce',
    desc: 'An e-commerce platform providing access to religious books, devotional materials, and other faith resources.',
    logo: '/brand/hr-store.png',
    status: 'Coming soon',
  },
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

export function Platforms() {
  return (
    <section id="platforms" className="relative py-14 md:py-20 bg-void overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="section-line" />
                <span className="text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold" style={{ fontFamily: 'var(--font-body)' }}>
                  Platforms &amp; Apps
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-ink" style={{ fontFamily: 'var(--font-sans)' }}>
                Digital platforms we{' '}
                <em className="text-gradient not-italic">build and run.</em>
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-5 lg:pt-16">
            <FadeUp delay={0.2}>
              <p className="text-ink-muted/85 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}>
                Learning, media, prayer, and commerce platforms serving faith communities in India and internationally.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-faint/25">
          {platforms.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ backgroundColor: 'rgba(237,237,237,0.7)' }}
                className="group relative h-full flex flex-col bg-surface/50 p-8 transition-all duration-300"
              >
                {/* Logo or lettermark fallback */}
                <div className="h-16 mb-6 flex items-center">
                  {p.logo ? (
                    <div className="relative h-16 w-40">
                      <Image
                        src={p.logo}
                        alt={`${p.name} logo`}
                        fill
                        sizes="160px"
                        className="object-contain object-left"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-14 px-5 rounded-2xl bg-gold text-burgundy ring-1 ring-gold/50 -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                      <span className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{p.name}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold text-ink" style={{ fontFamily: 'var(--font-sans)' }}>{p.name}</h3>
                  {p.status && (
                    <span className="text-[0.62rem] tracking-widest uppercase px-2 py-0.5 border border-gold-dark/40 text-gold-dark font-bold" style={{ fontFamily: 'var(--font-body)' }}>
                      {p.status}
                    </span>
                  )}
                </div>

                <p className="text-[0.74rem] tracking-[0.18em] uppercase text-crimson font-bold mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  {p.tagline}
                </p>

                <p className="text-ink-muted/85 leading-relaxed flex-1" style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem' }}>
                  {p.desc}
                </p>

                <motion.div
                  animate={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-crimson to-gold origin-left"
                />
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Enquiry line */}
        <FadeUp delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-ink-faint/25">
            <p className="text-ink-muted" style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem' }}>
              Interested in one of our platforms for your institution or community?
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white text-sm font-bold tracking-[0.1em] uppercase hover:bg-crimson-light transition-all duration-300 shrink-0"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Talk to us
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
