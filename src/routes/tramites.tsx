/* eslint-disable react-refresh/only-export-components */
import { createFileRoute, Link } from '@tanstack/react-router'

const procedures = [
  {
    title: 'Inscripción y reinscripción',
    category: 'Académico',
    summary: 'Gestión básica de continuidad estudiantil y registro de materias.',
  },
  {
    title: 'Solicitud de certificados',
    category: 'Documentos',
    summary: 'Certificaciones y constancias con requisitos simplificados y visibles.',
  },
  {
    title: 'Trámites de titulación',
    category: 'Egreso',
    summary: 'Ruta para cierre de carrera, revisión y entrega de documentos finales.',
  },
  {
    title: 'Pases y solicitudes académicas',
    category: 'Casos especiales',
    summary: 'Procesos para cambios, solicitudes extraordinarias y seguimiento institucional.',
  },
]


export const Route = createFileRoute('/tramites')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-6 md:grid-cols-2">
          {procedures.map((procedure) => (
            <article key={procedure.title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-slate-700">
                {procedure.category}
              </span>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">{procedure.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{procedure.summary}</p>
              <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-relaxed text-slate-600">
                Enlace directo a formularios, requisitos y orientaciones para reducir pasos innecesarios.
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/comunicados" className="rounded-xl bg-primary px-5 py-3 font-medium text-white">
            Comunicados
          </Link>
          <Link to="/contacto" className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-800">
            Contactar a la facultad
          </Link>
        </div>
      </section>
    </>
  )
}
