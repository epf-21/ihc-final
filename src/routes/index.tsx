import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { QuickAccess } from '../components/QuickAccess';
import { Footer } from '../components/Footer';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuickAccess />
      <Footer />
    </main>
  );
}

