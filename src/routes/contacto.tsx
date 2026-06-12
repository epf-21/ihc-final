/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contacto')({
  component: RouteComponent,
})

const contactCards = [
  {
    title: 'Teléfono de la facultad',
    value: '4540261',
    note: 'Consulta general y orientación institucional.',
  },
  {
    title: 'Correo institucional',
    value: 'info@fce.umss.edu.bo',
    note: 'Canal para solicitudes formales y seguimiento.',
  },
  {
    title: 'Ubicación',
    value: 'Campus Central UMSS, Cochabamba',
    note: 'Atención presencial en oficinas administrativas.',
  },
]

function RouteComponent() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">Canales claros para resolver dudas y trámites</h1>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {contactCards.map((card) => (
                <article key={card.title} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                  <p className="text-sm font-semibold uppercase tracking-[3px] text-secondary">{card.title}</p>
                  <h2 className="mt-3 text-lg font-semibold text-slate-900">{card.value}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.note}</p>
                </article>
              ))}
            </div>
          </div>

          <article className="rounded-3xl bg-white p-8 text-primary">
            <h2 className="text-2xl font-semibold">Facultad de Ciencias Económicas</h2>
            <div className="mt-4 space-y-4 text-slate-900">
              <p>Campus Central UMSS, Cochabamba, Bolivia</p>
              <p>Teléfono: 4540261</p>
              <p>Email: info@fce.umss.edu.bo</p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-slate-800">Horario sugerido</p>
              <p className="mt-3 leading-relaxed text-slate-600">
                Atención presencial y orientación administrativa durante horarios institucionales de oficina.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-primary">Accesos útiles</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Si tu duda es académica, abre primero las plataformas</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Muchas consultas se resuelven en menos pasos desde Moodle, SACAD o WebSISS antes de escribir un correo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://moodle.fce.umss.edu.bo/login/index.php" target="_blank" rel="noreferrer" className="rounded-xl bg-primary px-5 py-3 font-medium text-white">
                Moodle
              </a>
              <a href="https://sacad.fce.umss.edu.bo/admision/noticias.php" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-800">
                SACAD
              </a>
              <a href="https://websis.umss.edu.bo/serv_estudiantes.asp" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-800">
                WebSISS
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
