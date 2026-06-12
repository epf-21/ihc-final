import { createFileRoute } from '@tanstack/react-router'
import { Award, Download, FileText } from 'lucide-react'

import { ImageCard } from '../../components/ImageCard'

export const Route = createFileRoute('/oficinaEducativa/cuadro-honor')({
  component: RouteComponent,
  loader: () => ({ crumb: 'Cuadro de Honor' })
})

function RouteComponent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-14">
        {/* Header */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Cuadro de Honor
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Reconocimiento al mejor rendimiento académico de los estudiantes de
            la Facultad de Ciencias Económicas. Esta distinción destaca el
            esfuerzo, compromiso y excelencia académica demostrada por los
            estudiantes durante su formación universitaria.
          </p>
        </div>

        {/* Reglamento */}
        <div className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-slate-100 p-4">
                <FileText size={30} className="text-primary" />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Reglamento de Reconocimiento Académico
                </h2>

                <p className="mt-2 text-slate-600">
                  Reglamento específico para el reconocimiento al mejor
                  rendimiento académico de los estudiantes de la Facultad de
                  Ciencias Económicas.
                </p>
              </div>
            </div>

            <a
              href="/documentos/oficina-educativa/reglamento-cuadro-honor.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <Download size={18} />
              Descargar PDF
            </a>
          </div>
        </div>

        {/* Reconocimiento 2026 */}
        <section className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <Award className="text-primary" size={26} />

            <h2 className="text-2xl font-bold text-slate-900">
              Reconocimiento Académico — 28 de abril de 2026
            </h2>
          </div>

          <p className="mb-8 text-slate-600">
            Acto de reconocimiento al mejor rendimiento académico de los
            estudiantes de la Facultad de Ciencias Económicas.
            <br />
            Haz clic sobre cualquier imagen para verla en tamaño completo.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((image) => (
              <ImageCard
                key={image}
                image={image}
                alt={`Reconocimiento académico 2026 ${image}`}
              />
            ))}
          </div>
        </section>

        {/* Octubre 2025 */}
        <section className="mt-20">
          <div className="mb-6 flex items-center gap-3">
            <Award className="text-primary" size={26} />

            <h2 className="text-2xl font-bold text-slate-900">
              Reconocimiento Académico — 3 de octubre de 2025
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[13, 14].map((image) => (
              <ImageCard
                key={image}
                image={image}
                alt={`Reconocimiento académico octubre 2025 ${image}`}
              />
            ))}
          </div>
        </section>

        {/* Abril 2025 */}
        <section className="mt-20">
          <div className="mb-6 flex items-center gap-3">
            <Award className="text-primary" size={26} />

            <h2 className="text-2xl font-bold text-slate-900">
              Reconocimiento Académico — 23 de abril de 2025
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[15, 16, 17].map((image) => (
              <ImageCard
                key={image}
                image={image}
                alt={`Reconocimiento académico abril 2025 ${image}`}
              />
            ))}
          </div>
        </section>

        {/* QR Reglamento */}
        <section className="mt-20">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              <img
                src="/reglamentoCuadroHonor.png"
                alt="Código QR Reglamento"
                className="h-48 w-48 rounded-2xl object-contain"
              />

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Acceso rápido al reglamento
                </h2>

                <p className="mt-3 text-slate-600">
                  Escanea el código QR para acceder al reglamento específico del
                  reconocimiento al mejor rendimiento académico de los
                  estudiantes de la Facultad de Ciencias Económicas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
