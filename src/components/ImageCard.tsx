import { useState } from 'react'
import { ExternalLink, X } from 'lucide-react'

export function ImageCard({ image, alt }: { image: number; alt: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full overflow-hidden rounded-3xl bg-white text-left shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="relative">
          <img
            src={`/cuadro${image}.png`}
            alt={alt}
            className="h-96 w-full object-contain bg-slate-50"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20">
            <span className="rounded-xl bg-white/90 px-4 py-2 font-medium text-slate-800 opacity-0 transition group-hover:opacity-100">
              Clic para ampliar
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4">
          <span className="font-medium text-slate-700">
            Ver imagen completa
          </span>

          <ExternalLink
            size={18}
            className="text-primary transition group-hover:translate-x-1"
          />
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 rounded-full bg-white p-2 shadow-lg"
          >
            <X size={24} />
          </button>

          <img
            src={`/cuadro${image}.png`}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl bg-white object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
