const ciclos = [
  {
    numero: 1,
    titulo: 'Ativar (U)',
    texto: 'Despertar a consciência emocional e reconhecer padrões limitantes.',
  },
  {
    numero: 2,
    titulo: 'Sentir (S)',
    texto: 'Desenvolver inteligência emocional e gestão interna de emoções.',
  },
  {
    numero: 3,
    titulo: 'Expandir (E)',
    texto: 'Ampliar capacidade de comunicação e liderança.',
  },
  {
    numero: 4,
    titulo: 'Florescer (V.O.E)',
    texto: 'Gerar resultados extraordinários e impacto real na organização.',
  },
]

function ComoFunciona() {
  return (
    <section className="como-funciona" id="metodo">
      <div className="container">
        <h2 className="section-title">Como Funciona o Método U.S.E V.O.E?</h2>
        <p className="subtitle-large">
          Cada ciclo ativa uma parte essencial do potencial humano, criando
          mudanças profundas na forma de pensar, agir e liderar.
        </p>

        <div className="ciclos-grid">
          {ciclos.map((ciclo) => (
            <div className="ciclo-card" key={ciclo.numero}>
              <div className="ciclo-number">{ciclo.numero}</div>
              <h4>{ciclo.titulo}</h4>
              <p>{ciclo.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona
