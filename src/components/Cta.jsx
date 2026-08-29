import React from 'react';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Cta() {
  const { t } = useTranslation();

  const ctaWhatsAppUrl = getWhatsAppUrl(t('cta.whatsappMessage'));

  return (
    <section id="contato" className="py-20 cta-gradient-bg text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-navy-900/90 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-md text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-bold shadow-inner">
            <i className="fa-solid fa-calendar-check text-brand-400"></i>
            <span>{t('cta.urgencyBadge')}</span>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {t('cta.titleMain')} <span className="text-brand-400">{t('cta.titleHighlight')}</span>?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t('cta.subtitle')}
            </p>
          </div>

          <div className="pt-4 flex flex-col items-center justify-center gap-4">
            <a
              href={ctaWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-whatsapp inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-extrabold text-lg sm:text-xl shadow-2xl shadow-brand-500/40 transition-all hover:scale-105 active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-3xl"></i>
              <span>{t('cta.buttonText')}</span>
            </a>

            <span className="text-xs text-slate-400 flex items-center gap-2">
              <i className="fa-solid fa-lock text-brand-400"></i> {t('cta.guaranteeText')}
            </span>
          </div>

          {/* Contatos e Informações de Atendimento */}
          <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300 text-xs sm:text-sm">
            <div className="flex flex-col items-center gap-1.5">
              <i className="fa-solid fa-phone text-brand-400 text-lg"></i>
              <span className="font-bold text-white">{t('cta.phoneLabel')}</span>
              <a href={`tel:${CONTACT_INFO.phoneTel}`} className="hover:text-white transition">
                {CONTACT_INFO.phoneFormatted}
              </a>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <i className="fa-solid fa-location-dot text-brand-400 text-lg"></i>
              <span className="font-bold text-white">{t('cta.regionsLabel')}</span>
              <span>{t('contact.coveredRegions')}</span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <i className="fa-solid fa-clock text-brand-400 text-lg"></i>
              <span className="font-bold text-white">{t('cta.hoursLabel')}</span>
              <span>{t('contact.operatingHours')}</span>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className="text-xs text-slate-400 mr-2">{t('cta.instagramFollow')}</span>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram do ${t('contact.instructorName')}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-brand-600 text-white transition shadow text-xs font-semibold"
            >
              <i className="fa-brands fa-instagram text-base text-pink-400"></i>
              <span>{CONTACT_INFO.instagramHandle}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
