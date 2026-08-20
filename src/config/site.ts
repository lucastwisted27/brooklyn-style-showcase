// ============================================================
// CONFIGURAÇÃO EDITÁVEL — Brooklyn House Barbearia
// Altere aqui os dados de contato, serviços, avaliações e links.
// ============================================================

export const site = {
  name: "Brooklyn House Barbearia",
  shortName: "Brooklyn House",
  city: "Manaus — AM",
  neighborhood: "Tarumã — Manaus/AM",
  address: {
    line1: "Rua São Pedro, 150",
    line2: "Tarumã — Manaus/AM",
  },
  // Número no formato internacional, apenas dígitos (55 + DDD + número)
  whatsappNumber: "5592000000000",
  whatsappMessage:
    "Olá! Vim pelo site da Brooklyn House e gostaria de agendar um horário.",
  links: {
    instagram: "https://instagram.com/",
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=Rua+S%C3%A3o+Pedro,+150+-+Tarum%C3%A3,+Manaus+-+AM",
    // Substitua pelo embed real do Google Maps da barbearia
    mapEmbed:
      "https://www.google.com/maps?q=Rua%20S%C3%A3o%20Pedro%2C%20150%20-%20Tarum%C3%A3%2C%20Manaus%20-%20AM&output=embed",
  },
  hours: [
    { days: "Segunda a Sexta", time: "Horário a confirmar" },
    { days: "Sábado", time: "Horário a confirmar" },
    { days: "Domingo", time: "Fechado" },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const whatsappUrlFor = (service?: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    service
      ? `Olá! Gostaria de agendar: ${service}.`
      : site.whatsappMessage,
  )}`;

// ---- SERVIÇOS (nomes e descrições editáveis; sem preços) ----
export const services = [
  {
    title: "Corte",
    description:
      "Corte executado com técnica e atenção ao formato do rosto e ao seu estilo.",
  },
  {
    title: "Barba",
    description:
      "Modelagem e alinhamento da barba com acabamento cuidadoso.",
  },
  {
    title: "Corte + Barba",
    description:
      "O combo completo para renovar o visual em uma única visita.",
  },
  {
    title: "Acabamento",
    description:
      "Retoque de contornos e pezinho para manter o visual sempre alinhado.",
  },
  {
    title: "Tratamentos",
    description:
      "Cuidados complementares para cabelo e barba, sob consulta.",
  },
] as const;

// ---- AVALIAÇÕES (dados do Google — edite se mudarem) ----
export const reviewsSummary = {
  rating: "4,8",
  count: "41",
  source: "Google",
};

// PLACEHOLDERS — substituir por avaliações reais do Google
export const testimonials = [
  {
    name: "Cliente 1",
    text: "Depoimento placeholder. Substitua por uma avaliação real do Google.",
  },
  {
    name: "Cliente 2",
    text: "Depoimento placeholder. Substitua por uma avaliação real do Google.",
  },
  {
    name: "Cliente 3",
    text: "Depoimento placeholder. Substitua por uma avaliação real do Google.",
  },
] as const;

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Galeria", href: "#galeria" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
] as const;
