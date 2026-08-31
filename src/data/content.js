/**
 * Informações de Contato e Configurações Estáticas
 * Landing Page - Instrutor Hélvio
 */

export const CONTACT_INFO = {
  whatsappNumber: '5551996562126',
  phoneFormatted: '(51) 99656-2126',
  phoneTel: '+5551996562126',
  instagramHandle: '@instrutor.helvio',
  instagramUrl: 'https://instagram.com/instrutor.helvio',
  state: 'RS',
};

const TipoTestemunho = Object.freeze({
  HABILITADO: Object.freeze({value: 0, tagColor: "bg-brand-100 text-brand-800", label: "testimonials.licensed"}),
  APROVADO_DETRAN: Object.freeze({value: 1, tagColor: "bg-amber-100 text-amber-800", label: "testimonials.detranPassed"}),
  PRIMEIRA_HABILITACAO: Object.freeze({value: 2, tagColor: "bg-blue-100 text-blue-800", label: "testimonials.firstLicense"})
});

export const TESTIMONIALS = [
  {
    id: 0,
    type: TipoTestemunho.HABILITADO,
    name: "Mariana R.",
    initials: "MR",
    service: "testimonials.items.service1",
    rating: 5,
    review: "testimonials.items.review1",
  },
  {
    id: 1,
    type: TipoTestemunho.APROVADO_DETRAN,
    name: "Lucas Santos",
    initials: "LS",
    service: "testimonials.items.service2",
    rating: 5,
    review: "testimonials.items.review2",
  },
  {
    id: 2,
    type: TipoTestemunho.PRIMEIRA_HABILITACAO,
    name: "Cláudia Albuquerque",
    initials: "CA",
    service: "testimonials.items.service3",
    rating: 5,
    review: "testimonials.items.review3",
  },
  {
    id: 3,
    type: TipoTestemunho.HABILITADO,
    name: "Fernanda Lima",
    initials: "FL",
    service: "testimonials.items.service4",
    rating: 5,
    review: "testimonials.items.review4",
  },
  {
    id: 4,
    type: TipoTestemunho.PRIMEIRA_HABILITACAO,
    name: "Roberto Vargas",
    initials: "RV",
    service: "testimonials.items.service5",
    rating: 5,
    review: "testimonials.items.review5",
  },
  {
    id: 5,
    type: TipoTestemunho.APROVADO_DETRAN,
    name: "Amanda Costa",
    initials: "AC",
    service: "testimonials.items.service6",
    rating: 5,
    review: "testimonials.items.review6",
  }
];
