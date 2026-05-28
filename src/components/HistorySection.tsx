const history = [
  {
    year: '1949',
    title: 'Creación de la FCE',
    description:
      'Se crea la Escuela Superior de Ciencias Económicas y Comerciales.',
  },
  {
    year: '1955',
    title: 'Constitución como Facultad',
    description: 'La institución adquiere oficialmente el rango de Facultad.',
  },
  {
    year: '1970',
    title: 'Creación de Auditoría',
    description:
      'Se incorpora la mención de Auditoría dentro de la formación académica.',
  },
  {
    year: '1974',
    title: 'Nuevas carreras',
    description:
      'Se reorganiza la facultad con Economía, Auditoría y Administración.',
  },
  {
    year: '2000',
    title: 'Nueva denominación',
    description:
      'La facultad adopta oficialmente el nombre de Facultad de Ciencias Económicas.',
  },
]

export function HistorySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-semibold uppercase tracking-[3px] text-primary">
            Historia
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Evolución institucional
          </h2>

          <p className="mt-4 leading-relaxed text-slate-600">
            A lo largo de los años, la Facultad de Ciencias Económicas ha
            evolucionado académicamente incorporando nuevas carreras, reformas y
            estructuras de formación profesional.
          </p>
        </div>

        <div className="space-y-6">
          {history.map((item) => (
            <article
              key={item.year}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-10">
                <div className="text-3xl font-bold text-primary">
                  {item.year}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
