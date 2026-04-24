import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react'
import { EXPERIENCES } from '../data/content'
import PageHero from '../components/ui/PageHero'
import WhatsAppBtn from '../components/ui/WhatsAppBtn'
import Lightbox from '../components/ui/Lightbox'

function ExperienceDetail({ exp }: { exp: typeof EXPERIENCES[0] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxStart, setLightboxStart] = useState(0)

  return (
    <div className="page-enter">
      <div className="pt-16">
        <div className="bg-espresso py-3 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <Link to="/experiencias" className="flex items-center gap-2 text-cream/60 hover:text-gold text-sm transition-colors">
              <ArrowLeft size={16} /> Todas las experiencias
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Photo gallery */}
            <div>
              <div className="grid grid-cols-2 gap-3">
                {exp.images.map((img, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform ${i === 0 ? 'col-span-2 h-64' : 'h-40'}`}
                    onClick={() => { setLightboxStart(i); setLightboxOpen(true) }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="text-4xl mb-4">{exp.icon}</div>
              <p className="section-eyebrow mb-2">Experiencia en Altos de Veracruz</p>
              <h1 className="font-display text-4xl md:text-5xl text-espresso mb-3">{exp.title}</h1>
              <div className="flex items-center gap-2 text-espresso/60 font-sans text-sm mb-5">
                <Clock size={15} /> {exp.duration}
              </div>
              <div className="w-12 h-px bg-gold mb-5" />
              <p className="font-sans text-espresso/65 leading-relaxed mb-6">{exp.description}</p>

              <div className="bg-sand-50 rounded-2xl p-5 mb-6">
                <h3 className="font-display text-lg text-espresso mb-3">Qué incluye</h3>
                <div className="space-y-2">
                  {exp.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2 text-espresso/70">
                      <CheckCircle size={14} className="text-forest-600 flex-shrink-0" />
                      <span className="font-sans text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <WhatsAppBtn
                message={`Hola! Me interesa la experiencia: ${exp.title}. ¿Cómo puedo reservarla?`}
                label="Consultar esta experiencia"
                className="w-full justify-center py-4"
              />
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox images={exp.images} startIndex={lightboxStart} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  )
}

function ExperiencesIndex() {
  return (
    <div className="page-enter">
      <PageHero
        title="Experiencias"
        subtitle="Más que un hotel — cada momento en Altos de Veracruz es una historia"
        image="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1400&q=85"
        eyebrow="Vive la montaña"
      />

      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCES.map((exp) => (
              <Link
                key={exp.id}
                to={`/experiencias/${exp.id}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-3xl">{exp.icon}</div>
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-espresso/70 backdrop-blur text-cream/80 text-xs font-sans px-2.5 py-1.5 rounded-full">
                    <Clock size={10} /> {exp.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-espresso mb-2">{exp.title}</h3>
                  <p className="font-sans text-espresso/60 text-sm leading-relaxed mb-4">{exp.shortDesc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.highlights.slice(0, 3).map(h => (
                      <span key={h} className="bg-forest-50 text-forest-800 text-xs font-sans px-2.5 py-1 rounded-full">{h}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ExperiencesPage() {
  const { id } = useParams()
  if (id) {
    const exp = EXPERIENCES.find(e => e.id === id)
    if (!exp) return <div className="pt-32 text-center">Experiencia no encontrada</div>
    return <ExperienceDetail exp={exp} />
  }
  return <ExperiencesIndex />
}
