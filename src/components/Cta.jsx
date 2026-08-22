import React from 'react';
import { SITE_CONTENT } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Cta() {
  const { cta, contact } = SITE_CONTENT;

  const ctaWhatsAppUrl = getWhatsAppUrl(cta.whatsappMessage);

  return (
    <section id="contato" className="py-20 cta-gradient-bg text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-navy-900/90 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-md text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-bold shadow-inner">
            <i className="fa-solid fa-calendar-check text-brand-400"></i>
            <span>{cta.urgencyBadge}</span>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {cta.titleMain} <span className="text-brand-400">{cta.titleHighlight}</span>?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {cta.subtitle}
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
              <span>{cta.buttonText}</span>
            </a>

            <span className="text-xs text-slate-400 flex items-center gap-2">
              <i className="fa-solid fa-lock text-brand-400"></i> {cta.guaranteeText}
            </span>
          </div>

          {/* Contatos e Informações de Atendimento */}
          <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300 text-xs sm:text-sm">
            <div className="flex flex-col items-center gap-1.5">
              <i className="fa-solid fa-phone text-brand-400 text-lg"></i>
              <span className="font-bold text-white">Telefone & WhatsApp</span>
              <a href={`tel:${contact.phoneTel}`} className="hover:text-white transition">
                {contact.phoneFormatted}
              </a>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <i className="fa-solid fa-location-dot text-brand-400 text-lg"></i>
              <span className="font-bold text-white">Regiões Atendidas</span>
              <span>{contact.coveredRegions}</span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <i className="fa-solid fa-clock text-brand-400 text-lg"></i>
              <span className="font-bold text-white">Horário das Aulas</span>
              <span>{contact.operatingHours}</span>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className="text-xs text-slate-400 mr-2">Siga no Instagram:</span>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram do ${contact.instructorName}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-brand-600 text-white transition shadow text-xs font-semibold"
            >
              <i className="fa-brands fa-instagram text-base text-pink-400"></i>
              <span>{contact.instagramHandle}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
