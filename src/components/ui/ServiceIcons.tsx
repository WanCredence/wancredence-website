import type { ServiceIconProps } from '../../data/types'

export function WebsiteIcon({ className = 'h-7 w-7', ...props }: ServiceIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
      <path d="M15 21V9" />
    </svg>
  )
}

export function ApplicationIcon({ className = 'h-7 w-7', ...props }: ServiceIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
      <path d="M8 10h8" />
      <path d="M8 14h8" />
    </svg>
  )
}

export function AIIcon({ className = 'h-7 w-7', ...props }: ServiceIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
      <path d="M12 6v4" />
      <path d="M12 14h.01" />
      <path d="M8 14h8" />
    </svg>
  )
}

export function MobileIcon({ className = 'h-7 w-7', ...props }: ServiceIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
      <path d="M8 10h8" />
      <path d="M8 14h8" />
    </svg>
  )
}