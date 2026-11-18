import { PolicyPage, PolicySection } from '@/components/policy-page'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  path: '/privacy-policy',
  description:
    'Privacy Policy explaining what personal data Sanctus Redemptor Private Limited collects, why it is collected, how it is used, and how to contact us regarding your data.',
})

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Privacy Policy"
      updated="18 July 2026"
      intro="Sanctus Redemptor Private Limited respects the privacy of customers, users and visitors of www.srplblr.com. This Privacy Policy explains what personal data we collect, why we collect it, how we use it, and how you can contact us regarding your data."
    >
      <PolicySection title="Information We Collect">
        <p>
          We may collect name, email address, phone number, billing details, order details, product/service
          interest, messages submitted through forms, files submitted for publishing or media services,
          device/browser information, IP address, cookies and payment transaction references.
        </p>
      </PolicySection>

      <PolicySection title="Payment Information">
        <p>
          Payments on this website are collected by a third-party payment service provider authorised to operate
          in India. Card, UPI and net banking credentials are entered on the provider&apos;s systems and are never
          collected or stored by us. We make no claim to hold any payment security certification ourselves; the
          relevant certifications are held by the payment service provider.
        </p>
        <p>
          Payments are processed through approved payment gateway providers. We may receive payment status, order
          ID, payment ID, refund ID and related transaction references. We do not store card numbers, UPI PINs, CVV
          or net-banking passwords on our website.
        </p>
      </PolicySection>

      <PolicySection title="Purpose of Use">
        <p>
          We use personal data to process orders, provide access or delivery, send receipts and service updates,
          respond to support requests, manage refunds/cancellations, improve website performance, comply with law,
          maintain records and protect against fraud or misuse.
        </p>
      </PolicySection>

      <PolicySection title="Consent and Communication">
        <p>
          By submitting information or placing an order, you agree to the use of your information for the stated
          purpose. Marketing communication, where used, should include an opt-out method.
        </p>
      </PolicySection>

      <PolicySection title="Sharing of Information">
        <p>
          We may share information with payment gateway providers, hosting providers, email/SMS/WhatsApp service
          providers, logistics providers where physical delivery applies, professional advisers, legal authorities
          where required and service partners needed to fulfil your order.
        </p>
      </PolicySection>

      <PolicySection title="Retention">
        <p>
          We retain order, payment, tax and support records for as long as required for business, legal, tax,
          accounting and dispute-resolution purposes.
        </p>
      </PolicySection>

      <PolicySection title="Data Rights and Requests">
        <p>
          You may contact us to request access, correction, updating, withdrawal of consent, or grievance redressal
          related to your personal data, subject to applicable law and legitimate retention requirements.
        </p>
      </PolicySection>

      <PolicySection title="Security">
        <p>
          We use reasonable technical and organisational measures to protect personal data. No internet transmission
          is fully risk-free, and customers should use secure devices and avoid sharing passwords or OTPs.
        </p>
      </PolicySection>

      <PolicySection title="Children">
        <p>If a service is used by a minor, it should be purchased or supervised by a parent or legal guardian.</p>
      </PolicySection>

      <PolicySection title="Contact for Privacy Requests">
        <p>
          Email{' '}
          <a href="mailto:office@srplblr.com" className="text-crimson hover:text-crimson-light underline underline-offset-2">
            office@srplblr.com
          </a>{' '}
          with the subject line &apos;Privacy Request&apos;. Include your registered email address and order ID, if
          applicable.
        </p>
      </PolicySection>

      <PolicySection title="Company Details">
        <p>
          Sanctus Redemptor Private Limited, No. 9/1, Clarke Road, Richards Town, Bengaluru 560084, Karnataka, India.
        </p>
      </PolicySection>
    </PolicyPage>
  )
}
