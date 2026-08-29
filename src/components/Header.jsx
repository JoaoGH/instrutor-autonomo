import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Header() {
  const { t } = useTranslation();
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

  const headerWhatsAppUrl = getWhatsAppUrl(t('contact.defaultMessage'));

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
                {t('contact.locationDisplay')}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition"
            >
              {t('nav.home')}
            </a>
            <a
              href="#servicos"
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition"
            >
              {t('nav.services')}
            </a>
            <a
              href="#diferenciais"
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition"
            >
              {t('nav.diferenciais')}
            </a>
            <a
              href="#sobre"
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition"
            >
              {t('nav.about')}
            </a>
            <a
              href="#depoimentos"
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition"
            >
              {t('nav.testimonials')}
            </a>
            <a
              href="#duvidas"
              className="text-sm font-semibold text-slate-700 hover:text-brand-600 transition"
            >
              {t('nav.faq')}
            </a>
          </nav>

          {/* CTA Header Button & Language Switcher */}
          <div className="hidden sm:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md hover:shadow-lg shadow-brand-600/25 transition-all hover:scale-105 active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>{t('nav.scheduleBtn')}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button & Switcher */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={toggleMobileMenu}
              type="button"
              aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
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
            {t('nav.home')}
          </a>
          <a
            href="#servicos"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
          >
            {t('nav.servicesAndClasses')}
          </a>
          <a
            href="#diferenciais"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
          >
            {t('nav.whyChooseMe')}
          </a>
          <a
            href="#sobre"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
          >
            {t('nav.aboutInstructor')}
          </a>
          <a
            href="#depoimentos"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
          >
            {t('nav.studentTestimonials')}
          </a>
          <a
            href="#duvidas"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
          >
            {t('nav.faqFull')}
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
              <span>{t('nav.scheduleBtnMobile')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
