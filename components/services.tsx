'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Code2, Film, BookOpen, Cpu, Mic, Globe, ArrowUpRight, Plus } from 'lucide-react'

const services = [
  {
    id: 'software',
    icon: Code2,
    label: '01',
    title: 'Software & Web Development',
    tagline: 'Engineered for performance. Built to scale.',
    desc: 'We build digital tools and platforms that individuals, families, students, and small organisations can use directly — standard off-the-shelf software, from initial requirements through deployment and long-term support.',
    image: '/web-development-application-design-coding-and-programming-on-laptop-and-smartphone-concept-with-programming-language-and-program-code-and-layout-on-screen-vector.jpg',
    items: [
      'Custom software & systems architecture',
      'Corporate website design & development',
      'E-commerce platform development',
      'Mobile apps (iOS and Android)',
      'LMS platforms for individuals',
      'Hosting, domains & server management',
      'IT infrastructure & cybersecurity',
      'API integration & third-party connectivity',
    ],
    cta: 'Request a Technical Consultation',
  },
  {
    id: 'media',
    icon: Film,
    label: '02',
    title: 'Media Production & Content',
    tagline: 'Professional content. Precise execution. Maximum reach.',
    desc: 'We help individuals, teachers, coaches, ministries, and small organisations create professional video, audio, and digital content that reaches and resonates with the right audience.',
    image: '/images/services-media.png',
    items: [
      'Concept, scripting & pre-production',
      'Corporate films & documentaries',
      'Training & promotional video',
      'Personal, corporate, editorial & event photography',
      'Editing, color grading & sound design',
      'VFX, subtitling & voiceover',
      'Podcast & audio production',
      'Multi-platform distribution',
    ],
    cta: 'Discuss Your Production Requirements',
  },
  {
    id: 'publishing',
    icon: BookOpen,
    label: '03',
    title: 'Book & Digital Publishing',
    tagline: 'From manuscript to market. Every format. Every channel.',
    desc: 'We help authors, teachers, ministries, and small organisations publish books, journals, magazines, and digital learning content — guiding every step from design to distribution.',
    image: '/images/services-publishing.png',
    items: [
      'Book layout, typesetting & print-ready design',
      'Print production & management',
      'eBook formats: EPUB, Kindle, PDF',
      'Audiobook production & distribution',
      'Magazine & journal design and printing',
      'Digital subscription platforms',
      'Translation coordination',
      'Online, bookstore & institutional distribution',
    ],
    cta: 'Start Your Publishing Project',
  },
]

const coming = [
  { icon: Cpu, title: 'Education & e-Learning' },
  { icon: Mic, title: 'Counselling & Coaching' },
  { icon: Globe, title: 'Consulting & Training' },
  { icon: BookOpen, title: 'Gift Articles & Retail' },
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

export function Services() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="services" className="relative py-14 md:py-20 bg-surface-2 overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-[88rem] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-14 max-w-4xl">
          <FadeUp>
            <div className="flex items-center gap-4 mb-8">
              <div className="section-line" />
              <span className="text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold" style={{ fontFamily: 'var(--font-body)' }}>Services</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-ink mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
              Three core verticals.
              <br /><em className="text-gradient not-italic">One accountable team.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-ink-muted/85 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}>
              Sanctus Redemptor delivers professional services across three core verticals. Each is supported by a dedicated team with domain expertise, proven methodology, and a commitment to measurable outcomes.
            </p>
          </FadeUp>
        </div>

        {/* Service accordion cards */}
        <div className="space-y-px">
          {services.map((svc, i) => {
            const Icon = svc.icon
            const isActive = active === svc.id
            return (
              <FadeUp key={svc.id} delay={i * 0.08}>
                <motion.div
                  onClick={() => setActive(isActive ? null : svc.id)}
                  className={`group relative cursor-pointer border-b border-ink-faint/40 transition-all duration-300 ${isActive ? 'bg-surface-3' : 'hover:bg-surface-3/50'}`}
                >
                  <div className="py-8 px-0">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-6 flex-1">
                        <span className="text-4xl font-bold text-crimson leading-none shrink-0 select-none mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                          {svc.label}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2.5">
                            <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-2xl bg-gold text-burgundy shadow-sm ring-4 ring-gold/30 -rotate-6 group-hover:rotate-0 group-hover:scale-110 group-hover:bg-crimson group-hover:text-white group-hover:ring-crimson/40 transition-all duration-300">
                              <Icon className="w-4.5 h-4.5" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-ink group-hover:text-crimson transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                              {svc.title}
                            </h3>
                          </div>
                          <p className="text-ink-muted/80 leading-relaxed max-w-2xl ml-14" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
                            {svc.tagline}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 mt-1 w-10 h-10 rounded-full bg-crimson text-white ring-4 ring-crimson/15 flex items-center justify-center shadow-sm group-hover:bg-gold group-hover:text-burgundy group-hover:ring-gold/30 transition-all"
                      >
                        <Plus className="w-5 h-5" strokeWidth={3} />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-8 grid lg:grid-cols-5 gap-8">
                            {/* Image */}
                            <div className="lg:col-span-2 relative aspect-[4/3] overflow-hidden rounded-sm">
                              <Image
                                src={svc.image}
                                alt={svc.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                            </div>
                            {/* Content */}
                            <div className="lg:col-span-3">
                              <p className="text-ink-muted/85 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem' }}>
                                {svc.desc}
                              </p>
                              <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                                {svc.items.map((item) => (
                                  <div key={item} className="flex items-start gap-2.5">
                                    <div className="w-1 h-1 rounded-full bg-gold/60 mt-2 shrink-0" />
                                    <span className="text-ink-muted/90" style={{ fontFamily: 'var(--font-body)', fontSize: '0.94rem' }}>{item}</span>
                                  </div>
                                ))}
                              </div>
                              <a
                                href="#contact"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 text-sm font-medium text-crimson hover:text-crimson-light hover:gap-3 transition-all tracking-[0.08em] uppercase"
                                style={{ fontFamily: 'var(--font-body)' }}
                              >
                                {svc.cta} <ArrowUpRight className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </FadeUp>
            )
          })}
        </div>

        {/* Coming soon */}
        <FadeUp delay={0.3}>
          <div className="mt-14 pt-10 border-t border-ink-faint/25">
            <div className="flex items-center gap-4 mb-7">
              <div className="section-line" />
              <p className="text-[0.72rem] tracking-[0.25em] uppercase text-ink-muted font-bold" style={{ fontFamily: 'var(--font-body)' }}>Services in Development</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coming.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group h-full flex flex-col p-5 bg-void ring-1 ring-ink-faint/25 hover:ring-crimson/40 transition-all duration-300"
                  >
                    {/* Fixed top row keeps every badge on the same line */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold text-burgundy ring-1 ring-gold/50 -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-4.5 h-4.5" strokeWidth={2.25} />
                      </div>
                      <span className="text-[0.62rem] tracking-widest uppercase px-2 py-1 bg-gold text-burgundy font-bold" style={{ fontFamily: 'var(--font-body)' }}>
                        Soon
                      </span>
                    </div>
                    <h4 className="text-ink font-medium leading-snug" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
                      {item.title}
                    </h4>
                  </div>
                )
              })}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
