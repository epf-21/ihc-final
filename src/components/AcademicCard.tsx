const highlights = [
  {
    title: 'Calendario Académico',
    period: 'I / 2026',
    image: '/calendario.png',
    route: '#',
  },
  {
    title: 'Oferta Académica',
    period: 'I / 2026',
    image: '/oferta.png',
    route: '#',
  },
  {
    title: 'Exámen de Ingreso',
    period: 'II / 2026',
    image: '/examen.png',
    route: '#',
  },
]

export function AcademicCard() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <a
              key={item.title}
              href={item.route}
              className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-primary px-5 py-4 text-center">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-white/80">
                  {item.period}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section >
  )
}
