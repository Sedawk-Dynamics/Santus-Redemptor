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

export async function submitForm(fields: FormFields): Promise<void> {
  let res: Response
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        from_name: 'Sanctus Redemptor website',
        ...fields,
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
