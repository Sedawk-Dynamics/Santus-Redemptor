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

const helpTopics = [
  { label: 'Order or access', value: 'order-access' },
  { label: 'Payment', value: 'payment' },
  { label: 'Refund', value: 'refund' },
  { label: 'Subscription', value: 'subscription' },
  { label: 'Publishing', value: 'publishing' },
  { label: 'Media', value: 'media' },
  { label: 'Other', value: 'other' },
]

export function SupportForm() {
  const [submitted, setSubmitted] = useState(false)
  const [topic, setTopic] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submission — wire to a backend/email service when available.
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 700)
  }

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-surface p-10 flex flex-col items-center text-center gap-4">
        <CheckCircle2 className="w-8 h-8 text-crimson" />
        <h3 className="text-xl font-medium text-ink" style={{ fontFamily: 'var(--font-sans)' }}>
          Your request has been received
        </h3>
        <p className="text-base text-ink-muted max-w-md" style={{ fontFamily: 'var(--font-body)' }}>
          Our team will get back to you at the email address you provided. For urgent matters, call{' '}
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
            <input type="hidden" name="topic" value={topic ?? ''} required />
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
