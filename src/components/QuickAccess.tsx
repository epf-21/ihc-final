const items = [
  {
    title: 'Moodle',
    description: 'Acceso a plataforma virtual',
    route: 'https://moodle.fce.umss.edu.bo/login/index.php',
    color: 'bg-blue-100',
    icon: '📚',
  },
  {
    title: 'SACAD',
    description: 'Sistema académico',
    route: 'https://sacad.fce.umss.edu.bo/admision/noticias.php',
    color: 'bg-emerald-100',
    icon: '📝',
  },
  {
    title: 'WebSISS',
    description: 'Información universitaria',
    route: 'https://websis.umss.edu.bo/serv_estudiantes.asp',
    color: 'bg-orange-100',
    icon: '🎓',
  },
  {
    title: 'IESE',
    description: 'Página del IESE',
    route: 'https://iese.umss.edu.bo/',
    color: 'bg-purple-100',
    icon: '🏛️',
  },
]

export function QuickAccess() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-primary font-semibold mb-3 uppercase tracking-[3px]">
            Plataformas institucionales
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Accesos rápidos
          </h2>

          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Accede rápidamente a las principales plataformas académicas y administrativas
            utilizadas por estudiantes de la Facultad de Ciencias Económicas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((item) => (
            <a
              key={item.title}
              href={item.route}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                bg-white
                rounded-3xl
                p-7
                border
                border-gray-100
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                block
              "
            >

              <div
                className={`
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-6
                  ${item.color}
                `}
              >
                {item.icon}
              </div>

              <div className="space-y-3">

                <div className="flex items-center justify-between">

                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-gray-900
                      group-hover:text-primary
                      transition-colors
                    "
                  >
                    {item.title}
                  </h3>

                  <span
                    className="
                      text-gray-400
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    →
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed">
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
