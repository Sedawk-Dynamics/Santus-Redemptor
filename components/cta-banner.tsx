'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yUp = useTransform(scrollYProgress, [0, 1], [40, -40])
  const yDown = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section ref={ref} className="relative py-32 md:py-44 bg-crimson overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{
            y: yUp,
            background: 'radial-gradient(circle, rgba(212,167,44,0.4) 0%, transparent 70%)',
          }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
        />
        <motion.div
          style={{
            y: yDown,
            background: 'radial-gradient(circle, rgba(212,167,44,0.3) 0%, transparent 70%)',
          }}
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-15"
        />

        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" stroke="#D4A72C" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ornament */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-void/25" />
            <span className="text-gold text-xl">✦</span>
            <div className="h-px w-16 bg-void/25" />
          </div>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-void mb-6 max-w-4xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {"Let's talk about"}{' '}
            <em className="gold-shimmer not-italic">your project.</em>
          </h2>

          <p
            className="text-base md:text-lg text-void/70 leading-relaxed max-w-xl mx-auto mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Whether you need a software platform, a media production, or a publishing partner — we are ready to assess your requirements and propose a solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, boxShadow: '0 20px 60px rgba(212,167,44,0.35)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-void text-crimson text-base font-medium tracking-widest uppercase transition-all duration-300 hover:gap-4 hover:bg-void/90"
              style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.1em', fontSize: '0.84rem' }}
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <a
              href="tel:+917625088502"
              className="inline-flex items-center gap-2 px-8 py-4 border border-void/35 text-void/85 text-base font-medium tracking-widest uppercase transition-all duration-300 hover:border-void/60 hover:text-void"
              style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.1em', fontSize: '0.84rem' }}
            >
              +91 7625088502
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
