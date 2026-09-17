import { PracticeArea, MethodStep, Insight, AttorneyData } from "./types";

/**
 * ATENÇÃO — DADOS DEMONSTRATIVOS
 * Nenhuma informação profissional real do advogado foi inventada.
 * Todos os campos abaixo devem ser substituídos por dados reais
 * fornecidos pelo cliente antes da publicação do site.
 */

export const attorney: AttorneyData = {
  fullName: "Fernando Andrade",
  photoUrl: "/advogado-generico.png",
  oab: "OAB/SP 000000",
  education: "Bacharel em Direito",
  university: "Universidade Presbiteriana Mackenzie",
  specializations: ["Direito Civil", "Direito Empresarial"],
  practiceAreas: "Consultoria e contencioso estratégico",
  experience: "Atuação dedicada a pessoas e empresas em decisões jurídicas relevantes.",
  bio: [
    "Fernando Andrade atua com uma abordagem próxima, estratégica e orientada à construção de soluções jurídicas claras para cada cliente.",
  ],
};

export const officeImageUrl = "/escritorio-generico.jpg";

export const practiceAreas: PracticeArea[] = [
  {
    number: "01",
    name: "Direito Civil",
    description:
      "Orientação e representação em contratos, responsabilidades, indenizações e relações entre particulares.",
  },
  {
    number: "02",
    name: "Direito Empresarial",
    description:
      "Apoio jurídico para empresas em contratos, negociações, prevenção de riscos e decisões estratégicas.",
  },
  {
    number: "03",
    name: "Direito Imobiliário",
    description:
      "Análise de negócios imobiliários, contratos de compra e venda, locação e regularização de imóveis.",
  },
  {
    number: "04",
    name: "Direito de Família",
    description:
      "Atuação cuidadosa em divórcio, guarda, pensão, partilha e organização patrimonial da família.",
  },
];

export const methodSteps: MethodStep[] = [
  { number: "01", title: "Primeiro contato", description: "Entendimento inicial da sua necessidade, com total sigilo." },
  { number: "02", title: "Compreensão da demanda", description: "Levantamento detalhado dos fatos e documentos relevantes." },
  { number: "03", title: "Análise jurídica", description: "Estudo aprofundado do caso à luz da legislação aplicável." },
  { number: "04", title: "Estratégia", description: "Definição do caminho mais adequado para o seu caso." },
  { number: "05", title: "Acompanhamento", description: "Atualizações claras em cada etapa, do início ao fim." },
];

export const insights: Insight[] = [
  {
    slug: "artigo-exemplo-um",
    imageUrl: "/documentos-generico.jpg",
    category: "Direito Civil",
    title: "Como tomar decisões jurídicas com mais segurança",
    subtitle: "Clareza e planejamento ajudam a reduzir riscos antes que eles se tornem conflitos.",
    excerpt: "Um panorama prático sobre os primeiros passos para avaliar uma questão jurídica e escolher o melhor caminho.",
    date: "16 de setembro de 2026",
    readTime: "6 min",
    author: attorney.fullName,
    content: [
      "Quando surge uma dúvida jurídica, reunir informações e documentos desde o início ajuda a compreender o cenário com mais precisão. Uma análise organizada também torna a comunicação mais objetiva e permite identificar alternativas com calma.",
      "Cada situação exige uma avaliação própria. Por isso, orientação personalizada é importante para equilibrar riscos, custos e próximos passos antes de qualquer decisão.",
    ],
  },
  {
    slug: "artigo-exemplo-dois",
    imageUrl: "/reuniao-generica.jpg",
    category: "Direito Empresarial",
    title: "Contratos claros evitam problemas no futuro",
    subtitle: "Pontos essenciais para revisar antes de assinar um contrato.",
    excerpt: "Veja quais cláusulas merecem atenção e como uma revisão preventiva pode trazer mais segurança para a negociação.",
    date: "10 de setembro de 2026",
    readTime: "4 min",
    author: attorney.fullName,
    content: [
      "Um contrato bem estruturado registra expectativas, responsabilidades e formas de resolver eventuais divergências. A revisão cuidadosa desses pontos reduz ambiguidades e facilita o cumprimento do acordo.",
    ],
  },
  {
    slug: "artigo-exemplo-tres",
    imageUrl: "/familia-generica.jpg",
    category: "Direito de Família",
    title: "Planejamento patrimonial começa com informação",
    subtitle: "Organização e diálogo são parte importante das decisões familiares.",
    excerpt: "Como conversar sobre patrimônio e organizar escolhas importantes com mais tranquilidade e previsibilidade.",
    date: "3 de setembro de 2026",
    readTime: "5 min",
    author: attorney.fullName,
    content: [
      "O planejamento patrimonial pode ajudar famílias a tomar decisões conscientes e evitar conflitos futuros. O primeiro passo é mapear bens, responsabilidades e objetivos de cada pessoa envolvida.",
    ],
  },
];

export const contactInfo = {
  phone: "+55 (11) 3333-2026",
  whatsapp: "+55 (11) 98888-2026",
  whatsappLink: "https://wa.me/5511988882026",
  email: "contato@fernandoandrade.adv.br",
  address: "Avenida Paulista, 1000, São Paulo - SP",
  hours: "Segunda a sexta, das 9h às 18h",
};

export const firmName = "Fernando Andrade";
