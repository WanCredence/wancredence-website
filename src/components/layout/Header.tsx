import { useState, useEffect } from 'react'
import { Logo } from '../ui/Logo'

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 text-brand-600 font-bold text-xl"
          aria-label="WanCredence Home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-brand-600">
            <Logo className="h-32 w-auto" />
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="mailto:wancredence@gmail.com?subject=Project inquiry"
            className="btn btn-primary"
          >
            Discuss a project
          </a>
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-neutral-200"
          aria-label="Mobile navigation"
        >
          <nav className="container flex flex-col gap-4 py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="mailto:wancredence@gmail.com?subject=Project inquiry"
              className="btn btn-primary justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Discuss a project
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
