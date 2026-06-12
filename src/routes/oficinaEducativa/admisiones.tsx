import { createFileRoute } from '@tanstack/react-router'
import { Download, FileText } from 'lucide-react'

export const Route = createFileRoute('/oficinaEducativa/admisiones')({
  component: RouteComponent,
  loader: () => ({ crumb: 'Admisiones' })
})

function RouteComponent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Admisiones
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Información y recursos para postulantes a la Facultad de Ciencias
            Económicas. Aquí podrás acceder a la documentación oficial
            relacionada con los procesos de admisión.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-slate-100 p-4">
                <FileText size={30} className="text-primary" />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Guía de Estudios 2025
                </h2>

                <p className="mt-2 text-slate-600">
                  Documento oficial para postulantes con contenidos y material
                  de referencia para el proceso de admisión de la Facultad de
                  Ciencias Económicas.
                </p>
              </div>
            </div>

            <a
              href="/documentos/admision.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <Download size={18} />
              Descargar PDF
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
