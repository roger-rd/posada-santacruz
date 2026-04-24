interface Props {
  title: string
  subtitle?: string
  image: string
  eyebrow?: string
  dark?: boolean
}

export default function PageHero({ title, subtitle, image, eyebrow, dark = true }: Props) {
  return (
    <div className="relative h-56 md:h-72 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover animate-ken-burns" />
      <div className={`absolute inset-0 ${dark ? 'bg-espresso/65' : 'bg-espresso/50'}`} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
        {eyebrow && (
          <p className="section-eyebrow text-gold/90 mb-3">{eyebrow}</p>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-cream/70 mt-3 text-base md:text-lg max-w-xl">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
