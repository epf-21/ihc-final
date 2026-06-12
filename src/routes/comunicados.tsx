/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

const news = [
  {
    title: 'Comunicado 18/2026',
    category: 'Académico',
    date: '26 mayo 2026',
    description:
      'Informe de trabajo de la comisión correspondiente a la convocatoria interna para Coordinador Académico de la carrera de Ingeniería Financiera.',
  },
  {
    title:
      'Postulantes aprobados – Segunda convocatoria auxiliares de docencia',
    category: 'Resultados',
    date: '24 mayo 2026',
    description:
      'Publicación oficial de los postulantes aprobados en la segunda convocatoria de auxiliares de docencia gestión 2026.',
  },
  {
    title: 'Informe de resultados – Auxiliatura 2da convocatoria 2026',
    category: 'Resultados',
    date: '23 mayo 2026',
    description:
      'Resultados finales del proceso de evaluación y selección para auxiliares de docencia de la gestión 2026.',
  },
  {
    title: 'Temas sorteados para prueba de conocimientos',
    category: 'Convocatorias',
    date: '21 mayo 2026',
    description:
      'Publicación de los temas sorteados para las pruebas de conocimiento programadas para el jueves 14 y 21 de mayo.',
  },
  {
    title: 'Programas analíticos disponibles para descarga',
    category: 'Académico',
    date: '20 mayo 2026',
    description:
      'Disponibles los programas analíticos de materias de Economía, Estadística, Auditoría, Contabilidad y Administración.',
  },
]

const categories = [
  'Todos',
  'Académico',
  'Convocatorias',
  'Resultados',
  'Trámites',
]

export const Route = createFileRoute('/comunicados')({
  component: RouteComponent,
  loader: () => ({ crumb: 'Comunicados Oficiales' })
})

function RouteComponent() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [search, setSearch] = useState('')

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Todos' || item.category === selectedCategory

      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, search])

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-14">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Comunicados Oficiales
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-600">
            Consulta convocatorias, resultados, avisos académicos y comunicados
            institucionales publicados por la facultad.
          </p>
        </div>

        {/* Buscador */}
        <div className="relative mb-8">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Buscar comunicados..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-slate-700 shadow-sm outline-none transition focus:border-primary"
          />
        </div>

        {/* Categorías */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => {
            const active = selectedCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={
                  active
                    ? 'rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm'
                    : 'rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100'
                }
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Comunicados */}
        <div className="grid gap-6">
          {filteredNews.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {item.category}
                </span>

                <span className="text-sm text-slate-500">{item.date}</span>
              </div>

              <h2 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h2>

              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
                {item.description}
              </p>

              <button className="mt-6 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
                Ver comunicado
              </button>
            </article>
          ))}
        </div>

        {/* Estado vacío */}
        {filteredNews.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <p className="text-lg font-medium text-slate-700">
              No se encontraron comunicados
            </p>

            <p className="mt-2 text-slate-500">
              Intenta con otro término de búsqueda o categoría.
            </p>
          </div>
        )}
      </section>
    </>
  )
}
