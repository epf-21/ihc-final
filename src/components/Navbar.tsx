import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/fce-logo.png"
            alt="FCE"
            className="h-12 w-12 object-contain"
          />

          <div>
            <h1 className="font-bold text-primary">
              Facultad de Ciencias Económicas
            </h1>

            <p className="text-sm text-slate-500">
              Universidad Mayor de San Simón
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 font-medium md:flex">
          <Link to="/" activeProps={{ className: 'text-primary' }}>
            Inicio
          </Link>
          <Link to="/comunicados" activeProps={{ className: 'text-primary' }}>
            Comunicados
          </Link>
          <Link to="/carreras" activeProps={{ className: 'text-primary' }}>
            Carreras
          </Link>
          <Link to="/tramites" activeProps={{ className: 'text-primary' }}>
            Trámites
          </Link>
          <Link to="/biblioteca" activeProps={{ className: 'text-primary' }}>
            Biblioteca
          </Link>
          <Link to="/plataformas" activeProps={{ className: 'text-primary' }}>
            Plataformas
          </Link>
        </nav>

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

      {open ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-medium">
            <Link to="/">Inicio</Link>
            <Link to="/comunicados">Comunicados</Link>
            <Link to="/carreras">Carreras</Link>
            <Link to="/tramites">Trámites</Link>
            <Link to="/biblioteca">Biblioteca</Link>
            <Link to="/plataformas">Plataformas</Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
