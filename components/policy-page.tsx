import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/footer'

export function PolicyHeader() {
  return (
    <header className="border-b border-ink-faint/35 bg-void">
      <div className="max-w-4xl mx-auto px-6 lg:px-0 h-20 flex items-center justify-between">
        <Link href="/" aria-label="Sanctus Redemptor Home" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Sanctus Redemptor"
            width={180}
            height={50}
            className="h-8 w-auto object-contain"
          />
        </Link>
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-medium tracking-[0.12em] uppercase text-ink-muted hover:text-crimson transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          Back to Home
        </Link>
      </div>
    </header>
  )
}

export function PolicyPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  updated?: string
  intro?: string
  children: ReactNode
}) {
  return (
    <div className="bg-void min-h-screen">
      <PolicyHeader />

      <main className="max-w-4xl mx-auto px-6 lg:px-0 py-16 lg:py-24">
        <span
          className="text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {eyebrow}
        </span>
        <h1
          className="mt-4 text-4xl lg:text-5xl font-medium text-ink text-balance"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {title}
        </h1>
        {updated && (
          <p className="mt-4 text-sm text-ink-muted" style={{ fontFamily: 'var(--font-body)' }}>
            Last updated: {updated}
          </p>
        )}
        <div className="section-line mt-6 mb-10" />
        {intro && (
          <p
            className="text-ink-muted leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}
          >
            {intro}
          </p>
        )}

        <div className="policy-prose">{children}</div>
      </main>

      <Footer />
    </div>
  )
}

export function PolicySection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mb-9">
      <h2
        className="text-lg font-medium text-ink mb-3"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {title}
      </h2>
      <div
        className="text-ink-muted leading-relaxed space-y-3"
        style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem' }}
      >
        {children}
      </div>
    </section>
  )
}
