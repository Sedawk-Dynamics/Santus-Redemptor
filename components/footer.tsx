'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Contact', href: '/#contact' },
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
  { label: 'Contact Support', href: '/contact-support' },
]

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

const socials = [
  { Icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
  { Icon: YouTubeIcon, label: 'YouTube', href: '#' },
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { Icon: FacebookIcon, label: 'Facebook', href: '#' },
]

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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sanctus%20Redemptor%20Png-2D8YUy0ali8CG4y6gJ6J2cj9AdE93J.png"
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
                  whileHover={{ y: -6, scale: 1.06 }}
                  className="w-10 h-10 rounded-xl bg-surface-2 ring-1 ring-ink-faint/25 flex items-center justify-center text-ink-muted hover:text-burgundy hover:bg-gold hover:ring-gold transition-all duration-200"
                  aria-label={s.label}
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
                <a href="mailto:office@srplblr.com" className="text-ink-muted hover:text-ink transition-colors" style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem' }}>office@srplblr.com</a>
              </div>
              <div>
                <p className="text-[0.72rem] text-ink-muted font-bold tracking-wide mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>Phone</p>
                <a href="tel:+917625088502" className="text-ink-muted hover:text-ink transition-colors" style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem' }}>+91 7625088502</a>
              </div>
              <div>
                <p className="text-[0.72rem] text-ink-muted font-bold tracking-wide mb-1" style={{ fontFamily: 'var(--font-body)' }}>Address</p>
                <p className="text-ink-muted leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '0.94rem' }}>
                  No. 9/1, Clarke Road,<br />
                  Richards Town, Bengaluru – 560084<br />
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
          </div>
        </div>
      </div>
    </footer>
  )
}
