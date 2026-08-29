import i18n from '../i18n';
import { CONTACT_INFO } from '../data/content';

/**
 * Retorna a URL formatada do WhatsApp com a mensagem codificada
 * @param {string} [customMessage] - Mensagem personalizada
 * @returns {string} - Link pronto para https://wa.me/...
 */
export function getWhatsAppUrl(customMessage) {
  const message = customMessage || i18n.t('contact.defaultMessage');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodedText}`;
}
