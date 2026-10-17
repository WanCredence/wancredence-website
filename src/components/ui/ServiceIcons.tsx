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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M5 7h.01" />
      <path d="M8 7h.01" />
      <path d="M11 7h.01" />
      <path d="M9 13h6" />
      <path d="M9 16h4" />
    </svg>
  )
}

export function AIIcon({ className = 'h-7 w-7', ...props }: ServiceIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 2l2.5 6.5L21 10l-6.5 1.5L12 18l-2.5-6.5L3 10l6.5-1.5Z" />
      <path d="M17 15l1 2.5L21 18l-3 1L17 22l-1-3-3-1 3-1Z" opacity="0.6" />
      <path d="M7 13l1 2L11 16l-3 1-1 3-1-3-3-1 3-1Z" opacity="0.6" />
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