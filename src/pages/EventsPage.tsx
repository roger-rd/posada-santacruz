import { EVENTS, CONTACT } from '../data/content'
import PageHero from '../components/ui/PageHero'
import WhatsAppBtn from '../components/ui/WhatsAppBtn'
import { CheckCircle, Users } from 'lucide-react'

export default function EventsPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="Eventos & Celebraciones"
        subtitle="Celebra entre montañas, con el escenario natural más hermoso de Sanare"
        image="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1400&q=85"
        eyebrow="Hacemos realidad tu evento perfecto"
      />

      {/* Intro */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="section-eyebrow mb-3">¿Por qué Altos de Veracruz?</p>
            <h2 className="font-display text-4xl md:text-5xl text-espresso mb-5">
              El escenario que<br /><em className="text-forest-700">todos recuerdan</em>
            </h2>
            <p className="font-sans text-espresso/65 text-lg leading-relaxed">
              A 1.600 mts sobre el mar, rodeados de montañas y neblina, con jardines exuberantes y el Restaurante Yagrumo para hasta 154 personas. Cada evento en Altos de Veracruz es una experiencia que se convierte en recuerdo permanente.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: '300+', label: 'Personas capacidad máxima' },
              { value: '154', label: 'Comensales en restaurante' },
              { value: '360°', label: 'Vista panorámica' },
              { value: '24h', label: 'Vigilancia privada' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center bg-sand-50 border border-sand-200 rounded-2xl p-5">
                <div className="font-display text-3xl text-forest-700 mb-1">{value}</div>
                <div className="font-sans text-espresso/60 text-xs leading-tight">{label}</div>
              </div>
            ))}
          </div>

          {/* Event cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {EVENTS.map((event, i) => (
              <div key={event.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-sand-100">
                <div className="relative h-56 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                  <div className="absolute top-4 left-4 text-3xl">{event.icon}</div>
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-espresso/70 backdrop-blur text-cream/80 text-xs font-sans px-2.5 py-1.5 rounded-full">
                    <Users size={10} /> {event.capacity}
                  </div>
                  <h3 className="absolute bottom-4 left-4 font-display text-2xl text-cream">{event.title}</h3>
                </div>

                <div className="p-6">
                  <p className="font-sans text-espresso/65 text-sm leading-relaxed mb-5">{event.desc}</p>

                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {event.services.map(s => (
                      <div key={s} className="flex items-center gap-1.5 text-espresso/65">
                        <CheckCircle size={12} className="text-forest-600 flex-shrink-0" />
                        <span className="font-sans text-xs">{s}</span>
                      </div>
                    ))}
                  </div>

                  <WhatsAppBtn
                    message={`Hola! Me interesa organizar un evento: ${event.title}. ¿Pueden darme información y presupuesto?`}
                    label="Solicitar presupuesto"
                    variant="dark"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-espresso">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-5">🎊</div>
          <p className="section-eyebrow text-gold/80 mb-3">¿Listo para celebrar?</p>
          <h2 className="font-display text-4xl text-cream mb-4">Todos los presupuestos son personalizados</h2>
          <p className="font-sans text-cream/60 text-lg mb-8 max-w-xl mx-auto">
            Nos encargamos de la producción completa del evento y nos aseguramos de hacerlo el más especial. Escríbenos y lo planificamos juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppBtn
              message="Hola! Quiero información para organizar un evento en Altos de Veracruz."
              label="Cotizar mi evento"
              className="px-10 py-4 text-base"
            />
            <a
              href={`mailto:${CONTACT.emailEventos}`}
              className="inline-flex items-center justify-center gap-2 border border-cream/40 text-cream px-10 py-4 rounded-full font-sans font-medium text-base hover:bg-cream/10 transition-all duration-300"
            >
              Enviar correo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
