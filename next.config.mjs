/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
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
}

export default nextConfig
