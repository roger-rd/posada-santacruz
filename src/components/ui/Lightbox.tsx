import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  images: string[]
  startIndex?: number
  onClose: () => void
}

export default function Lightbox({ images, startIndex = 0, onClose }: Props) {
  const [current, setCurrent] = useState(startIndex)

  useEffect(() => {
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrent(c => (c + 1) % images.length)
      if (e.key === 'ArrowLeft') setCurrent(c => (c - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollY)
      window.removeEventListener('keydown', handleKey)
    }
  }, [images.length, onClose])

  const content = (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      className="bg-black/95"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{ position: 'fixed', top: 16, right: 16, zIndex: 10000 }}
        className="w-11 h-11 bg-white/15 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <X size={22} />
      </button>

      {/* Counter */}
      <div
        style={{ position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 10000 }}
        className="font-sans text-white/60 text-sm bg-black/40 px-3 py-1 rounded-full"
      >
        {current + 1} / {images.length}
      </div>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); setCurrent(c => (c - 1 + images.length) % images.length) }}
          style={{ position: 'fixed', left: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 10000 }}
          className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft size={26} />
        </button>
      )}

      {/* Main image */}
      <img
        src={images[current]}
        alt=""
        style={{ maxWidth: '88vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: 12, display: 'block' }}
        className="shadow-2xl"
        onClick={e => e.stopPropagation()}
      />

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={e => { e.stopPropagation(); setCurrent(c => (c + 1) % images.length) }}
          style={{ position: 'fixed', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 10000 }}
          className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight size={26} />
        </button>
      )}

      {/* Thumbnails */}
      {images.length > 1 && (
        <div
          style={{ position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 10000 }}
          className="flex gap-2 overflow-x-auto max-w-[88vw] px-2 pb-1 scrollbar-hide"
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={e => { e.stopPropagation(); setCurrent(i) }}
              className={`flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                i === current ? 'border-yellow-400 opacity-100' : 'border-transparent opacity-45 hover:opacity-75'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )

  return createPortal(content, document.body)
}
