/* eslint-disable react-refresh/only-export-components */
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useThemeStore } from '../stores/themeStore'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const RootLayout = () => {
  const dark = useThemeStore((s) => s.dark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})

