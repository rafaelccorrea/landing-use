const depoimentos = [
  '/assets/transform-1.png',
  '/assets/transform-2.png',
  '/assets/transform-3.png',
  '/assets/transform-4.png',
]

function Depoimentos() {
  return (
    <section className="depoimentos" id="depoimentos">
      <div className="container">
        <h2 className="section-title">
          Quem viveu a transformação, hoje compartilha os resultados.
        </h2>
        <p className="subtitle">
          Veja o que líderes, empresas e profissionais dizem após aplicar o
          Método U.S.E V.O.E na prática.
        </p>

        <div className="depoimentos-grid">
          {depoimentos.map((src, i) => (
            <div className="depoimento-card" key={src}>
              <div className="depoimento-thumb">
                <img src={src} alt={`Depoimento ${i + 1}`} loading="lazy" />
                <span className="play-btn" aria-hidden="true">
                  ▶
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos
