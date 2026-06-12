import { createFileRoute } from '@tanstack/react-router'

import { Hero } from '../components/Hero'
import { QuickAccess } from '../components/QuickAccess'
import { Authorities } from '../components/Authorities'
import { AboutFCE } from '../components/AboutFCE'
import { HistorySection } from '../components/HistorySection'
import { AcademicCard } from '../components/AcademicCard'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Hero />

      <AcademicCard />
      <QuickAccess />

      <Authorities />

      <AboutFCE />

      <HistorySection />
    </>
  )
}
