'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >{children}</motion.div>
  )
}

const serviceOptions = [
  'Software and Web Development',
  'Media Production and Content',
  'Book and Digital Publishing',
  'Education and e-Learning',
  'Consulting and Training',
  'Other',
]

const ENQUIRY_TO = 'office@srplblr.com'

export function Contact() {
  const [selected, setSelected] = useState('')
  const [contact, setContact] = useState<'email' | 'phone'>('email')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()

    if (!selected) {
      setError('Please choose a service area of interest.')
      return
    }
    setError('')

    const body = [
      `Name: ${get('name')}`,
      `Organization: ${get('organization') || '\u2014'}`,
      `Email: ${get('email')}`,
      `Phone: ${get('phone')}`,
      `Service area: ${selected}`,
      `Preferred contact method: ${contact}`,
      '',
      'Project description:',
      get('message'),
    ].join('\n')

    window.location.href =
      `mailto:${ENQUIRY_TO}` +
      `?subject=${encodeURIComponent('Website enquiry \u2014 ' + selected)}` +
      `&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <section id="contact" className="relative py-14 md:py-20 bg-surface-2 overflow-hidden">
      {/* bg decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96"
          style={{ background: 'radial-gradient(circle at top right, rgba(167,15,16,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-[88rem] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left info */}
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="section-line" />
                <span className="text-[0.74rem] tracking-[0.28em] uppercase text-gold-dark font-bold" style={{ fontFamily: 'var(--font-body)' }}>Contact</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-ink mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
                Reach out{' '}
                <em className="text-gradient not-italic">to us.</em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-ink-muted leading-relaxed mb-12" style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem' }}>
                We are ready to assess your requirements and propose a solution. Tell us about your project and we will get back to you within one business day. Custom work proceeds against an approved quotation and invoice — see{' '}
                <a href="/payment" className="text-crimson hover:text-crimson-light underline underline-offset-2">how payment works</a>.
              </p>
            </FadeUp>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                { icon: Mail,   label: 'Email',          value: 'office@srplblr.com',                                       href: 'mailto:office@srplblr.com' },
                { icon: Phone,  label: 'Phone',          value: '+91 7625088502',                                            href: 'tel:+917625088502' },
                { icon: MapPin, label: 'Address',        value: 'No. 9/1, Clarke Road, Richards Town,\nBengaluru 560084, Karnataka, India', href: null },
                { icon: Clock,  label: 'Business Hours', value: 'Mon–Fri, 8:00 AM – 8:00 PM IST',                           href: null },
              ].map((c, i) => {
                const Icon = c.icon
                return (
                  <FadeUp key={c.label} delay={0.2 + i * 0.08}>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-gold text-burgundy ring-1 ring-gold/50 shrink-0 -rotate-6 hover:rotate-0 hover:scale-110 hover:bg-crimson hover:text-white hover:ring-crimson/40 transition-all duration-300">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[0.72rem] text-ink-muted font-bold tracking-[0.2em] uppercase mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="text-base text-ink-muted hover:text-ink transition-colors" style={{ fontFamily: 'var(--font-body)' }}>{c.value}</a>
                        ) : (
                          <p className="text-base text-ink-muted whitespace-pre-line leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{c.value}</p>
                        )}
                      </div>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <div className="border border-ink-faint/40 bg-surface-3 p-8 md:p-10">
                <h3 className="text-2xl font-semibold text-ink mb-8" style={{ fontFamily: 'var(--font-sans)' }}>Submit an Enquiry</h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your full name', required: true },
                      { label: 'Organization', name: 'organization', type: 'text', placeholder: 'Company / organization', required: false },
                    ].map((f) => (
                      <div key={f.label}>
                        <label className="block text-[0.74rem] tracking-[0.18em] uppercase text-ink-muted/75 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                          {f.label} {f.required && <span className="text-crimson">*</span>}
                        </label>
                        <input type={f.type} name={f.name} required={f.required} placeholder={f.placeholder}
                          className="w-full px-4 py-3 border border-ink-faint/40 bg-surface-2 text-base text-ink placeholder-ink-faint/60 focus:outline-none focus:border-gold/50 transition-all"
                          style={{ fontFamily: 'var(--font-body)' }} />
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
                      { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+91 9999999999', required: true },
                    ].map((f) => (
                      <div key={f.label}>
                        <label className="block text-[0.74rem] tracking-[0.18em] uppercase text-ink-muted/75 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                          {f.label} {f.required && <span className="text-crimson">*</span>}
                        </label>
                        <input type={f.type} name={f.name} required={f.required} placeholder={f.placeholder}
                          className="w-full px-4 py-3 border border-ink-faint/40 bg-surface-2 text-base text-ink placeholder-ink-faint/60 focus:outline-none focus:border-gold/50 transition-all"
                          style={{ fontFamily: 'var(--font-body)' }} />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[0.74rem] tracking-[0.18em] uppercase text-ink-muted/75 mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                      Service Area of Interest <span className="text-crimson">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((s) => (
                        <button key={s} type="button" onClick={() => setSelected(s)}
                          className={`px-4 py-1.5 text-sm border transition-all ${selected === s ? 'border-crimson bg-crimson text-void' : 'border-ink-faint/40 text-ink-muted/80 hover:border-gold/50 hover:text-ink-muted'}`}
                          style={{ fontFamily: 'var(--font-body)' }}
                        >{s}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.74rem] tracking-[0.18em] uppercase text-ink-muted/75 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                      Project Description <span className="text-crimson">*</span>
                    </label>
                    <textarea required name="message" rows={4} placeholder="Briefly describe your requirement or project."
                      className="w-full px-4 py-3 border border-ink-faint/40 bg-surface-2 text-base text-ink placeholder-ink-faint/60 focus:outline-none focus:border-gold/50 transition-all resize-none"
                      style={{ fontFamily: 'var(--font-body)' }} />
                  </div>

                  <div>
                    <label className="block text-[0.74rem] tracking-[0.18em] uppercase text-ink-muted/75 mb-3" style={{ fontFamily: 'var(--font-body)' }}>Preferred Contact Method</label>
                    <div className="flex gap-3">
                      {(['email', 'phone'] as const).map((m) => (
                        <button key={m} type="button" onClick={() => setContact(m)}
                          className={`flex items-center gap-2 px-5 py-2.5 text-base border transition-all capitalize ${contact === m ? 'border-crimson bg-crimson/10 text-crimson' : 'border-ink-faint/40 text-ink-muted/80 hover:border-gold/40'}`}
                          style={{ fontFamily: 'var(--font-body)' }}
                        >{m}</button>
                      ))}
                    </div>
                  </div>

                  {error && (
                    <p className="text-sm text-crimson" style={{ fontFamily: 'var(--font-body)' }} role="alert">
                      {error}
                    </p>
                  )}
                  {sent && (
                    <p className="text-sm text-ink-muted" style={{ fontFamily: 'var(--font-body)' }} role="status">
                      Your email application should now be open with this enquiry ready to send. If nothing
                      happened, write to{' '}
                      <a href={`mailto:${ENQUIRY_TO}`} className="text-crimson underline underline-offset-2">
                        {ENQUIRY_TO}
                      </a>
                      .
                    </p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-crimson text-void text-sm font-medium tracking-[0.14em] uppercase transition-all duration-300 hover:bg-crimson-light"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Submit Enquiry
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
