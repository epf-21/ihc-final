/* eslint-disable react-refresh/only-export-components */
import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { careerSectionLinks, getCareerBySlug } from '../data/careers'

export const Route = createFileRoute('/carreras/$career')({
  component: CareerRoute,
})

function CareerRoute() {
  const { career: careerSlug } = Route.useParams()
  const career = getCareerBySlug(careerSlug)

  if (!career) {
    throw notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">{career.title}</h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{career.summary}</p>
          <p className="mt-3 text-sm font-medium text-slate-500">{career.focus}</p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {careerSectionLinks.map((item) => (
            <a
              key={item.anchor}
              href={`#${item.anchor}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article id="inicio" className="scroll-mt-24 rounded-3xl bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-primary">Inicio</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Qué resume esta carrera</h2>
            <div className="mt-5 space-y-4 text-slate-700">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[2px] text-slate-500">Misión</p>
                <p className="mt-2 leading-relaxed">{career.mission}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[2px] text-slate-500">Visión</p>
                <p className="mt-2 leading-relaxed">{career.vision}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[2px] text-slate-500">Objetivo</p>
                <p className="mt-2 leading-relaxed">{career.objective}</p>
              </div>
            </div>
          </article>

          <article id="perfil" className="scroll-mt-24 rounded-3xl bg-white p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-primary">Perfil</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Perfil profesional</h2>
            <div className="mt-5 space-y-4">
              {career.profile.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p className="leading-relaxed text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article id="titulacion" className="scroll-mt-24 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-secondary">Titulación</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Modalidad de titulación</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {career.titulation.map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article id="ambito" className="scroll-mt-24 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-secondary">Ámbito</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Campos de acción</h2>
            <ul className="mt-5 space-y-4 text-slate-700">
              {career.scope.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <article id="plan" className="scroll-mt-24 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-primary">Plan</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Plan de estudios</h2>
            <p className="mt-4 leading-relaxed text-slate-600">{career.planNote}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {career.planStats.map((stat) => (
                <div key={stat} className="rounded-2xl bg-slate-50 px-4 py-4 text-center text-sm font-semibold text-slate-700">
                  {stat}
                </div>
              ))}
            </div>
          </article>

          <article id="analiticos" className="scroll-mt-24 rounded-3xl bg-white p-6 text-primary">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-slate-900">Analíticos</p>
            <h2 className="mt-3 text-2xl font-semibold">Programas analíticos</h2>
            <div className="mt-5 space-y-4">
              {career.analyticSummary.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-relaxed text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/carreras" className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-800">
            Volver
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
