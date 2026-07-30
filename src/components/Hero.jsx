function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <div className="hero-content">
          <img
            src="/assets/logo-usevoe.png"
            alt="U.S.E V.O.E"
            className="hero-logo"
          />
          <h2>
            Enquanto seus concorrentes despertam seus times, você continua com
            executores desmotivados, líderes que não inspiram e resultados que
            não decolam?
          </h2>
          <p>
            Descubra como transformar executores em líderes conscientes que
            geram resultados extraordinários. A Metodologia{' '}
            <strong>USE VOE</strong> desperta o potencial emocional que sua
            equipe já possui, criando uma cultura de alta performance, propósito
            e resultados.
          </p>
          <a href="#form" className="btn btn-primary">
            RECEBER PROPOSTA <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
