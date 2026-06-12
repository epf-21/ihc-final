import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="mt-24 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="leading-relaxed text-slate-400">
              Plataforma académica orientada a mejorar el acceso a información
              institucional, trámites y recursos universitarios para estudiantes
              y docentes.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Plataformas
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href="https://moodle.fce.umss.edu.bo/login/index.php"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Moodle
                </a>
              </li>

              <li>
                <a
                  href="https://sacad.fce.umss.edu.bo/admision/noticias.php"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  SACAD
                </a>
              </li>

              <li>
                <a
                  href="https://websis.umss.edu.bo/serv_estudiantes.asp"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  WebSISS
                </a>
              </li>

              <li>
                <a
                  href="https://iese.umss.edu.bo/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  IESE
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Accesos</h4>

            <ul className="space-y-4">
              <li>
                <Link to="/comunicados" className="transition hover:text-white">
                  Comunicados
                </Link>
              </li>

              <li>
                <Link to="/plataformas" className="transition hover:text-white">
                  Convocatorias
                </Link>
              </li>

              <li>
                <Link to="/carreras" className="transition hover:text-white">
                  Programas analíticos
                </Link>
              </li>

              <li>
                <Link to="/tramites" className="transition hover:text-white">
                  Trámites académicos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Contacto</h4>

            <div className="space-y-5 text-slate-400">
              <p>
                Campus Central UMSS
                <br />
                Cochabamba, Bolivia
              </p>

              <p>4540261</p>

              <p>info@fce.umss.edu.bo</p>

              <Link
                to="/contacto"
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-slate-400 transition hover:text-white"
              >
                Ir a contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
