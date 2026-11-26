import {
  ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LEGAL_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site'
import { jobs, CAREERS_EMAIL } from '@/app/careers/jobs'

/* /llms.txt (https://llmstxt.org): a plain-text summary of the site for AI
   assistants and AI search. Contact details and open roles come from the same
   data as the pages; the service and platform summaries mirror
   components/services.tsx and components/platforms.tsx, so update them here
   when those sections change. */

export const dynamic = 'force-static'

export function GET() {
  const u = (path: string) => `${SITE_URL}${path}`
  const addr = `${ADDRESS.streetAddress}, ${ADDRESS.addressLocality}, ${ADDRESS.addressRegion} ${ADDRESS.postalCode}, India`

  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${LEGAL_NAME} (SRPL) is headquartered in Bangalore (Bengaluru), India, and works with corporates, NGOs, educational institutions, publishers and ministries in India and internationally, including the United States. Software, media and publishing are offered under one roof, with end-to-end delivery from strategy and design through development, production and post-delivery support.

## Services

- [Software & Web Development](${u('/#services')}): custom software and systems architecture, corporate websites, e-commerce, iOS and Android apps, LMS platforms, hosting and server management, IT infrastructure and cybersecurity, API integration.
- [Media Production & Content](${u('/#services')}): concept and scripting, corporate films and documentaries, training and promotional video, photography, editing, colour grading and sound design, VFX, subtitling and voiceover, podcast and audio production, multi-platform distribution.
- [Book & Digital Publishing](${u('/#services')}): book layout and typesetting, print production, eBooks (EPUB, Kindle, PDF), audiobooks, magazine and journal design and printing, digital subscription platforms, translation coordination, distribution.
- Coming soon: Education & e-Learning, Counselling & Coaching, Consulting & Training, Gift Articles & Retail.

## Platforms built and run by SRPL

- Redacamy: digital learning and spiritual formation platform.
- Redemptio: digital content platform for Liguori Publications (eBooks, audiobooks, videos, podcasts).
- Holy Redeemer TV: international video and OTT platform for faith-based content.
- Holy Redeemer Voice: podcasts and internet radio, including Indian-language channels.
- Holy Redeemer Prayer (coming soon): prayer and faith app.
- Holy Redeemer Store (coming soon): e-commerce for religious books and devotional materials.

## Publications

- Breaking the Word: annual Redemptorist Mass companion.
- Liguorian International: global edition of the Catholic magazine Liguorian, curated for readers in India.

## Careers

${jobs.length} open ${jobs.length === 1 ? 'role' : 'roles'}. Apply by email to ${CAREERS_EMAIL}.

${jobs.map((j) => `- [${j.title}](${u(`/careers/${j.id}`)}): ${j.location}, ${j.experience}, full-time. Reports to ${j.reportsTo}.`).join('\n')}

All roles: ${u('/careers')}

## Contact

- Email: ${CONTACT_EMAIL}
- Phone: ${CONTACT_PHONE}
- Address: ${addr}
- [Contact customer support](${u('/contact-support')})

## Policies and payments

- [Pricing details](${u('/pricing')})
- [How to pay](${u('/payment')})
- [Terms and conditions](${u('/terms')})
- [Privacy policy](${u('/privacy-policy')})
- [Cancellation and refund policy](${u('/refund-policy')})
- [Shipping and delivery policy](${u('/shipping-policy')})
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
