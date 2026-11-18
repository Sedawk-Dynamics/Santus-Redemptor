'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()

  const bgY     = useTransform(scrollY, [0, 700], [0, 140])
  const fadeOut = useTransform(scrollY, [0, 420], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-void"
      aria-labelledby="hero-heading"
    >
      {/* The hero is video-only, so the page's one h1 lives here for search
          engines and screen readers without changing the design. */}
      <h1 id="hero-heading" className="sr-only">
        Sanctus Redemptor – software and web development, media production and book and digital
        publishing in Bangalore
      </h1>
      {/* ── Full-bleed background video with parallax ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-16 -bottom-16 will-change-transform"
      >
        <video
          src="/hero-banner-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
        />
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        style={{ opacity: fadeOut }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 z-20"
      >
        <span className="text-[0.7rem] tracking-[0.35em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
