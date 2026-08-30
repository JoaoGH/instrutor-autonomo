import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Hero() {
  const { t } = useTranslation();

  const heroWhatsAppUrl = getWhatsAppUrl(t('hero.whatsappMsgHero'));

  const cardWhatsAppUrl = getWhatsAppUrl(t('hero.whatsappMsgCard'));

  const checks = t('hero.card.checks', { returnObjects: true }) || [];

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold shadow-sm">
              <i className="fa-solid fa-award text-brand-600"></i>
              <span>{t('hero.badge')}</span>
            </div>

            {/* Título Principal (H1) */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-navy-900 tracking-tight leading-[1.12]">
              {t('hero.titleMain')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600">
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
                className="animate-pulse-whatsapp inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-lg shadow-xl shadow-brand-600/30 transition-all hover:scale-105 active:scale-95"
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
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
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
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-900 via-navy-900 to-brand-950 aspect-[4/3] flex items-center justify-center p-6 text-white shadow-inner">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="relative z-10 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                    <i className="fa-solid fa-id-card text-3xl text-brand-400"></i>
                  </div>
                  <div>
                    <h2 className="font-heading font-extrabold text-xl text-white">
                      {t('hero.card.title')}
                    </h2>
                    <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
                      {t('hero.card.description')}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-xs font-semibold text-brand-300">
                    <i className="fa-solid fa-heart-pulse"></i> {t('hero.card.pill')}
                  </div>
                </div>
              </div>

              {/* Lista de Checkmarks Rápidos */}
              <div className="mt-5 space-y-2.5">
                {Array.isArray(checks) &&
                  checks.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                    >
                      <i className="fa-solid fa-circle-check text-brand-600 text-base mt-0.5"></i>
                      <span>
                        <strong>{item.strong}</strong>
                        {item.text}
                      </span>
                    </div>
                  ))}
              </div>

              {/* CTA do Card */}
              <div className="mt-6">
                <a
                  href={cardWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white font-bold text-sm shadow-lg shadow-brand-600/25 transition"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>{t('hero.card.buttonText')}</span>
                </a>
              </div>
            </div>

            {/* Floating Badge 1 (Topo Direito) */}
            <div className="hidden sm:flex animate-float absolute -top-5 -right-5 z-20 items-center gap-3 bg-white py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                <i className="fa-solid fa-trophy"></i>
              </div>
              <div>
                <span className="block text-xs font-black text-navy-900 leading-tight">
                  {t('hero.floatingBadge1.title')}
                </span>
                <span className="block text-[11px] font-semibold text-slate-600">
                  {t('hero.floatingBadge1.subtitle')}
                </span>
              </div>
            </div>

            {/* Floating Badge 2 (Inferior Esquerdo) */}
            <div className="hidden sm:flex animate-float-delayed absolute -bottom-5 -left-5 z-20 items-center gap-3 bg-navy-900 text-white py-2.5 px-4 rounded-2xl shadow-xl border border-navy-800">
              <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-lg">
                <i className="fa-solid fa-heart text-white"></i>
              </div>
              <div>
                <span className="block text-xs font-bold text-white leading-tight">
                  {t('hero.floatingBadge2.title')}
                </span>
                <span className="block text-[11px] font-medium text-slate-300">
                  {t('hero.floatingBadge2.subtitle')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
