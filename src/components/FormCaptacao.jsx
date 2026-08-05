import { useState } from 'react'

const WHATSAPP = '5519981411007'
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

async function enviarEmail(form) {
  if (!WEB3FORMS_KEY) {
    console.warn('VITE_WEB3FORMS_KEY não configurada — e-mail não enviado.')
    return false
  }

  try {
    const resp = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Novo lead do site — ${form.nome.trim()}`,
        from_name: 'Landing U.S.E V.O.E',
        Nome: form.nome.trim(),
        Email: form.email.trim(),
        WhatsApp: form.whatsapp,
        'Maior desafio': form.desafio.trim(),
      }),
    })
    const dados = await resp.json()
    return Boolean(dados.success)
  } catch (err) {
    console.error('Falha ao enviar o lead por e-mail:', err)
    return false
  }
}

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
  const [emailOk, setEmailOk] = useState(null)

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

    // abre o WhatsApp ainda dentro do clique, senão o navegador bloqueia o pop-up
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setEnviado(true)

    enviarEmail(form).then(setEmailOk)
  }

  const campoProps = (name) => ({
    id: `campo-${name}`,
    name,
    value: form[name],
    onChange: handleChange,
    onBlur: handleBlur,
    placeholder: ' ',
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
          <div className="form-card">
            <div className="form-card-glow" aria-hidden="true" />

            <div className="form-card-head">
              <img
                src="/assets/logo-usevoe.png"
                alt="U.S.E V.O.E"
                className="form-logo"
              />
              <span className="form-badge">Vagas limitadas por mês</span>
            </div>

            <h2>
              Pronto para despertar o potencial da sua equipe e transformar seus
              resultados?
            </h2>
            <p className="section-desc form-desc">
              Preencha os dados abaixo e descubra como o Método USE VOE pode
              gerar uma transformação real na sua empresa, carreira ou equipe.
            </p>

            {enviado ? (
            <div className="form-sucesso">
              <p>
                Obrigado, {form.nome.trim().split(' ')[0]}! Recebemos seus dados
                e já entraremos em contato. Abrimos também o WhatsApp com a
                mensagem pronta — se a janela não abrir,{' '}
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  clique aqui
                </a>
                .
              </p>
              {emailOk === false && (
                <p className="form-sucesso-aviso">
                  Não conseguimos registrar seu contato automaticamente. Por
                  favor, envie a mensagem pelo WhatsApp para garantir o
                  atendimento.
                </p>
              )}
            </div>
            ) : (
              <form className="form-contato" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      autoComplete="name"
                      maxLength={80}
                      {...campoProps('nome')}
                    />
                    <label htmlFor="campo-nome">Nome completo</label>
                    <Erro name="nome" />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      autoComplete="tel"
                      inputMode="numeric"
                      maxLength={15}
                      {...campoProps('whatsapp')}
                    />
                    <label htmlFor="campo-whatsapp">WhatsApp com DDD</label>
                    <Erro name="whatsapp" />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    autoComplete="email"
                    maxLength={120}
                    {...campoProps('email')}
                  />
                  <label htmlFor="campo-email">Seu melhor e-mail</label>
                  <Erro name="email" />
                </div>
                <div className="form-group">
                  <textarea
                    rows="4"
                    maxLength={600}
                    {...campoProps('desafio')}
                  />
                  <label htmlFor="campo-desafio">
                    Qual é seu maior desafio hoje?
                  </label>
                  <span className="form-contador">
                    {form.desafio.length}/600
                  </span>
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

                <ul className="form-trust">
                  <li>Resposta em até 24h</li>
                  <li>Sem compromisso</li>
                  <li>Seus dados não são compartilhados</li>
                </ul>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormCaptacao
