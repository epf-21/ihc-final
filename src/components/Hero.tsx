import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <img
        src="/fce.png"
        alt="FCE"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-16">
        <div className="max-w-3xl text-white">

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            FCE | UMSS
          </h1>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/plataformas"
              className="rounded-xl bg-primary px-6 py-3 font-medium text-white transition hover:bg-blue-950"
            >
              Explorar plataforma
            </Link>

            <Link
              to="/comunicados"
              className="rounded-xl border border-white/20 bg-white px-6 py-3 font-medium text-slate-900 transition hover:bg-slate-100">
              Comunicados
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
