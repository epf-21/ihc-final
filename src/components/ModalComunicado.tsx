import { X, Download } from 'lucide-react'
import { useEffect } from 'react'

interface ImageModalProps {
  src: string
  title: string
  onClose: () => void
}

export const ImageModal = ({ src, title, onClose }: ImageModalProps) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <span className="text-sm font-semibold text-slate-900">{title}</span>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800"
          >
            <X size={16} />
          </button>
        </div>

        <div className="overflow-auto bg-slate-50">
          <img
            src={src}
            alt={title}
            className="block w-full object-contain"
          />
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-slate-100 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
          >
            Cerrar
          </button>
          <a
            href={src}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            <Download size={14} />
            Descargar
          </a>
        </div>
      </div>
    </div >
  )
}
