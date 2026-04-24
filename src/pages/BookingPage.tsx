import { useState } from 'react'
import { Send, MessageCircle, Phone, MapPin } from 'lucide-react'
import { ROOMS, CONTACT } from '../data/content'
import PageHero from '../components/ui/PageHero'
import WhatsAppBtn from '../components/ui/WhatsAppBtn'

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '', phone: '', checkin: '', checkout: '', guests: '2', roomType: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `🏔️ *Solicitud de Reserva — Altos de Veracruz*\n\n👤 Nombre: ${form.name}\n📱 Teléfono: ${form.phone}\n📅 Llegada: ${form.checkin}\n📅 Salida: ${form.checkout}\n👥 Personas: ${form.guests}\n🛏️ Habitación: ${form.roomType || 'Sin preferencia'}\n💬 Comentario: ${form.message || 'Ninguno'}\n\nSolicitud enviada desde la web.`
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="page-enter">
      <PageHero
        title="Reservar"
        subtitle="Escríbenos y te respondemos en minutos. Sin intermediarios."
        image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=85"
        eyebrow="Reservaciones directas"
      />

      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left info */}
            <div>
              <p className="section-eyebrow mb-3">Reserva directa</p>
              <h2 className="font-display text-4xl md:text-5xl text-espresso mb-5">
                Tu próxima<br /><em className="text-forest-700">escapada</em><br />te espera
              </h2>
              <div className="w-12 h-px bg-gold mb-5" />
              <p className="font-sans text-espresso/65 leading-relaxed mb-8">
                Reserva directamente con nosotros y obtén la mejor tarifa disponible. Sin comisiones de intermediarios, sin complicaciones.
              </p>

              {/* Contact options */}
              <div className="space-y-4 mb-8">
                <a href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-4 hover:bg-[#25D366]/20 transition-colors group">
                  <div className="w-11 h-11 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-espresso text-sm">WhatsApp directo</div>
                    <div className="font-sans text-espresso/60 text-xs">{CONTACT.phone1} · Respuesta inmediata</div>
                  </div>
                </a>

                <a href={`tel:${CONTACT.phone2}`}
                  className="flex items-center gap-4 bg-sand-50 border border-sand-200 rounded-2xl p-4 hover:border-espresso/30 transition-colors">
                  <div className="w-11 h-11 bg-sand-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-espresso" />
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-espresso text-sm">Llamar directamente</div>
                    <div className="font-sans text-espresso/60 text-xs">{CONTACT.phone2}</div>
                  </div>
                </a>

                <a href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 bg-sand-50 border border-sand-200 rounded-2xl p-4 hover:border-espresso/30 transition-colors">
                  <div className="w-11 h-11 bg-sand-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-espresso" />
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-espresso text-sm">Correo electrónico</div>
                    <div className="font-sans text-espresso/60 text-xs">{CONTACT.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 bg-sand-50 border border-sand-200 rounded-2xl p-4">
                  <div className="w-11 h-11 bg-sand-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-espresso" />
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-espresso text-sm mb-0.5">Ubicación</div>
                    <div className="font-sans text-espresso/60 text-xs leading-relaxed">{CONTACT.address}</div>
                    <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer"
                      className="font-sans text-xs text-forest-700 hover:text-forest-900 mt-1 inline-block">Ver en Google Maps →</a>
                  </div>
                </div>
              </div>

              {/* Tariffs summary */}
              <div className="bg-espresso rounded-2xl p-5">
                <h4 className="font-display text-xl text-cream mb-3">Tarifas base</h4>
                <div className="space-y-2">
                  {ROOMS.map(r => (
                    <div key={r.id} className="flex items-center justify-between py-2 border-b border-cream/10 last:border-0">
                      <span className="font-sans text-cream/70 text-sm">{r.name}</span>
                      <div className="text-right">
                        <span className="font-display text-gold">{r.price}</span>
                        <span className="font-sans text-cream/40 text-xs ml-1">/ persona</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-sans text-cream/40 text-xs mt-3">+ Impuestos. Incluye cena, desayuno y descorche.</p>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl border border-sand-100 p-7 md:p-10">
                <h3 className="font-display text-2xl text-espresso mb-6">Solicitar reserva</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans text-xs text-espresso/60 uppercase tracking-wider mb-1.5 block">Nombre *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Tu nombre completo"
                        className="w-full border border-sand-200 rounded-xl px-4 py-3 font-sans text-sm text-espresso placeholder-espresso/30 focus:outline-none focus:border-forest-500 transition-colors" />
                    </div>
                    <div>
                      <label className="font-sans text-xs text-espresso/60 uppercase tracking-wider mb-1.5 block">Teléfono *</label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        placeholder="+58 ..."
                        className="w-full border border-sand-200 rounded-xl px-4 py-3 font-sans text-sm text-espresso placeholder-espresso/30 focus:outline-none focus:border-forest-500 transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans text-xs text-espresso/60 uppercase tracking-wider mb-1.5 block">Llegada *</label>
                      <input type="date" name="checkin" required value={form.checkin} onChange={handleChange}
                        className="w-full border border-sand-200 rounded-xl px-4 py-3 font-sans text-sm text-espresso focus:outline-none focus:border-forest-500 transition-colors" />
                    </div>
                    <div>
                      <label className="font-sans text-xs text-espresso/60 uppercase tracking-wider mb-1.5 block">Salida</label>
                      <input type="date" name="checkout" value={form.checkout} onChange={handleChange}
                        className="w-full border border-sand-200 rounded-xl px-4 py-3 font-sans text-sm text-espresso focus:outline-none focus:border-forest-500 transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans text-xs text-espresso/60 uppercase tracking-wider mb-1.5 block">Personas</label>
                      <select name="guests" value={form.guests} onChange={handleChange}
                        className="w-full border border-sand-200 rounded-xl px-4 py-3 font-sans text-sm text-espresso focus:outline-none focus:border-forest-500 transition-colors bg-white">
                        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} persona{n > 1 ? 's' : ''}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="font-sans text-xs text-espresso/60 uppercase tracking-wider mb-1.5 block">Habitación</label>
                      <select name="roomType" value={form.roomType} onChange={handleChange}
                        className="w-full border border-sand-200 rounded-xl px-4 py-3 font-sans text-sm text-espresso focus:outline-none focus:border-forest-500 transition-colors bg-white">
                        <option value="">Sin preferencia</option>
                        {ROOMS.map(r => <option key={r.id} value={r.name}>{r.name}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-xs text-espresso/60 uppercase tracking-wider mb-1.5 block">Comentario o solicitud especial</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                      placeholder="¿Algo especial que quieras que preparemos?"
                      className="w-full border border-sand-200 rounded-xl px-4 py-3 font-sans text-sm text-espresso placeholder-espresso/30 focus:outline-none focus:border-forest-500 transition-colors resize-none" />
                  </div>

                  <button type="submit"
                    className="w-full bg-forest-700 text-cream py-4 rounded-2xl font-sans font-semibold flex items-center justify-center gap-2 hover:bg-forest-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <Send size={16} /> Enviar solicitud por WhatsApp
                  </button>
                  <p className="font-sans text-espresso/40 text-xs text-center">Al enviar serás redirigido a WhatsApp con tu información completa</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
