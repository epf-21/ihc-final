/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const resources = [
  {
    title: 'Reglamentos',
    description: 'Normativa académica y administrativa para consulta rápida.',
  },
  {
    title: 'Libros y revistas',
    description: 'Material de referencia organizado por áreas de estudio.',
  },
  {
    title: 'Programas analíticos',
    description: 'Documentos por asignatura para revisar contenidos y unidades.',
  },
  {
    title: 'Material de apoyo',
    description: 'Guías, instructivos y recursos útiles para aprendizaje autónomo.',
  },
]

const explorationSteps = [
  'Ubica primero la categoría que resuelve tu necesidad',
  'Lee el resumen antes de abrir un documento',
  'Usa el material como soporte, no como lista interminable',
]

export const Route = createFileRoute('/biblioteca')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="grid gap-6 lg:grid-cols-4">
          {resources.map((resource) => (
            <article key={resource.title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-secondary">Biblioteca</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">{resource.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{resource.description}</p>
              <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-600">
                Acceso a contenido académico organizado para facilitar exploración y descarga.
              </div>
            </article>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  )
}
