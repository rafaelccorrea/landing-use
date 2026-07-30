const IconTooth = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3c-1.6 0-2.2.8-3.8.8C6.3 3.8 4.5 4.8 4.5 8c0 2.3.7 3.9 1.3 6.2.5 2 .5 5 1.9 5 1.3 0 1.3-3 2-4.6.3-.7.7-1.1 2.3-1.1s2 .4 2.3 1.1c.7 1.6.7 4.6 2 4.6 1.4 0 1.4-3 1.9-5C18.8 11.9 19.5 10.3 19.5 8c0-3.2-1.8-4.2-3.7-4.2-1.6 0-2.2-.8-3.8-.8Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
)

const IconBrain = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 5.5A2.5 2.5 0 0 0 7.5 4 2.5 2.5 0 0 0 5 6.5 2.5 2.5 0 0 0 4 11a2.5 2.5 0 0 0 1.2 4.3A2.5 2.5 0 0 0 8 18a2.3 2.3 0 0 0 4-.8m0-11.7A2.5 2.5 0 0 1 16.5 4 2.5 2.5 0 0 1 19 6.5 2.5 2.5 0 0 1 20 11a2.5 2.5 0 0 1-1.2 4.3A2.5 2.5 0 0 1 16 18a2.3 2.3 0 0 1-4-.8m0-11.7v11.7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconHouse = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 11 12 4l8 7M6 9.5V20h4v-5h4v5h4V9.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const cases = [
  {
    Icon: IconTooth,
    area: 'Odontologia',
    resultNumber: '+110%',
    resultLabel: 'faturamento',
    desafio:
      'Uma clínica com equipe de secretárias que não convertia consultas em tratamentos. Dentistas sem estratégia para apresentar e fechar serviços como aparelhos ortodônticos.',
    solucao:
      'Treinamento da equipe de atendimento + estratégia personalizada de fechamento para cada dentista.',
    resultado: 'Resultado em 12 meses: +110% de faturamento.',
  },
  {
    Icon: IconBrain,
    area: 'Terapeutas',
    resultNumber: 'Novos',
    resultLabel: 'patamares',
    desafio:
      'Grupo de 6 terapeutas com potencial acima da média, mas agenda abaixo do esperado e dificuldade em comunicar o valor do próprio trabalho.',
    solucao:
      'Mentoria em grupo com USE VOE, inteligência emocional e estratégia de comunicação.',
    resultado: 'Todos atingiram grandes resultados.',
  },
  {
    Icon: IconHouse,
    area: 'Mercado imobiliário',
    resultNumber: 'Método',
    resultLabel: 'próprio',
    desafio:
      'Corretores com grande experiência mas sem identidade profissional clara. Perdiam negócios para quem sabia se posicionar melhor.',
    solucao:
      'Construção do método exclusivo de trabalho e posicionamento de mercado com USE VOE.',
    resultado: 'Tornaram-se referência no segmento.',
  },
]

function Casos() {
  return (
    <section className="casos" id="casos">
      <div className="container">
        <h2 className="section-title">O MÉTODO EM AÇÃO — CASOS REAIS</h2>

        <div className="cases-grid">
          {cases.map((c) => (
            <div className="case-card" key={c.area}>
              <div className="case-header">
                <span className="case-icon">
                  <c.Icon />
                </span>
                <h4>{c.area}</h4>
                <div className="case-result">
                  <span className="result-number">{c.resultNumber}</span>
                  <span className="result-label">{c.resultLabel}</span>
                </div>
              </div>
              <div className="case-body">
                <p className="case-desafio">{c.desafio}</p>
                <p className="case-fez">
                  <span className="check">✓</span>
                  <span>
                    <strong>O que fizemos:</strong> {c.solucao}
                  </span>
                </p>
                <p className="case-resultado">{c.resultado}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="subtitle casos-close">
          Qual desses profissionais se parece com você? O potencial já está aí.
          <strong> Falta só ativar.</strong>
        </p>
      </div>
    </section>
  )
}

export default Casos
