import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useThemeStore } from '../stores/themeStore'
import { Moon, Sun, ChevronDown } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useThemeStore()
  const activeClass =
    'text-primary font-extrabold'

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/fce-logo.png"
            alt="FCE"
            className="h-12 w-12 shrink-0 object-contain"
          />

          <div className="min-w-0">
            <h1 className="font-bold text-primary">
              <span className="md:hidden">FCE</span>

              <span className="hidden truncate md:block">
                Facultad de Ciencias Económicas
              </span>
            </h1>

            <p className="hidden truncate text-sm text-slate-500 sm:block">
              Universidad Mayor de San Simón
            </p>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 font-medium md:flex">
          <Link to="/" activeProps={{ className: activeClass }}>
            Inicio
          </Link>

          <Link to="/comunicados" activeProps={{ className: activeClass }}>
            Comunicados
          </Link>

          <Link to="/carreras" activeProps={{ className: activeClass }}>
            Carreras
          </Link>

          {/* Dropdown Oficina Educativa */}
          <div className="group relative">
            <Link
              to="/oficinaEducativa"
              className="flex items-center gap-1 transition hover:text-primary"
              activeProps={{ className: activeClass }}
            >
              Oficina Educativa
              <ChevronDown
                size={16}
                className="transition group-hover:rotate-180"
              />
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 rounded-3xl bg-white p-3 opacity-0 shadow-xl ring-1 ring-slate-200 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="space-y-1">
                <Link
                  to="/oficinaEducativa/admisiones"
                  className="block rounded-2xl px-4 py-3 transition hover:bg-slate-100"
                >
                  <p className="font-semibold text-slate-900">Admisiones</p>

                  <p className="text-sm text-slate-500">
                    Cursos y procesos de ingreso.
                  </p>
                </Link>

                <Link
                  to="/oficinaEducativa/cuadro-honor"
                  className="block rounded-2xl px-4 py-3 transition hover:bg-slate-100"
                  activeProps={{ className: activeClass }}
                >
                  <p className="font-semibold text-slate-900">
                    Cuadro de Honor
                  </p>

                  <p className="text-sm text-slate-500">
                    Reconocimientos académicos.
                  </p>
                </Link>

                <Link
                  to="/oficinaEducativa/auxiliares"
                  className="block rounded-2xl px-4 py-3 transition hover:bg-slate-100"
                >
                  <p className="font-semibold text-slate-900">Auxiliares</p>

                  <p className="text-sm text-slate-500">
                    Convocatorias y formularios.
                  </p>
                </Link>

                <Link
                  to="/oficinaEducativa/jornadas"
                  className="block rounded-2xl px-4 py-3 transition hover:bg-slate-100"
                >
                  <p className="font-semibold text-slate-900">
                    Jornadas Científicas
                  </p>

                  <p className="text-sm text-slate-500">
                    Difusión e investigación.
                  </p>
                </Link>

                <Link
                  to="/oficinaEducativa/recursos-docentes"
                  className="block rounded-2xl px-4 py-3 transition hover:bg-slate-100"
                >
                  <p className="font-semibold text-slate-900">
                    Recursos Docentes
                  </p>

                  <p className="text-sm text-slate-500">
                    Material y documentos académicos.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <Link to="/biblioteca" activeProps={{ className: activeClass }}>
            Biblioteca
          </Link>

          <Link to="/tramites" activeProps={{ className: activeClass }}>
            Trámites
          </Link>

          <Link to="/plataformas" activeProps={{ className: activeClass }}>
            Plataformas
          </Link>

{/*
          <button onClick={toggle} className="rounded-xl p-2 hover:bg-slate-900 hover:text-white cursor-pointer">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
*/}
        </nav>

        {/* Botón móvil */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
          aria-expanded={open}
          aria-label="Abrir menú"
          onClick={() => setOpen((value) => !value)}
        >
          Menú
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-medium">
            <Link to="/" activeProps={{ className: activeClass }}>Inicio</Link>

            <Link to="/comunicados" activeProps={{ className: activeClass }}>Comunicados</Link>

            <Link to="/carreras" activeProps={{ className: activeClass }}>Carreras</Link>

            <Link to="/oficinaEducativa" activeProps={{ className: activeClass }}>Oficina Educativa</Link>

            <div className="ml-4 flex flex-col gap-3 border-l border-slate-200 pl-4 text-slate-600">
              <Link to="/oficinaEducativa/admisiones" activeProps={{ className: activeClass }}>Admisiones</Link>

              <Link to="/oficinaEducativa/cuadro-honor" activeProps={{ className: activeClass }}>Cuadro de Honor</Link>

              <Link to="/oficinaEducativa/auxiliares" activeProps={{ className: activeClass }}>Auxiliares</Link>

              <Link to="/oficinaEducativa/jornadas" activeProps={{ className: activeClass }}>Jornadas Científicas</Link>

              <Link to="/oficinaEducativa/recursos-docentes" activeProps={{ className: activeClass }}>
                Recursos Docentes
              </Link>
            </div>
            <Link to="/biblioteca" activeProps={{ className: activeClass }}>Biblioteca</Link>

            <Link to="/tramites" activeProps={{ className: activeClass }}>Trámites</Link>

            <Link to="/plataformas" activeProps={{ className: activeClass }}>Plataformas</Link>

{/*
            <button onClick={toggle} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              {dark ? 'Modo claro' : 'Modo oscuro'}
            </button>
*/}
          </nav>
        </div>
      )}
    </header>
  )
}
