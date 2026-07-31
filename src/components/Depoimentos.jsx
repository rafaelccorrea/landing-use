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
          QUEM VIVEU A TRANSFORMAÇÃO,
          <br />
          HOJE COMPARTILHA OS RESULTADOS.
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
                  <svg viewBox="0 0 100 100" fill="#ffffff">
                    <path d="M22 14 C22 6 30 2 37 6 L86 42 C93 46 93 54 86 58 L37 94 C30 98 22 94 22 86 Z" />
                  </svg>
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
