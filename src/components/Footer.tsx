import Link from 'next/link'

const socialLinks = [
  { href: 'https://github.com', label: 'GitHub' },
  { href: 'https://itch.io', label: 'Itch.io' },
  { href: 'https://twitter.com', label: 'Twitter' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-16">
      <div className="container mx-auto px-4 max-w-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70">
            © {new Date().getFullYear()} GameDev Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 