const IconBrainOutline = () => (
  <img src="/assets/icons/icon-brain.png" alt="" className="gold-img" />
)

const IconHeartOutline = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconTargetOutline = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="13" r="7" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="11" cy="13" r="3" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="m11 13 5.5-5.5M16.5 7.5 17 5l2 2-2.5.5Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="m12 3 2.5 6.1 6.5.5-5 4.3 1.6 6.4L12 16.8 6.4 20.3 8 13.9 3 9.6l6.5-.5L12 3Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
)

const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 20V10m5.3 10V4m5.4 16v-8m5.3 8V7"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
)

const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M14 4c3 0 6 3 6 6-2.5 2.5-7 7-9 9l-4-4c2-2 4.5-8.5 7-11ZM7 17l-3 3M9 19l-1 1M5 15l-1 1"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="14.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

const ciclos = [
  {
    numero: 'CICLO 01',
    titulo: 'Despertar Consciência',
    Icon: IconBrainOutline,
    texto:
      'A maioria das pessoas vive no piloto automático. Não sabe quem realmente é, o que realmente quer, ou por que está fazendo o que faz. Esse ciclo te tira desse transe.',
    bullets: [
      'Identificar seus bloqueios',
      'Descobrir seu potencial real',
      'Entender sua essência',
      'Clareza do seu propósito',
    ],
    FooterIcon: IconStar,
    footer: (
      <>
        Quando você desperta consciência, você deixa de ser vítima das
        circunstâncias e passa a ser{' '}
        <strong>criador da sua realidade.</strong>
      </>
    ),
  },
  {
    numero: 'CICLO 02',
    titulo: 'Inteligência Emocional',
    Icon: IconHeartOutline,
    texto:
      'Você pode ter toda a clareza do mundo, mas se suas emoções estão descontroladas, você não consegue agir. Esse ciclo te ensina a dominar suas emoções e usá-las a seu favor.',
    bullets: [
      'Reconhecer seus padrões emocionais;',
      'Reprogramar sua mente;',
      'Desenvolver resiliência emocional;',
      'Ativar confiança e segurança.',
    ],
    FooterIcon: IconChart,
    footer: (
      <>
        Quando você domina suas emoções, você domina seus resultados. Porque{' '}
        <strong>80% dos resultados é emocional.</strong>
      </>
    ),
  },
  {
    numero: 'CICLO 03',
    titulo: 'Implementação e Resultados',
    Icon: IconTargetOutline,
    texto:
      'Transformar consciência e emoção em ação e resultados reais.',
    bullets: [
      'Criar seu plano de ação;',
      'Implementar estratégias práticas;',
      'Medir e acompanhar.',
    ],
    FooterIcon: IconRocket,
    footer: (
      <>
        Aqui é onde a mágica acontece. Porque você sai do teórico e entra no
        prático. E é na prática que <strong>os resultados aparecem.</strong>
      </>
    ),
  },
]

function ComoFunciona() {
  return (
    <section className="como-funciona" id="metodo">
      <div className="container como-funciona-grid">
        <div className="como-funciona-intro">
          <h2 className="section-title-left">
            COMO FUNCIONA O MÉTODO U.S.E V.O.E?
          </h2>
          <p>
            Cada ciclo ativa uma parte essencial do potencial humano, criando
            mudanças profundas na forma de pensar, agir e liderar.
          </p>
        </div>

        <div className="ciclos-grid">
          {ciclos.map((ciclo) => (
            <div className="ciclo-card" key={ciclo.numero}>
              <div className="ciclo-icon">
                <ciclo.Icon />
              </div>
              <span className="ciclo-numero">{ciclo.numero}</span>
              <h4>{ciclo.titulo}</h4>
              <p className="ciclo-texto">{ciclo.texto}</p>
              <ul className="ciclo-bullets">
                {ciclo.bullets.map((b) => (
                  <li key={b}>
                    <span className="ciclo-check">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="ciclo-footer">
                <span className="ciclo-footer-icon">
                  <ciclo.FooterIcon />
                </span>
                <p>{ciclo.footer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona
