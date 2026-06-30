import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const playfair = Playfair_Display({ variable: '--font-playfair', subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajgupta.dev'

export const metadata: Metadata = {
  title: 'Raj — Software Engineer',
  description: 'Software engineer focused on data systems and web products.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Raj — Software Engineer',
    description: 'Software engineer focused on data systems and web products.',
    type: 'website',
    url: siteUrl,
  },
  twitter: {
    card: 'summary',
    title: 'Raj — Software Engineer',
    description: 'Software engineer focused on data systems and web products.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#111113] text-white">{children}</body>
    </html>
  )
}
