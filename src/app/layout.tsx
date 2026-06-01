import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
  openGraph: {
    title: 'Abdoulaye Sène | Full Stack Developer & DevOps Engineer',
    description: 'Building scalable products from pixel to production.',
    url: 'https://abdoulaye-sene-dev-portfolio.vercel.app',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#0B0B0F] text-slate-100 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
