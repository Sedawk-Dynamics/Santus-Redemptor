import { PolicyPage, PolicySection } from '@/components/policy-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Terms and Conditions',
  path: '/terms',
  description:
    'Terms and Conditions governing the use of www.srplblr.com and purchases of digital products, sessions, subscriptions and services from Sanctus Redemptor Private Limited.',
})

export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Terms and Conditions"
      updated="18 July 2026"
      intro="Welcome to Sanctus Redemptor Private Limited. These Terms and Conditions govern your use of www.srplblr.com and your purchase of digital products, online sessions, subscriptions, media services, publishing services and other offerings listed on this website."
    >
      <PolicySection title="Eligibility">
        <p>
          By using the website or purchasing from us, you confirm that you are competent to contract under
          applicable law. If you are below 18 years of age, you may use the services only with the involvement of a
          parent or legal guardian.
        </p>
      </PolicySection>

      <PolicySection title="Product and Service Information">
        <p>
          We make reasonable efforts to describe each product or service accurately, including price, inclusions,
          access method, delivery timeline and refund terms. If an item is listed incorrectly due to a technical or
          typographical error, we may cancel the order and refund the amount paid.
        </p>
      </PolicySection>

      <PolicySection title="Prices and Taxes">
        <p>
          Prices are shown in Indian Rupees unless stated otherwise. Taxes and charges are displayed on the product
          page, pricing page or checkout as applicable.
        </p>
      </PolicySection>

      <PolicySection title="Payments">
        <p>
          For custom projects, work begins only after you approve a written quotation or proposal. We then raise
          an invoice or payment request for the approved amount, or for the agreed milestone where a project is
          invoiced in stages. An order or engagement is confirmed when payment against that invoice is received
          and acknowledged by us in writing. Prices are quoted in Indian Rupees unless otherwise stated, and
          applicable taxes are shown separately or stated as inclusive on each quotation and invoice.
        </p>
        <p>
          Online payments are processed through approved payment gateway providers. SRPL does not store card, UPI
          PIN or net-banking credentials on its website.
        </p>
      </PolicySection>

      <PolicySection title="Order Acceptance">
        <p>
          Payment confirmation does not automatically mean fulfilment if the order violates these terms, contains
          incorrect information, or relates to a product/service that cannot be delivered due to circumstances
          beyond SRPL&apos;s control. In such cases, SRPL may cancel and refund the order.
        </p>
      </PolicySection>

      <PolicySection title="Customer Responsibilities">
        <p>
          You agree to provide accurate name, email, phone number, billing information, file inputs and other
          details required to fulfil your order. Delays caused by incomplete or incorrect information are not
          counted within delivery timelines.
        </p>
      </PolicySection>

      <PolicySection title="Intellectual Property">
        <p>
          Website content, designs, text, graphics, digital resources, learning material and service outputs remain
          protected by applicable intellectual property laws. Customer usage rights are limited to the licence or
          deliverable terms stated on the product page or invoice.
        </p>
      </PolicySection>

      <PolicySection title="User-Submitted Content">
        <p>
          For publishing or media services, you confirm that you own or have the right to submit all manuscripts,
          images, audio, video, logos and other materials provided to SRPL. You are responsible for ensuring that
          submitted material does not violate third-party rights or applicable law.
        </p>
      </PolicySection>

      <PolicySection title="Cancellation and Refunds">
        <p>
          Cancellation and refund requests are governed by the{' '}
          <a href="/refund-policy" className="text-crimson hover:text-crimson-light underline underline-offset-2">
            Cancellation and Refund Policy
          </a>{' '}
          published on the website.
        </p>
      </PolicySection>

      <PolicySection title="Privacy">
        <p>
          Personal information is handled according to the{' '}
          <a href="/privacy-policy" className="text-crimson hover:text-crimson-light underline underline-offset-2">
            Privacy Policy
          </a>{' '}
          published on the website.
        </p>
      </PolicySection>

      <PolicySection title="Governing Law and Jurisdiction">
        <p>
          These terms are governed by the laws of India. Subject to applicable consumer protection law, disputes are
          subject to the courts of Bangalore, Karnataka, India.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          For questions about these terms, contact{' '}
          <a href="mailto:info@srplblr.com" className="text-crimson hover:text-crimson-light underline underline-offset-2">
            info@srplblr.com
          </a>
          .
        </p>
      </PolicySection>
    </PolicyPage>
  )
}
