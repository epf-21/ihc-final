import { createFileRoute } from '@tanstack/react-router'

import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { QuickAccess } from '../components/QuickAccess'
import { Authorities } from '../components/Authorities'
import { AboutFCE } from '../components/AboutFCE'
import { HistorySection } from '../components/HistorySection'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <Hero />

      <QuickAccess />

      <Authorities />

      <AboutFCE />

      <HistorySection />

      <Footer />
    </main>
  )
}
