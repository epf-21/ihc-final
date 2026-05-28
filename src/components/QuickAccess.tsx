const items = [
  {
    title: 'Moodle',
    description: 'Acceso a plataforma virtual',
    route: 'https://moodle.fce.umss.edu.bo/login/index.php',
    image: '/moodlee.png',
  },
  {
    title: 'SACAD',
    description: 'Sistema académico',
    route: 'https://sacad.fce.umss.edu.bo/admision/noticias.php',
    image: '/sacad.png',
  },
  {
    title: 'WebSISS',
    description: 'Información universitaria',
    route: 'https://websis.umss.edu.bo/serv_estudiantes.asp',
    image: '/websis.png',
  },
  {
    title: 'IESE',
    description: 'Página del IESE',
    route: 'https://iese.umss.edu.bo/',
    image: '/iese.png',
  },
  {
    title: 'Ceplag',
    description: 'Centro de Planificación y Gestión',
    route: 'https://ceplag.umss.edu.bo/',
    image: '/ceplag.png',
  },
]

export function QuickAccess() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-3 font-semibold uppercase tracking-[3px] text-primary">
            Plataformas institucionales
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.route}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-sm"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-50 p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                </div>

                <p className="leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
