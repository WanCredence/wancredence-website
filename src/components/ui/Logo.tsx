export function Logo({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="WanCredence"
      className={className}
      aria-hidden="true"
      role="img"
    />
  )
}
