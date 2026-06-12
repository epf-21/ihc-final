import { Link, useMatches } from '@tanstack/react-router'

export function Breadcrumbs() {
  const matches = useMatches()
  const crumbs = matches.filter((match) => match.pathname)

  return (
    <div className="bg-gray-200">
      <nav className="py-2 px-4 mx-auto max-w-7xl flex items-center gap-2 text-slate-500">
        {crumbs.map((match, index) => {
          const last = index === crumbs.length - 1
          const label = match.loaderData?.crumb

          return (
            <div
              key={match.id}
              className="flex items-center gap-2"
            >
              {last ? (
                <span className="font-medium text-slate-900">
                  {label}
                </span>
              ) : (
                  <Link
                    to={match.pathname}
                    className="hover:text-primary"
                  >
                    {label}
                  </Link>
                )}

              {!last && <span>/</span>}
            </div>
          )
        })}
      </nav>
    </div>
  )
}
