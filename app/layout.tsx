import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { contact } from '@/data/content'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const playfair = Playfair_Display({ variable: '--font-playfair', subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajg.dev'
const description = 'Full-stack and AI software engineer building backend systems, web products, and LLM-powered tooling.'

export const metadata: Metadata = {
  title: {
    default: 'Raj Gupta - Full-Stack Software Engineer',
    template: '%s | Raj Gupta',
  },
  description,
  keywords: [
    'Raj Gupta',
    'Full-stack engineer',
    'AI engineer',
    'software engineer',
    'web developer',
    'portfolio',
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  authors: [{ name: 'Raj Gupta', url: siteUrl }],
  creator: 'Raj Gupta',
  publisher: 'Raj Gupta',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  openGraph: {
    title: 'Raj Gupta — Full-Stack Software Engineer',
    description,
    type: 'website',
    url: siteUrl,
    siteName: 'Raj Gupta',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raj Gupta - Full-Stack Software Engineer',
    description,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111113',
  colorScheme: 'dark',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Raj Gupta',
      url: siteUrl,
      jobTitle:'Full-Stack Software Engineer',
      email: `mailto:${contact.email}`,
      sameAs: [contact.github, contact.linkedin],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Raj Gupta',
      description,
      publisher: { '@id': `${siteUrl}/#person` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-[#111113] text-white"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  )
}
