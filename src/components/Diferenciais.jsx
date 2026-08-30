import { useTranslation } from 'react-i18next';

export default function Diferenciais() {
  const { t } = useTranslation();
  const items = t('diferenciais.items', { returnObjects: true }) || [];

  return (
    <section id="diferenciais" className="py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <i className="fa-solid fa-sparkles"></i> {t('diferenciais.badge')}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            {t('diferenciais.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">{t('diferenciais.subtitle')}</p>
        </div>

        {/* Grid com 6 Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(items) &&
            items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3 hover:bg-brand-50/50 hover:border-brand-300 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center text-xl">
                  <i className={item.icon}></i>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
