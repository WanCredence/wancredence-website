import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <nav className="container" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-neutral-950 font-bold text-xl" aria-label="WanCredence Home">
            <svg className="h-8 w-8 text-brand-600" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="currentColor" />
              <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>WanCredence</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${location.pathname === item.href ? 'text-brand-600' : 'text-neutral-600 hover:text-neutral-900'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900">
              Get in touch
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 shadow-sm hover:shadow-md">
              Start a project
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}