/**
 * Website forms are delivered by Web3Forms (https://web3forms.com), which
 * emails each submission to the inbox registered against this access key.
 *
 * The access key is public by design: Web3Forms expects it in browser code,
 * and it can only send to the inbox it was created for. The free plan only
 * accepts submissions made from a browser, so this must be called from
 * client components, not from a server action or API route.
 */
const ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = '373345a0-2c2b-4b6e-b42d-cfa14f0ba8f2'

/** Every field becomes a line in the email; `subject` sets the email subject. */
export type FormFields = { subject: string } & Record<string, string | boolean>

/** Fields allowed to span several lines; everything else is single-line. */
const MULTILINE = new Set(['message'])
const MAX_LINE = 200
const MAX_MESSAGE = 5000
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Normalise what goes into the email. Line breaks are stripped from
 * single-line fields (subject, name, email, phone...) so they cannot inject
 * extra email headers, control characters are removed, and lengths are capped.
 * Web3Forms escapes HTML in its notification emails; this is defence in depth,
 * since anything in the browser can be bypassed by posting to the API directly.
 */
// Built from strings: as regex literals the bundler emits U+2028/2029 raw,
// which terminates the literal and breaks the chunk.
const CONTROL_CHARS = new RegExp('[\\u0000-\\u0008\\u000B\\u000C\\u000E-\\u001F\\u007F]', 'g')
const LINE_BREAKS = new RegExp('[\\r\\n\\u2028\\u2029]+', 'g')

function clean(key: string, value: string | boolean): string | boolean {
  if (typeof value === 'boolean') return value
  let v = value.replace(CONTROL_CHARS, '')
  if (MULTILINE.has(key)) return v.trim().slice(0, MAX_MESSAGE)
  v = v.replace(LINE_BREAKS, ' ')
  return v.trim().slice(0, MAX_LINE)
}

/**
 * Spam protection, all invisible to visitors (no captcha: its image puzzles
 * were turning real people away):
 * - Honeypot: `botcheck` is a hidden checkbox people never see; bots tick it.
 * - Time trap: no person completes the form within MIN_FILL_MS of it appearing.
 * - Web3Forms screens every submission for spam, and the free plan only
 *   accepts submissions sent from a browser.
 * A submission caught by the first two is dropped but reported as sent, so a
 * bot gets no signal to adapt to.
 * If spam gets through, the next step is an invisible check such as
 * Cloudflare Turnstile, which usually needs no puzzle at all.
 */
const MIN_FILL_MS = 3000

/** Call when the form is first shown; pass the result to submitForm. */
export const formStartedAt = () => Date.now()

export async function submitForm(fields: FormFields, startedAt: number): Promise<void> {
  if (fields.botcheck === true || Date.now() - startedAt < MIN_FILL_MS) return

  const cleaned = Object.fromEntries(
    Object.entries(fields).map(([k, v]) => [k, clean(k, v)]),
  ) as FormFields

  if (typeof cleaned.email === 'string' && !EMAIL.test(cleaned.email)) {
    throw new Error('Please enter a valid email address.')
  }

  let res: Response
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...cleaned,
        access_key: ACCESS_KEY,
        from_name: 'Sanctus Redemptor website',
      }),
    })
  } catch {
    throw new Error('Could not reach the server. Please check your connection and try again.')
  }

  const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null
  if (!res.ok || !data?.success) {
    throw new Error(data?.message || 'Your message could not be sent. Please try again.')
  }
}
