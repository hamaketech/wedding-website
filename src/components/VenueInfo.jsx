const VenueInfo = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
      {/* Ceremony */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-wedding-sage/10 hover:shadow-3xl transition-all duration-500 group">
        <div className="text-center mb-6 md:mb-8">
          <div className="relative inline-block mb-4 md:mb-6">
            <div className="absolute inset-0 bg-wedding-sage/20 rounded-full blur-2xl scale-150"></div>
            <div className="relative text-4xl sm:text-5xl md:text-6xl animate-float">💒</div>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-wedding-forest mb-2 md:mb-3 tracking-wide">Cerimônia</h3>
          <p className="text-wedding-forest/80 font-sans font-light text-lg md:text-xl tracking-wide">16:00 BRT</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="text-wedding-rose text-xl">📍</div>
            <div>
              <p className="font-semibold text-wedding-forest">Local da Cerimônia</p>
              <p className="text-wedding-forest">[Endereço da cerimônia será adicionado]</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="text-wedding-rose text-xl">⏰</div>
            <div>
              <p className="font-semibold text-wedding-forest">Horário</p>
              <p className="text-wedding-forest">16:00 - 17:00</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="text-wedding-rose text-xl">👗</div>
            <div>
              <p className="font-semibold text-wedding-forest">Dress Code</p>
              <p className="text-wedding-forest">Elegante</p>
            </div>
          </div>
        </div>
      </div>

      {/* Party */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-wedding-gold/10 hover:shadow-3xl transition-all duration-500 group">
        <div className="text-center mb-6 md:mb-8">
          <div className="relative inline-block mb-4 md:mb-6">
            <div className="absolute inset-0 bg-wedding-gold/20 rounded-full blur-2xl scale-150"></div>
            <div className="relative text-4xl sm:text-5xl md:text-6xl animate-float" style={{animationDelay: '0.5s'}}>🎉</div>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-wedding-forest mb-2 md:mb-3 tracking-wide">Festa</h3>
          <p className="text-wedding-forest/80 font-sans font-light text-lg md:text-xl tracking-wide">Após a cerimônia</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="text-wedding-gold text-xl">📍</div>
            <div>
              <p className="font-semibold text-wedding-forest">Local da Festa</p>
              <p className="text-wedding-forest">[Endereço da festa será adicionado]</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="text-wedding-gold text-xl">⏰</div>
            <div>
              <p className="font-semibold text-wedding-forest">Horário</p>
              <p className="text-wedding-forest">17:30 - 23:00</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="text-wedding-gold text-xl">🍽️</div>
            <div>
              <p className="font-semibold text-wedding-forest">Jantar</p>
              <p className="text-wedding-forest">Incluído</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VenueInfo
