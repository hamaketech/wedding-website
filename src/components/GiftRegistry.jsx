const GiftRegistry = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <a
          href="https://www.amazon.com.br/hz/wishlist/ls/1XIGDKZZ4GMW5?type=wishlist&filter=unpurchased&sort=price-asc&viewType=grid"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-gradient-to-br from-wedding-sage to-wedding-lime text-white rounded-3xl md:rounded-4xl p-8 md:p-12 lg:p-16 text-center transition-all duration-500 transform hover:scale-105 hover:shadow-3xl animate-fadeInUp overflow-hidden w-full max-w-md"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-wedding-lime to-wedding-sage opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="relative mb-6 md:mb-8">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150"></div>
              <div className="relative text-6xl sm:text-7xl md:text-8xl group-hover:scale-110 transition-transform duration-500">📦</div>
            </div>
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-4 md:mb-6 tracking-wide">Amazon</h4>
            <p className="text-base sm:text-lg md:text-xl opacity-90 group-hover:opacity-100 transition-opacity duration-500 font-light mb-6">
              Lista de presentes digital
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 group-hover:bg-white/30 transition-all duration-300">
              <span className="text-sm font-medium">Ver Lista</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </div>
        </a>
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
