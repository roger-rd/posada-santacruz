import { useState } from 'react'
import { GALLERY_IMAGES } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Lightbox from '../components/ui/Lightbox'

const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'habitaciones', label: 'Habitaciones' },
  { id: 'naturaleza', label: 'Naturaleza' },
  { id: 'restaurante', label: 'Restaurante' },
  { id: 'cafe', label: 'Café' },
  { id: 'estancia', label: 'Estancia' },
]

export default function GalleryPage() {
  const [active, setActive] = useState('todos')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxStart, setLightboxStart] = useState(0)

  const filtered = active === 'todos' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(i => i.category === active)
  const filteredSrcs = filtered.map(i => i.src)

  const openLightbox = (idx: number) => { setLightboxStart(idx); setLightboxOpen(true) }

  return (
    <div className="page-enter">
      <PageHero
        title="Galería"
        subtitle="Imágenes que hablan por sí solas"
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85"
        eyebrow="Altos de Veracruz en imágenes"
      />

      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2 rounded-full font-sans text-sm capitalize transition-all duration-300 ${
                  active === cat.id
                    ? 'bg-espresso text-cream font-semibold shadow-md'
                    : 'bg-white border border-sand-200 text-espresso/70 hover:border-espresso/40 hover:text-espresso'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="font-sans text-espresso/40 text-sm text-center mb-8">{filtered.length} imágenes</p>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${img.tall ? 'h-64 md:h-80' : 'h-40 md:h-52'}`}
                />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/25 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">+</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3 bg-gradient-to-t from-espresso/70 to-transparent">
                  <p className="font-sans text-cream text-xs">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-espresso/40 font-sans">No hay imágenes en esta categoría aún</div>
          )}
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox images={filteredSrcs} startIndex={lightboxStart} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  )
}
