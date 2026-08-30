import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const { t } = useTranslation();

  const floatingWhatsAppUrl = getWhatsAppUrl(t('contact.defaultMessage'));

  return (
    <div className="whatsapp-float-container fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip interativo */}
      <div className="whatsapp-tooltip hidden md:block bg-white text-slate-800 text-xs font-bold py-2 px-3.5 rounded-xl shadow-xl border border-slate-200 whitespace-nowrap">
        <span className="text-brand-600 mr-1">●</span> {t('floatingWhatsApp.tooltip')}
      </div>

      {/* Botão de Ação Flutuante */}
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('floatingWhatsApp.ariaLabel')}
        className="animate-pulse-whatsapp relative w-16 h-16 rounded-full bg-whatsapp-500 hover:bg-whatsapp-600 text-white flex items-center justify-center text-3xl shadow-2xl transition hover:scale-110 active:scale-95"
      >
        <i className="fa-brands fa-whatsapp"></i>

        {/* Ponto de status Online */}
        <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-whatsapp-500 border-2 border-white"></span>
      </a>
    </div>
  );
}
