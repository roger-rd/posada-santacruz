import { Leaf, Shield, Star, Wind, Heart, Mountain } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import WhatsAppBtn from '../components/ui/WhatsAppBtn'

const PILLARS = [
  { icon: Leaf, title: 'Naturaleza Pura', desc: 'Bosques, neblina y aire fresco a 1.600 mts en la Sierra de Portuguesa, Sanare.' },
  { icon: Star, title: 'Experiencia Premium', desc: 'Infraestructura moderna con materiales tradicionales: piedra, ladrillo, caña y vidrio.' },
  { icon: Shield, title: 'Seguridad 24/7', desc: 'Cerco eléctrico, circuito cerrado de cámaras y vigilancia privada las 24 horas.' },
  { icon: Wind, title: 'Clima Perfecto', desc: '17–18°C todo el año. Sin calor extremo, sin frío intenso. Confort eterno.' },
  { icon: Heart, title: 'Hospitalidad', desc: 'Un equipo apasionado que trata a cada huésped como parte de la familia Altos.' },
  { icon: Mountain, title: 'Vista 360°', desc: 'En días despejados: valles de Quibor, El Tocuyo y el Relámpago del Catatumbo.' },
]

const TEAM_VALUES = [
  { icon: '🤝', title: 'Hospitalidad', sub: 'De corazón' },
  { icon: '🌱', title: 'Sostenibilidad', sub: 'Con la naturaleza' },
  { icon: '⭐', title: 'Excelencia', sub: 'En cada detalle' },
  { icon: '🇻🇪', title: 'Autenticidad', sub: 'Venezolana y orgullosa' },
]

export default function AboutPage() {
  return (
    <div className="page-enter">
      <PageHero
        title="Nuestra Historia"
        subtitle="Una posada que nació del amor por Sanare, la montaña y la hospitalidad venezolana"
        image="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1400&q=85"
        eyebrow="Quiénes somos"
      />

      {/* Story */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="section-eyebrow mb-3">Altos de Veracruz</p>
              <h2 className="font-display text-4xl md:text-5xl text-espresso mb-5 leading-tight">
                Un sueño hecho<br /><em className="text-forest-700">posada</em>
              </h2>
              <div className="w-12 h-px bg-gold mb-6" />
              <p className="font-sans text-espresso/65 leading-relaxed mb-4">
                Altos de Veracruz nació de un sueño: crear un espacio donde las personas pudieran reconectarse con la naturaleza, la gastronomía y el descanso auténtico, sin salir de Venezuela.
              </p>
              <p className="font-sans text-espresso/65 leading-relaxed mb-4">
                Ubicada en lo más alto de una colina en Sanare, Estado Lara, a 1.600 metros de altura, la estancia fue diseñada para integrarse con el paisaje de montaña. Su infraestructura combina materiales tradicionales de la zona — piedra, ladrillo artesanal, techos de caña y pisos de cemento pulido — con amplios ventanales de vidrio que enmarcan la vista como una pintura viva.
              </p>
              <p className="font-sans text-espresso/65 leading-relaxed">
                Hoy, Altos de Veracruz es mucho más que una posada. Es un punto de encuentro para familias, parejas y viajeros que buscan algo diferente. Un lugar que enamora desde el primer momento y del que siempre se quiere volver.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-80 md:h-[450px]">
                <img src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=900&q=85" alt="Altos de Veracruz" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-4 bg-espresso text-cream p-5 rounded-2xl shadow-2xl text-center">
                <div className="font-display text-4xl text-gold">360°</div>
                <div className="font-sans text-xs text-cream/70 mt-1">Vista desde<br />cada rincón</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gold text-espresso p-4 rounded-2xl shadow-xl text-center">
                <div className="font-display text-3xl font-bold">18°C</div>
                <div className="font-sans text-xs font-medium mt-0.5">Todo el año</div>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="mb-20">
            <h3 className="font-display text-3xl text-espresso text-center mb-10">Lo que nos hace únicos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {PILLARS.map((p, i) => (
                <div key={p.title} className="bg-white rounded-2xl p-6 border border-sand-100 hover:shadow-lg transition-shadow">
                  <div className="w-11 h-11 bg-forest-50 rounded-xl flex items-center justify-center mb-4">
                    <p.icon className="text-forest-700" size={20} />
                  </div>
                  <h4 className="font-display text-lg text-espresso mb-2">{p.title}</h4>
                  <p className="font-sans text-espresso/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="relative bg-forest-950 text-cream rounded-3xl p-10 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-forest-700/20 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold/10 rounded-full" />
              <div className="relative z-10">
                <div className="text-5xl mb-5">🌿</div>
                <p className="section-eyebrow text-gold/80 mb-3">Misión</p>
                <h3 className="font-display text-3xl text-cream mb-4">Crear momentos que perduran</h3>
                <div className="w-10 h-px bg-gold mb-5" />
                <p className="font-sans text-cream/70 leading-relaxed">
                  Ser el espacio donde familias, parejas y viajeros encuentran paz, reconexión y bienestar. Cada detalle está pensado para que al partir, siempre quieras regresar.
                </p>
              </div>
            </div>

            <div className="relative bg-gold/10 border-2 border-gold/20 rounded-3xl p-10 overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-forest-100/50 rounded-full" />
              <div className="relative z-10">
                <div className="text-5xl mb-5">✨</div>
                <p className="section-eyebrow text-gold mb-3">Visión</p>
                <h3 className="font-display text-3xl text-espresso mb-4">Ser el referente del turismo en Sanare</h3>
                <div className="w-10 h-px bg-forest-600 mb-5" />
                <p className="font-sans text-espresso/70 leading-relaxed">
                  Mostrar al mundo que Venezuela tiene destinos de talla mundial. Altos de Veracruz es nuestra apuesta por el turismo de calidad, la gastronomía local y la experiencia auténtica.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="font-display text-3xl text-espresso text-center mb-8">Nuestros valores</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TEAM_VALUES.map(v => (
                <div key={v.title} className="text-center bg-white rounded-2xl p-6 border border-sand-100 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <div className="font-display text-lg text-espresso">{v.title}</div>
                  <div className="font-sans text-espresso/50 text-xs mt-1">{v.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-espresso/75" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <p className="section-eyebrow text-gold/80 mb-4">Ven a conocernos</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-5">Sanare te espera</h2>
          <p className="font-sans text-cream/70 text-lg mb-8">Una experiencia que cambia la forma en que ves Venezuela.</p>
          <WhatsAppBtn label="Reservar ahora" className="text-base px-10 py-4" />
        </div>
      </section>
    </div>
  )
}
