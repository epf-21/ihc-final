/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'

const platforms = [
  {
    title: 'Moodle',
    description:
      'Entorno virtual para materias, recursos y actividades académicas.',
    url: 'https://moodle.fce.umss.edu.bo/login/index.php',
    note: 'Recomendado para clases, material y tareas.',
  },
  {
    title: 'SACAD',
    description: 'Sistema académico para consulta y gestión estudiantil.',
    url: 'https://sacad.fce.umss.edu.bo/admision/noticias.php',
    note: 'Canal principal para noticias y gestión académica.',
  },
  {
    title: 'WebSISS',
    description: 'Servicios de información y consulta para estudiantes.',
    url: 'https://websis.umss.edu.bo/serv_estudiantes.asp',
    note: 'Ideal para consultas y servicios estudiantiles.',
  },
  {
    title: 'IESE',
    description:
      'Información institucional vinculada al instituto y publicaciones.',
    url: 'https://iese.umss.edu.bo/',
    note: 'Publicaciones e información del instituto.',
  },
  {
    title: 'Ceplag',
    description: 'Plataforma de gestión de proyectos y laboratorios.',
    url: 'https://ceplag.umss.edu.bo/',
    note: 'Centro de Planificación y Gestión.',
  },
]

export const Route = createFileRoute('/plataformas')({
  component: RouteComponent,
  loader: () => ({ crumb: 'Plataformas' })
})

function RouteComponent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {platforms.map((platform) => (
            <article
              key={platform.title}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {platform.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {platform.description}
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-slate-700">
                  Acceso
                </span>
              </div>

              <p className="mt-4 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-relaxed text-slate-600">
                {platform.note}
              </p>

              <a
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:bg-slate-800"
              >
                Abrir plataforma
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
