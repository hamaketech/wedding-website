import qrCodePix from '../assets/qrcode-pix.png'

const PixPayment = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* QR Code */}
        <div className="text-center animate-fadeInUp">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-wedding-sage/20 rounded-full blur-3xl scale-150"></div>
            <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 mb-6 md:mb-8 shadow-2xl border border-wedding-sage/10 hover:scale-105 transition-all duration-500">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center hover:shadow-lg transition-all duration-500">
                <img 
                  src={qrCodePix} 
                  alt="QR Code PIX" 
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-xl md:rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <p className="text-base md:text-lg text-wedding-forest/80 font-sans font-light tracking-wide px-4">
            Escaneie o QR Code com seu app bancário
          </p>
        </div>

        {/* Payment Info */}
        <div className="space-y-6 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
        <div className="relative bg-gradient-to-br from-wedding-rose to-wedding-gold text-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 hover:scale-105 transition-all duration-500 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-wedding-gold to-wedding-rose opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-serif font-light mb-6 md:mb-8 tracking-wide">Informações do PIX</h4>
            <div className="space-y-4 md:space-y-6">
              <div>
                <p className="text-xs sm:text-sm opacity-90 font-sans font-light mb-2">Chave PIX:</p>
                <p className="font-mono text-xs sm:text-sm bg-white/20 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 hover:bg-white/30 transition-colors duration-500 break-all">
                  (48) 99616-6253
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm opacity-90 font-sans font-light mb-2">Nome:</p>
                <p className="font-serif font-light text-lg md:text-xl tracking-wide">Enzo & Alexia</p>
              </div>
            </div>
          </div>
        </div>

          <div className="relative bg-gradient-to-br from-wedding-sage to-wedding-lime text-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 hover:scale-105 transition-all duration-500 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-wedding-lime to-wedding-sage opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h4 className="text-2xl md:text-3xl font-serif font-light mb-6 md:mb-8 tracking-wide">💝 Como Presentear</h4>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                <li className="hover:translate-x-2 md:hover:translate-x-3 transition-transform duration-500 flex items-center group">
                  <span className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full mr-3 md:mr-4 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></span>
                  <span className="font-light text-sm md:text-base">Abra seu app bancário</span>
                </li>
                <li className="hover:translate-x-2 md:hover:translate-x-3 transition-transform duration-500 flex items-center group">
                  <span className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full mr-3 md:mr-4 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></span>
                  <span className="font-light text-sm md:text-base">Escaneie o QR Code ou use a chave PIX</span>
                </li>
                <li className="hover:translate-x-2 md:hover:translate-x-3 transition-transform duration-500 flex items-center group">
                  <span className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full mr-3 md:mr-4 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></span>
                  <span className="font-light text-sm md:text-base">Digite o valor desejado</span>
                </li>
                <li className="hover:translate-x-2 md:hover:translate-x-3 transition-transform duration-500 flex items-center group">
                  <span className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full mr-3 md:mr-4 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></span>
                  <span className="font-light text-sm md:text-base">Confirme o pagamento</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-wedding-cream/80 border border-wedding-gold/30 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:scale-105 transition-all duration-500 shadow-xl">
            <div className="text-center">
              <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-3 md:mb-4"></div>
              <p className="text-wedding-forest/80 text-base md:text-lg font-sans font-light leading-relaxed px-4">
                <span className="font-serif font-medium">💡 Lembre-se:</span> Qualquer valor é muito bem-vindo! 
                Sua presença é o que mais importa para nós.
              </p>
              <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mt-3 md:mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PixPayment
