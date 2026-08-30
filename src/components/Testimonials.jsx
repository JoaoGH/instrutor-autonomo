import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();
  const items = t('testimonials.items', { returnObjects: true }) || [];

  return (
    <section id="depoimentos" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <i className="fa-solid fa-star text-amber-500"></i> {t('testimonials.badge')}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">{t('testimonials.subtitle')}</p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(items) &&
            items.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-soft"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 text-sm">
                      {Array.from({ length: item.rating }).map((_, rIdx) => (
                        <i key={rIdx} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    &quot;{item.review}&quot;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-600 text-white font-black flex items-center justify-center text-sm shadow">
                    {item.initials}
                  </div>
                  <div>
                    <span className="block font-bold text-navy-900 text-sm">{item.name}</span>
                    <span className="block text-xs text-slate-600">{item.service}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Selo de Avaliações Google */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <span className="text-brand-700 font-semibold">
              {t('testimonials.trainedCountText')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
