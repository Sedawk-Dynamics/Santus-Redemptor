'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { submitForm, formStartedAt } from '@/lib/web3forms'

const helpTopics = [
  { label: 'Order or access', value: 'order-access' },
  { label: 'Payment', value: 'payment' },
  { label: 'Refund', value: 'refund' },
  { label: 'Subscription', value: 'subscription' },
  { label: 'Publishing', value: 'publishing' },
  { label: 'Media', value: 'media' },
  { label: 'Other', value: 'other' },
]

const SUPPORT_TO = 'info@srplblr.com'

export function SupportForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [topic, setTopic] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  // When the form appeared; part of the invisible spam check in lib/web3forms.ts.
  const [startedAt] = useState(formStartedAt)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!topic) {
      setError('Please choose what you need help with.')
      return
    }
    setError('')
    setSubmitting(true)

    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    const label = helpTopics.find((t) => t.value === topic)?.label ?? topic

    try {
      await submitForm({
        subject: `Support request \u2014 ${label}`,
        name: get('full-name'),
        email: get('email'),
        phone: get('phone'),
        order_or_payment_id: get('order-id') || '\u2014',
        organisation: get('organisation') || '\u2014',
        topic: label,
        message: get('message'),
        botcheck: data.get('botcheck') === 'on',
      }, startedAt)
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Your request could not be sent.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-surface p-10 flex flex-col items-center text-center gap-4" role="status">
        <CheckCircle2 className="w-8 h-8 text-crimson" />
        <h3 className="text-xl font-medium text-ink" style={{ fontFamily: 'var(--font-sans)' }}>
          Your request has been sent
        </h3>
        <p className="text-base text-ink-muted max-w-md" style={{ fontFamily: 'var(--font-body)' }}>
          Thank you. Our team will reply to the email address you provided. For urgent matters, call{' '}
          <a href="tel:+917625088502" className="text-crimson hover:text-crimson-light underline underline-offset-2">
            +91 7625088502
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border border-ink-faint/35 bg-surface p-6 sm:p-10">
      {/* Honeypot: hidden from people, ticked by spam bots; Web3Forms drops those. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <FieldGroup>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="full-name">Full name *</FieldLabel>
            <Input id="full-name" name="full-name" required autoComplete="name" />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email address *</FieldLabel>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="phone">Phone number *</FieldLabel>
            <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
          </Field>
          <Field>
            <FieldLabel htmlFor="order-id">Order ID / Payment ID</FieldLabel>
            <Input id="order-id" name="order-id" placeholder="If applicable" />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="topic">What do you need help with? *</FieldLabel>
            <Select value={topic} onValueChange={setTopic}>
              <SelectTrigger id="topic" className="w-full">
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {helpTopics.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <input type="hidden" name="topic" value={topic ?? ''} />
          </Field>
          <Field>
            <FieldLabel htmlFor="organisation">Organisation name</FieldLabel>
            <Input id="organisation" name="organisation" placeholder="If this is an institutional enquiry" />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="message">Message *</FieldLabel>
          <Textarea id="message" name="message" required rows={5} placeholder="Tell us how we can help" />
        </Field>

        {error && (
          <p className="text-sm text-crimson" role="alert" style={{ fontFamily: 'var(--font-body)' }}>
            {error} You can also write to{' '}
            <a href={`mailto:${SUPPORT_TO}`} className="underline underline-offset-2">
              {SUPPORT_TO}
            </a>
            .
          </p>
        )}

        <Button
          type="submit"
          disabled={submitting}
          className="bg-crimson text-void hover:bg-crimson-light rounded-none tracking-[0.1em] uppercase text-sm h-11 mt-2 w-full sm:w-auto sm:px-8"
        >
          {submitting ? 'Sending…' : 'Send Message'}
          <Send data-icon="inline-end" />
        </Button>
      </FieldGroup>
    </form>
  )
}
