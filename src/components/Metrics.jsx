import React from 'react';
import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Metrics() {
  const { t } = useTranslation();
  const metrics = t('metrics', { returnObjects: true }) || [];

  return (
    <section className="bg-navy-900 text-white py-12 border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-navy-800">
          {Array.isArray(metrics) && metrics.map((item, idx) => (
            <div key={idx} className="pt-4 sm:pt-0">
              <span className="block font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-brand-400">
                {item.number}
              </span>
              <span className="block text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
