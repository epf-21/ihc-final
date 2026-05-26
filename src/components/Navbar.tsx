import { Link } from '@tanstack/react-router'

export function Navbar() {
  return (
    <header className="bg-background shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <img
            src="/umss.jpg"
            alt="UMSS"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="font-bold text-primary">
              Facultad de Ciencias Económicas
            </h1>

            <p className="text-sm text-gray-500">
              Universidad Mayor de San Simón
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/">Inicio</Link>
          <Link to="/comunicados">Comunicados</Link>
          <Link to="/">Carreras</Link>
          <Link to="/">Trámites</Link>
          <Link to="/">Plataformas</Link>
        </nav>
      </div>
    </header>
  )
}
