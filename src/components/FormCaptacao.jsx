import { useState } from 'react'

function FormCaptacao() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    desafio: '',
  })
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: integrar com API / serviço de e-mail / WhatsApp
    console.log(form)
    setEnviado(true)
  }

  return (
    <section className="form-section" id="form">
      <div className="container form-grid">
        <div className="form-foto">
          <div className="form-foto-glow" />
          <img
            src="/assets/cesar-final.png"
            alt="Ebook do Método U.S.E V.O.E"
            loading="lazy"
          />
        </div>

        <div className="form-col">
          <h2>
            Pronto para despertar o potencial da sua equipe e transformar seus
            resultados?
          </h2>
          <p className="section-desc form-desc">
            Preencha os dados abaixo e descubra como o Método USE VOE pode gerar
            uma transformação real na sua empresa, carreira ou equipe.
          </p>

          {enviado ? (
            <p className="form-sucesso">
              Obrigado, {form.nome}! Entraremos em contato via WhatsApp em
              breve.
            </p>
          ) : (
            <form className="form-contato" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="nome"
                placeholder="Nome completo"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="whatsapp"
                placeholder="Whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="desafio"
                placeholder="Qual é seu maior desafio hoje?"
                rows="4"
                value={form.desafio}
                onChange={handleChange}
                required
              />
            </div>
              <button type="submit" className="btn btn-primary btn-large">
                QUERO RECEBER UMA PROPOSTA{' '}
                <img src="/assets/icons/icon-arrow.png" alt="" className="arrow" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default FormCaptacao
