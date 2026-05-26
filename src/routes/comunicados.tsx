import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'

const news = [
  {
    title: 'Convocatoria auxiliares 2026',
    category: 'Convocatorias',
    date: '12 mayo 2026',
  },
  {
    title: 'Calendario académico actualizado',
    category: 'Académico',
    date: '10 mayo 2026',
  },
]

export const Route = createFileRoute('/comunicados')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-14">
        <h1 className="text-4xl font-bold mb-10">
          Comunicados
        </h1>

        <div className="space-y-6">
          {news.map((item) => (
            <article
              key={item.title}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                  {item.category}
                </span>

                <span className="text-sm text-gray-500">
                  {item.date}
                </span>
              </div>

              <h2 className="text-2xl font-semibold">
                {item.title}
              </h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
