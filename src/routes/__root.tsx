/* eslint-disable react-refresh/only-export-components */
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useThemeStore } from '../stores/themeStore'
import { useEffect } from 'react'

const RootLayout = () => {
  const dark = useThemeStore((s) => s.dark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <>
      <Outlet />
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})

