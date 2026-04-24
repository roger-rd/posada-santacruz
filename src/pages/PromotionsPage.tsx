import { CheckCircle } from 'lucide-react'
import { PROMOTIONS } from '../data/content'
import PageHero from '../components/ui/PageHero'
import WhatsAppBtn from '../components/ui/WhatsAppBtn'

export default function PromotionsPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="Paquetes & Promociones"
        subtitle="Elige tu escapada perfecta — todo incluido, sin preocupaciones"
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=85"
        eyebrow="Ofertas especiales · Altos de Veracruz"
      />

      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info banner */}
          <div className="bg-forest-950 text-cream rounded-2xl px-6 py-4 mb-12 text-center">
            <p className="font-sans text-sm text-cream/80">
              Todos los paquetes incluyen <strong>hospedaje, cena, desayuno y descorche</strong>. Precios pueden variar según temporada. Consulta disponibilidad.
            </p>
          </div>

          {PROMOTIONS.map((promo, i) => (
            <div
              key={promo.id}
              className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-14 md:mb-20 pb-14 md:pb-20 border-b border-sand-200 last:border-0 last:mb-0 last:pb-0 ${i % 2 !== 0 ? 'lg:[&>div:first-child]:order-2' : ''}`}
            >
              {/* Image */}
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden h-64 md:h-80">
                  <img src={promo.image} alt={promo.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-espresso text-xs font-semibold px-3 py-1.5 rounded-full">
                  {promo.badge}
                </div>
                <div className="absolute bottom-4 right-4 bg-espresso/80 backdrop-blur rounded-2xl px-4 py-3 text-right">
                  <div className="font-display text-2xl text-gold">{promo.price}</div>
                  <div className="font-sans text-cream/70 text-xs">{promo.priceNote}</div>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="section-eyebrow mb-2">{promo.tagline}</p>
                <h2 className="font-display text-4xl text-espresso mb-3">{promo.name}</h2>
                <div className="w-10 h-px bg-gold mb-4" />
                <p className="font-sans text-espresso/65 leading-relaxed mb-6">{promo.description}</p>

                <div className="bg-sand-50 rounded-2xl p-5 mb-6">
                  <h4 className="font-display text-lg text-espresso mb-3">¿Qué incluye?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {promo.features.map(feat => (
                      <div key={feat} className="flex items-center gap-2 text-espresso/70">
                        <CheckCircle size={13} className="text-forest-600 flex-shrink-0" />
                        <span className="font-sans text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <WhatsAppBtn
                  message={promo.whatsappMsg}
                  label="Consultar este paquete"
                  className="w-full justify-center py-4"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-espresso text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="section-eyebrow text-gold/80 mb-3">¿No encuentras lo que buscas?</p>
          <h2 className="font-display text-4xl text-cream mb-4">Creamos tu paquete a medida</h2>
          <p className="font-sans text-cream/60 mb-8">Cuéntanos qué quieres vivir y lo armamos especialmente para ti.</p>
          <WhatsAppBtn
            message="Hola! Quiero un paquete personalizado en Altos de Veracruz. ¿Pueden ayudarme?"
            label="Armar paquete personalizado"
            className="text-base px-10 py-4"
          />
        </div>
      </section>
    </div>
  )
}
