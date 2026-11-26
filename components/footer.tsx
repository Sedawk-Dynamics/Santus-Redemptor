'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { socialIcons } from '@/components/social-icons'
import { CookieSettingsLink } from '@/components/cookie-consent'
import { SOCIAL_LINKS } from '@/lib/site'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Platforms & Apps', href: '/#platforms' },
  { label: 'Publications', href: '/#publications' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Careers', href: '/careers' },
]

const serviceLinks = [
  { label: 'Software and Web Development', href: '/#services' },
  { label: 'Media Production and Content', href: '/#services' },
  { label: 'Book and Digital Publishing', href: '/#services' },
  { label: 'Education and e-Learning', href: '/#services', soon: true },
  { label: 'Consulting and Training', href: '/#services', soon: true },
]

const policyLinks = [
  { label: 'Shipping & Delivery Policy', href: '/shipping-policy' },
  { label: 'Cancellation & Refund Policy', href: '/refund-policy' },
  { label: 'Terms and Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Pricing Details', href: '/pricing' },
  { label: 'How to Pay', href: '/payment' },
  { label: 'Contact Support', href: '/contact-support' },
]

const socials = SOCIAL_LINKS.map((s) => ({ ...s, Icon: socialIcons[s.label] }))

export function Footer() {
  return (
    <footer className="relative bg-void overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      {/* bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #FDE083 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 lg:px-16">
        {/* Main content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Sanctus Redemptor"
              width={180}
              height={55}
              className="h-10 w-auto object-contain mb-5 opacity-90"
            />
            <p className="text-ink-muted leading-relaxed mb-8" style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem' }}>
              Bringing Technology to Life and Truth. A Bangalore-based technology, media, and publishing company serving India and internationally.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.06 }}
                  className="w-10 h-10 rounded-xl bg-surface-2 ring-1 ring-ink-faint/25 flex items-center justify-center text-ink-muted hover:text-burgundy hover:bg-gold hover:ring-gold transition-all duration-200"
                  aria-label={`Sanctus Redemptor on ${s.label}`}
                >
                  <s.Icon className="w-3 h-3" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[0.72rem] tracking-[0.22em] uppercase text-gold-dark font-bold mb-6" style={{ fontFamily: 'var(--font-body)' }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}
                    className="group flex items-center gap-1.5 text-ink-muted hover:text-ink transition-colors"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem' }}
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-3 transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.72rem] tracking-[0.22em] uppercase text-gold-dark font-bold mb-6" style={{ fontFamily: 'var(--font-body)' }}>Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}
                    className="group flex items-center gap-2 text-ink-muted hover:text-ink transition-colors"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.94rem' }}
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-3 transition-all duration-200" />
                    {l.label}
                    {l.soon && (
                      <span className="text-[0.55rem] tracking-widest uppercase border border-gold/50 text-gold-dark font-bold px-1.5 py-0.5 ml-1" style={{ fontFamily: 'var(--font-body)' }}>Soon</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-[0.72rem] tracking-[0.22em] uppercase text-gold-dark font-bold mb-6" style={{ fontFamily: 'var(--font-body)' }}>Policies</h4>
            <ul className="space-y-3">
              {policyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}
                    className="group flex items-center gap-1.5 text-ink-muted hover:text-ink transition-colors"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.94rem' }}
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-3 transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[0.72rem] tracking-[0.22em] uppercase text-gold-dark font-bold mb-6" style={{ fontFamily: 'var(--font-body)' }}>Connect</h4>
            <div className="space-y-5">
              <div>
                <p className="text-[0.72rem] text-ink-muted font-bold tracking-wide mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>Email</p>
                <a href="mailto:info@srplblr.com" className="text-ink-muted hover:text-ink transition-colors" style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem' }}>info@srplblr.com</a>
              </div>
              <div>
                <p className="text-[0.72rem] text-ink-muted font-bold tracking-wide mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>Phone</p>
                <a href="tel:+917625088502" className="text-ink-muted hover:text-ink transition-colors" style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem' }}>+91 7625088502</a>
              </div>
              <div>
                <p className="text-[0.72rem] text-ink-muted font-bold tracking-wide mb-1" style={{ fontFamily: 'var(--font-body)' }}>Address</p>
                <p className="text-ink-muted leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '0.94rem' }}>
                  No. 9/1, Clarke Road,<br />
                  Richards Town, Bengaluru 560084<br />
                  Karnataka, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-ink-faint/35 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink-muted" style={{ fontFamily: 'var(--font-body)', fontSize: '0.86rem' }}>
            &copy; 2026 Sanctus Redemptor Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <p className="text-ink-muted" style={{ fontFamily: 'var(--font-body)', fontSize: '0.84rem' }}>CIN: U82990KA2025PTC203720</p>
            <p className="text-ink-muted" style={{ fontFamily: 'var(--font-body)', fontSize: '0.84rem' }}>GSTIN: 29ABQCS4225H1ZX</p>
            <a href="/privacy-policy" className="text-ink-muted hover:text-ink transition-colors" style={{ fontFamily: 'var(--font-body)', fontSize: '0.86rem' }}>Privacy Policy</a>
            <a href="/terms" className="text-ink-muted hover:text-ink transition-colors" style={{ fontFamily: 'var(--font-body)', fontSize: '0.86rem' }}>Terms of Use</a>
            <CookieSettingsLink className="text-ink-muted hover:text-ink transition-colors cursor-pointer" style={{ fontFamily: 'var(--font-body)', fontSize: '0.86rem' }} />
          </div>
        </div>
      </div>
    </footer>
  )
}
