import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Award,
  BookOpen,
  GraduationCap,
  Microscope,
  Users,
} from 'lucide-react'
import {
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaTelegramPlane,
} from 'react-icons/fa'

export const Route = createFileRoute('/oficinaEducativa/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-14">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Oficina Educativa
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Unidad responsable de la planificación, gestión y ejecución de los
            procesos de admisión estudiantil, evaluación docente y apoyo
            académico de la Facultad de Ciencias Económicas.
          </p>
        </div>
      </section>

      {/* Redes Oficiales */}
      <section className="mx-auto max-w-7xl px-6 py-5">
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-300">
                Redes Oficiales
              </p>

              <h2 className="mt-3 text-3xl font-bold">Mantente informado</h2>

              <p className="mt-3 leading-relaxed text-slate-300">
                Sigue a la Oficina Educativa en sus canales oficiales para
                conocer convocatorias, admisiones, actividades académicas,
                jornadas científicas y comunicados importantes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/OficinaEducativaFCE"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:scale-[1.02]"
              >
                <FaFacebookF size={18} />
                Facebook
              </a>

              <a
                href="https://www.youtube.com/channel/UCbZvqoFEgzj8fHCKhIyA65g"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:scale-[1.02]"
              >
                <FaYoutube size={18} />
                YouTube
              </a>

              <a
                href="https://www.tiktok.com/@oficinaeducativafce_umss?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:scale-[1.02]"
              >
                <FaTiktok size={18} />
                TikTok
              </a>

              <a
                href="https://t.me/+LfKvELsI3cphZjEx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:scale-[1.02]"
              >
                <FaTelegramPlane size={18} />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Acerca de Nosotros */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <img
                src="/oficinaEducativa2.png"
                alt="Frontis Facultad de Ciencias Económicas"
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Acerca de Nosotros
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                La Oficina Educativa brinda apoyo académico y administrativo a
                las distintas carreras de la Facultad de Ciencias Económicas,
                coordinando actividades relacionadas con admisiones, evaluación
                docente y gestión académica.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-slate-900">
                Objetivos de la Unidad
              </h3>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li>
                  • Organizar y ejecutar actividades inherentes a la evaluación
                  de desempeño docente.
                </li>

                <li>
                  • Brindar apoyo técnico a la Dirección Académica y a las
                  diferentes carreras de la Facultad.
                </li>

                <li>
                  • Planificar, gestionar y ejecutar procesos de admisión de
                  postulantes.
                </li>

                <li>
                  • Gestionar procesos de admisión estudiantil mediante
                  criterios de evaluación acordes a cada carrera.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos y servicios */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Recursos y Servicios
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            Accede a información académica, recursos institucionales,
            convocatorias y actividades desarrolladas por la Oficina Educativa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Link
            to="/oficinaEducativa/admisiones"
            className="group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <GraduationCap
              size={34}
              className="text-primary transition group-hover:scale-110"
            />

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              Admisiones
            </h3>

            <p className="mt-3 leading-relaxed text-slate-600">
              Cursos preuniversitarios, exámenes de ingreso, guías y recursos
              para postulantes.
            </p>
          </Link>

          <Link
            to="/oficinaEducativa/cuadro-honor"
            className="group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Award
              size={34}
              className="text-primary transition group-hover:scale-110"
            />

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              Cuadro de Honor
            </h3>

            <p className="mt-3 leading-relaxed text-slate-600">
              Reconocimientos y distinciones otorgadas a estudiantes con mejor
              rendimiento académico.
            </p>
          </Link>

          <Link
            to="/oficinaEducativa/auxiliares"
            className="group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Users
              size={34}
              className="text-primary transition group-hover:scale-110"
            />

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              Recursos Auxiliares
            </h3>

            <p className="mt-3 leading-relaxed text-slate-600">
              Formularios, currículums y documentos relacionados con los
              procesos de auxiliares de docencia.
            </p>
          </Link>

          <Link
            to="/oficinaEducativa/jornadas"
            className="group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Microscope
              size={34}
              className="text-primary transition group-hover:scale-110"
            />

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              Jornadas Científicas
            </h3>

            <p className="mt-3 leading-relaxed text-slate-600">
              Eventos de difusión científica e investigaciones desarrolladas por
              docentes e investigadores.
            </p>
          </Link>

          <Link
            to="/oficinaEducativa/recursos-docentes"
            className="group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <BookOpen
              size={34}
              className="text-primary transition group-hover:scale-110"
            />

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              Recursos Docentes
            </h3>

            <p className="mt-3 leading-relaxed text-slate-600">
              Material académico, guías metodológicas, formularios y recursos de
              apoyo para docentes.
            </p>
          </Link>
        </div>
      </section>
    </>
  )
}
