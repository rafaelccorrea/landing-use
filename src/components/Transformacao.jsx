const palestras = [
  {
    titulo: 'Como a respiração pode ajudar em seus resultados',
    autor: 'Cesar Almeida',
    tipo: 'Palestra Presencial',
    thumb: '/assets/palestra-1.png',
  },
  {
    titulo: 'A estratégia que faltava para suas vendas decolarem',
    autor: 'Cesar Almeida',
    tipo: 'Palestra Presencial',
    thumb: '/assets/palestra-2.png',
  },
]

function Transformacao() {
  return (
    <section className="transformacao">
      <div className="container">
        <h2 className="section-title">Veja a transformação acontecendo na prática.</h2>
        <p className="section-desc">
          Confira palestras, empresas impactadas e relatos reais de pessoas que
          aplicaram o Método U.S.E V.O.E.
        </p>

        <div className="videos-grid">
          {palestras.map((palestra) => (
            <div className="video-card" key={palestra.titulo}>
              <div className="video-thumb">
                <img src={palestra.thumb} alt={palestra.titulo} loading="lazy" />
                <span className="play-btn" aria-hidden="true">
                  ▶
                </span>
              </div>
              <div className="video-info">
                <h4>{palestra.titulo}</h4>
                <p>{palestra.autor}</p>
                <span className="badge">{palestra.tipo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Transformacao
