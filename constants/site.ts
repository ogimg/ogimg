/**
 * Site Configuration
 * Central configuration for site metadata, URLs, and external integrations
 */

export const SITE_URL = 'https://ogimg.art' as const

export const SITE_INFO = {
  title: 'ogimg – Open Graph Image Generator',
  description:
    'Create stunning Open Graph images for your website. Free, open-source, and built with Next.js.',
  url: SITE_URL,
  siteName: 'ogimg',
  openGraphImage: `${SITE_URL}/og-image.png`,
  twitterImage: `${SITE_URL}/og-image.png`,
  favicon: '/favicon.png',
  logo: '/logo.svg',
} as const

export const SOCIAL_LINKS = {
  github: 'https://github.com/ogimg/ogimg',
  twitter: 'https://twitter.com/meghtrix',
  author: {
    name: 'Megh Bari',
    url: 'https://github.com/megh-bari',
    twitter: '@meghtrix',
  },
} as const

export const EXTERNAL_TOOLS = [
  {
    name: 'Next.js',
    description: 'React framework with App Router for modern web apps',
    url: 'https://nextjs.org',
    icon: 'NextIcon' as const,
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development',
    url: 'https://tailwindcss.com',
    icon: 'TailwindIcon' as const,
  },
  {
    name: 'Vercel',
    description: 'Platform for frontend deployment and hosting',
    url: 'https://vercel.com',
    icon: 'VercelIcon' as const,
  },
] as const

export const FEATURES = [
  'Real-time preview',
  'Multiple templates',
  'Custom fonts & colors',
  'Export as PNG',
  'Responsive design',
  'Dark mode support',
] as const
