import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kian Rabiei - Full Stack Developer',
  description: 'Portfolio of Kian Rabiei - Node.js, React, React Native, Arduino, FiveM, Assetto Corsa, BeamNG Developer',
  generator: 'v0.app',
  metadataBase: new URL('https://kianrabiei.ir'),
  openGraph: {
    title: 'Kian Rabiei - Full Stack Developer',
    description: 'Portfolio of Kian Rabiei - Node.js, React, React Native, Arduino, FiveM, Assetto Corsa, BeamNG Developer',
    url: 'https://kianrabiei.ir',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-[#000000] text-[#ffffff]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
