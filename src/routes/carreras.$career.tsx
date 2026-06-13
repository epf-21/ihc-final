/* eslint-disable react-refresh/only-export-components */
import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { careerSectionLinks, getCareerBySlug } from '../data/careers'

export const Route = createFileRoute('/carreras/$career')({
  component: CareerRoute,
  loader: ({ params }) => {
    const career = getCareerBySlug(params.career)

    if (!career) {
      throw notFound()
    }

    return {
      crumb: career.title,
      career,
    }
  },
})


type CurriculumRow = {
  nivel: string
  codigo: string
  materia: string
  tipo: string
  electiva: boolean
  sigla: string
  prerequisitos: string[]
}

const curriculum: CurriculumRow[] = [
  { nivel: 'A', codigo: '1301001', materia: 'ADMINISTRACION GENERAL', tipo: 'REGULAR', electiva: false, sigla: 'ADM411', prerequisitos: [] },
  { nivel: 'A', codigo: '1301002', materia: 'CONTABILIDAD I', tipo: 'REGULAR', electiva: false, sigla: 'FIN411', prerequisitos: [] },
  { nivel: 'A', codigo: '1301003', materia: 'ALGEBRA', tipo: 'REGULAR', electiva: false, sigla: 'MAT419', prerequisitos: [] },
  { nivel: 'A', codigo: '1301004', materia: 'METODOLOGIA DE INVESTIGACION I', tipo: 'REGULAR', electiva: false, sigla: 'MET441', prerequisitos: [] },
  { nivel: 'A', codigo: '1301005', materia: 'CALCULO', tipo: 'REGULAR', electiva: false, sigla: 'MAT412', prerequisitos: [] },
  { nivel: 'B', codigo: '1301006', materia: 'TEORIA Y TECNICAS DE LA ORGANIZACION', tipo: 'REGULAR', electiva: false, sigla: 'ADM421', prerequisitos: ['1301001'] },
  { nivel: 'B', codigo: '1301007', materia: 'ECONOMIA DE EMPRESAS I', tipo: 'REGULAR', electiva: false, sigla: 'ECO421', prerequisitos: ['1301005'] },
  { nivel: 'B', codigo: '1301008', materia: 'CONTABILIDAD II', tipo: 'REGULAR', electiva: false, sigla: 'FIN421', prerequisitos: ['1301002'] },
  { nivel: 'B', codigo: '1301009', materia: 'ESTADISTICA I', tipo: 'REGULAR', electiva: false, sigla: 'MAT431', prerequisitos: ['1301003'] },
  { nivel: 'B', codigo: '1301012', materia: 'SOCIOLOGIA ORGANIZACIONAL', tipo: 'REGULAR', electiva: false, sigla: 'PER421', prerequisitos: [] },
  { nivel: 'C', codigo: '1301013', materia: 'SISTEMAS ADMINISTRATIVOS', tipo: 'REGULAR', electiva: false, sigla: 'ADM431', prerequisitos: ['1301006'] },
  { nivel: 'C', codigo: '1301014', materia: 'ECONOMIA DE EMPRESAS II', tipo: 'REGULAR', electiva: false, sigla: 'ECO431', prerequisitos: ['1301007'] },
  { nivel: 'C', codigo: '1301015', materia: 'TEORIA DE COSTOS', tipo: 'REGULAR', electiva: false, sigla: 'FIN431', prerequisitos: ['1301008'] },
  { nivel: 'C', codigo: '1301016', materia: 'ESTADISTICA II', tipo: 'REGULAR', electiva: false, sigla: 'MAT442', prerequisitos: ['1301009'] },
  { nivel: 'C', codigo: '1301017', materia: 'MACROECONOMIA', tipo: 'REGULAR', electiva: false, sigla: 'ECO432', prerequisitos: ['1301007'] },
  { nivel: 'D', codigo: '1301018', materia: 'PROCEDIMIENTOS ADMINISTRATIVOS', tipo: 'REGULAR', electiva: false, sigla: 'ADM441', prerequisitos: ['1301013'] },
  { nivel: 'D', codigo: '1301019', materia: 'PRESUPUESTOS', tipo: 'REGULAR', electiva: false, sigla: 'FIN451', prerequisitos: ['1301015'] },
  { nivel: 'D', codigo: '1301020', materia: 'INFORMATICA I', tipo: 'REGULAR', electiva: false, sigla: 'MAT441', prerequisitos: ['1301016'] },
  { nivel: 'D', codigo: '1301021', materia: 'COSTOS PARA LA TOMA DE DECISIONES', tipo: 'REGULAR', electiva: false, sigla: 'FIN442', prerequisitos: ['1301015'] },
  { nivel: 'D', codigo: '1301022', materia: 'ANALISIS DE ESTADOS FINANCIEROS', tipo: 'REGULAR', electiva: false, sigla: 'FIN441', prerequisitos: ['1301008'] },
  { nivel: 'E', codigo: '1301010', materia: 'INGLES I', tipo: 'REGULAR', electiva: true, sigla: 'IDI451', prerequisitos: [] },
  { nivel: 'E', codigo: '1301023', materia: 'METODOLOGIA DE INVESTIGACION II', tipo: 'REGULAR', electiva: false, sigla: 'MET481', prerequisitos: ['1301004', '1301013'] },
  { nivel: 'E', codigo: '1301024', materia: 'INFORMATICA II', tipo: 'REGULAR', electiva: false, sigla: 'MAT451', prerequisitos: ['1301020'] },
  { nivel: 'E', codigo: '1301025', materia: 'LEGISLACION LABORAL', tipo: 'REGULAR', electiva: false, sigla: 'PER452', prerequisitos: ['1301012'] },
  { nivel: 'E', codigo: '1301026', materia: 'PSICOLOGIA ORGANIZACIONAL', tipo: 'REGULAR', electiva: false, sigla: 'PER451', prerequisitos: [] },
  { nivel: 'E', codigo: '1301027', materia: 'ADMINISTRACION PUBLICA', tipo: 'REGULAR', electiva: false, sigla: 'ADM472', prerequisitos: ['1301018'] },
  { nivel: 'F', codigo: '1301011', materia: 'INGLES II', tipo: 'REGULAR', electiva: true, sigla: 'IDI461', prerequisitos: ['1301010'] },
  { nivel: 'F', codigo: '1301028', materia: 'PRODUCCION I', tipo: 'REGULAR', electiva: false, sigla: 'ADM462', prerequisitos: ['1301013', '1301014', '1301016', '1301017'] },
  { nivel: 'F', codigo: '1301029', materia: 'FINANZAS I', tipo: 'REGULAR', electiva: false, sigla: 'FIN461', prerequisitos: ['1301019', '1301022'] },
  { nivel: 'F', codigo: '1301030', materia: 'INVESTIGACION OPERATIVA', tipo: 'REGULAR', electiva: false, sigla: 'MAT461', prerequisitos: ['1301024'] },
  { nivel: 'F', codigo: '1301031', materia: 'MERCADOTECNIA I', tipo: 'REGULAR', electiva: false, sigla: 'ADM461', prerequisitos: ['1301014', '1301016'] },
  { nivel: 'F', codigo: '1301032', materia: 'PERSONAL I', tipo: 'REGULAR', electiva: false, sigla: 'PER461', prerequisitos: ['1301026'] },
  { nivel: 'G', codigo: '1301033', materia: 'PRODUCCION II', tipo: 'REGULAR', electiva: false, sigla: 'ADM473', prerequisitos: ['1301028'] },
  { nivel: 'G', codigo: '1301034', materia: 'MERCADOTECNIA II', tipo: 'REGULAR', electiva: false, sigla: 'ADM471', prerequisitos: ['1301031'] },
  { nivel: 'G', codigo: '1301035', materia: 'GERENCIA OPERATIVA', tipo: 'REGULAR', electiva: false, sigla: 'MAT481', prerequisitos: ['1301030'] },
  { nivel: 'G', codigo: '1301036', materia: 'MERCADOTECNIA III', tipo: 'REGULAR', electiva: true, sigla: 'ADM481', prerequisitos: ['1301031'] },
  { nivel: 'G', codigo: '1301038', materia: 'MERCADOTECNIA V', tipo: 'REGULAR', electiva: true, sigla: 'ADM474', prerequisitos: ['1301031'] },
  { nivel: 'G', codigo: '1301039', materia: 'FINANZAS II', tipo: 'REGULAR', electiva: true, sigla: 'FIN471', prerequisitos: ['1301029'] },
  { nivel: 'G', codigo: '1301040', materia: 'ADMINISTRACION DE COOPERATIVAS', tipo: 'REGULAR', electiva: true, sigla: 'ADM451', prerequisitos: ['1301018'] },
  { nivel: 'G', codigo: '1301041', materia: 'PERSONAL II', tipo: 'REGULAR', electiva: true, sigla: 'PER471', prerequisitos: ['1301025', '1301032'] },
  { nivel: 'G', codigo: '1301042', materia: 'PERSONAL III', tipo: 'REGULAR', electiva: true, sigla: 'PER472', prerequisitos: ['1301032'] },
  { nivel: 'H', codigo: '1301043', materia: 'POLITICA EMPRESARIAL', tipo: 'REGULAR', electiva: false, sigla: 'FIN481', prerequisitos: ['1301029', '1301031', '1301032'] },
  { nivel: 'H', codigo: '1301044', materia: 'PREPARACION Y EVALUACION DE PROYECTOS', tipo: 'REGULAR', electiva: false, sigla: 'FIN482', prerequisitos: ['1301002', '1301003', '1301005', '1301007', '1301008', '1301009', '1301014', '1301015', '1301016', '1301019', '1301020', '1301022', '1301024', '1301026', '1301029', '1301030', '1301031', '1301032', '1301035'] },
  { nivel: 'H', codigo: '1301045', materia: 'TALLER I', tipo: 'REGULAR', electiva: false, sigla: 'MET491', prerequisitos: ['1301033', '1301034', '1301035'] },
  { nivel: 'H', codigo: '1301046', materia: 'MERCADOTECNIA VI', tipo: 'REGULAR', electiva: true, sigla: 'ADM482', prerequisitos: ['1301031'] },
  { nivel: 'H', codigo: '1301047', materia: 'MERCADOTECNIA VII', tipo: 'REGULAR', electiva: true, sigla: 'ADM483', prerequisitos: ['1301031'] },
  { nivel: 'H', codigo: '1301048', materia: 'FINANZAS IV', tipo: 'REGULAR', electiva: true, sigla: 'FIN483', prerequisitos: ['1301029'] },
  { nivel: 'H', codigo: '1301049', materia: 'FINANZAS V', tipo: 'REGULAR', electiva: true, sigla: 'FIN484', prerequisitos: ['1301029'] },
  { nivel: 'H', codigo: '1301050', materia: 'PERSONAL IV', tipo: 'REGULAR', electiva: true, sigla: 'PER481', prerequisitos: ['1301031', '1301032'] },
  { nivel: 'H', codigo: '1301051', materia: 'PERSONAL V', tipo: 'REGULAR', electiva: true, sigla: 'PER482', prerequisitos: ['1301031', '1301032'] },
  { nivel: 'I', codigo: '1301052', materia: 'ADMINISTRACION DE PROYECTOS', tipo: 'REGULAR', electiva: false, sigla: 'FIN492', prerequisitos: ['1301044'] },
  { nivel: 'I', codigo: '1301053', materia: 'LEGISLACION EMPRESARIAL', tipo: 'REGULAR', electiva: false, sigla: 'PER491', prerequisitos: ['1301025'] },
  { nivel: 'I', codigo: '1301054', materia: 'TALLER II', tipo: 'TALLER DE TITULACION', electiva: false, sigla: 'MET401', prerequisitos: ['1301045'] },
  { nivel: 'I', codigo: '1301055', materia: 'MERCADOTECNIA IV', tipo: 'REGULAR', electiva: true, sigla: 'ADM491', prerequisitos: ['1301031'] },
  { nivel: 'I', codigo: '1301056', materia: 'FINANZAS VI', tipo: 'REGULAR', electiva: true, sigla: 'FIN493', prerequisitos: ['1301029', '1301040'] },
  { nivel: 'I', codigo: '1301057', materia: 'PERSONAL VI', tipo: 'REGULAR', electiva: true, sigla: 'PER492', prerequisitos: ['1301032', '1301042'] },
  { nivel: 'I', codigo: '1301058', materia: 'PRACTICA EMPRESARIAL', tipo: 'REGULAR', electiva: false, sigla: 'FIN491', prerequisitos: ['1301033', '1301034', '1301035'] },
]



function CareerRoute() {
  const { career: careerSlug } = Route.useParams()
  const career = getCareerBySlug(careerSlug)

  const nivelColors: Record<string, string> = {
    A: 'bg-violet-100 text-violet-700',
    B: 'bg-blue-100 text-blue-700',
    C: 'bg-cyan-100 text-cyan-700',
    D: 'bg-teal-100 text-teal-700',
    E: 'bg-green-100 text-green-700',
    F: 'bg-yellow-100 text-yellow-700',
    G: 'bg-orange-100 text-orange-700',
    H: 'bg-red-100 text-red-700',
    I: 'bg-pink-100 text-pink-700',
  }

  const niveles = [...new Set(curriculum.map((r) => r.nivel))]
  if (!career) {
    throw notFound()
  }

  return (
    <>
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

        <div className="mt-6 grid gap-6">
          <article id="plan" className="scroll-mt-24 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-primary">Plan</p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl">Plan de estudios</h2>
            <p className="mt-4 leading-relaxed text-slate-600">{career.planNote}</p>

            {/* Stats chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {career.planStats.map((stat) => (
                <span key={stat} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 sm:px-4 sm:py-2 sm:text-sm">
                  {stat}
                </span>
              ))}
            </div>

            {/* Leyenda niveles */}
            <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
              {niveles.map((n) => (
                <span key={n} className={`rounded-full px-2.5 py-1 text-xs font-bold sm:px-3 ${nivelColors[n] ?? 'bg-slate-100 text-slate-700'}`}>
                  Nivel {n}
                </span>
              ))}
            </div>

            {/* Tabla */}
            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-semibold uppercase tracking-[2px] text-slate-500">
                    <th className="px-3 py-3 sm:px-4">Nv.</th>
                    <th className="hidden px-3 py-3 sm:table-cell sm:px-4">Código</th>
                    <th className="px-3 py-3 sm:px-4">Materia</th>
                    <th className="px-3 py-3 sm:px-4">Sigla</th>
                    <th className="hidden px-3 py-3 md:table-cell md:px-4">Tipo</th>
                    <th className="hidden px-3 py-3 md:table-cell md:px-4">Electiva</th>
                    <th className="hidden px-3 py-3 lg:table-cell lg:px-4">Pre-requisitos</th>
                  </tr>
                </thead>
                <tbody>
                  {curriculum.map((row, i) => (
                    <tr
                      key={row.codigo}
                      className={`border-b border-slate-50 transition-colors hover:bg-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}
                    >
                      <td className="px-3 py-3 sm:px-4">
                        <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${nivelColors[row.nivel] ?? 'bg-slate-100 text-slate-700'}`}>
                          {row.nivel}
                        </span>
                      </td>
                      <td className="hidden px-3 py-3 font-mono text-xs text-slate-500 sm:table-cell sm:px-4">
                        {row.codigo}
                      </td>
                      <td className="px-3 py-3 sm:px-4">
                        <span className="font-medium text-slate-800">{row.materia}</span>
                        {/* Subinfo visible solo en mobile/sm */}
                        <div className="mt-1 flex flex-wrap items-center gap-1 sm:hidden">
                          <span className="font-mono text-xs text-slate-400">{row.codigo}</span>
                          {row.electiva && (
                            <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-700">Electiva</span>
                          )}
                          {row.tipo === 'TALLER DE TITULACION' && (
                            <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-700">Taller</span>
                          )}
                        </div>
                        {/* Badges tipo/electiva visibles entre sm y md */}
                        <div className="mt-1 flex flex-wrap items-center gap-1 sm:flex md:hidden">
                          {row.electiva && (
                            <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-700">Electiva</span>
                          )}
                          {row.tipo === 'TALLER DE TITULACION' && (
                            <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-700">Taller</span>
                          )}
                        </div>
                        {/* Pre-requisitos inline hasta lg */}
                        {row.prerequisitos.length > 0 && (
                          <div className="mt-1.5 flex flex-wrap gap-1 lg:hidden">
                            {row.prerequisitos.map((p) => (
                              <span key={p} className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-500">
                                {p}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-3 font-mono text-xs font-semibold text-primary sm:px-4">
                        {row.sigla}
                      </td>
                      <td className="hidden px-3 py-3 md:table-cell md:px-4">
                        {row.tipo === 'TALLER DE TITULACION' ? (
                          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
                            Taller titulación
                          </span>
                        ) : (
                          <span className="text-xs text-slate-500">Regular</span>
                        )}
                      </td>
                      <td className="hidden px-3 py-3 text-center md:table-cell md:px-4">
                        {row.electiva && (
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">Sí</span>
                        )}
                      </td>
                      <td className="hidden px-3 py-3 lg:table-cell lg:px-4">
                        <div className="flex flex-wrap gap-1">
                          {row.prerequisitos.map((p) => (
                            <span key={p} className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-600">
                              {p}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article id="analiticos" className="scroll-mt-24 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[3px] text-primary">Analíticos</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">Programas analíticos</h2>
              </div>
              <span className="mt-2 self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 sm:mt-0 sm:self-auto">
                {career.analyticSummary.length} áreas temáticas
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Resumen de los grandes bloques de contenido que componen la formación académica de esta carrera.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {career.analyticSummary.map((item, i) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white hover:shadow-md sm:p-5"
                >
                  <span className="absolute right-3 top-3 text-2xl font-black text-slate-100 transition-colors group-hover:text-primary/10 sm:right-4 sm:top-4 sm:text-3xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative">
                    <div className="mb-3 h-1 w-8 rounded-full bg-primary opacity-60" />
                    <p className="text-sm font-medium leading-relaxed text-slate-700">{item}</p>
                  </div>
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
    </>
  )
}
