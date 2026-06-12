/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink, Globe, Search } from 'lucide-react'

const externalLibraries = [
  {
    title: 'Biblioteca Digital OEI',
    description:
      'Recursos educativos de la Organización de Estados Iberoamericanos.',
    link: 'https://www.oei.es/historico/bibliotecadigital.php',
  },
  {
    title: 'Biblioteca Virtual Cervantes',
    description: 'Colección digital de literatura, historia y humanidades.',
    link: 'http://www.cervantesvirtual.com/',
  },
  {
    title: 'Biblioteca CLACSO',
    description: 'Biblioteca virtual latinoamericana en ciencias sociales.',
    link: 'http://biblioteca.clacso.edu.ar/',
  },
  {
    title: 'Educaweb',
    description: 'Portal educativo con información académica y orientación.',
    link: 'https://www.educaweb.com/',
  },
  {
    title: 'Bibliografía y Materiales Didácticos',
    description:
      'Recursos y bibliografía complementaria para diferentes áreas.',
    link: 'https://previa.uclm.es/profesorado/ricardo/Bibliografia.htm',
  },
]

export const Route = createFileRoute('/biblioteca')({
  component: RouteComponent,
  loader: () => ({ crumb: 'Biblioteca y Recursos Académicos' })
})

function RouteComponent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-14">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Biblioteca y Recursos Académicos
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Accede a bibliotecas digitales, programas analíticos, material de
            apoyo y recursos académicos nacionales e internacionales para apoyar
            tu formación universitaria.
          </p>
        </div>

        {/* Buscador principal */}
        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-300">
                Buscador principal
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Biblioteca Central FCE
              </h2>

              <p className="mt-3 leading-relaxed text-slate-300">
                Consulta documentos académicos, libros y recursos digitales de
                la Facultad de Ciencias Económicas mediante el buscador oficial.
              </p>
            </div>

            <a
              href="http://167.157.23.130/site/php/index.php"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:scale-[1.02]"
            >
              <Search size={18} />
              Abrir buscador
            </a>
          </div>
        </div>

        {/* Bibliotecas internacionales */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <Globe className="text-blue-700" size={26} />

            <h2 className="text-2xl font-bold text-slate-900">
              Bibliotecas y buscadores internacionales
            </h2>
          </div>

          <div className="grid gap-5">
            {externalLibraries.map((library) => (
              <a
                key={library.title}
                href={library.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {library.title}
                    </h3>

                    <p className="mt-2 leading-relaxed text-slate-600">
                      {library.description}
                    </p>
                  </div>

                  <ExternalLink
                    className="text-slate-400 transition group-hover:text-blue-700"
                    size={20}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
