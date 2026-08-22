import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const headerWhatsAppUrl = getWhatsAppUrl(
    'Olá, Instrutor Hélvio! Gostaria de consultar valores e horários disponíveis para aulas práticas em Sapiranga/região.'
  );

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full glass-effect border-b border-slate-200/80 transition-all duration-300 ${
        isScrolled ? 'shadow-md bg-white/95' : 'bg-white/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-car-side text-2xl"></i>
            </div>
            <div>
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-navy-900 tracking-tight block leading-tight">
                Instrutor <span className="text-brand-600">Hélvio</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider block">
                Sapiranga & Vale do Sinos / RS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition">
              Início
            </a>
            <a href="#servicos" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition">
              Serviços
            </a>
            <a href="#diferenciais" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition">
              Diferenciais
            </a>
            <a href="#sobre" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition">
              Sobre Mim
            </a>
            <a href="#depoimentos" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition">
              Depoimentos
            </a>
            <a href="#duvidas" className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition">
              Dúvidas
            </a>
          </nav>

          {/* CTA Header Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md hover:shadow-lg shadow-brand-600/25 transition-all hover:scale-105 active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Agendar Aula</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={isMobileMenuOpen}
              className="p-2.5 rounded-xl text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {isMobileMenuOpen ? (
                <i className="fa-solid fa-xmark text-xl"></i>
              ) : (
                <i className="fa-solid fa-bars text-xl"></i>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <a
            href="#inicio"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
          >
            Início
          </a>
          <a
            href="#servicos"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
          >
            Serviços e Aulas
          </a>
          <a
            href="#diferenciais"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
          >
            Por que me escolher?
          </a>
          <a
            href="#sobre"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
          >
            Sobre o Instrutor
          </a>
          <a
            href="#depoimentos"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
          >
            Depoimentos de Alunos
          </a>
          <a
            href="#duvidas"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
          >
            Perguntas Frequentes
          </a>

          <div className="pt-3 border-t border-slate-100">
            <a
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-brand-600 text-white font-bold text-base shadow-lg shadow-brand-600/30"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span>Falar no WhatsApp Agora</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
