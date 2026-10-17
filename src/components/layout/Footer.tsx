import { Logo } from '../ui/Logo'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-neutral-200" role="contentinfo">
      <div className="container flex flex-col items-center gap-4 py-8 text-sm text-neutral-600">
        <div className="flex items-center gap-2 text-neutral-950 font-bold">
          <span className="text-brand-600">
            <Logo className="h-20 w-auto" />
          </span>
        </div>
        <a
          href="mailto:wancredence@gmail.com"
          className="text-brand-500 hover:text-brand-600 transition-colors"
          aria-label="Email wancredence at gmail dot com"
        >
          wancredence@gmail.com
        </a>
        <p className="text-neutral-500">© {CURRENT_YEAR} WanCredence. All rights reserved.</p>
      </div>
    </footer>
  )
}
