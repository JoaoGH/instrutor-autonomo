import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Services() {
  const { t } = useTranslation();
  const items = t('services.items', { returnObjects: true }) || [];
  const bannerWhatsAppUrl = getWhatsAppUrl(t('services.banner.whatsappMessage'));

  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <i className="fa-solid fa-list-check"></i> {t('services.badge')}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">{t('services.subtitle')}</p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(items) &&
            items.map((item) => {
              const itemWhatsAppUrl = getWhatsAppUrl(item.whatsappMessage);

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-3xl p-8 border ${
                    item.isPopular
                      ? 'border-2 border-brand-500 shadow-xl'
                      : 'border-slate-200/80 shadow-soft'
                  } shadow-card-hover flex flex-col justify-between relative overflow-hidden group`}
                >
                  {item.isPopular ? (
                    <div className="absolute top-0 right-0 bg-brand-500 text-white font-black text-[11px] uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow">
                      {item.tag}
                    </div>
                  ) : (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
                  )}

                  <div className="relative z-10 space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center text-2xl shadow-sm">
                      <i className={item.icon}></i>
                    </div>

                    <div>
                      {!item.isPopular && (
                        <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block mb-1">
                          {item.tag}
                        </span>
                      )}
                      <h3 className="font-heading text-2xl font-black text-navy-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>

                    <ul className="space-y-2.5 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                      {Array.isArray(item.bullets) &&
                        item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <i className="fa-solid fa-check text-brand-600 font-bold mt-1"></i>
                            <span>{bullet}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="relative z-10 pt-8 mt-6 border-t border-slate-100">
                    <a
                      href={itemWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm ${
                        item.isPopular
                          ? 'shadow-lg shadow-brand-600/30'
                          : 'shadow-md hover:shadow-lg'
                      } transition`}
                    >
                      <i className="fa-brands fa-whatsapp text-lg"></i>
                      <span>{item.ctaText}</span>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Banner de Pacotes e Aulas Avulsas */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-900 to-navy-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-500/30 text-brand-300 text-xs font-bold uppercase">
              {t('services.banner.tag')}
            </span>
            <h4 className="font-heading text-xl sm:text-2xl font-bold">
              {t('services.banner.title')}
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">{t('services.banner.description')}</p>
          </div>
          <a
            href={bannerWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-navy-900 hover:bg-slate-100 font-bold text-sm shadow-lg whitespace-nowrap transition hover:scale-105 active:scale-95"
          >
            <i className="fa-brands fa-whatsapp text-brand-600 text-lg"></i>
            <span>{t('services.banner.buttonText')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
