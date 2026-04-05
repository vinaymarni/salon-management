import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'
import { Providers } from './providers'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Benvily - Premium Booking Experience',
  description: 'Discover and book appointments at luxury salons with personalized gender-filtered services',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/benvily.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/benvily.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/benvily.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/benvily.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
