import { useState } from 'react'
import CountdownTimer from './components/CountdownTimer'
import VenueInfo from './components/VenueInfo'
import GiftRegistry from './components/GiftRegistry'
import PixPayment from './components/PixPayment'
import FloatingMusicPlayer from './components/FloatingMusicPlayer'
import monogram from './assets/monogram.png'
import kissingPhoto from './assets/kissing_light.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream via-wedding-sage to-wedding-lime">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-wedding-cream/95 backdrop-blur-md border-b border-wedding-gold/20">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3">
              <img 
                src={monogram} 
                alt="Monogram" 
                className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
              />
              <span className="font-serif font-bold text-wedding-forest text-lg md:text-xl">Enzo & Alexia</span>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`font-sans font-medium transition-colors duration-300 text-sm lg:text-base ${
                  activeSection === 'home' ? 'text-wedding-rose' : 'text-wedding-forest hover:text-wedding-rose'
                }`}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('countdown')}
                className={`font-sans font-medium transition-colors duration-300 text-sm lg:text-base ${
                  activeSection === 'countdown' ? 'text-wedding-rose' : 'text-wedding-forest hover:text-wedding-rose'
                }`}
              >
                Contagem
              </button>
              <button 
                onClick={() => scrollToSection('venue')}
                className={`font-sans font-medium transition-colors duration-300 text-sm lg:text-base ${
                  activeSection === 'venue' ? 'text-wedding-rose' : 'text-wedding-forest hover:text-wedding-rose'
                }`}
              >
                Locais
              </button>
              <button 
                onClick={() => scrollToSection('gifts')}
                className={`font-sans font-medium transition-colors duration-300 text-sm lg:text-base ${
                  activeSection === 'gifts' ? 'text-wedding-rose' : 'text-wedding-forest hover:text-wedding-rose'
                }`}
              >
                Presentes
              </button>
              <button 
                onClick={() => scrollToSection('pix')}
                className={`font-sans font-medium transition-colors duration-300 text-sm lg:text-base ${
                  activeSection === 'pix' ? 'text-wedding-rose' : 'text-wedding-forest hover:text-wedding-rose'
                }`}
              >
                PIX
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-wedding-forest hover:text-wedding-rose transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden animate-fadeInDown">
          <div className="bg-wedding-cream/98 backdrop-blur-md border-b border-wedding-gold/20 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className={`w-full text-left py-3 px-4 rounded-lg font-sans font-medium transition-colors duration-300 ${
                  activeSection === 'home' 
                    ? 'text-wedding-rose bg-wedding-rose/10' 
                    : 'text-wedding-forest hover:text-wedding-rose hover:bg-wedding-rose/5'
                }`}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('countdown')}
                className={`w-full text-left py-3 px-4 rounded-lg font-sans font-medium transition-colors duration-300 ${
                  activeSection === 'countdown' 
                    ? 'text-wedding-rose bg-wedding-rose/10' 
                    : 'text-wedding-forest hover:text-wedding-rose hover:bg-wedding-rose/5'
                }`}
              >
                Contagem
              </button>
              <button 
                onClick={() => scrollToSection('venue')}
                className={`w-full text-left py-3 px-4 rounded-lg font-sans font-medium transition-colors duration-300 ${
                  activeSection === 'venue' 
                    ? 'text-wedding-rose bg-wedding-rose/10' 
                    : 'text-wedding-forest hover:text-wedding-rose hover:bg-wedding-rose/5'
                }`}
              >
                Locais
              </button>
              <button 
                onClick={() => scrollToSection('gifts')}
                className={`w-full text-left py-3 px-4 rounded-lg font-sans font-medium transition-colors duration-300 ${
                  activeSection === 'gifts' 
                    ? 'text-wedding-rose bg-wedding-rose/10' 
                    : 'text-wedding-forest hover:text-wedding-rose hover:bg-wedding-rose/5'
                }`}
              >
                Presentes
              </button>
              <button 
                onClick={() => scrollToSection('pix')}
                className={`w-full text-left py-3 px-4 rounded-lg font-sans font-medium transition-colors duration-300 ${
                  activeSection === 'pix' 
                    ? 'text-wedding-rose bg-wedding-rose/10' 
                    : 'text-wedding-forest hover:text-wedding-rose hover:bg-wedding-rose/5'
                }`}
              >
                PIX
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative pt-20 md:pt-32 pb-16 md:pb-24 px-4 min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${kissingPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center w-full px-4">
          {/* Monogram */}
          <div className="mb-6 md:mb-10 animate-fadeInUp">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-wedding-rose/40 rounded-full blur-3xl scale-150"></div>
              <img 
                src={monogram} 
                alt="Enzo & Alexia Monogram" 
                className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto drop-shadow-2xl hover:scale-110 transition-all duration-700"
              />
            </div>
          </div>
          
          {/* Names */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-white mb-4 md:mb-6 drop-shadow-2xl leading-[0.85] tracking-tight">
              Enzo & Alexia
            </h1>
          </div>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mb-8 md:mb-10 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>
            <div className="mx-3 sm:mx-4 md:mx-6 text-xl sm:text-2xl md:text-3xl text-white animate-float drop-shadow-lg">❦</div>
            <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-script text-white mb-6 md:mb-8 animate-fadeInUp leading-relaxed drop-shadow-lg" style={{animationDelay: '0.4s'}}>
            Vamos nos casar!
          </p>
          
          {/* Date */}
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-sans font-medium animate-fadeInUp mb-8 md:mb-10 tracking-wide drop-shadow-lg" style={{animationDelay: '0.5s'}}>
            22 de Novembro de 2025 • 16:00 BRT
          </div>

          {/* CTA Button */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={() => scrollToSection('countdown')}
              className="group bg-gradient-to-r from-wedding-rose to-wedding-gold text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full font-sans font-semibold text-base md:text-lg hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl relative overflow-hidden"
            >
              <span className="relative z-10">Ver Detalhes</span>
              <div className="absolute inset-0 bg-gradient-to-r from-wedding-gold to-wedding-rose opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section id="countdown" className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block mb-4 md:mb-6">
              <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-rose to-transparent mx-auto mb-3 md:mb-4"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-wedding-forest mb-3 md:mb-4 tracking-wide px-4">Contagem Regressiva</h2>
              <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-rose to-transparent mx-auto"></div>
            </div>
            <p className="text-wedding-forest/80 text-lg md:text-xl font-sans font-light px-4">O grande dia está chegando!</p>
          </div>
          <CountdownTimer />
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-16 md:py-24 px-4 bg-wedding-cream/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block mb-4 md:mb-6">
              <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-sage to-transparent mx-auto mb-3 md:mb-4"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-wedding-forest mb-3 md:mb-4 tracking-wide px-4">📍 Locais</h2>
              <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-sage to-transparent mx-auto"></div>
            </div>
            <p className="text-wedding-forest/80 text-lg md:text-xl font-sans font-light px-4">Onde tudo vai acontecer</p>
          </div>
          <VenueInfo />
        </div>
      </section>

      {/* Gifts Section */}
      <section id="gifts" className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block mb-4 md:mb-6">
              <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-3 md:mb-4"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-wedding-forest mb-3 md:mb-4 tracking-wide px-4">🎁 Presentes</h2>
              <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto"></div>
            </div>
            <p className="text-wedding-forest/80 text-lg md:text-xl font-sans font-light px-4">Nossa lista de presentes</p>
          </div>
          <GiftRegistry />
        </div>
      </section>

      {/* PIX Section */}
      <section id="pix" className="py-16 md:py-24 px-4 bg-wedding-lime/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block mb-4 md:mb-6">
              <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-rose to-transparent mx-auto mb-3 md:mb-4"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-wedding-forest mb-3 md:mb-4 tracking-wide px-4">💳 PIX</h2>
              <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-rose to-transparent mx-auto"></div>
            </div>
            <p className="text-wedding-forest/80 text-lg md:text-xl font-sans font-light px-4">Prefere presentear com dinheiro?</p>
          </div>
          <PixPayment />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wedding-forest text-wedding-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-12 md:mb-16">
            <div className="relative inline-block mb-6 md:mb-8">
              <div className="absolute inset-0 bg-wedding-cream/10 rounded-full blur-2xl scale-150"></div>
              <img 
                src={monogram} 
                alt="Monogram" 
                className="relative w-16 h-16 md:w-20 md:h-20 mx-auto opacity-90"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-light mb-4 md:mb-6 tracking-wide">Enzo & Alexia</h3>
            <p className="text-wedding-cream/80 text-lg md:text-xl font-script mb-6 md:mb-8 leading-relaxed px-4">
              💕 Esperamos ansiosamente para celebrar este dia especial com vocês! 💕
            </p>
            <p className="text-wedding-cream/70 font-sans text-base md:text-lg font-light tracking-wide px-4">
              22 de Novembro de 2025 • 16:00 BRT
            </p>
          </div>
          
          <div className="border-t border-wedding-cream/20 pt-8 md:pt-12">
            <p className="text-wedding-cream/60 font-sans text-xs md:text-sm font-light tracking-wide">
              Feito com 💕 para nosso casamento
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Music Player */}
      <FloatingMusicPlayer />
    </div>
  )
}

export default App
