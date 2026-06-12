import { createFileRoute } from '@tanstack/react-router'
import { Download, FileText } from 'lucide-react'

const resources = [
  {
    title:
      'Guía de Lineamientos Teórico Metodológicos para la Transversalización de la Perspectiva de Género',
    description:
      'Guía orientada a la incorporación de la perspectiva de género en las asignaturas y procesos de enseñanza-aprendizaje.',
    file: '/documentos/oficina-educativa/guia-lineamientos-perspectiva-genero.pdf',
  },
  {
    title:
      'Diseño de un Plan de Clase para la Transversalización de la Perspectiva de Género',
    description:
      'Documento de apoyo para la planificación de actividades académicas con enfoque de género.',
    file: '/documentos/oficina-educativa/diseno-plan-clase-genero.pdf',
  },
  {
    title:
      'Curso: Transversalización de la Perspectiva de Género en una Asignatura',
    description:
      'Material de formación para docentes sobre la integración de la perspectiva de género en el aula.',
    file: '/documentos/oficina-educativa/curso-transversalizacion-genero.pdf',
  },
  {
    title: 'Curso: La Perspectiva de Género en una Asignatura',
    description:
      'Recurso académico destinado al fortalecimiento de prácticas docentes inclusivas y equitativas.',
    file: '/documentos/oficina-educativa/curso-perspectiva-genero-asignatura.pdf',
  },
  {
    title: 'Formulario Standard de Curriculum Vitae Formato D.P.A.',
    description:
      'Formato oficial de Curriculum Vitae utilizado para procesos y trámites académicos institucionales.',
    file: '/documentos/oficina-educativa/formulario-cv-formato-dpa.pdf',
  },
]

export const Route = createFileRoute('/oficinaEducativa/recursos-docentes')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-14">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Recursos Docentes
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Accede a materiales, guías metodológicas, cursos y documentos de
            apoyo destinados al fortalecimiento de la actividad docente en la
            Facultad de Ciencias Económicas.
          </p>
        </div>

        {/* Recursos */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.file}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-fit rounded-2xl bg-slate-100 p-4">
                <FileText
                  size={30}
                  className="text-primary transition group-hover:scale-110"
                />
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
