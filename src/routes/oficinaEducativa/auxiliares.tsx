import { createFileRoute } from '@tanstack/react-router'
import { Download, FileText } from 'lucide-react'

const resources = [
  {
    title: 'Formato Curriculum Vitae y Tablas de Calificación de Méritos',
    description:
      'Documento general que reúne los formatos y criterios utilizados en los procesos de selección para Auxiliares de Docencia.',
    file: '/documentos/oficina-educativa/formato-cv-y-tablas-meritos.pdf',
  },
  {
    title: 'Tablas de Calificación de Méritos',
    description:
      'Documento utilizado para la evaluación y calificación de postulantes a la Auxiliatura de Docencia.',
    file: '/documentos/oficina-educativa/tablas-calificacion-meritos.pdf',
  },
  {
    title: 'Formulario Estándar de Curriculum Vitae - Formato D.P.A.',
    description:
      'Formato oficial de Curriculum Vitae para auxiliares de docencia seleccionados, conforme a los lineamientos institucionales.',
    file: '/documentos/oficina-educativa/curriculum-vitae-dpa.pdf',
  },
]

export const Route = createFileRoute('/oficinaEducativa/auxiliares')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Recursos Auxiliares de Docencia
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Accede a los formularios y documentos oficiales requeridos para los
            procesos relacionados con las Auxiliaturas de Docencia de la
            Facultad de Ciencias Económicas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.file}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="rounded-2xl bg-slate-100 p-4 w-fit">
                <FileText size={30} className="text-primary" />
              </div>

              <h2 className="mt-5 text-xl font-semibold text-slate-900">
                {resource.title}
              </h2>

              <p className="mt-3 leading-relaxed text-slate-600">
                {resource.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 font-medium text-primary">
                <Download size={18} />
                Descargar PDF
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
