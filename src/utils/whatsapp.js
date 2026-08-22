import { SITE_CONTENT } from '../data/content';

/**
 * Retorna a URL formatada do WhatsApp com a mensagem codificada
 * @param {string} [customMessage] - Mensagem personalizada
 * @returns {string} - Link pronto para https://wa.me/...
 */
export function getWhatsAppUrl(customMessage) {
  const message = customMessage || SITE_CONTENT.contact.defaultMessage;
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONTENT.contact.whatsappNumber}?text=${encodedText}`;
}
