import { createFileRoute } from '@tanstack/react-router'
import {
  CalendarDays,
  Download,
  ExternalLink,
  FileText,
  Microscope,
} from 'lucide-react'

const conferences = [
  {
    title: 'IV Jornada de Difusión Científica',
    date: '31 de octubre',
    description:
      'Investigaciones relacionadas con políticas económicas frente al COVID-19 y cambios en la producción y distribución de bienes y servicios esenciales.',
  },
  {
    title: 'III Jornada de Difusión Científica',
    date: '29 de septiembre',
    description:
      'Presentaciones sobre impacto económico y ambiental en Cochabamba y banca digital durante la pandemia.',
  },
  {
    title: 'II Jornada de Difusión Científica',
    date: '25 de agosto',
    description:
      'Investigaciones sobre resiliencia socioambiental comunitaria y patrones alimentarios de la población cochabambina.',
  },
  {
    title: 'I Jornada de Difusión Científica',
    date: '28 de julio',
    description:
      'Disertaciones sobre evaluación de proyectos de inversión pública y seguridad alimentaria frente al cambio climático.',
  },
]

export const Route = createFileRoute('/oficinaEducativa/jornadas')({
  component: RouteComponent,
  loader: () => ({ crumb: 'Jornadads de Difusión CientIfica' })
})

function RouteComponent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-14">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Jornadas de Difusión Científica
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Espacio académico destinado a la presentación y difusión de
            investigaciones desarrolladas por docentes e investigadores,
            promoviendo el intercambio de conocimiento dentro de la Facultad de
            Ciencias Económicas.
          </p>
        </div>

        {/* Evento destacado */}
        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-300">
                Jornada 2025
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                I Jornada de Difusión Científica 2025
              </h2>

              <p className="mt-3 leading-relaxed text-slate-300">
                Revive la transmisión realizada por la Oficina Educativa a
                través de Facebook y conoce las investigaciones presentadas en
                esta gestión.
              </p>
            </div>

            <a
              href="https://www.facebook.com/share/v/1Af3dAEWru/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:scale-[1.02]"
            >
              <ExternalLink size={18} />
              Ver transmisión
            </a>
          </div>
        </div>

        {/* Jornadas realizadas */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <Microscope className="text-primary" size={26} />

            <h2 className="text-2xl font-bold text-slate-900">
              Jornadas realizadas
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {conferences.map((conference) => (
              <article
                key={conference.title}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-2 text-primary">
                  <CalendarDays size={18} />

                  <span className="text-sm font-medium">{conference.date}</span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {conference.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {conference.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Resolución */}
        <div className="mt-16">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Documentación oficial
            </h2>

            <p className="mt-2 text-slate-600">
              Resolución que autoriza y respalda la realización de las Jornadas
              de Difusión Científica.
            </p>
          </div>

          <a
            href="/documentos/oficina-educativa/resolucion-jornadas-rcf-119-2023.pdf"
            target="_blank"
            rel="noreferrer"
            className="group block rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-slate-100 p-4">
                  <FileText size={30} className="text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Resolución RCF 119-2023
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Resolución del Honorable Consejo Facultativo del 19 de julio
                    de 2023 referente a las Jornadas de Difusión Científica.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 font-medium text-primary">
                <Download size={18} />
                Descargar PDF
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}
