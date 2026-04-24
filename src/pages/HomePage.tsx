import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ChevronDown, ArrowRight } from 'lucide-react'
import { HERO_SLIDES, ROOMS, EXPERIENCES, PROMOTIONS, CONTACT } from '../data/content'
import WhatsAppBtn from '../components/ui/WhatsAppBtn'

const WaIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function HomePage() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 6000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {HERO_SLIDES.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-[1800ms] ${i === slide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={s.image} alt={s.label} className="w-full h-full object-cover animate-ken-burns" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/65 via-espresso/25 to-espresso/75 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 to-transparent z-10" />

        <div className="relative z-20 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 text-gold/90 mb-6 animate-fade-in">
            <MapPin size={13} />
            <span className="font-sans text-xs tracking-[0.3em] uppercase">Sanare · Estado Lara · 1.600 mts sobre el mar</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-[0.9] mb-7 max-w-3xl">
            <span className="block opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Hospédate
            </span>
            <span className="block italic text-gold opacity-0 animate-fade-up" style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}>
              entre montañas,
            </span>
            <span className="block opacity-0 animate-fade-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              café y naturaleza
            </span>
          </h1>

          <p className="font-sans text-cream/75 text-lg md:text-xl max-w-lg leading-relaxed mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            Una experiencia premium en Sanare para descansar, conectar y disfrutar. Con 18°C todo el año y vistas de 360°.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-full font-sans font-semibold hover:bg-[#1ebe5a] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <WaIcon /> Reservar ahora
            </a>
            <Link
              to="/habitaciones"
              className="flex items-center justify-center gap-2 border border-cream/60 text-cream px-8 py-4 rounded-full font-sans font-medium hover:bg-cream/10 transition-all duration-300"
            >
              Ver habitaciones <ArrowRight size={16} />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12 mt-12 opacity-0 animate-fade-up" style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>
            {[['18°C', 'Temperatura ideal'], ['1.600m', 'Altura'], ['360°', 'Vista panorámica']].map(([v, l]) => (
              <div key={v}>
                <div className="font-display text-2xl md:text-3xl text-gold">{v}</div>
                <div className="font-sans text-cream/50 text-xs mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`h-1 rounded-full transition-all duration-500 ${i === slide ? 'w-8 bg-gold' : 'w-2 bg-cream/40'}`} />
          ))}
        </div>

        <button
          onClick={() => document.querySelector('#preview')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 right-6 z-20 flex flex-col items-center gap-1 text-cream/50 hover:text-gold transition-colors"
        >
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </section>

      {/* ── QUICK NAV CARDS ── */}
      <section id="preview" className="py-16 md:py-20 bg-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <p className="section-eyebrow text-gold/80 mb-3">Descubre la estancia</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream">¿Qué quieres explorar?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { to: '/habitaciones', label: 'Habitaciones', emoji: '🛏️', desc: '4 tipos de alojamiento' },
              { to: '/experiencias', label: 'Experiencias', emoji: '🌿', desc: 'Natura, café y más' },
              { to: '/ruta-cafe', label: 'Ruta del Café', emoji: '☕', desc: 'Tour especializado' },
              { to: '/eventos', label: 'Eventos', emoji: '🎉', desc: 'Bodas, retiros, fiestas' },
            ].map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className={`reveal reveal-delay-${i + 1} group bg-white/5 border border-cream/10 rounded-2xl p-5 md:p-6 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-center`}
              >
                <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform">{item.emoji}</div>
                <div className="font-display text-lg md:text-xl text-cream mb-1">{item.label}</div>
                <div className="font-sans text-cream/50 text-xs">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2 ROOMS PREVIEW ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 reveal">
            <div>
              <p className="section-eyebrow mb-2">Alojamiento</p>
              <h2 className="font-display text-4xl md:text-5xl text-espresso">
                Nuestras<br /><em className="text-forest-700">habitaciones</em>
              </h2>
            </div>
            <Link to="/habitaciones" className="hidden sm:flex items-center gap-2 font-sans text-sm text-forest-700 hover:text-forest-900 font-medium transition-colors">
              Ver todas <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ROOMS.slice(0, 2).map((room, i) => (
              <div key={room.id} className={`reveal reveal-delay-${i + 1} group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
                  {room.badge && (
                    <div className="absolute top-4 left-4 bg-gold text-espresso text-xs font-sans font-semibold px-3 py-1.5 rounded-full">{room.badge}</div>
                  )}
                  <div className="absolute bottom-4 right-4">
                    <div className="font-display text-2xl text-white">{room.price}</div>
                    <div className="font-sans text-white/70 text-xs">{room.priceNote}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-sans text-xs tracking-wider uppercase text-gold/80 mb-1">{room.tagline}</p>
                  <h3 className="font-display text-2xl text-espresso mb-2">{room.name}</h3>
                  <p className="font-sans text-espresso/60 text-sm leading-relaxed mb-4">{room.shortDesc}</p>
                  <div className="flex gap-3">
                    <Link to={`/habitaciones/${room.id}`} className="flex-1 text-center py-3 border border-espresso/20 rounded-xl font-sans text-sm text-espresso hover:bg-espresso hover:text-cream transition-all">
                      Ver detalles
                    </Link>
                    <WhatsAppBtn message={`Hola! Me interesa la ${room.name}`} label="Reservar" className="flex-1 justify-center py-3 rounded-xl text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 reveal">
            <Link to="/habitaciones" className="inline-flex items-center gap-2 btn-outline">
              Ver las 4 habitaciones <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3 EXPERIENCES PREVIEW ── */}
      <section className="py-16 md:py-24 bg-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 reveal">
            <div>
              <p className="section-eyebrow text-gold/80 mb-2">Experiencias</p>
              <h2 className="font-display text-4xl md:text-5xl text-cream">
                Más que<br /><em className="text-gold">hospedaje</em>
              </h2>
            </div>
            <Link to="/experiencias" className="hidden sm:flex items-center gap-2 font-sans text-sm text-gold/80 hover:text-gold font-medium transition-colors">
              Ver todas <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {EXPERIENCES.slice(0, 3).map((exp, i) => (
              <Link key={exp.id} to={`/experiencias/${exp.id}`}
                className={`reveal reveal-delay-${i + 1} group bg-white/5 border border-cream/10 rounded-2xl p-7 hover:border-gold/30 hover:bg-white/10 transition-all duration-400 hover:-translate-y-1`}>
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{exp.icon}</div>
                <h3 className="font-display text-xl text-cream mb-2">{exp.title}</h3>
                <p className="font-sans text-cream/55 text-sm leading-relaxed mb-4">{exp.shortDesc}</p>
                <div className="flex items-center gap-1 font-sans text-gold/70 text-xs group-hover:text-gold transition-colors">
                  Conocer más <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 reveal">
            <Link to="/experiencias" className="inline-flex items-center gap-2 btn-outline-light">
              Ver todas las experiencias <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2 PROMOTIONS PREVIEW ── */}
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 reveal">
            <div>
              <p className="section-eyebrow mb-2">Paquetes</p>
              <h2 className="font-display text-4xl md:text-5xl text-espresso">
                Escapadas<br /><em className="text-forest-700">especiales</em>
              </h2>
            </div>
            <Link to="/promociones" className="hidden sm:flex items-center gap-2 font-sans text-sm text-forest-700 hover:text-forest-900 font-medium transition-colors">
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROMOTIONS.slice(0, 2).map((promo, i) => (
              <div key={promo.id} className={`reveal reveal-delay-${i + 1} group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={promo.image} alt={promo.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 text-espresso text-xs font-semibold px-3 py-1.5 rounded-full">{promo.badge}</div>
                  <div className="absolute bottom-4 right-4">
                    <div className="font-display text-xl text-white">{promo.price}</div>
                    <div className="font-sans text-white/70 text-xs">{promo.priceNote}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-sans text-xs tracking-wider uppercase text-gold/80 mb-1">{promo.tagline}</p>
                  <h3 className="font-display text-xl text-espresso mb-2">{promo.name}</h3>
                  <p className="font-sans text-espresso/60 text-sm mb-4">{promo.shortDesc}</p>
                  <WhatsAppBtn message={promo.whatsappMsg} label="Consultar paquete" variant="dark" className="w-full justify-center" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 reveal">
            <Link to="/promociones" className="inline-flex items-center gap-2 btn-outline">
              Ver todos los paquetes <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative py-24 overflow-hidden">
        <img src="/src/assets/img/cta_final/montaña-te-espera.jpeg" alt="Vista nocturna" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-espresso/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center reveal">
          <p className="section-eyebrow text-gold/80 mb-4">¿Listo para escapar?</p>
          <h2 className="font-display text-4xl md:text-6xl text-cream mb-5 leading-tight">
            Tu montaña te espera
          </h2>
          <p className="font-sans text-cream/70 text-lg mb-10 max-w-xl mx-auto">
            Escríbenos ahora y te ayudamos a planear la escapada perfecta. Respuesta en minutos, sin complicaciones.
          </p>
          <WhatsAppBtn label="Planear mi escapada ahora" className="text-base px-10 py-5" />
        </div>
      </section>
    </div>
  )
}
