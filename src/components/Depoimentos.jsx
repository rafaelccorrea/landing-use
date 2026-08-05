import { useRef, useState } from 'react'

const depoimentos = [
  { poster: '/assets/transform-1.png', src: '/Cesar_depoimentos (02).mp4' },
  { poster: '/assets/transform-2.png', src: '/Cesar_depoimentos (03).mp4' },
  { poster: '/assets/transform-3.png', src: '/Cesar_depoimentos (04).mp4' },
  { poster: '/assets/transform-4.png', src: '/Cesar_depoimentos (06).mp4' },
]

function DepoimentoCard({ poster, src, index }) {
  const videoRef = useRef(null)
  const [tocando, setTocando] = useState(false)

  const play = () => {
    videoRef.current?.play()
  }

  return (
    <div className="depoimento-card">
      <div className="depoimento-thumb">
        <video
          ref={videoRef}
          src={encodeURI(src)}
          poster={poster}
          controls={tocando}
          playsInline
          preload="none"
          onPlay={() => setTocando(true)}
          onPause={() => setTocando(false)}
          aria-label={`Depoimento ${index + 1}`}
        />
        {!tocando && (
          <button className="play-btn" type="button" onClick={play}>
            <svg viewBox="0 0 100 100" fill="#ffffff">
              <path d="M22 14 C22 6 30 2 37 6 L86 42 C93 46 93 54 86 58 L37 94 C30 98 22 94 22 86 Z" />
            </svg>
            <span className="sr-only">Reproduzir depoimento {index + 1}</span>
          </button>
        )}
      </div>
    </div>
  )
}

function Depoimentos() {
  return (
    <section className="depoimentos" id="depoimentos">
      <div className="container">
        <h2 className="section-title">
          QUEM VIVEU A TRANSFORMAÇÃO,
          <br />
          HOJE COMPARTILHA OS RESULTADOS.
        </h2>
        <p className="subtitle">
          Veja o que líderes, empresas e profissionais dizem após aplicar o
          Método U.S.E V.O.E na prática.
        </p>

        <div className="depoimentos-grid">
          {depoimentos.map((d, i) => (
            <DepoimentoCard key={d.src} {...d} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos
