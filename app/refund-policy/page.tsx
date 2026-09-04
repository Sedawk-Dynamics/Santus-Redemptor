import type { Metadata } from 'next'
import { PolicyPage, PolicySection } from '@/components/policy-page'

export const metadata: Metadata = {
  title: 'Cancellation and Refund Policy – Sanctus Redemptor',
  description:
    'Cancellation and refund policy for purchases made on www.srplblr.com, covering digital products, sessions, subscriptions and publishing services.',
}

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Cancellation and Refund Policy"
      updated="18 July 2026"
      intro="This Cancellation and Refund Policy applies to purchases made by customers on www.srplblr.com. Refund eligibility depends on the type of product or service purchased."
    >
      <PolicySection title="Duplicate or Failed Payments">
        <p>
          If your account is debited more than once for the same order, or if payment succeeds but order
          confirmation is not generated, contact us with the payment ID and registered email address. Approved
          refunds will be processed to the original payment method.
        </p>
      </PolicySection>

      <PolicySection title="Digital Products and Downloadable Resources">
        <p>
          Digital products are not refundable once access, download links or digital files have been delivered,
          except where a technical issue on our side prevents access and we are unable to resolve it within a
          reasonable time.
        </p>
      </PolicySection>

      <PolicySection title="Online Sessions and Workshops">
        <p>
          Customers may request cancellation or rescheduling at least 48 hours before the scheduled session. No refund is available for no-shows or cancellation requests raised
          after the stated window, unless SRPL cancels the session.
        </p>
      </PolicySection>

      <PolicySection title="Subscriptions">
        <p>
          A subscription may be cancelled by contacting customer support or using the cancellation option provided
          on the subscription page, if available. Cancellation stops future access or renewal according to the
          subscription terms shown at purchase. Fees already paid for an active subscription period are refundable
          only if the subscription has not been activated or if access could not be provided due to an SRPL
          technical issue.
        </p>
      </PolicySection>

      <PolicySection title="Publishing and Media Service Packages">
        <p>
          A full refund may be requested only before work starts. Once work has started, refunds are not available
          for completed milestones or delivered drafts. If SRPL is unable to deliver the purchased package, SRPL may
          offer a revised timeline, replacement service or refund as applicable.
        </p>
      </PolicySection>

      <PolicySection title="Physical Products, Where Applicable">
        <p>
          Return or replacement rules for physical products will be stated on the product page. Customers must
          report damaged or incorrect items within 7 days of delivery with photos and order details.
        </p>
      </PolicySection>

      <PolicySection title="How to Request a Refund or Cancellation">
        <p>
          Email{' '}
          <a href="mailto:office@srplblr.com" className="text-crimson hover:text-crimson-light underline underline-offset-2">
            office@srplblr.com
          </a>{' '}
          with your full name, order ID, Razorpay/payment ID, registered email address, phone number and reason for
          request.
        </p>
      </PolicySection>

      <PolicySection title="Review and Refund Timeline">
        <p>
          We will review requests within 7 business days. Approved refunds will be initiated within
          5 to 7 business days and credited according to bank/payment gateway timelines.
        </p>
      </PolicySection>

      <PolicySection title="Support Contact">
        <p>
          office@srplblr.com | +91 7625088502 | No. 9/1, Clarke Road, Richards Town, Bengaluru 560084, Karnataka, India.
        </p>
      </PolicySection>
    </PolicyPage>
  )
}
