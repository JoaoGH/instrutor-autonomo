import { useTranslation } from 'react-i18next';
import { TESTIMONIALS} from "../data/content.js";
import { useRef } from "react";

export default function Testimonials() {
  const { t } = useTranslation();
  const items = TESTIMONIALS;
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.firstChild ? current.firstChild.offsetWidth + 24 : 350;

      const maxScrollLeft = current.scrollWidth - current.clientWidth;

      if (direction === 'left') {
        if (current.scrollLeft <= 0) {
          current.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (current.scrollLeft >= maxScrollLeft - 2) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section id="depoimentos" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <i className="fa-solid fa-star text-amber-500"></i> {t('testimonials.badge')}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">{t('testimonials.subtitle')}</p>
        </div>

        {/* Controles e Carrossel */}
        <div className="relative group">
          {/* Botão Voltar (Esquerda) */}
          <button
              onClick={() => scroll('left')}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white border border-slate-200 shadow-md rounded-full text-slate-600 hover:text-brand-600 hover:bg-slate-50 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 focus:opacity-100"
              aria-label="Anterior"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* Container do Carrossel (Substituiu a Grid) */}
          <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-2 px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {Array.isArray(items) && items.map((item) => (
              <div
                key={item.id}
                className="snap-center shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-soft"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 text-sm">
                      {Array.from({ length: item.rating }).map((_, rIdx) => (
                        <i key={rIdx} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${item.type.tagColor}`}
                    >
                      {t(item.type.label)}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    &quot;{t(item.review)}&quot;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-600 text-white font-black flex items-center justify-center text-sm shadow">
                    {item.initials}
                  </div>
                  <div>
                    <span className="block font-bold text-navy-900 text-sm">{item.name}</span>
                    <span className="block text-xs text-slate-600">{t(item.service)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botão Avançar (Direita) */}
          <button
              onClick={() => scroll('right')}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white border border-slate-200 shadow-md rounded-full text-slate-600 hover:text-brand-600 hover:bg-slate-50 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 focus:opacity-100"
              aria-label="Próximo"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

        </div>
      </div>
    </section>
  );
}
