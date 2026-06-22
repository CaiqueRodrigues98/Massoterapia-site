import {
  Service,
  BlogPost,
  BusinessInfo,
  Testimonial,
  FAQItem,
} from "../types";

export const businessInfo: BusinessInfo = {
  name: "Espaço Terapêutico Harmonia",
  legalName: "Espaço Terapêutico Harmonia LTDA",
  phone: "+55 11 99999-9999",
  whatsapp: "5511999999999",
  email: "contato@espacoharmonia.com.br",
  streetAddress: "Av. Principal, 1234",
  neighborhood: "Centro",
  city: "São Paulo",
  state: "SP",
  postalCode: "01000-000",
  country: "BR",
  specialistName: "Camila Almeida",
  specialistExperienceYears: 5,
};

export const mockServices: Service[] = [
  {
    id: "1",
    title: "Massagem Relaxante",
    description:
      "Técnica suave utilizando óleos essenciais para aliviar o estresse, reduzir a tensão muscular e promover profundo bem-estar.",
    duration: 60,
    price: 120,
    imageType: "relaxante",
  },
  {
    id: "2",
    title: "Massagem Turbinada / Modeladora",
    description:
      "Movimentos vigorosos e rítmicos para auxiliar na circulação, modelagem corporal e redução de medidas.",
    duration: 50,
    price: 140,
    imageType: "modeladora",
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Benefícios Científicos da Massoterapia contra a Ansiedade",
    slug: "beneficios-massoterapia-ansiedade",
    excerpt:
      "Descubra como as sessões regulares de massagem agem no sistema nervoso reduzindo o cortisol.",
    content: "Texto completo do artigo...",
    publishedAt: "22/06/2026",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marina F.",
    treatment: "Massagem Relaxante",
    quote:
      "Cheguei com muita tensão cervical e saí renovada. O atendimento é muito humano e cuidadoso.",
  },
  {
    id: "2",
    name: "Renato M.",
    treatment: "Massagem Modeladora",
    quote:
      "Além do resultado estético, senti melhora na circulação e no inchaço já nas primeiras sessões.",
  },
  {
    id: "3",
    name: "Patrícia L.",
    treatment: "Atendimento Personalizado",
    quote:
      "O plano foi montado para minha rotina. A diferença no meu bem-estar foi muito rápida.",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "A sessão dói?",
    answer:
      "A pressão aplicada é ajustada ao seu limiar de conforto. Em técnicas mais intensas, você sempre pode solicitar ajustes.",
  },
  {
    id: "2",
    question: "Como escolher a técnica ideal?",
    answer:
      "Na primeira conversa, avaliamos seus objetivos, histórico e rotina para indicar o protocolo mais adequado.",
  },
  {
    id: "3",
    question: "Qual frequência é recomendada?",
    answer:
      "Para manutenção e prevenção, geralmente 1 sessão semanal ou quinzenal. Para objetivos específicos, o plano pode ser intensificado.",
  },
  {
    id: "4",
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Pix, débito, crédito e dinheiro. Pacotes com múltiplas sessões possuem condições especiais.",
  },
];
