export const CLINIC_NAME = "Clínica Dra. Daiana de Aguiar";
export const PHONE_DISPLAY = "(21) 99650-1058";
export const ADDRESS_STREET = "R. Nunes Alves, 1898 — Sala 501 (Prédio Osmira)";
export const ADDRESS_CITY = "Centro, Duque de Caxias — RJ · CEP 25010-002";

export const waLink = (message: string) =>
  `https://wa.me/5521996501058?text=${encodeURIComponent(message)}`;

export const WHATSAPP_URL = waLink(
  "Olá! Gostaria de agendar uma avaliação na Clínica Dra. Daiana de Aguiar."
);

export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=R.+Nunes+Alves,+1898+-+Centro,+Duque+de+Caxias+-+RJ,+25010-002&output=embed";

export const MAPS_ROUTE_URL =
  "https://www.google.com/maps/dir/?api=1&destination=R.+Nunes+Alves,+1898+-+Centro,+Duque+de+Caxias+-+RJ,+25010-002";

export const MAPS_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Dra.+Daiana+de+Aguiar+Duque+de+Caxias";

export const IMAGES = {
  hero: "https://image.qwenlm.ai/generated-images/d02a07ea-106c-4419-9abe-8dc383b47ae6/_result.png",
  cirurgia:
    "https://image.qwenlm.ai/generated-images/542f9eb5-b686-4354-ae0e-f6e9353739f1/_result.png",
  dtm: "https://image.qwenlm.ai/generated-images/d5c7ffb6-f33a-4f6b-ba1c-3d7533f4f945/_result.png",
  procedimentos:
    "https://image.qwenlm.ai/generated-images/def365a6-d53d-4e7c-af1d-10d99e1d49b9/_result.png",
  retrato:
    "https://image.qwenlm.ai/generated-images/dc6e7a4b-e66e-41b5-8e9b-f7c7e8f8501b/_result.png",
};

export const NAV_ITEMS = [
  { label: "Especialidades", href: "#especialidades" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Onde estamos", href: "#onde-estamos" },
];

export type Specialty = {
  id: string;
  image: string;
  alt: string;
  label: string;
  title: string;
  text: string;
  tags: string[];
  waMessage: string;
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "bucmaxilo",
    image: IMAGES.cirurgia,
    alt: "Equipe em procedimento de cirurgia oral com campos estéreis e foco cirúrgico",
    label: "Cirurgia e Traumatologia Bucomaxilofacial",
    title: "Cirurgias orais e tratamentos complexos da região facial.",
    text: "Sisos inclusos, traumas faciais e procedimentos complexos conduzidos com planejamento detalhado, técnica precisa e anestesia adequada para cada caso — do primeiro exame ao último retorno.",
    tags: [
      "Sisos inclusos e impactados",
      "Traumatologia facial",
      "Cirurgia ortognática",
      "Implantes complexos",
    ],
    waMessage:
      "Olá! Gostaria de agendar uma avaliação de Cirurgia Bucomaxilofacial com a Dra. Daiana de Aguiar.",
  },
  {
    id: "dtm",
    image: IMAGES.dtm,
    alt: "Dra. Daiana realizando palpação da articulação temporomandibular em paciente durante avaliação clínica",
    label: "Tratamento de DTM e Dor Orofacial",
    title: "Diagnóstico e acompanhamento das disfunções da ATM e dores faciais.",
    text: "Estalos, travamentos, bruxismo e dores de cabeça de origem mandibular investigados de perto, com plano terapêutico individualizado e reavaliações contínuas em cada etapa.",
    tags: [
      "Disfunção da ATM",
      "Bruxismo e apertamento",
      "Placas miorrelaxantes",
      "Dores faciais crônicas",
    ],
    waMessage:
      "Olá! Gostaria de agendar uma avaliação de DTM e dor orofacial com a Dra. Daiana de Aguiar.",
  },
  {
    id: "orais",
    image: IMAGES.procedimentos,
    alt: "Sala cirúrgica da clínica com instrumentais organizados e equipo odontológico",
    label: "Procedimentos Orais Gerais",
    title: "Extração de siso, gengivoplastia, estomatologia e cirurgias preventivas e corretivas.",
    text: "Procedimentos de consultório realizados com protocolo rigoroso de biossegurança e orientações claras de cuidado — para um pós-operatório previsível e sem sustos.",
    tags: [
      "Extração de siso",
      "Gengivoplastia",
      "Estomatologia",
      "Frenectomia",
    ],
    waMessage:
      "Olá! Gostaria de agendar um procedimento oral (siso, gengivoplastia ou estomatologia) com a Dra. Daiana de Aguiar.",
  },
];

export type Testimonial = {
  quote: string;
  tag: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Fiz a extração do siso com muito medo e fui surpreendida. A Dra. Daiana explicou tudo, o pós-operatório foi tranquilo e sem dor, com acompanhamento de perto até a recuperação total.",
    tag: "Extração de siso",
  },
  {
    quote:
      "Atendimento humanizado de verdade: paciência para tirar todas as dúvidas antes da cirurgia e assistência completa depois.",
    tag: "Cirurgia oral",
  },
  {
    quote:
      "O tratamento de DTM mudou minha qualidade de vida. Diagnóstico preciso e acompanhamento detalhado em cada etapa.",
    tag: "Tratamento de DTM",
  },
  {
    quote:
      "Profissionalismo e excelência técnica. Referência em cirurgia oral em Duque de Caxias, sem dúvida.",
    tag: "Cirurgia oral",
  },
  {
    quote:
      "Ambiente acolhedor e organizado. Recomendo de olhos fechados.",
    tag: "Primeira avaliação",
  },
];
