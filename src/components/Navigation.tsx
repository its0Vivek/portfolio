'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'

const links = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Posts' },
  { href: '/contact', label: 'Contact' },
]

interface NavigationProps {
  pacifico: string;
  poppins: string;
}

export function Navigation({ pacifico, poppins }: NavigationProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  return (
    <nav className="py-4 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo/Name */}
          <Link href="/" className={`${pacifico} text-xl tracking-wide dark:text-white text-zinc-900 hover:text-purple-500 transition-colors`}>
            Its0Vivek
          </Link>

          {/* Middle - Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${poppins} relative py-1 text-sm dark:text-white/80 text-zinc-900/80 hover:text-purple-500 transition-colors ${
                  pathname === href ? 'font-medium' : 'font-light'
                }`}
              >
                {label}
                {pathname === href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Right side - Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="dark:text-white/80 text-zinc-900/80 hover:text-purple-500 transition-colors p-2 rounded-lg"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden dark:text-white/80 text-zinc-900/80 hover:text-purple-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 mt-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`${poppins} block px-3 py-2 rounded-md text-base ${
                  pathname === href
                    ? 'text-purple-500 dark:bg-zinc-800/50 bg-zinc-100/50'
                    : 'text-zinc-900/80 dark:text-white/80 hover:text-purple-500 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50'
                } transition-colors`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 