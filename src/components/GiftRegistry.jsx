const GiftRegistry = () => {
  const giftLinks = [
    {
      name: "Magazine Luiza",
      description: "Lista de presentes digital",
      icon: "🛍️",
      color: "from-blue-500 to-blue-600",
      href: "#"
    },
    {
      name: "Americanas",
      description: "Lista de presentes digital", 
      icon: "🎁",
      color: "from-red-500 to-red-600",
      href: "#"
    },
    {
      name: "Amazon",
      description: "Lista de presentes digital",
      icon: "📦",
      color: "from-orange-500 to-orange-600", 
      href: "#"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {giftLinks.map((gift, index) => (
          <a
            key={index}
            href={gift.href}
            className="group relative bg-gradient-to-br from-wedding-sage to-wedding-lime text-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 text-center transition-all duration-500 transform hover:scale-105 hover:shadow-3xl animate-fadeInUp overflow-hidden"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-wedding-lime to-wedding-sage opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="relative mb-4 md:mb-6">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150"></div>
                <div className="relative text-4xl sm:text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-500">{gift.icon}</div>
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-serif font-light mb-3 md:mb-4 tracking-wide">{gift.name}</h4>
              <p className="text-xs sm:text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-500 font-light">{gift.description}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-wedding-rose/10 to-wedding-gold/10 rounded-2xl md:rounded-3xl border border-wedding-rose/20">
        <div className="text-center">
          <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-rose to-transparent mx-auto mb-4 md:mb-6"></div>
          <p className="text-wedding-forest/80 text-base md:text-lg font-sans font-light leading-relaxed px-4">
            <span className="font-serif font-medium">💝 Dica:</span> Sua presença é o melhor presente, mas se quiser nos presentear, 
            qualquer item da nossa lista será muito bem-vindo!
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-rose to-transparent mx-auto mt-4 md:mt-6"></div>
        </div>
      </div>
    </div>
  )
}

export default GiftRegistry
