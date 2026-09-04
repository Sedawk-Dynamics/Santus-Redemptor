import type { Metadata } from 'next'
import { PolicyPage, PolicySection } from '@/components/policy-page'

export const metadata: Metadata = {
  title: 'Shipping and Delivery Policy – Sanctus Redemptor',
  description:
    'Shipping and delivery policy for digital products, online services, subscriptions, media and publishing services offered by Sanctus Redemptor Private Limited.',
}

export default function ShippingPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Shipping and Delivery Policy"
      updated="18 July 2026"
      intro="Sanctus Redemptor Private Limited provides digital products, online services, subscriptions, media services, publishing services and selected physical or print-related deliverables where specifically stated on the product page. Delivery method and expected timeline are shown on each product or service page before payment."
    >
      <PolicySection title="Digital Products and Subscriptions">
        <p>
          Access details, download links or login instructions are sent to the customer&apos;s registered email
          address within 24 hours after successful payment, unless a different timeline is stated on the
          product page.
        </p>
      </PolicySection>

      <PolicySection title="Online Sessions and Workshops">
        <p>
          Session date, time, platform and joining instructions are shown before booking. Access links are sent to
          the registered email address before the session.
        </p>
      </PolicySection>

      <PolicySection title="Publishing and Media Service Packages">
        <p>
          Work begins only after payment is successful and the customer submits the required files, content, brief
          and contact details. Delivery timelines start after all required inputs are received.
        </p>
      </PolicySection>

      <PolicySection title="Physical or Print Delivery, Where Applicable">
        <p>
          If any physical item is sold, shipping charges, courier method and estimated delivery timelines will be
          shown before payment. Unless stated otherwise, domestic delivery within India may take 5 to 10
          business days after dispatch.
        </p>
      </PolicySection>

      <PolicySection title="No Physical Shipping for Digital-Only Products">
        <p>If the product page says digital delivery or online access, no physical product will be shipped.</p>
      </PolicySection>

      <PolicySection title="Delivery Support">
        <p>
          For access, delivery or shipping help, contact{' '}
          <a href="mailto:office@srplblr.com" className="text-crimson hover:text-crimson-light underline underline-offset-2">
            office@srplblr.com
          </a>{' '}
          or{' '}
          <a href="tel:+917625088502" className="text-crimson hover:text-crimson-light underline underline-offset-2">
            +91 7625088502
          </a>{' '}
          with your order ID, payment ID and registered email address.
        </p>
      </PolicySection>
    </PolicyPage>
  )
}
