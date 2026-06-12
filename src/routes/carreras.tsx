/* eslint-disable react-refresh/only-export-components */
import { Link, Outlet, createFileRoute, useLocation } from '@tanstack/react-router'
import { careers } from '../data/careers'

export const Route = createFileRoute('/carreras')({
  component: CarrerasHub,
})

function CarrerasHub() {
  const location = useLocation()

  if (location.pathname !== '/carreras') {
    return <Outlet />
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {careers.map((career) => (
            <article key={career.slug} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">{career.title}</h2>
              <p className="mt-3 text-sm font-medium text-slate-500">{career.shortLabel}</p>
              <p className="mt-4 leading-relaxed text-slate-600">{career.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-slate-700">{career.planStats[0]}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-slate-700">{career.planStats[1]}</span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/carreras/$career"
                  params={{ career: career.slug }}
                  className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Ver
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
