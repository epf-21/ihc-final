import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative h-137.5">
      <img
        src="/fce.png"
        alt="FCE"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="max-w-2xl text-white">
          <p className="uppercase tracking-[4px] mb-4 text-blue-200">
            FCE • UMSS
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Plataforma académica moderna para estudiantes
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            Accede rápidamente a comunicados, plataformas, trámites y recursos académicos.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#0B4F8A] hover:bg-[#083b67] px-6 py-3 rounded-xl font-medium">
              Explorar
            </button>

            <Link
              to="/comunicados"
              className="bg-white text-black px-6 py-3 rounded-xl font-medium">
              Comunicados
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
