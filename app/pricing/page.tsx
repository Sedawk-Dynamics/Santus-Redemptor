import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PolicyPage, PolicySection } from '@/components/policy-page'

export const metadata: Metadata = {
  title: 'Pricing Details – Sanctus Redemptor',
  description:
    'Pricing details for Sanctus Redemptor products, services and subscriptions available for direct online purchase.',
}

export default function PricingPage() {
  return (
    <PolicyPage
      eyebrow="Pricing"
      title="Pricing Details"
      intro="This page lists SRPL products, services and subscriptions available for direct online purchase. Each item includes price, inclusions, access or delivery timeline and applicable refund/cancellation terms. Prices are shown in Indian Rupees unless otherwise stated. Taxes are included or displayed separately as stated for each item."
    >
      <PolicySection title="Consumer Catalogue">
        <p>
          Individual product and service pricing is shown on each product page before checkout, including
          inclusions, access or delivery timeline, and the applicable refund or cancellation terms for that item.
        </p>
      </PolicySection>

      <PolicySection title="Custom and Institutional Projects">
        <p>
          For custom corporate, NGO, institutional or technology projects, visit the{' '}
          <Link href="/#contact" className="text-crimson hover:text-crimson-light underline underline-offset-2">
            For Organisations
          </Link>{' '}
          page. Custom project pricing is not part of the consumer checkout catalogue.
        </p>
      </PolicySection>

      <div className="mt-12 p-6 border border-gold/20 bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-ink-muted" style={{ fontFamily: 'var(--font-body)' }}>
          Have questions about pricing for a specific service?
        </p>
        <Link
          href="/contact-support"
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-crimson text-void text-xs font-medium tracking-[0.1em] uppercase hover:bg-crimson-light transition-all duration-300 shrink-0"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Contact Support
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </PolicyPage>
  )
}
