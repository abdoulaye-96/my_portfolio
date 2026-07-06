import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MotionProvider from '@/components/providers/MotionProvider'
import { SITE_URL } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Abdoulaye Sène | Full Stack Developer & DevOps Engineer',
  description:
    'Full Stack Developer, DevOps Engineer, and AI Engineering Enthusiast based in Senegal. I build scalable applications from React frontends to Django/Node backends, containerized with Docker and deployed via CI/CD pipelines.',
  keywords: [
    'Full Stack Developer',
    'DevOps Engineer',
    'AI Engineering',
    'React',
    'Next.js',
    'Django',
    'Node.js',
    'Docker',
    'Kubernetes',
    'Senegal',
    'Remote Developer',
    'Abdoulaye Sène',
  ],
  authors: [{ name: 'Abdoulaye Sène' }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Abdoulaye Sène | Full Stack Developer & DevOps Engineer',
    description: 'Building scalable products from pixel to production.',
    url: SITE_URL,
    siteName: 'Abdoulaye Sène',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdoulaye Sène | Full Stack Developer & DevOps Engineer',
    description: 'Building scalable products from pixel to production.',
  },
  robots: { index: true, follow: true },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdoulaye Sène',
  url: SITE_URL,
  jobTitle: 'Full Stack Developer & DevOps Engineer',
  address: { '@type': 'PostalAddress', addressLocality: 'Dakar', addressCountry: 'SN' },
  sameAs: [
    'https://github.com/abdoulaye-96',
    'https://www.linkedin.com/in/abdoulaye-sene-707801203/',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#0B0B0F] text-slate-100 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
