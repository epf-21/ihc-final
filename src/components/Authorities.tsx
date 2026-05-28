const authorities = [
  {
    name: 'Mgr. Sonia Giovana Leyton',
    role: 'Decana',
  },
  {
    name: 'Mgr. Jaime Antonio Aramayo Antezana',
    role: 'Director Académico',
  },
]

export function Authorities() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-semibold uppercase tracking-[3px] text-primary">
            Autoridades
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Dirección Facultativa
          </h2>

          <p className="mt-4 leading-relaxed text-slate-600">
            Autoridades académicas responsables de la gestión y administración
            institucional de la Facultad de Ciencias Económicas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {authorities.map((authority) => (
            <article
              key={authority.name}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-8 transition hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[3px] text-primary">
                {authority.role}
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-snug text-slate-900">
                {authority.name}
              </h3>

              <div className="mt-6 h-px w-full bg-slate-200" />

              <p className="mt-6 text-slate-600">
                Autoridad académica de la Facultad de Ciencias Económicas.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
