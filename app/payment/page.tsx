import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PolicyPage, PolicySection } from '@/components/policy-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'How to Pay',
  path: '/payment',
  description:
    'How payments work at Sanctus Redemptor Private Limited: enquiry, requirement discussion, quotation, approval, invoice, payment and delivery. Payment methods, taxes and refund references.',
})

const customFlow = [
  { step: '01', title: 'Enquiry', desc: 'You contact us through the website enquiry form, email or phone with your requirement.' },
  { step: '02', title: 'Requirement discussion', desc: 'We discuss scope, deliverables, timeline and any constraints specific to your organisation.' },
  { step: '03', title: 'Quotation or proposal', desc: 'We issue a written quotation or proposal setting out deliverables, timeline, pricing and payment structure.' },
  { step: '04', title: 'Customer approval', desc: 'Work begins only after you approve the quotation or proposal in writing.' },
  { step: '05', title: 'Invoice / payment request', desc: 'We raise a GST invoice or payment request for the approved amount or milestone.' },
  { step: '06', title: 'Payment', desc: 'You pay against that invoice through our authorised payment service provider or by bank transfer.' },
  { step: '07', title: 'Service delivery', desc: 'We deliver the agreed scope, or the agreed milestone, as set out in the approved quotation.' },
]

const standardFlow = [
  { step: '01', title: 'Product or service page', desc: 'The item is listed with its price, inclusions and delivery or access timeline.' },
  { step: '02', title: 'Price and details', desc: 'You review the price, what is included, and the applicable refund and cancellation terms.' },
  { step: '03', title: 'Checkout', desc: 'You proceed to checkout with the item and your contact details.' },
  { step: '04', title: 'Payment', desc: 'Payment is processed by our authorised payment service provider.' },
  { step: '05', title: 'Confirmation', desc: 'You receive a confirmation and a receipt or invoice by email.' },
  { step: '06', title: 'Delivery', desc: 'Digital items are delivered by email within 24 hours; physical items ship as set out in the delivery policy.' },
]

function Flow({ steps }: { steps: { step: string; title: string; desc: string }[] }) {
  return (
    <ol className="space-y-5 mt-2">
      {steps.map((s) => (
        <li key={s.step} className="flex gap-4">
          <span
            className="shrink-0 w-9 h-9 rounded-xl bg-gold text-burgundy font-bold flex items-center justify-center text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {s.step}
          </span>
          <div>
            <p className="text-ink font-medium" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
              {s.title}
            </p>
            <p className="text-ink-muted leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
              {s.desc}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function PaymentPage() {
  return (
    <PolicyPage
      eyebrow="Payments"
      title="How to Pay"
      intro="Sanctus Redemptor Private Limited provides software development, media production, publishing and digital services to corporates, institutions, NGOs, professionals and individual customers. Custom projects are undertaken against approved quotations or proposals and invoices. This page explains how payment works in each case."
    >
      <PolicySection title="Custom and institutional projects">
        <p>
          Most of our technology, media and publishing work is delivered as a custom project. Nothing is charged
          before you have approved a written quotation or proposal.
        </p>
        <Flow steps={customFlow} />
      </PolicySection>

      <PolicySection title="Standard products and services">
        <p>
          Where an item is offered for direct online purchase, its price, inclusions and delivery or access
          timeline are shown on the item&apos;s page before checkout.
        </p>
        <Flow steps={standardFlow} />
      </PolicySection>

      <PolicySection title="Payment methods">
        <p>
          Online payments are processed through our authorised payment service provider, which supports UPI, debit
          and credit cards, net banking and supported wallets. Bank transfer against invoice is available for
          institutional customers. Sanctus Redemptor Private Limited does not collect or store card, UPI or net
          banking credentials on this website; these are handled entirely by the payment service provider.
        </p>
      </PolicySection>

      <PolicySection title="Milestone payments">
        <p>
          Larger projects may be invoiced in milestones. Where milestones apply, the number of milestones, the
          amount payable at each, and what is delivered at each stage are set out in the approved quotation or
          proposal before work begins.
        </p>
      </PolicySection>

      <PolicySection title="Currency, taxes and invoices">
        <p>
          Prices are quoted in Indian Rupees unless otherwise stated. Applicable taxes are shown separately or
          stated as inclusive on each quotation and invoice. A GST invoice is issued for every payment received.
        </p>
      </PolicySection>

      <PolicySection title="Services not currently available for purchase">
        <p>
          Some services are listed on this website as in development. These are marked &ldquo;Coming Soon &ndash;
          Not Currently Available for Purchase&rdquo; and cannot be paid for. We do not accept payment for any
          service or product that is not currently available.
        </p>
      </PolicySection>

      <PolicySection title="Cancellations and refunds">
        <p>
          Cancellation and refund terms depend on the type of item or engagement. Please see the{' '}
          <Link href="/refund-policy" className="text-crimson hover:text-crimson-light underline underline-offset-2">
            Cancellation &amp; Refund Policy
          </Link>{' '}
          and the{' '}
          <Link href="/shipping-policy" className="text-crimson hover:text-crimson-light underline underline-offset-2">
            Shipping &amp; Delivery Policy
          </Link>
          .
        </p>
      </PolicySection>

      <div className="mt-12 p-6 border border-gold/40 bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-ink-muted" style={{ fontFamily: 'var(--font-body)' }}>
          Have a question about a quotation, invoice or payment?
        </p>
        <Link
          href="/contact-support"
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-crimson text-white text-xs font-bold tracking-[0.1em] uppercase hover:bg-crimson-light transition-all duration-300 shrink-0"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Contact Support
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </PolicyPage>
  )
}
