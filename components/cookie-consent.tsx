'use client'

import { useEffect, useState } from 'react'

/**
 * Cookie consent for the Google tag (GTM-KB48QM5X).
 *
 * The inline script in app/layout.tsx sets Google Consent Mode to "denied"
 * before Tag Manager loads, so Google Analytics sets no cookies until the
 * visitor accepts here. The choice is kept in localStorage and re-applied by
 * that same script on every page load.
 */
export const CONSENT_KEY = 'srpl-cookie-consent'

type Choice = 'granted' | 'denied'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function readChoice(): Choice | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

export function CookieConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!readChoice()) setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener('srpl:cookie-settings', reopen)
    return () => window.removeEventListener('srpl:cookie-settings', reopen)
  }, [])

  function save(choice: Choice) {
    try {
      window.localStorage.setItem(CONSENT_KEY, choice)
    } catch {
      /* storage blocked: choice applies to this page view only */
    }
    window.gtag?.('consent', 'update', {
      analytics_storage: choice,
      ad_storage: choice,
      ad_user_data: choice,
      ad_personalization: choice,
    })
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-2xl border border-ink-faint/35 bg-surface p-5 shadow-2xl sm:p-6"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <p className="text-ink text-[0.97rem] leading-relaxed">
        We use cookies from Google Analytics to understand how this website is used. They are only set if you
        accept. See our{' '}
        <a href="/privacy-policy" className="text-crimson underline underline-offset-2 hover:text-crimson-light">
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => save('granted')}
          className="bg-crimson px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-crimson-light"
        >
          Accept analytics
        </button>
        <button
          type="button"
          onClick={() => save('denied')}
          className="border border-ink-faint/50 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:border-ink"
        >
          Reject
        </button>
      </div>
    </div>
  )
}

/** Small link that reopens the banner, for the footer. */
export function CookieSettingsLink({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('srpl:cookie-settings'))}
      className={className}
      style={style}
    >
      Cookie Settings
    </button>
  )
}
