const stats = [
  {
    numero: '+5.000',
    label: 'pessoas transformadas em todo o Brasil',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.5.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 19c0-2.8 2.7-5 6-5s6 2.2 6 5v1H3v-1Zm13-4.6c2 .5 3.5 2.1 3.5 4.1V20H17v-1c0-1.7-.6-3.2-1.6-4.4.2 0 .4-.1.6-.2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    numero: '110%',
    label: 'de crescimento em faturamento em 12 meses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 20V10h3v10H4Zm6.5 0V4h3v16h-3ZM17 20v-7h3v7h-3Z"
          fill="currentColor"
        />
        <path
          d="M4 9 10 5l4 2.5L21 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    numero: '+300',
    label: 'palestras em empresas e instituições',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Z"
          fill="currentColor"
        />
        <path
          d="M6 11a6 6 0 0 0 12 0M12 17v3m-3 0h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

function Resultados() {
  return (
    <section className="resultados" id="resultados">
      <div className="container resultados-grid">
        <div className="resultados-collage">
          <img
            src="/assets/cesar-hero.png"
            alt="Cesar Almeida palestrando para plateias lotadas"
            loading="lazy"
          />
        </div>

        <div className="resultados-col">
          <h2 className="resultados-title">RESULTADOS REAIS</h2>

          <p className="resultados-frase">
            Resultados extraordinários começam quando o potencial encontra
            direção.
          </p>

          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat-card" key={s.numero}>
                <div className="stat-icon">{s.icon}</div>
                <span className="stat-number">{s.numero}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <p className="resultados-texto">
            Esses números não vieram do acaso. Vieram de profissionais que
            tinham potencial, mas faltava método, clareza e alguém que
            acreditasse neles antes de eles mesmos acreditarem. Será que você
            também está nesse ponto?
          </p>
        </div>
      </div>

      <div className="resultados-cta">
        <a href="#metodo" className="btn btn-primary">
          CONHECER MÉTODO{' '}
          <img src="/assets/icons/icon-arrow.png" alt="" className="arrow" />
        </a>
      </div>
    </section>
  )
}

export default Resultados
