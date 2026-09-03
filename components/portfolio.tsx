'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Code2, Film, BookOpen, ShoppingBag, MapPin, Phone, Mail } from 'lucide-react'
import { socialIcons } from '@/components/social-icons'

// TODO: replace with the live Holy Redeemer Store e-commerce URL
const STORE_URL = '#'

type Project = {
  id: string
  num: string
  icon: typeof Code2
  type: string
  title: string
  client: string
  desc: string
  bullets: string[]
  image: string
  alt: string
  /* Real brand logo — replaces the generic icon chip when present */
  logo?: string
  status: string
  link: string | null
  /* Optional storefront details — rendered only when present */
  linkLabel?: string
  address?: string
  phone?: string
  email?: string
  mapUrl?: string
  socials?: { label: string; href: string }[]
}

const projects: Project[] = [
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
    image: 'https://img.freepik.com/premium-photo/software-development-lifecycle-diagram-showing-stages-from-planning-deployment_995578-16683.jpg?w=2000',
    alt: 'Software development lifecycle diagram showing stages from planning to deployment',
    logo: '/brand/redemptio.png',
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
    image: 'https://www.blendmylearning.com/wp-content/uploads/2024/05/learning-management-systems.jpg',
    alt: 'Learning management system interface used for online courses',
    logo: '/brand/redacamy.png',
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
    image: 'https://hrf.org/wp-content/uploads/2025/07/latest_web_header_-hrf_ai_program_in_business_insider__-_v1_720.png',
    alt: 'HRF program feature banner',
    status: 'ONGOING',
    link: null,
  },
  {
    id: 'holy-redeemer-store',
    num: '04',
    icon: ShoppingBag,
    type: 'Retail · Catholic Religious Articles',
    title: 'Holy Redeemer Religious Store',
    client: 'A Catholic apostolate of the Holy Redeemer Foundation',
    desc: 'More than a religious store, it is a ministry that accompanies the faithful in their spiritual journey by providing authentic Catholic resources for prayer, worship, faith formation, and sacramental life. It serves individuals, families, parishes, religious communities, and ministry leaders \u2014 and features thoughtful sacramental gifts and customized candles for Baptism, First Holy Communion, Confirmation, Weddings, and other milestones in the life of faith.',
    bullets: [
      'Catholic Books & Bibles',
      'Rosaries, Statues & Devotional Articles',
      'Novenas & Prayer Resources',
      'Liturgical & Sacristy Supplies',
      'Priestly Vestments & Sacred Vessels',
      "Children's Faith Formation Resources",
      'Sacramental Gifts & Customized Candles',
      'Seasonal & Festive Religious Articles',
    ],
    image: '/HRR/store-5.webp',
    alt: 'Holy Redeemer Religious Store interior with Catholic books and devotional articles',
    status: 'ONGOING',
    link: STORE_URL,
    linkLabel: 'Shop Online',
    phone: '+91 76250 88504',
    email: 'store@theholyredeemer.org',
    address: 'Holy Ghost Church Campus\nRichards Town, Bengaluru, Karnataka, India',
    mapUrl: 'https://maps.app.goo.gl/gy1urreE2gLjSnCN9?g_st=ic',
    socials: [
      { label: 'Facebook', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
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

function ProjectCard({ project: proj, index }: { project: Project; index: number }) {
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
      className={`group relative transition-all duration-500 border-b border-ink-faint/40 last:border-b-0 ${hovered ? 'bg-surface-3' : ''}`}
    >
      <div className="py-8 md:py-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Project image — alternates side for rhythm */}
          <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm border border-gold/25">
              <Image
                src={proj.image}
                alt={proj.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Left */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              {proj.logo ? (
                <div className="relative h-12 w-32 shrink-0">
                  <Image
                    src={proj.logo}
                    alt={`${proj.title} logo`}
                    fill
                    sizes="128px"
                    className="object-contain object-left"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-2xl bg-gold text-burgundy ring-1 ring-gold/50 -rotate-6 group-hover:rotate-0 group-hover:scale-110 group-hover:bg-crimson group-hover:text-white group-hover:ring-crimson/40 transition-all duration-300">
                  <proj.icon className="w-5 h-5" strokeWidth={2.25} />
                </div>
              )}
              <span className="text-sm text-gold-dark font-mono tracking-widest">{proj.num}</span>
              <span className="text-[0.74rem] tracking-[0.15em] uppercase text-ink-muted/90" style={{ fontFamily: 'var(--font-body)' }}>{proj.type}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-ink mb-2 group-hover:text-crimson transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)' }}>
              {proj.title}
            </h3>
            <p className="text-base font-medium mb-5 text-gold-dark" style={{ fontFamily: 'var(--font-body)' }}>{proj.client}</p>
            <p className="text-ink-muted/85 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem' }}>{proj.desc}</p>
          </div>

          {/* Right */}
          <div className="lg:col-span-4">
            <ul className="space-y-2.5 mb-8">
              {proj.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink-muted" style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0 mt-[0.55em]" />
                  <span className="flex-1">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <span className={`text-[0.7rem] tracking-widest uppercase px-3 py-1 border font-medium ${proj.status === 'LIVE' ? 'border-emerald-500/30 text-emerald-400/80' : proj.status === 'IN DEVELOPMENT' ? 'border-gold/50 text-gold' : 'border-ink-faint/40 text-ink-muted/75'}`} style={{ fontFamily: 'var(--font-body)' }}>
                {proj.status}
              </span>
              {proj.link && (
                <a
                  href={proj.linkLabel ? proj.link : `https://${proj.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-sm text-crimson hover:text-crimson-light transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {proj.linkLabel ?? proj.link} <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>

      {/* Storefront details — full width so the three columns above stay aligned */}
      {proj.address && (
        <div className="mt-8 pt-6 border-t border-ink-faint/25 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
            <div>
              <p className="text-ink-muted/85 whitespace-pre-line leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
                {proj.address}
              </p>
              {proj.mapUrl && (
                <a
                  href={proj.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-1.5 text-sm text-crimson hover:text-crimson-light transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  View on Google Maps <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {(proj.phone || proj.email) && (
            <div className="flex flex-col gap-3">
              {proj.phone && (
                <a
                  href={`tel:${proj.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-crimson transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <Phone className="w-4 h-4 text-gold-dark" />
                  {proj.phone}
                </a>
              )}
              {proj.email && (
                <a
                  href={`mailto:${proj.email}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-crimson transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <Mail className="w-4 h-4 text-gold-dark" />
                  {proj.email}
                </a>
              )}
            </div>
          )}

          {proj.socials && (
            <div>
              <p className="text-[0.72rem] tracking-[0.2em] uppercase text-ink-muted font-bold mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Stay Connected
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {proj.socials.map((soc) => {
                  const SocialIcon = socialIcons[soc.label]
                  return (
                    <a
                      key={soc.label}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={soc.label}
                      title={soc.label}
                      className="w-9 h-9 rounded-xl bg-surface-2 ring-1 ring-ink-faint/25 flex items-center justify-center text-ink-muted hover:text-burgundy hover:bg-gold hover:ring-gold transition-all duration-200"
                    >
                      {SocialIcon ? <SocialIcon className="w-4 h-4" /> : soc.label}
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      )}
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
    <section id="portfolio" className="relative py-14 md:py-20 bg-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-full mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="section-line" />
                <span className="text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold" style={{ fontFamily: 'var(--font-body)' }}>Our Work</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-ink" style={{ fontFamily: 'var(--font-sans)' }}>
                A cross-section of what{' '}
                <em className="text-gradient not-italic">we have built.</em>
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-5 lg:pt-16">
            <FadeUp delay={0.2}>
              <p className="text-ink-muted/85 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}>
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
            <p className="text-[0.72rem] tracking-[0.3em] uppercase text-ink-muted font-bold text-center mb-10" style={{ fontFamily: 'var(--font-body)' }}>
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
