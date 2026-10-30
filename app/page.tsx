"use client";

import { FormEvent, useState } from "react";

const topics = [
  {
    id: "empresa",
    label: "Empresas",
    title: "Decisões jurídicas com visão de negócio.",
    description:
      "Orientação para relações societárias, negociações e desafios do dia a dia empresarial.",
    areas: "Societário · Empresarial · Negociação",
  },
  {
    id: "contratos",
    label: "Contratos",
    title: "A segurança também mora nos detalhes.",
    description:
      "Elaboração e análise de contratos para compreender obrigações, riscos e alternativas.",
    areas: "Contratos · Direito civil · Responsabilidade",
  },
  {
    id: "pessoal",
    label: "Pessoas e patrimônio",
    title: "Cuidado e discrição em decisões pessoais.",
    description:
      "Acompanhamento em questões de família e patrimônio, respeitando a história de cada pessoa.",
    areas: "Família · Patrimônio · Direito civil",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function FirmMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M9 39V9h8l7 14 7-14h8v30" />
      <path d="M15 39V22l9 15 9-15v17" />
      <path d="M22 5h4" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) {
        throw new Error(
          response.status === 503
            ? "O formulário ainda não está conectado. Tente novamente mais tarde."
            : "Não foi possível enviar sua mensagem. Tente novamente.",
        );
      }

      form.reset();
      setStatus("Mensagem recebida. Obrigado por nos escrever.");
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua mensagem. Tente novamente.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Margem Advocacia — início">
          <FirmMark className="brand-mark" />
          <span className="brand-lockup">
            <span className="brand-word">MARGEM</span>
            <span className="brand-descriptor">ADVOCACIA</span>
          </span>
        </a>

        <button
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Navegação principal">
          <a href="#escritorio" onClick={() => setMenuOpen(false)}>Escritório</a>
          <a href="#atuacao" onClick={() => setMenuOpen(false)}>Áreas de atuação</a>
          <a href="#caminho" onClick={() => setMenuOpen(false)}>Atendimento</a>
          <a className="nav-cta" href="#contato" onClick={() => setMenuOpen(false)}>
            Fale com a equipe <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow hero-kicker">
                <i /> MARGEM ADVOCACIA
              </span>
              <h1>
                Direito com<br />
                <em>perspectiva.</em>
              </h1>
              <p>
                Orientação jurídica criteriosa, com atenção ao que está em
                jogo — e às pessoas por trás de cada decisão.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#contato">
                  Agende uma conversa <ArrowIcon />
                </a>
                <a className="hero-secondary" href="#atuacao">Conheça nossa atuação</a>
              </div>
              <div className="hero-rule" />
              <span className="hero-note">ATUAÇÃO RESPONSÁVEL · ATENDIMENTO PERSONALIZADO</span>
            </div>

            <figure className="hero-photo">
              <img
                src="/margem-biblioteca.jpg"
                alt="Biblioteca jurídica clássica com livros e bustos de juristas"
                fetchPriority="high"
              />
              <span className="photo-index">M · 01</span>
              <figcaption>
                <span>ESTUDO, EXPERIÊNCIA, PERSPECTIVA.</span>
                <small>IMAGEM ILUSTRATIVA</small>
              </figcaption>
            </figure>
          </div>
          <div className="hero-bottomline">
            <span>ADVOCACIA CONTEMPORÂNEA, FUNDAMENTADA NO ESSENCIAL.</span>
            <a href="#escritorio">CONHEÇA O ESCRITÓRIO <span>↓</span></a>
          </div>
        </section>

        <section className="about section-pad" id="escritorio">
          <div className="section-index">
            <span>01</span>
            <i />
            <span>O ESCRITÓRIO</span>
          </div>
          <div className="about-content">
            <span className="eyebrow">UMA ADVOCACIA QUE COMEÇA PELA ESCUTA</span>
            <h2>
              Antes da estratégia,<br />
              <em>entender a história.</em>
            </h2>
            <div className="about-bottom">
              <p>
                Uma questão jurídica raramente existe isolada. Há um negócio,
                uma relação, uma família, planos em andamento. Compreender
                esse contexto permite avaliar os caminhos com mais clareza e
                responsabilidade.
              </p>
              <div className="about-signature">
                <FirmMark />
                <span>CRITÉRIO NO DIREITO.<br />RESPEITO ÀS PESSOAS.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="practice section-pad" id="atuacao">
          <div className="practice-heading">
            <div>
              <span className="eyebrow">02 — ÁREAS DE ATUAÇÃO</span>
              <h2>Atuação jurídica<br /><em>para cada contexto.</em></h2>
            </div>
            <p>
              Uma orientação cuidadosa começa por entender a questão. Escolha
              o assunto mais próximo do seu momento.
            </p>
          </div>

          <div className="topic-picker" role="group" aria-label="Escolha o assunto mais próximo">
            {topics.map((topic, index) => (
              <button
                aria-pressed={selectedTopic.id === topic.id}
                className={`topic-tab${selectedTopic.id === topic.id ? " is-selected" : ""}`}
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                type="button"
              >
                <span>0{index + 1}</span>{topic.label}<i>↗</i>
              </button>
            ))}
          </div>
          <div className="topic-detail" aria-live="polite">
            <span className="topic-mark"><FirmMark /></span>
            <div className="topic-copy">
              <span>ATUAÇÃO COM ANÁLISE INDIVIDUAL</span>
              <h3>{selectedTopic.title}</h3>
              <p>{selectedTopic.description}</p>
              <small>ÁREAS RELACIONADAS: {selectedTopic.areas}</small>
            </div>
            <a href="#contato" className="topic-link">Fale com a equipe <ArrowIcon /></a>
          </div>
          <p className="practice-disclaimer">
            A viabilidade e o escopo do atendimento são avaliados
            individualmente, após a compreensão da demanda.
          </p>
        </section>

        <section className="method section-pad" id="caminho">
          <div className="method-heading">
            <span className="eyebrow">03 — COMO FUNCIONA</span>
            <h2>Clareza desde<br /><em>o primeiro passo.</em></h2>
            <p>
              Um atendimento reservado para compreender sua necessidade,
              esclarecer dúvidas e apresentar possibilidades com transparência.
            </p>
            <a className="button button-dark" href="#contato">
              Inicie uma conversa <ArrowIcon />
            </a>
          </div>
          <div className="method-list">
            <article>
              <span>01</span>
              <div><h3>Escuta e compreensão</h3><p>Você apresenta a situação. A equipe ouve e reúne as informações necessárias.</p></div>
              <b>01</b>
            </article>
            <article>
              <span>02</span>
              <div><h3>Análise jurídica</h3><p>Os fatos e documentos são avaliados à luz das possibilidades aplicáveis.</p></div>
              <b>02</b>
            </article>
            <article>
              <span>03</span>
              <div><h3>Orientação transparente</h3><p>Você conhece os caminhos possíveis, os próximos passos e os pontos de atenção.</p></div>
              <b>03</b>
            </article>
          </div>
        </section>

        <section className="contact section-pad" id="contato">
          <div className="contact-heading">
            <span className="eyebrow">04 — CONTATO</span>
            <h2>Vamos conversar<br /><em>com discrição.</em></h2>
            <p>
              Conte brevemente o que precisa. A equipe entrará em contato para
              entender como pode orientar.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>NOME</span>
              <input autoComplete="name" name="nome" placeholder="Seu nome" required />
            </label>
            <div className="form-pair">
              <label>
                <span>E-MAIL</span>
                <input autoComplete="email" name="email" placeholder="voce@exemplo.com" required type="email" />
              </label>
              <label>
                <span>TELEFONE <small>OPCIONAL</small></span>
                <input autoComplete="tel" name="telefone" placeholder="(00) 00000-0000" type="tel" />
              </label>
            </div>
            <label>
              <span>COMO PODEMOS AJUDAR?</span>
              <textarea name="mensagem" placeholder="Compartilhe apenas o necessário para iniciarmos a conversa." required rows={3} />
            </label>
            <div className="form-footer">
              <span role="status" aria-live="polite">{status}</span>
              <button className="button button-gold" disabled={sending} type="submit">
                {sending ? "Enviando..." : "Enviar mensagem"} <ArrowIcon />
              </button>
            </div>
            <p className="form-disclaimer">
              O primeiro contato não estabelece, por si só, uma relação
              advogado-cliente nem substitui uma consulta jurídica.
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio" aria-label="Margem Advocacia — início">
          <FirmMark className="brand-mark" />
          <span className="brand-lockup">
            <span className="brand-word">MARGEM</span>
            <span className="brand-descriptor">ADVOCACIA</span>
          </span>
        </a>
        <span className="footer-line">ATUAÇÃO COM CRITÉRIO E RESPONSABILIDADE</span>
        <span className="image-credit">BIBLIOTECA: IMAGEM ILUSTRATIVA · UNSPLASH</span>
        <span className="copyright">PROJETO CONCEITUAL · NEURAL © {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
