const isDev = process.env.NODE_ENV !== 'production'

/**
 * Content-Security-Policy.
 *
 * Pages are statically prerendered, so per-request nonces are not available
 * (they force dynamic rendering). Instead scripts are limited to this origin
 * plus Google Tag Manager / Analytics. 'unsafe-inline' is still required for
 * Next's inline bootstrap scripts and the Google tag snippet.
 *
 * If a new GTM tag (e.g. Meta Pixel, Hotjar) is added in Tag Manager, its
 * domains must be added here or the browser will block it.
 */
const GOOGLE = [
  'https://www.googletagmanager.com',
  'https://*.googletagmanager.com',
  'https://www.google-analytics.com',
  'https://*.google-analytics.com',
  'https://*.analytics.google.com',
  'https://*.g.doubleclick.net',
  'https://www.google.com',
]

const csp = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ''}${GOOGLE.join(' ')}`,
  `style-src 'self' 'unsafe-inline' https://www.googletagmanager.com`,
  `img-src 'self' data: blob: https:`,
  `font-src 'self' data:`,
  // Web3Forms receives the contact and support forms.
  `connect-src 'self' https://api.web3forms.com ${GOOGLE.join(' ')}`,
  `frame-src https://www.googletagmanager.com`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  `upgrade-insecure-requests`,
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  images: {
    // Optimization ON: Next resizes/reformats per device instead of shipping
    // the full-size original. Large source images stay large on disk but are
    // served as right-sized WebP/AVIF.
    qualities: [75, 90],
    remotePatterns: [
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: 'www.blendmylearning.com' },
      { protocol: 'https', hostname: 'hrf.org' },
    ],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
