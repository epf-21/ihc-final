import { createFileRoute } from '@tanstack/react-router'

import { Hero } from '../components/Hero'
import { QuickAccess } from '../components/QuickAccess'
import { Authorities } from '../components/Authorities'
import { AboutFCE } from '../components/AboutFCE'
import { HistorySection } from '../components/HistorySection'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Hero />

      <QuickAccess />

      <Authorities />

      <AboutFCE />

      <HistorySection />
    </>
  )
}
