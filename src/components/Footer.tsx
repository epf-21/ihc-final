export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>

            <div className="flex items-center gap-4 mb-6">

              <img
                src="/fce-logo.png"
                alt="FCE"
                className="w-14 h-14 object-contain"
              />

              <div>
                <h3 className="font-bold text-white text-lg">
                  FCE • UMSS
                </h3>

                <p className="text-sm text-gray-400">
                  Facultad de Ciencias Económicas
                </p>
              </div>

            </div>

            <p className="text-gray-400 leading-relaxed">
              Plataforma académica orientada a mejorar el acceso
              a información institucional, trámites y recursos
              universitarios para estudiantes y docentes.
            </p>

          </div>

          <div>

            <h4 className="text-white font-semibold text-lg mb-6">
              Plataformas
            </h4>

            <ul className="space-y-4">

              <li>
                <a
                  href="https://moodle.fce.umss.edu.bo/login/index.php"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Moodle
                </a>
              </li>

              <li>
                <a
                  href="https://sacad.fce.umss.edu.bo/admision/noticias.php"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  SACAD
                </a>
              </li>

              <li>
                <a
                  href="https://websis.umss.edu.bo/serv_estudiantes.asp"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  WebSISS
                </a>
              </li>

              <li>
                <a
                  href="https://iese.umss.edu.bo/"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  IESE
                </a>
              </li>

            </ul>

          </div>

          <div>

            <h4 className="text-white font-semibold text-lg mb-6">
              Accesos
            </h4>

            <ul className="space-y-4">

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Comunicados
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Convocatorias
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Programas analíticos
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Trámites académicos
                </a>
              </li>

            </ul>

          </div>

          <div>

            <h4 className="text-white font-semibold text-lg mb-6">
              Contacto
            </h4>

            <div className="space-y-5 text-gray-400">

              <p>
                Campus Central UMSS<br />
                Cochabamba, Bolivia
              </p>

              <p>
                4540261
              </p>

              <p>
                info@fce.umss.edu.bo
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © 2026 Facultad de Ciencias Económicas - UMSS
          </p>
        </div>

      </div>

    </footer>
  )
}
