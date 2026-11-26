import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/* AI search and assistant crawlers, allowed by name so it is explicit that
   the site may be read and cited by AI tools (ChatGPT, Claude, Perplexity,
   Gemini, Copilot, Apple Intelligence and others). Everything else falls
   under the "*" rule, which also allows the whole site. */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'meta-externalagent',
  'CCBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
