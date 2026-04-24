import { useState } from 'react'
import { Clock, Users, ChefHat, Wine } from 'lucide-react'
import { RESTAURANT_DISHES, CONTACT } from '../data/content'
import PageHero from '../components/ui/PageHero'
import WhatsAppBtn from '../components/ui/WhatsAppBtn'
import Lightbox from '../components/ui/Lightbox'

const RESTAURANT_IMAGES = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=85',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=85',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=900&q=85',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&q=85',
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&q=85',
]

export default function RestaurantPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxStart, setLightboxStart] = useState(0)

  return (
    <div className="page-enter">
      <PageHero
        title="Restaurante Yagrumo"
        subtitle="Gastronomía venezolana elevada a su máxima expresión"
        image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=85"
        eyebrow="154 comensales · Lun–Dom 12:30–5pm"
      />

      {/* Description + info */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <p className="section-eyebrow mb-3">Nuestra cocina</p>
              <h2 className="font-display text-4xl md:text-5xl text-espresso mb-5">
                Sabores que <em className="text-forest-700">cuentan historias</em>
              </h2>
              <div className="w-12 h-px bg-gold mb-5" />
              <p className="font-sans text-espresso/65 leading-relaxed mb-4">
                El Restaurante Yagrumo nació del amor por la cocina venezolana y la riqueza cultural de la región larense. Cada plato es una reinterpretación moderna de recetas familiares, elaborado con ingredientes locales y de temporada.
              </p>
              <p className="font-sans text-espresso/65 leading-relaxed mb-8">
                Con vista panorámica desde sus terrazas, el restaurante tiene capacidad para 154 comensales en salón interior y exterior. Los fines de semana se convierte en el punto de encuentro gastronómico de Sanare.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: 'Horario', value: 'Lun–Dom · 12:30–5:00 pm' },
                  { icon: Users, label: 'Capacidad', value: '154 comensales' },
                  { icon: ChefHat, label: 'Tipo', value: 'Venezolana contemporánea' },
                  { icon: Wine, label: 'Bebidas', value: 'Vinos · Cervezas artesanales' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-sand-50 rounded-2xl p-4 border border-sand-200">
                    <Icon size={18} className="text-gold mb-2" />
                    <div className="font-sans text-xs text-espresso/50 uppercase tracking-wide">{label}</div>
                    <div className="font-sans text-sm text-espresso font-medium mt-1">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main image */}
            <div className="relative cursor-pointer" onClick={() => { setLightboxStart(0); setLightboxOpen(true) }}>
              <div className="rounded-3xl overflow-hidden h-72 md:h-[450px] hover:shadow-2xl transition-shadow">
                <img src={RESTAURANT_IMAGES[0]} alt="Restaurante Yagrumo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-espresso text-cream p-5 rounded-2xl shadow-xl">
                <ChefHat size={28} className="text-gold mb-1" />
                <div className="font-display text-sm">Cocina</div>
                <div className="font-display text-sm">Venezolana</div>
                <div className="font-sans text-gold text-xs">Premium</div>
              </div>
            </div>
          </div>

          {/* Photo gallery */}
          <div>
            <h3 className="font-display text-3xl text-espresso mb-6 text-center">El ambiente</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {RESTAURANT_IMAGES.slice(1).map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden h-40 md:h-52 cursor-pointer hover:scale-[1.02] transition-transform"
                  onClick={() => { setLightboxStart(i + 1); setLightboxOpen(true) }}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-14 md:py-20 bg-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-eyebrow text-gold/80 mb-3">Menú</p>
            <h2 className="font-display text-4xl text-cream">Nuestras especialidades</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {RESTAURANT_DISHES.map((dish) => (
              <div key={dish.name} className="flex items-start gap-4 bg-white/5 border border-cream/10 rounded-2xl p-5 hover:border-gold/20 transition-colors">
                <span className="text-3xl flex-shrink-0">{dish.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-sans font-medium text-cream">{dish.name}</h4>
                    <span className="bg-gold/20 text-gold text-[10px] font-sans px-2 py-0.5 rounded-full flex-shrink-0">{dish.tag}</span>
                  </div>
                  <p className="font-sans text-cream/50 text-sm mt-0.5">{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-sans text-cream/60 mb-5 text-sm">* El desayuno es exclusivo para huéspedes. Reserva recomendada fines de semana.</p>
            <WhatsAppBtn
              message="Hola! Quiero reservar una mesa en el restaurante Yagrumo."
              label="Reservar mesa ahora"
              className="text-base px-10 py-4"
            />
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox images={RESTAURANT_IMAGES} startIndex={lightboxStart} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  )
}
