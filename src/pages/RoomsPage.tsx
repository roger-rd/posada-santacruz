import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Users, CheckCircle, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { ROOMS, CONTACT } from '../data/content'
import PageHero from '../components/ui/PageHero'
import WhatsAppBtn from '../components/ui/WhatsAppBtn'
import Lightbox from '../components/ui/Lightbox'

function RoomDetail({ room }: { room: typeof ROOMS[0] }) {
  const [currentImg, setCurrentImg] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxStart, setLightboxStart] = useState(0)

  const openLightbox = (idx: number) => { setLightboxStart(idx); setLightboxOpen(true) }

  return (
    <div className="page-enter">
      <div className="pt-16">
        {/* Back */}
        <div className="bg-espresso py-3 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <Link to="/habitaciones" className="flex items-center gap-2 text-cream/60 hover:text-gold text-sm transition-colors">
              <ArrowLeft size={16} /> Todas las habitaciones
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Photo album */}
            <div>
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden h-72 md:h-96 mb-3 cursor-pointer" onClick={() => openLightbox(currentImg)}>
                <img src={room.images[currentImg]} alt={room.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-espresso/10 hover:bg-espresso/0 transition-colors" />
                <div className="absolute bottom-4 right-4 bg-espresso/70 backdrop-blur text-cream text-xs font-sans px-3 py-1.5 rounded-full">
                  {currentImg + 1} / {room.images.length} · Clic para ampliar
                </div>
                {currentImg > 0 && (
                  <button onClick={e => { e.stopPropagation(); setCurrentImg(c => c - 1) }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-espresso/60 rounded-full flex items-center justify-center text-white hover:bg-espresso/80 transition-colors">
                    <ChevronLeft size={18} />
                  </button>
                )}
                {currentImg < room.images.length - 1 && (
                  <button onClick={e => { e.stopPropagation(); setCurrentImg(c => c + 1) }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-espresso/60 rounded-full flex items-center justify-center text-white hover:bg-espresso/80 transition-colors">
                    <ChevronRight size={18} />
                  </button>
                )}
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {room.images.map((img, i) => (
                  <button key={i} onClick={() => { setCurrentImg(i); openLightbox(i) }}
                    className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${i === currentImg ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-90'}`}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              {room.badge && (
                <div className="inline-block bg-gold text-espresso text-xs font-semibold px-3 py-1.5 rounded-full mb-4">{room.badge}</div>
              )}
              <p className="section-eyebrow mb-2">{room.tagline}</p>
              <h1 className="font-display text-4xl md:text-5xl text-espresso mb-4">{room.name}</h1>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-1.5 text-espresso/60 text-sm font-sans">
                  <Users size={15} /> {room.capacity}
                </div>
                <div className="w-px h-4 bg-espresso/20" />
                <div className="font-display text-3xl text-forest-700">{room.price}</div>
                <div className="font-sans text-espresso/50 text-xs">{room.priceNote}</div>
              </div>
              <div className="w-12 h-px bg-gold mb-5" />
              <p className="font-sans text-espresso/65 leading-relaxed mb-6">{room.description}</p>

              {/* Features */}
              <div className="bg-sand-50 rounded-2xl p-5 mb-5">
                <h3 className="font-display text-lg text-espresso mb-3">Incluye</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {room.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-espresso/70">
                      <CheckCircle size={14} className="text-forest-600 flex-shrink-0" />
                      <span className="font-sans text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes notice */}
              <div className="bg-forest-50 border border-forest-200 rounded-xl px-4 py-3 mb-6">
                <p className="font-sans text-forest-800 text-sm">✓ {room.includes}</p>
              </div>

              <div className="flex gap-3">
                <WhatsAppBtn
                  message={`Hola! Me interesa la ${room.name}. ¿Hay disponibilidad?`}
                  label="Reservar esta habitación"
                  className="flex-1 justify-center py-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox images={room.images} startIndex={lightboxStart} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  )
}

function RoomsIndex() {
  return (
    <div className="page-enter">
      <PageHero
        title="Habitaciones"
        subtitle="Diseñadas para el descanso total, con vistas que te robarán el aliento"
        image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1400&q=85"
        eyebrow="Alojamiento · Altos de Veracruz"
      />

      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info bar */}
          <div className="bg-forest-950 text-cream rounded-2xl px-6 py-4 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="font-sans text-sm text-cream/80">
              ✓ Todas las habitaciones incluyen <strong>cena, desayuno y descorche</strong>
            </p>
            <WhatsAppBtn label="Consultar disponibilidad" className="text-sm py-2.5" />
          </div>

          {ROOMS.map((room, idx) => (
            <RoomCard key={room.id} room={room} reversed={idx % 2 !== 0} />
          ))}
        </div>
      </section>
    </div>
  )
}

function RoomCard({ room, reversed }: { room: typeof ROOMS[0]; reversed: boolean }) {
  const [currentImg, setCurrentImg] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxStart, setLightboxStart] = useState(0)

  const openLightbox = (idx: number) => { setLightboxStart(idx); setLightboxOpen(true) }

  return (
    <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24 pb-16 md:pb-24 border-b border-sand-200 last:border-0 last:mb-0 last:pb-0 ${reversed ? 'lg:direction-rtl' : ''}`}>
      {/* Photo album */}
      <div className={reversed ? 'lg:order-2' : ''}>
        <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 cursor-pointer mb-3" onClick={() => openLightbox(currentImg)}>
          <img src={room.images[currentImg]} alt={room.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          {room.badge && (
            <div className="absolute top-4 left-4 bg-gold text-espresso text-xs font-semibold px-3 py-1.5 rounded-full">{room.badge}</div>
          )}
          <div className="absolute bottom-4 right-4 bg-espresso/70 backdrop-blur text-cream text-xs font-sans px-3 py-1.5 rounded-full flex items-center gap-1">
            🔍 {currentImg + 1}/{room.images.length}
          </div>
          {currentImg > 0 && (
            <button onClick={e => { e.stopPropagation(); setCurrentImg(c => c - 1) }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-espresso/60 rounded-full flex items-center justify-center text-white">
              <ChevronLeft size={16} />
            </button>
          )}
          {currentImg < room.images.length - 1 && (
            <button onClick={e => { e.stopPropagation(); setCurrentImg(c => c + 1) }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-espresso/60 rounded-full flex items-center justify-center text-white">
              <ChevronRight size={16} />
            </button>
          )}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {room.images.map((img, i) => (
            <button key={i} onClick={() => { setCurrentImg(i); openLightbox(i) }}
              className={`flex-shrink-0 w-16 h-11 rounded-lg overflow-hidden border-2 transition-all ${i === currentImg ? 'border-gold' : 'border-transparent opacity-55 hover:opacity-80'}`}>
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? 'lg:order-1' : ''}>
        <p className="section-eyebrow mb-2">{room.tagline}</p>
        <h2 className="font-display text-3xl md:text-4xl text-espresso mb-3">{room.name}</h2>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-espresso/60 text-sm font-sans">
            <Users size={14} /> {room.capacity}
          </div>
          <div className="font-display text-2xl text-forest-700">{room.price} <span className="font-sans text-espresso/50 text-sm">{room.priceNote}</span></div>
        </div>
        <div className="w-10 h-px bg-gold mb-4" />
        <p className="font-sans text-espresso/65 text-sm leading-relaxed mb-5">{room.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-5">
          {room.features.slice(0, 6).map(f => (
            <div key={f} className="flex items-center gap-1.5 text-espresso/65">
              <CheckCircle size={12} className="text-forest-600 flex-shrink-0" />
              <span className="font-sans text-xs">{f}</span>
            </div>
          ))}
        </div>

        <div className="bg-forest-50 border border-forest-200 rounded-xl px-4 py-2.5 mb-5">
          <p className="font-sans text-forest-800 text-xs">✓ {room.includes}</p>
        </div>

        <div className="flex gap-3">
          <Link to={`/habitaciones/${room.id}`}
            className="flex-1 text-center py-3 border border-espresso/25 rounded-xl font-sans text-sm text-espresso hover:bg-espresso hover:text-cream transition-all">
            Ver fotos completas
          </Link>
          <WhatsAppBtn message={`Hola! Me interesa la ${room.name}`} label="Reservar" className="flex-1 justify-center py-3 rounded-xl text-sm" />
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox images={room.images} startIndex={lightboxStart} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  )
}

export default function RoomsPage() {
  const { id } = useParams()
  if (id) {
    const room = ROOMS.find(r => r.id === id)
    if (!room) return <div className="pt-32 text-center">Habitación no encontrada</div>
    return <RoomDetail room={room} />
  }
  return <RoomsIndex />
}
