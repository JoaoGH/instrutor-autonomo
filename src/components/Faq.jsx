import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Faq() {
  const { t } = useTranslation();
  const items = t('faq.items', { returnObjects: true }) || [];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="duvidas" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <i className="fa-solid fa-circle-question"></i> {t('faq.badge')}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            {t('faq.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Lista de Perguntas (Acordeão) */}
        <div className="space-y-4">
          {Array.isArray(items) && items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-navy-900">
                    {item.question}
                  </span>
                  <i
                    className={`fa-solid fa-chevron-down text-slate-400 text-sm transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-brand-600' : ''
                    }`}
                  ></i>
                </button>

                {isOpen && (
                  <div className="pt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-3 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
