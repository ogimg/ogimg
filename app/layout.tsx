import { Analytics } from '@vercel/analytics/next'
import { baseMetaData } from '@/app/metadata'
import { ThemeProvider } from '@/components/provider/theme-provider'
import { defaultFont } from '@/lib/font-config'

import './globals.css'

export const metadata = baseMetaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="w5pqIYKefSkNkCrhe5WoKX1BPM25ULWZ7l-te8OCrTo" />
      </head>
      <body
        className={`${defaultFont.className} font-sans custom_scrollbar antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
