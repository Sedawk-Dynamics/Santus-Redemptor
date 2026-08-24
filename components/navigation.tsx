'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 60))
    return unsub
  }, [scrollY])

  const navBg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(251,247,240,0)', 'rgba(251,247,240,0.92)']
  )
  const navBorder = useTransform(scrollY, [0, 80], ['rgba(180,145,60,0)', 'rgba(180,145,60,0.16)'])

  return (
    <>
      <motion.header
        style={{ backgroundColor: navBg, borderBottomColor: navBorder }}
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 group"
              aria-label="Sanctus Redemptor Home"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sanctus%20Redemptor%20Png-2D8YUy0ali8CG4y6gJ6J2cj9AdE93J.png"
                alt="Sanctus Redemptor"
                width={200}
                height={50}
                className="h-9 w-auto object-contain"
                priority
                loading="eager"
              />
            </motion.a>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className={`relative text-xs font-medium tracking-[0.1em] uppercase transition-colors group ${
                    scrolled ? 'text-ink-muted hover:text-ink' : 'text-white/85 hover:text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:flex items-center gap-3"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-crimson text-void text-xs font-medium tracking-[0.1em] uppercase hover:bg-crimson-light transition-all duration-300 group glow-crimson"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Book a Consultation
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 transition-colors hover:text-gold ${
                scrolled ? 'text-ink' : 'text-white'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-void flex flex-col pt-24 pb-12 px-8"
          >
            {/* Gold rule */}
            <div className="absolute top-[72px] left-0 right-0 h-px bg-gold/20" />

            <nav className="flex flex-col gap-8 mt-6" aria-label="Mobile navigation">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  className="text-4xl font-light text-ink hover:text-gold transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-void text-sm font-medium tracking-[0.1em] uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Book a Consultation
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="mt-6 text-xs text-ink-muted/40" style={{ fontFamily: 'var(--font-body)' }}>
                office@srplblr.com &nbsp;·&nbsp; +91 7625088502
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
