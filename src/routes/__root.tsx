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
    <main className="min-h-screen bg-background">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})

