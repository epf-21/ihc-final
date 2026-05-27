/* eslint-disable react-refresh/only-export-components */
import { Outlet, createRootRoute } from '@tanstack/react-router'

const RootLayout = () => (
  <>
    <Outlet />
  </>
)

export const Route = createRootRoute({
  component: RootLayout,
})

