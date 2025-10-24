import { useState, useEffect } from 'react'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Wedding date: November 22, 2025 at 4pm BRT (UTC-3)
    const weddingDate = new Date('2025-11-22T16:00:00-03:00')
    
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = weddingDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Dias', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {timeUnits.map((unit, index) => (
          <div key={index} className="text-center group">
            <div className="relative mb-4 md:mb-6">
              <div className="absolute inset-0 bg-wedding-rose/20 rounded-full blur-xl scale-110"></div>
              <div className="relative bg-gradient-to-br from-wedding-rose to-wedding-gold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:shadow-3xl animate-pulse-slow">
                {unit.value.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-wedding-forest font-sans font-light text-sm sm:text-base md:text-lg lg:text-xl group-hover:text-wedding-rose transition-colors duration-500 tracking-wide">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 md:mt-16">
        <div className="flex items-center justify-center">
          <div className="w-20 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-wedding-rose to-transparent"></div>
          <p className="text-wedding-forest/80 text-base sm:text-lg md:text-xl font-sans font-light tracking-wide px-4">
            22 de Novembro de 2025 • 16:00 BRT
          </p>
          <div className="w-20 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-wedding-rose to-transparent"></div>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
