function MetodoMuda() {
  return (
    <section className="metodo-muda">
      <div className="container">
        <h2 className="section-title-left">O MÉTODO MUDA TUDO.</h2>
        <p className="metodo-muda-desc">
          Enquanto algumas equipes sobrevivem no automático, outras crescem com
          propósito, clareza e resultados reais.
        </p>

        <div className="compare-grid">
          <img
            src="/assets/metodo-cards.png"
            alt="Comparativo: sem método USE VOE — preocupação com rotatividade, talentos saindo, equipe sem propósito; com método USE VOE — equipe engajada, talentos que ficam, faturamento crescendo"
            className="compare-cards-img"
          />
          <div className="compare-half compare-half-sem" role="img" aria-label="Card: sem método USE VOE" />
          <div className="compare-half compare-half-com" role="img" aria-label="Card: com método USE VOE" />
          <div className="compare-fotos">
            <img
              src="/assets/audience-sm-1.png"
              alt="Cesar Almeida palestrando para plateia"
            />
            <img
              src="/assets/audience-sm-2.png"
              alt="Plateia em auditório durante palestra"
            />
          </div>
        </div>

        <div className="metodo-muda-cta">
          <a href="#form" className="btn btn-primary">
            QUERO EVOLUIR{' '}
            <img src="/assets/icons/icon-arrow.png" alt="" className="arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default MetodoMuda
