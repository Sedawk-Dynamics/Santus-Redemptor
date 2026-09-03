'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { CheckCircle2, Code2, Film, BookOpen } from 'lucide-react'

const values = [
  {
    title: 'Rigorous Delivery Standards',
    desc: 'We hold every engagement to a professional bar of quality, regardless of project size or sector.',
  },
  {
    title: 'Transparent Communication',
    desc: 'Clients always know where a project stands, what is next, and what is required of them.',
  },
  {
    title: 'Long-Term Relationship Orientation',
    desc: 'We build for continuity, not one-off transactions, so each engagement strengthens the next.',
  },
  {
    title: 'Accountability at Every Stage',
    desc: 'These are the operating norms by which we measure ourselves and by which our clients evaluate us.',
  },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%'])
  const imgParallax = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section id="about" ref={sectionRef} className="relative py-14 md:py-20 bg-surface overflow-hidden">
      {/* Subtle corner gradient */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle at top right, rgba(167,15,16,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle at bottom left, rgba(253,224,131,0.10) 0%, transparent 70%)' }}
      />

      <div className="max-w-[88rem] mx-auto px-6 lg:px-16">
        {/* Section label */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-12">
            <div className="section-line" />
            <span className="text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold" style={{ fontFamily: 'var(--font-body)' }}>About Us</span>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left: main text */}
          <div className="lg:col-span-6">
            <FadeUp>
              <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-ink mb-10" style={{ fontFamily: 'var(--font-sans)' }}>
                A company built to close{' '}
                <em className="text-gradient not-italic">a real gap.</em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-ink-muted leading-relaxed mb-5" style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}>
                Sanctus Redemptor Private Limited was incorporated in Bangalore to address a consistent gap in the market: organizations doing substantive work in education, social development, publishing, and the corporate sector often lacked access to integrated, high-quality technology and media services tailored to their specific operating context.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-ink-muted leading-relaxed mb-5" style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}>
                We bring together expertise across software engineering, media production, and publishing under a single corporate structure — enabling clients to access coordinated, high-calibre services without managing fragmented vendor relationships.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-ink-muted leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}>
                Our client base spans corporates, non-governmental organizations, and educational institutions in India and internationally, with delivery experience in Bangalore, across India, and in the United States.
              </p>
            </FadeUp>

            {/* Pillar icons */}
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-3 gap-4 mt-14 pt-10 border-t border-ink-faint/40">
                {[
                  { label: 'Software\n& Web Dev', icon: Code2 },
                  { label: 'Media\nProduction', icon: Film },
                  { label: 'Book &\nPublishing', icon: BookOpen },
                ].map((v) => (
                  <div key={v.label} className="flex flex-col gap-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gold text-burgundy ring-1 ring-gold/50 -rotate-6 hover:rotate-0 hover:scale-110 hover:bg-crimson hover:text-white hover:ring-crimson/40 transition-all duration-300">
                      <v.icon className="w-5 h-5" strokeWidth={2.25} />
                    </div>
                    <span className="text-ink-muted/85 leading-tight whitespace-pre-line" style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', letterSpacing: '0.04em' }}>{v.label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Registered entity — sits under the three pillars */}
            <FadeUp delay={0.4}>
              <div className="mt-10 p-5 border border-gold/35 bg-surface-2">
                <p className="text-[0.72rem] text-ink-muted font-bold mb-1 tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>Registered Entity</p>
                <p className="text-base font-medium text-ink" style={{ fontFamily: 'var(--font-body)' }}>Sanctus Redemptor Private Limited</p>
                <p className="text-ink-muted mt-1" style={{ fontFamily: 'var(--font-body)', fontSize: '0.84rem' }}>CIN: U82990KA2025PTC203720 &nbsp;·&nbsp; GSTIN: 29ABQCS4225H1ZX</p>
              </div>
            </FadeUp>
          </div>

          {/* Right: values + image */}
          <div className="lg:col-span-6 lg:pt-4 space-y-10">

            {/* About image with parallax */}
            <FadeUp>
              <motion.div
                style={{ y: imgParallax }}
                className="relative w-full aspect-[16/9] overflow-hidden rounded-sm"
              >
                <Image
                  src="/hero-banner.png"
                  alt="Sanctus Redemptor service banner — software and web development, media production and content, and book and digital publishing"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </FadeUp>

            {/* Values list */}
            <div className="relative pl-7">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-ink-faint/20">
                <motion.div
                  style={{ height: lineHeight }}
                  className="w-full bg-gradient-to-b from-crimson to-gold"
                />
              </div>
              <div className="flex flex-col gap-8">
                {values.map((v, i) => (
                  <FadeUp key={v.title} delay={i * 0.08}>
                    <div>
                      <div className="flex items-start gap-3 mb-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" />
                        <h3 className="text-lg font-semibold text-ink leading-snug" style={{ fontFamily: 'var(--font-sans)' }}>{v.title}</h3>
                      </div>
                      <p className="ml-6 text-ink-muted/85 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem' }}>{v.desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
