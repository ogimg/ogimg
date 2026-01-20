import type { Metadata } from 'next'
import { SITE_INFO, SITE_URL, SOCIAL_LINKS } from '@/constants/site'

export const baseMetaData: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_INFO.title,
  description: SITE_INFO.description,

  keywords: [
    // Primary keywords (high intent)
    'open graph image generator',
    'og image generator',
    'og image maker',
    'social media preview image generator',
    'open source og image generator',

    // Platform keywords
    'nextjs og image generator',
    'react og image generator',
    'vercel og image generator',

    // Use-case keywords
    'generate og images for blog posts',
    'twitter card image generator',
    'linkedin preview image generator',
    'github social preview image',

    // Brand keywords
    'ogimg',
    'ogimg art',
  ].join(', '),

  authors: [{ name: SOCIAL_LINKS.author.name, url: SOCIAL_LINKS.author.url }],
  creator: SOCIAL_LINKS.author.name,
  publisher: SITE_INFO.siteName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: SITE_INFO.favicon,
    apple: SITE_INFO.favicon,
    shortcut: SITE_INFO.favicon,
  },

  manifest: '/site.webmanifest',

  openGraph: {
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    url: SITE_URL,
    siteName: SITE_INFO.siteName,
    type: 'website',
    images: [
      {
        url: SITE_INFO.openGraphImage,
        width: 1200,
        height: 630,
        alt: `${SITE_INFO.siteName} – Open Graph Image Generator`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    images: [SITE_INFO.twitterImage],
    creator: SOCIAL_LINKS.author.twitter,
    site: SOCIAL_LINKS.author.twitter,
  },

  alternates: {
    canonical: SITE_URL,
  },

  classification: 'Web Development, SEO Tools, Open Graph Images',
  category: [
    'Web Development Tools',
    'SEO Tools',
    'Open Graph Images',
    'Social Preview Images',
    'Next.js Tools',
    'Developer Tools',
    'Open Source',
  ].join(', '),

  applicationName: SITE_INFO.siteName,

  other: {
    'application-name': SITE_INFO.siteName,
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': SITE_INFO.siteName,
    'theme-color': '#000000',

    // Optional discovery / sharing hints
    'og:locale': 'en_US',
    'revisit-after': '7 days',
    distribution: 'global',
    rating: 'general',
    copyright: `© 2026 ${SOCIAL_LINKS.author.name}.`,
  },
}
