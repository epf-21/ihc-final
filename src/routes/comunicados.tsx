/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const news = [
  {
    title: 'Comunicado 18/2026',
    category: 'Académico',
    date: '26 mayo 2026',
  },
  {
    title: 'Convocatoria interna para Coordinador Académico',
    category: 'Convocatorias',
    date: '25 mayo 2026',
  },
  {
    title: 'Resultados de auxiliares de docencia',
    category: 'Resultados',
    date: '24 mayo 2026',
  },
]

const categories = ['Todos', 'Académico', 'Convocatorias', 'Resultados', 'Trámites']

export const Route = createFileRoute('/comunicados')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={index === 0 ? 'rounded-full bg-primary px-4 py-2 text-sm font-medium text-white' : 'rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700'}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6">
          {news.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  {item.category}
                </span>


                <span className="text-sm text-slate-500">
                  {item.date}
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h2>

              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
                Resumen breve del comunicado para mejorar la escaneabilidad y evitar que el usuario tenga que abrir un PDF si todavía no lo necesita.
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
