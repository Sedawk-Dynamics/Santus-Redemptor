import { Mail, Phone, Clock, MapPin } from 'lucide-react'
import { PolicyPage } from '@/components/policy-page'
import { SupportForm } from '@/components/support-form'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Contact Customer Support',
  path: '/contact-support',
  description:
    'Get help with orders, payments, access, delivery, invoices, cancellations, refunds or service questions from Sanctus Redemptor Private Limited.',
})

const details = [
  { Icon: Mail, label: 'Email', value: 'info@srplblr.com', href: 'mailto:info@srplblr.com' },
  { Icon: Phone, label: 'Phone', value: '+91 7625088502', href: 'tel:+917625088502' },
  { Icon: Clock, label: 'Business hours', value: 'Monday to Friday, 8:00 AM to 8:00 PM IST' },
  {
    Icon: MapPin,
    label: 'Registered office',
    value: 'No. 9/1, Clarke Road, Richards Town, Bengaluru 560084, Karnataka, India',
  },
]

export default function ContactSupportPage() {
  return (
    <PolicyPage
      eyebrow="Support"
      title="Contact Customer Support"
      intro="For help with orders, payments, access, delivery, invoices, cancellations, refunds or service questions, contact Sanctus Redemptor Private Limited. For faster support, include your order ID, payment ID, registered email address and phone number."
    >
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {details.map((d) => (
          <div key={d.label} className="flex gap-3">
            <d.Icon className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
            <div>
              <p
                className="text-[0.74rem] tracking-[0.18em] uppercase text-gold-dark font-bold mb-1"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {d.label}
              </p>
              {d.href ? (
                <a
                  href={d.href}
                  className="text-ink hover:text-crimson transition-colors"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem' }}
                >
                  {d.value}
                </a>
              ) : (
                <p className="text-ink-muted leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
                  {d.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <SupportForm />
    </PolicyPage>
  )
}
