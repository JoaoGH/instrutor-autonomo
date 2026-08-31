import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../utils/whatsapp';
import heroImg from '../assets/images/hero.webp';

export default function Hero() {
  const { t } = useTranslation();
  const heroWhatsAppUrl = getWhatsAppUrl(t('hero.whatsappMsgHero'));
  const cardWhatsAppUrl = getWhatsAppUrl(t('hero.whatsappMsgCard'));
  const checks = t('hero.card.checks', { returnObjects: true }) || [];

  // Estado para controlar qual checkmark está ativo no momento
  const [currentCheck, setCurrentCheck] = useState(0);

  // Efeito para avançar o carrossel a cada 4 segundos
  useEffect(() => {
    if (!checks.length) return;
    const timer = setInterval(() => {
      setCurrentCheck((prev) => (prev + 1) % checks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [checks.length]);

  return (
    <section
      id="inicio"
      className="relative hero-gradient-bg pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-200/60"
    >
      {/* Círculos decorativos de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Texto de Impacto & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge de Autoridade */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100/80 border border-brand-300 text-brand-800 text-xs sm:text-sm font-bold shadow-sm">
              <i className="fa-solid fa-award text-brand-600"></i>
              <span>{t('hero.badge')}</span>
            </div>

            {/* Título Principal (H1) */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-navy-900 tracking-tight leading-[1.12]">
              {t('hero.titleMain')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            {/* Subtítulo Explicativo */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            {/* Botões de Ação Principais */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-pulse-whatsapp inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-whatsapp-700 hover:bg-whatsapp-800 text-white font-extrabold text-lg shadow-xl shadow-brand-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                <span>{t('hero.ctaPrimary')}</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold text-base shadow-sm transition hover:shadow"
              >
                <span>{t('hero.ctaSecondary')}</span>
                <i className="fa-solid fa-arrow-down text-sm"></i>
              </a>
            </div>

            {/* Prova Social Imediata (Mini Badges) */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 text-slate-600 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-car-side text-brand-600"></i>
                <span className="font-medium">{t('hero.feature1')}</span>
              </div>

              <div className="flex items-center gap-2">
                <i className="fa-solid fa-calendar-check text-brand-600"></i>
                <span className="font-medium">{t('hero.feature2')}</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Card Visual com Destaques Flutuantes */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Card Principal com Visual Moderno */}
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 shadow-soft">
              {/* Tag de Disponibilidade */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
                  </span>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {t('hero.card.status')}
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  <i className="fa-solid fa-clock-rotate-left mr-1"></i>{' '}
                  {t('hero.card.badgeResponse')}
                </span>
              </div>

              {/* Imagem / Visual Ilustrativo */}
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-tr from-brand-800 via-navy-900 to-navy-950 p-6 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden group">
                <img
                  src={heroImg}
                  alt={t('contact.instructorName')}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent"></div>
                <div className="relative z-10 space-y-3"></div>

                {/* Lista de Checkmarks Rápidos */}
                <div className="relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-brand-300">
                    <i className="fa-solid fa-heart-pulse"></i> <p>{t('hero.card.pill')}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-brand-300">
                    <i className="fa-solid fa-id-card pulse"></i> {t('hero.card.title')}
                  </div>

                  {/* Bloco do Carrossel de Texto Animado */}
                  <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="h-12 relative overflow-hidden">
                      {Array.isArray(checks) &&
                        checks.map((item, idx) => (
                          <div
                            key={idx}
                            className={`absolute inset-0 transition-all duration-500 ease-in-out flex items-center gap-3 ${
                              idx === currentCheck
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-4'
                            }`}
                          >
                            <i className="fa-solid fa-check text-brand-400 text-lg"></i>
                            <span className="text-sm text-slate-200">
                              <strong className="text-xs text-white font-bold">
                                {item.strong}
                              </strong>
                              <p className="text-xs text-slate-200 italic">{item.text}</p>
                            </span>
                          </div>
                        ))}
                    </div>

                    {/* Barra de Progresso */}
                    <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        key={currentCheck} // O react destrói e recria a div, reiniciando a animação CSS
                        className="h-full bg-brand-500 animate-progress"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA do Card */}
              <div className="mt-6">
                <a
                  href={cardWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-whatsapp-600 to-whatsapp-700 hover:from-whatsapp-700 hover:to-whatsapp-800 text-white font-bold text-sm shadow-lg shadow-brand-600/25 transition"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>{t('hero.card.buttonText')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
