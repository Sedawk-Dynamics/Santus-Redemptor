'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const catalogue = [
  'Family',
  'Children',
  'Youth',
  'Spirituality',
  'Novenas & Prayer',
  'Faith Formation',
  'Liturgical Resources',
  'Devotionals',
]

type Title = {
  name: string
  tagline?: string
  desc: string
  note?: string
  cover: string | null
  coverW?: number
  coverH?: number
  contact?: { email?: string; phones?: string[] }
}

const titles: Title[] = [
  {
    name: 'Breaking the Word',
    tagline: 'Redemptorist Mass Companion',
    desc: 'A trusted annual companion for the Catholic faithful, created to enrich participation in the Holy Mass. Rooted in the Redemptorist charism of proclaiming the Good News, it offers Gospel reflections, liturgical insights, Sunday liturgies, prayers of the faithful, and spiritual reflections from Redemptorists around the world. Designed for priests, religious, catechists, families, and lay faithful, it serves as a practical guide for prayer, reflection, and faith formation. QR codes provide access to complementary digital resources, helping readers continue their spiritual journey beyond the celebration of the Eucharist.',
    note: 'Third edition releases September 2026 — pre-orders now open',
    cover: '/images/Breaking-the-world.png',
    coverW: 939,
    coverH: 461,
    contact: { phones: ['+91 74116 56135', '+91 76250 88502'] },
  },
  {
    name: 'Liguorian International',
    tagline: 'Catholic. Pastoral. Trusted.',
    desc: 'The global edition of the award-winning Catholic magazine Liguorian, published by the Redemptorists. For more than a century, Liguorian has been a trusted companion to Catholic families, offering practical guidance for Christian living, faith formation, and spiritual growth rooted in the Gospel. As a flagship publication of Redemptorist spirituality, it supports the mission of proclaiming the Good News of plentiful redemption, especially to those most in need of hope and encouragement. Curated for readers in India, the magazine presents inspiring stories, pastoral reflections, family-focused content, and Catholic perspectives on contemporary issues.',
    cover: '/images/2.Liguorian-International-Magazine.png',
    coverW: 939,
    coverH: 564,
    contact: {
      email: 'liguorianintl@theholyredeemer.org',
      phones: ['+91 74116 56135', '+91 76250 88502'],
    },
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

export function Publications() {
  return (
    <section id="publications" className="relative py-20 md:py-28 bg-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="section-line" />
                <span className="text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold" style={{ fontFamily: 'var(--font-body)' }}>
                  Publications
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-ink mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                Redemptorist Publications{' '}
                <em className="text-gradient not-italic">India.</em>
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-5 lg:pt-20">
            <FadeUp delay={0.2}>
              <p className="text-ink-muted/85 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}>
                The publishing arm of the Holy Redeemer Foundation, managed by the Redemptorist Province of Bangalore.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* RPI overview */}
        <FadeUp delay={0.15}>
          <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-ink-faint/25">
            <div className="lg:col-span-8">
              <p className="text-ink-muted leading-relaxed mb-5" style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}>
                Dedicated to evangelization through print and digital media, RPI publishes a wide range of Catholic
                resources, including books for families, children, youth, spirituality, novenas, and prayer. The ministry
                also produces liturgical and faith formation publications such as <em>Breaking the Word: Redemptorist
                Mass Companion</em>, devotionals, catechetical resources, and pastoral materials.
              </p>
              <p className="text-ink-muted leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}>
                As part of the wider Redemptorist media network, RPI collaborates with national and international
                partners to make faith-filled, accessible, and mission-oriented content available to individuals,
                families, parishes, schools, and communities across India and beyond.
              </p>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark font-bold mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Publication Catalogue
              </p>
              <div className="flex flex-wrap gap-2">
                {catalogue.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 text-sm border border-ink-faint/35 text-ink-muted hover:border-gold hover:bg-gold/15 transition-all"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Titles */}
        <div className="mt-16 space-y-16">
          {titles.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <div className="group grid lg:grid-cols-12 gap-10 items-start">
                {/* Cover */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                  {t.cover ? (
                    <div className="overflow-hidden rounded-sm ring-1 ring-ink-faint/25">
                      <Image
                        src={t.cover}
                        alt={`${t.name}${t.tagline ? ' \u2014 ' + t.tagline : ''}`}
                        width={t.coverW ?? 939}
                        height={t.coverH ?? 500}
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-surface-3 ring-1 ring-ink-faint/25 flex items-center justify-center p-8">
                      <div className="text-center">
                        <p className="text-3xl font-semibold text-gold-dark leading-tight mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                          {t.name}
                        </p>
                        {t.tagline && (
                          <p className="text-[0.72rem] tracking-[0.2em] uppercase text-ink-muted" style={{ fontFamily: 'var(--font-body)' }}>
                            {t.tagline}
                          </p>
                        )}
                        <p className="mt-6 text-[0.7rem] tracking-widest uppercase text-ink-faint" style={{ fontFamily: 'var(--font-body)' }}>
                          Cover image to follow
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Copy */}
                <div className="lg:col-span-7">
                  <h3 className="text-3xl md:text-4xl font-semibold text-ink mb-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    {t.name}
                  </h3>
                  {t.tagline && (
                    <p className="text-base font-medium text-gold-dark mb-5" style={{ fontFamily: 'var(--font-body)' }}>
                      {t.tagline}
                    </p>
                  )}
                  <p className="text-ink-muted/85 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem' }}>
                    {t.desc}
                  </p>

                  {t.note && (
                    <p className="inline-block px-4 py-2 mb-6 bg-gold text-burgundy text-sm font-bold" style={{ fontFamily: 'var(--font-body)' }}>
                      {t.note}
                    </p>
                  )}

                  {t.contact && (
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-5 border-t border-ink-faint/25">
                      {t.contact.email && (
                        <a
                          href={`mailto:${t.contact.email}`}
                          className="inline-flex items-center gap-2 text-sm text-crimson hover:text-crimson-light transition-colors"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          <Mail className="w-4 h-4" />
                          {t.contact.email}
                        </a>
                      )}
                      {t.contact.phones?.map((ph) => (
                        <a
                          key={ph}
                          href={`tel:${ph.replace(/\s/g, '')}`}
                          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-crimson transition-colors"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          <Phone className="w-4 h-4" />
                          {ph}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
