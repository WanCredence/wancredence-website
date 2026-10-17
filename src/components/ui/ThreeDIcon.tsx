import type { ReactNode } from 'react'

interface ThreeDIconProps {
  children: ReactNode
  className?: string
  rotateX?: number
  rotateY?: number
}

export function ThreeDIcon({
  children,
  className = '',
  rotateX = -12,
  rotateY = -8,
}: ThreeDIconProps) {
  return (
    <div
      className={`group/icon relative inline-block ${className}`}
      style={{
        perspective: '800px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Back extrusion layer for depth */}
      <div
        className="absolute inset-0 translate-z-[-8px] rounded-lg bg-brand-600/80 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.45)]"
        style={{ transform: `translateZ(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
      />
      {/* Front face */}
      <div
        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out group-hover/icon:rotateX(8deg) group-hover/icon:rotateY(8deg)"
        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
      >
        {children}
      </div>
    </div>
  )
}