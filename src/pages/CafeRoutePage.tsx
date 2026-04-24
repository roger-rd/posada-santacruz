import { useState } from 'react'
import { Clock } from 'lucide-react'
import { CAFE_ROUTE } from '../data/content'
import PageHero from '../components/ui/PageHero'
import WhatsAppBtn from '../components/ui/WhatsAppBtn'
import Lightbox from '../components/ui/Lightbox'

export default function CafeRoutePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxStart, setLightboxStart] = useState(0)

  const openLightbox = (idx: number) => {
    setLightboxStart(idx)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="page-enter">
        <PageHero
          title="Ruta del Café"
          subtitle="Un recorrido sensorial por los mejores cafetales de Sanare"
          image={CAFE_ROUTE.coverImage}
          eyebrow="Experiencia exclusiva · Altos de Veracruz"
        />

        {/* Intro */}
        <section className="py-14 md:py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="section-eyebrow mb-3">Café de montaña</p>
                <h2 className="font-display text-4xl md:text-5xl text-espresso mb-5 leading-tight">
                  De la semilla a la <em className="text-sand-600">taza</em>, en la montaña
                </h2>
                <div className="w-12 h-px bg-gold mb-5" />
                <p className="font-sans text-espresso/65 leading-relaxed mb-5">
                  {CAFE_ROUTE.description}
                </p>
                <p className="font-sans text-espresso/65 leading-relaxed mb-8">
                  Sanare produce café arábica de altura entre 1.200 y 1.900 msnm, con perfiles de taza que incluyen notas de chocolate, frutas rojas, caramelo y avellana. Una experiencia única que pocos turistas conocen.
                </p>
                <WhatsAppBtn
                  message="Hola! Me interesa hacer la Ruta del Café en Altos de Veracruz. ¿Cuándo hay disponibilidad?"
                  label="Reservar la ruta ahora"
                />
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-2 gap-3">
                {CAFE_ROUTE.images.slice(0, 4).map((img, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform ${i === 0 ? 'col-span-2 h-52' : 'h-36'}`}
                    onClick={() => openLightbox(i)}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* 6 Highlights */}
            <div>
              <h3 className="font-display text-3xl text-espresso text-center mb-8">La experiencia paso a paso</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {CAFE_ROUTE.highlights.map((h, i) => (
                  <div key={i} className="bg-sand-50 border border-sand-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">{h.icon}</div>
                    <h4 className="font-display text-xl text-espresso mb-2">{h.title}</h4>
                    <p className="font-sans text-espresso/65 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary timeline */}
        <section className="py-14 md:py-20 bg-espresso">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="section-eyebrow text-gold/80 mb-3">Itinerario</p>
              <h2 className="font-display text-4xl text-cream">Un día en los cafetales</h2>
            </div>

            <div className="space-y-5">
              {CAFE_ROUTE.steps.map((step, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="font-sans text-gold text-sm font-medium">{step.time}</span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-3 h-3 bg-gold rounded-full mt-1 ring-4 ring-gold/20" />
                    {i < CAFE_ROUTE.steps.length - 1 && (
                      <div className="w-px flex-1 bg-gold/20 mt-2 min-h-[32px]" />
                    )}
                  </div>
                  <div className="bg-white/5 border border-cream/10 rounded-2xl p-5 flex-1 hover:border-gold/20 transition-colors mb-5">
                    <h4 className="font-display text-xl text-cream mb-1">{step.title}</h4>
                    <p className="font-sans text-cream/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <WhatsAppBtn
                message="Hola! Quiero reservar la Ruta del Café completa. ¿Cuáles son los próximos disponibles?"
                label="Reservar ahora"
                className="text-base px-10 py-4"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox — fuera del div principal pero dentro del fragment */}
      {lightboxOpen && (
        <Lightbox
          images={CAFE_ROUTE.images}
          startIndex={lightboxStart}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
