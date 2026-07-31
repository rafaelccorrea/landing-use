const palestras = [
  {
    titulo: 'Palestra Presencial',
    desc: 'Como a respiração pode ajudar em seus resultados – Cesar Almeida',
    thumb: '/assets/palestra-1.png',
  },
  {
    titulo: 'Palestra Presencial',
    desc: 'A estratégia que faltava para suas vendas decolarem – Cesar Almeida',
    thumb: '/assets/palestra-2.png',
  },
]

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
            <div className="video-card" key={palestra.desc}>
              <div className="video-thumb">
                <img src={palestra.thumb} alt={palestra.desc} loading="lazy" />
                <span className="play-btn" aria-hidden="true">
                  <svg viewBox="0 0 100 100" fill="#ffffff">
                    <path d="M22 14 C22 6 30 2 37 6 L86 42 C93 46 93 54 86 58 L37 94 C30 98 22 94 22 86 Z" />
                  </svg>
                </span>
              </div>
              <h4>{palestra.titulo}</h4>
              <p>{palestra.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Transformacao
