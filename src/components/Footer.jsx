import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '../data/content';
import logoImg from '../assets/images/logo.webp';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-400 text-xs py-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-navy-900">
          {/* Coluna 1: Sobre & Identidade */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img
                src={logoImg}
                alt={t('contact.instructorName')}
                className="w-9 h-9 rounded-xl object-cover"
              />
              <span className="font-heading font-extrabold text-lg text-white">
                {t('contact.instructorName')}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {t('footer.brandDescription')}
            </p>
            <p className="text-xs text-slate-300">
              <i className="fa-solid fa-location-dot text-brand-400 mr-1"></i> {t('footer.serving')}{' '}
              {t('contact.coveredRegions')}
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-2.5">
            <span className="block font-bold text-white text-sm">{t('footer.quickNav')}</span>
            <ul className="space-y-1.5">
              <li>
                <a href="#inicio" className="hover:text-brand-400 transition">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-400 transition">
                  {t('nav.servicesAndClasses')}
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-brand-400 transition">
                  {t('nav.diferenciais')}
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-brand-400 transition">
                  {t('nav.aboutInstructor')}
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-brand-400 transition">
                  {t('nav.testimonials')}
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-brand-400 transition">
                  {t('nav.faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Aviso Legal & Conformidade Detran */}
          <div className="space-y-2.5">
            <span className="block font-bold text-white text-sm">{t('footer.legalTitle')}</span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {t('footer.legalDisclaimer')}
            </p>
          </div>
        </div>

        {/* Copyright & Informações Finais */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-400">
          <p>
            © {currentYear} {t('footer.rights')} {t('contact.city')}/{CONTACT_INFO.state}.
          </p>
          <p className="flex items-center gap-1">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
