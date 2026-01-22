import { baseMetaData } from '@/app/metadata'
import { ThemeProvider } from '@/components/provider/theme-provider'
import { defaultFont } from '@/lib/font-config'
import { Analytics } from "@vercel/analytics/next"

import './globals.css'

export const metadata = baseMetaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${defaultFont.className} font-sans antialiased`}>
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
