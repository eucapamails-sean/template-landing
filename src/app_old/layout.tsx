import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orlando Handyman Services | ABOS',
  description: 'Professional Handyman Services in Orlando, FL - Plumbing, Electrical, Painting, Carpentry & More. Licensed & Insured. Free Estimates.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}