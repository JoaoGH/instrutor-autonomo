import { describe, it, expect } from 'vitest';
import { getWhatsAppUrl } from '../whatsapp';
import { CONTACT_INFO } from '../../data/content';
import i18n from '../../i18n';

describe('whatsapp utility', () => {
  it('deve gerar a URL com a mensagem padrão quando nenhuma mensagem é fornecida', () => {
    const defaultMsg = i18n.t('contact.defaultMessage');
    const expectedUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(defaultMsg)}`;

    const result = getWhatsAppUrl();

    expect(result).toBe(expectedUrl);
    expect(result).toContain(CONTACT_INFO.whatsappNumber);
  });

  it('deve gerar a URL com mensagem personalizada codificada', () => {
    const customMsg = 'Olá Hélvio, gostaria de agendar uma aula de direção!';
    const expectedUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(customMsg)}`;

    const result = getWhatsAppUrl(customMsg);

    expect(result).toBe(expectedUrl);
    expect(result).toContain(encodeURIComponent(customMsg));
  });

  it('deve codificar corretamente caracteres especiais e quebras de linha', () => {
    const multiLineMsg = 'Linha 1\nLinha 2 & teste com ç, ã e !';
    const result = getWhatsAppUrl(multiLineMsg);

    expect(result).toBe(
      `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(multiLineMsg)}`
    );
    expect(result).not.toContain('\n');
    expect(result).not.toContain(' ');
  });
});
