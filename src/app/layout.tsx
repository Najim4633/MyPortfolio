// src/app/layout.tsx - SEO Optimized
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Najim Tamboli - Java Developer & Backend Engineer',
  description: 'Java Developer and Backend Engineer specializing in Spring Boot, Python, and scalable web applications. Available for opportunities in Pune, Maharashtra.',
  keywords: 'Java Developer, Backend Engineer, Spring Boot, Python, Full Stack Developer, Pune, Maharashtra, Software Engineer',
  authors: [{ name: 'Najim Tamboli' }],
  openGraph: {
    title: 'Najim Tamboli - Java Developer & Backend Engineer',
    description: 'Java Developer and Backend Engineer specializing in Spring Boot, Python, and scalable web applications.',
    url: 'https://najimtamboli.dev',
    siteName: 'Najim Tamboli Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
