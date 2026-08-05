import { useState } from 'react'

const palestras = [
  {
    titulo: 'Palestra Presencial',
    desc: 'Como a respiração pode ajudar em seus resultados – Cesar Almeida',
    thumb: '/assets/palestra-1.png',
    data: '24/10',
    videoId: 'K1zisZooFE0',
  },
  {
    titulo: 'Palestra Presencial',
    desc: 'A estratégia que faltava para suas vendas decolarem – Cesar Almeida',
    thumb: '/assets/palestra-2.png',
    data: '24/07',
    videoId: 'KJu0MnehvcA',
  },
]

function PalestraCard({ titulo, desc, thumb, data, videoId }) {
  const [tocando, setTocando] = useState(false)

  return (
    <div className="video-card">
      <div className="video-thumb">
        {tocando ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={desc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img src={thumb} alt={desc} loading="lazy" />
            <button
              className="play-btn"
              type="button"
              onClick={() => setTocando(true)}
            >
              <svg viewBox="0 0 100 100" fill="#ffffff">
                <path d="M22 14 C22 6 30 2 37 6 L86 42 C93 46 93 54 86 58 L37 94 C30 98 22 94 22 86 Z" />
              </svg>
              <span className="sr-only">Assistir: {desc}</span>
            </button>
          </>
        )}
      </div>
      <h4>{titulo}</h4>
      <p>{desc}</p>
      <p className="video-data">{data}</p>
    </div>
  )
}

function Transformacao() {
  return (
    <section className="transformacao">
      <div className="container">
        <div className="transformacao-header">
          <h2 className="section-title-left">
            VEJA A TRANSFORMAÇÃO ACONTECENDO NA PRÁTICA.
          </h2>
          <p>
            Confira palestras, empresas impactadas e relatos reais de pessoas
            que aplicaram o Método U.S.E V.O.E.
          </p>
        </div>

        <div className="videos-grid">
          {palestras.map((palestra) => (
            <PalestraCard key={palestra.videoId} {...palestra} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Transformacao
