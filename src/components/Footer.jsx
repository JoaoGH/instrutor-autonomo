import React from 'react';
import { SITE_CONTENT } from '../data/content';

export default function Footer() {
  const { footer, contact } = SITE_CONTENT;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-400 text-xs py-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-navy-900">
          
          {/* Coluna 1: Sobre & Identidade */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold">
                <i className="fa-solid fa-steering-wheel"></i>
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                {contact.instructorName}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {footer.brandDescription}
            </p>
            <p className="text-xs text-slate-300">
              <i className="fa-solid fa-location-dot text-brand-400 mr-1"></i> Atendendo: {contact.coveredRegions}
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-2.5">
            <span className="block font-bold text-white text-sm">Navegação Rápida</span>
            <ul className="space-y-1.5">
              <li><a href="#inicio" className="hover:text-brand-400 transition">Início</a></li>
              <li><a href="#servicos" className="hover:text-brand-400 transition">Serviços e Aulas</a></li>
              <li><a href="#diferenciais" className="hover:text-brand-400 transition">Diferenciais</a></li>
              <li><a href="#sobre" className="hover:text-brand-400 transition">Sobre o Instrutor</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-400 transition">Depoimentos</a></li>
              <li><a href="#duvidas" className="hover:text-brand-400 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Coluna 3: Aviso Legal & Conformidade Detran */}
          <div className="space-y-2.5">
            <span className="block font-bold text-white text-sm">Aviso Legal & DETRAN</span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {footer.legalDisclaimer}
            </p>
          </div>

        </div>

        {/* Copyright & Informações Finais */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-400">
          <p>© {currentYear} {footer.rights} Sapiranga/{contact.state}.</p>
          <p className="flex items-center gap-1">
            Atendimento personalizado e humanizado no trânsito.
          </p>
        </div>

      </div>
    </footer>
  );
}
