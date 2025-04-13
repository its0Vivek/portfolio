import React from 'react'
import type { Metadata } from 'next'
import { Inter, Pacifico, Poppins } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Its0Vivek - Portfolio',
  description: 'Portfolio website showcasing my work and projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#111111] text-zinc-900 dark:text-white min-h-screen flex flex-col transition-colors duration-200`}>
        <ThemeProvider>
          <Navigation pacifico={pacifico.className} poppins={poppins.className} />
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-zinc-200 dark:border-white/10 mt-16">
            <div className="max-w-4xl mx-auto px-4 py-8">
              <div className="flex justify-between items-center">
                <p className={`${poppins.className} text-zinc-600 dark:text-white/70 hover:text-purple-500 transition-colors`}>© 2024 Its0Vivek</p>
                <div className="flex gap-6">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${poppins.className} text-zinc-600 dark:text-white/70 hover:text-purple-500 transition-colors`}>GitHub</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${poppins.className} text-zinc-600 dark:text-white/70 hover:text-purple-500 transition-colors`}>Twitter</a>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
} 