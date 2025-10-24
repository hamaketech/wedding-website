import { useState, useEffect, useRef } from 'react'
import wildestDreamsAudio from '../assets/Wildest Dreams.mp3'

const FloatingMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  // Auto-play music when component mounts
  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.log('Auto-play was prevented:', error)
        })
      }
    }

    // Try to play after a short delay
    const timer = setTimeout(playMusic, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={wildestDreamsAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating Music Button */}
      <button
        onClick={togglePlayPause}
        className="group bg-gradient-to-r from-wedding-rose to-wedding-gold text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-wedding-gold to-wedding-rose opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex items-center space-x-2">
          <span className="text-2xl">{isPlaying ? '🎵' : '🔇'}</span>
          <span className="text-sm font-medium hidden sm:block">
            {isPlaying ? 'Tocando' : 'Música'}
          </span>
        </div>
        {isPlaying && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        )}
      </button>
    </div>
  )
}

export default FloatingMusicPlayer
