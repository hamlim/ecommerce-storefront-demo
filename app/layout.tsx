import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@lib/utils'

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" })

export const metadata: Metadata = {
  title: 'E-Commerce Storefront Demo',
  description: 'A demo e-commerce storefront application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}>{children}</body>
    </html>
  )
}
