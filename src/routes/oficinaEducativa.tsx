import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/oficinaEducativa')({
  component: RouteComponent,

  loader: () => ({
    crumb: 'Oficina Educativa',
  }),
})

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  )
}
