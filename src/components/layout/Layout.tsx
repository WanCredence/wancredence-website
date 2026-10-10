import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { HelmetProvider } from 'react-helmet-async'

interface LayoutProps {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <HelmetProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1 pt-16" id="main-content">
          {children || <Outlet />}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}