import { useState } from 'react'

const WHATSAPP = '5519981411007'

const campos = ['nome', 'email', 'whatsapp', 'desafio']

function mascaraTelefone(valor) {
  const d = valor.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d.replace(/^(\d{0,2})/, '($1')
  if (d.length <= 6) return d.replace(/^(\d{2})(\d{0,4})/, '($1) $2')
  if (d.length <= 10) return d.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
  return d.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
}

function validaCampo(nome, valor) {
  const v = valor.trim()

  if (nome === 'nome') {
    if (!v) return 'Informe seu nome completo.'
    if (v.length < 3) return 'Nome muito curto.'
    if (!/^[A-Za-zÀ-ÿ']{2,}(\s+[A-Za-zÀ-ÿ'.]+)+$/.test(v))
      return 'Informe nome e sobrenome, apenas letras.'
    return ''
  }

  if (nome === 'email') {
    if (!v) return 'Informe seu e-mail.'
    if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(v))
      return 'E-mail inválido. Exemplo: nome@empresa.com.br'
    return ''
  }

  if (nome === 'whatsapp') {
    const d = v.replace(/\D/g, '')
    if (!d) return 'Informe seu WhatsApp com DDD.'
    if (d.length < 10) return 'Número incompleto. Use DDD + número.'
    if (Number(d.slice(0, 2)) < 11) return 'DDD inválido.'
    if (d.length === 11 && d[2] !== '9')
      return 'Celular com 11 dígitos deve começar com 9 após o DDD.'
    return ''
  }

  if (nome === 'desafio') {
    if (!v) return 'Conte qual é seu maior desafio hoje.'
    if (v.length < 15) return 'Descreva com um pouco mais de detalhe (mín. 15 caracteres).'
    return ''
  }

  return ''
}

function FormCaptacao() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    desafio: '',
  })
  const [erros, setErros] = useState({})
  const [tocados, setTocados] = useState({})
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    const { name } = e.target
    const valor =
      name === 'whatsapp' ? mascaraTelefone(e.target.value) : e.target.value

    setForm((f) => ({ ...f, [name]: valor }))

    if (tocados[name]) {
      setErros((prev) => ({ ...prev, [name]: validaCampo(name, valor) }))
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target
    setTocados((t) => ({ ...t, [name]: true }))
    setErros((prev) => ({ ...prev, [name]: validaCampo(name, value) }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const novosErros = {}
    campos.forEach((c) => {
      const erro = validaCampo(c, form[c])
      if (erro) novosErros[c] = erro
    })

    setTocados(Object.fromEntries(campos.map((c) => [c, true])))
    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) {
      const primeiro = campos.find((c) => novosErros[c])
      document.querySelector(`[name="${primeiro}"]`)?.focus()
      return
    }

    const mensagem = [
      'Olá! Vim pela página do Método U.S.E V.O.E e quero receber uma proposta.',
      '',
      `*Nome:* ${form.nome.trim()}`,
      `*E-mail:* ${form.email.trim()}`,
      `*WhatsApp:* ${form.whatsapp}`,
      `*Maior desafio hoje:* ${form.desafio.trim()}`,
    ].join('\n')

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setEnviado(true)
  }

  const campoProps = (name) => ({
    name,
    value: form[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': erros[name] ? 'true' : undefined,
    'aria-describedby': erros[name] ? `erro-${name}` : undefined,
    className: erros[name] ? 'campo-invalido' : undefined,
  })

  const Erro = ({ name }) =>
    erros[name] ? (
      <span className="form-erro" id={`erro-${name}`} role="alert">
        {erros[name]}
      </span>
    ) : null

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
              Obrigado, {form.nome.trim().split(' ')[0]}! Abrimos o WhatsApp com
              seus dados já preenchidos — é só enviar a mensagem. Se a janela não
              abrir,{' '}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                clique aqui
              </a>
              .
            </p>
          ) : (
            <form className="form-contato" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Nome completo"
                  autoComplete="name"
                  maxLength={80}
                  {...campoProps('nome')}
                />
                <Erro name="nome" />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="E-mail"
                  autoComplete="email"
                  maxLength={120}
                  {...campoProps('email')}
                />
                <Erro name="email" />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  autoComplete="tel"
                  inputMode="numeric"
                  maxLength={15}
                  {...campoProps('whatsapp')}
                />
                <Erro name="whatsapp" />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Qual é seu maior desafio hoje?"
                  rows="4"
                  maxLength={600}
                  {...campoProps('desafio')}
                />
                <Erro name="desafio" />
              </div>
              <button type="submit" className="btn btn-primary btn-large">
                QUERO RECEBER UMA PROPOSTA{' '}
                <img
                  src="/assets/icons/icon-arrow.png"
                  alt=""
                  className="arrow"
                />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default FormCaptacao
