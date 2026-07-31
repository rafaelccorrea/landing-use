import CheckCircle from './CheckCircle'

const IconTooth = () => (
  <img src="/assets/icons/icon-tooth.png" alt="" loading="lazy" />
)

const IconBrain = () => (
  <img src="/assets/icons/icon-brain.png" alt="" loading="lazy" />
)

const IconHouse = () => (
  <img src="/assets/icons/icon-house.png" alt="" loading="lazy" />
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
                  <CheckCircle className="check" />
                  <span>
                    <strong>O que fizemos:</strong>{' '}
                    <span className="destaque-gold">{c.solucao}</span>
                  </span>
                </p>
                <p className="case-resultado">{c.resultado}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="casos-close">
          Qual desses profissionais se <strong>parece com você?</strong> O
          potencial já está aí. <strong>Falta só ativar.</strong>
        </p>
      </div>
    </section>
  )
}

export default Casos
