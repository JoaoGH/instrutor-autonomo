import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../utils/whatsapp';
import heroImg from '../assets/images/hero.webp';

export default function About() {
  const { t } = useTranslation();
  const highlights = t('about.cardHighlights', { returnObjects: true }) || [];

  const aboutWhatsAppUrl = getWhatsAppUrl(t('about.whatsappMessage'));

  return (
    <section id="sobre" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Foto / Avatar & Credenciamento */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Moldura Visual */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-tr from-brand-800 via-navy-900 to-navy-950 p-6 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden group">
                <img
                  src={heroImg}
                  alt={t('contact.instructorName')}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent"></div>

                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-brand-300">
                    <i className="fa-solid fa-certificate"></i> {t('about.credentialBadge')}
                  </div>
                </div>

                <div className="relative z-10 space-y-3">
                  <div>
                    <h3 className="font-heading text-2xl font-black text-white">
                      {t('contact.instructorName')}
                    </h3>
                    <p className="text-xs font-semibold text-slate-200">
                      {t('about.subtitleRole')}
                    </p>
                    <p className="text-[11px] text-brand-300 font-bold mt-0.5">
                      {t('about.locationRole')}
                    </p>
                  </div>

                  <div className="bg-navy-900/80 backdrop-blur-md rounded-2xl p-3.5 border border-white/15 text-center space-y-1">
                    <span className="block text-[11px] text-brand-300 font-bold uppercase tracking-wider">
                      {t('about.commitmentLabel')}
                    </span>
                    <p className="text-xs text-slate-200 italic">&quot;{t('about.quote')}&quot;</p>
                  </div>
                </div>
              </div>

              {/* Badge Flutuante de Credencial */}
              <div className="absolute -bottom-8 right-4 sm:right-6 bg-white py-3 px-5 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                  <i className="fa-solid fa-shield-check text-xl"></i>
                </div>
                <div>
                  <span className="block text-xs font-bold text-navy-900">
                    {t('about.legalBadgeTitle')}
                  </span>
                  <span className="block text-[11px] text-slate-600">
                    {t('about.legalBadgeSub')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Biografia e Metodologia */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
              <i className="fa-solid fa-user"></i> {t('about.badge')}
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              {t('about.title')}
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>{t('about.text1')}</p>
              <p>{t('about.text2')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {Array.isArray(highlights) &&
                highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3"
                  >
                    <i className={`${highlight.icon} text-brand-600 text-xl mt-1`}></i>
                    <div>
                      <h4 className="font-bold text-navy-900 text-sm">{highlight.title}</h4>
                      <p className="text-xs text-slate-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div className="pt-4">
              <a
                href={aboutWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-whatsapp-700 hover:bg-whatsapp-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>{t('about.buttonText')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
