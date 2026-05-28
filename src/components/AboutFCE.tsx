export function AboutFCE() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 font-semibold uppercase tracking-[3px] text-primary">
            Generalidades
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Facultad de Ciencias Económicas
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600">
            La Facultad de Ciencias Económicas fue creada mediante Resolución
            del Consejo Universitario el 14 de febrero de 1949 bajo el nombre de
            “Escuela Superior de Ciencias Económicas y Comerciales”.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600">
            Desde entonces, la facultad ha consolidado su estructura académica y
            administrativa como una de las principales unidades facultativas de
            la Universidad Mayor de San Simón.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600">
            Actualmente, su estructura está conformada por el Honorable Consejo
            Facultativo, el Decanato y distintas direcciones académicas y de
            investigación.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="/fce.png"
            alt="FCE UMSS"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
