import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '../../data/content'

const WaIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <h3 className="font-display text-3xl text-cream">Altos de Veracruz</h3>
              <p className="font-sans text-gold/70 text-[10px] tracking-[0.3em] uppercase mt-1">Posada Boutique · Sanare, Venezuela</p>
            </Link>
            <div className="w-10 h-px bg-gold mb-5" />
            <p className="font-sans text-cream/50 text-sm leading-relaxed max-w-xs mb-6">
              Entre montañas, café y naturaleza. Donde el descanso es real y los recuerdos duran para siempre. A 1.600 mts en Sanare, Lara.
            </p>
            <div className="flex gap-3">
              {[
                { href: CONTACT.instagram, Icon: Instagram },
                { href: CONTACT.facebook, Icon: Facebook },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-cream/60 hover:bg-gold hover:text-espresso transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-cream/60 hover:bg-[#25D366] hover:text-white transition-all duration-300">
                <WaIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/70 mb-5">Explorar</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="font-sans text-cream/50 hover:text-gold text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
              <li><Link to="/reservar" className="font-sans text-cream/50 hover:text-gold text-sm transition-colors">Reservar</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/70 mb-5">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold/60 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-sans text-cream/50 text-sm leading-relaxed">{CONTACT.address}</p>
                  <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer"
                    className="font-sans text-xs text-gold/60 hover:text-gold transition-colors mt-1 inline-block">Ver en Maps →</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold/60 flex-shrink-0" />
                <div>
                  <p className="font-sans text-cream/50 text-xs">{CONTACT.phone1}</p>
                  <p className="font-sans text-cream/50 text-xs">{CONTACT.phone2}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gold/60 flex-shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="font-sans text-cream/50 text-xs hover:text-gold transition-colors">{CONTACT.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-cream/30 text-xs">© {new Date().getFullYear()} Altos de Veracruz. Todos los derechos reservados.</p>
          <p className="font-sans text-cream/30 text-xs">Sanare · Estado Lara · Venezuela 🇻🇪</p>
        </div>
      </div>

      {/* Floating WA */}
      <a href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-4 md:right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#1ebe5a] transition-all duration-300 hover:scale-110 animate-float">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  )
}
