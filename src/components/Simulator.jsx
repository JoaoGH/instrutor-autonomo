import React, { useState } from 'react';
import { SITE_CONTENT } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Simulator() {
  const { simulator } = SITE_CONTENT;

  const [selectedServiceId, setSelectedServiceId] = useState(simulator.options[0].id);
  const [studentName, setStudentName] = useState('');
  const [period, setPeriod] = useState(simulator.periods[0].value);
  const [transmission, setTransmission] = useState(simulator.transmissions[0].value);

  const currentOption = simulator.options.find((opt) => opt.id === selectedServiceId) || simulator.options[0];
  const serviceTitle = currentOption.service;

  const displayName = studentName.trim() || 'futuro(a) aluno(a)';
  
  const composedMessage = `Olá, Instrutor Hélvio! Meu nome é *${displayName}*.\n\n` +
    `📍 *Região:* Sapiranga / Vale do Sinos - RS\n` +
    `📌 *Interesse:* ${serviceTitle}\n` +
    `⏰ *Disponibilidade:* ${period}\n` +
    `🚗 *Preferência:* ${transmission}\n\n` +
    `Gostaria de saber valores de pacotes e datas livres na sua agenda!`;

  const dynamicWhatsAppUrl = getWhatsAppUrl(composedMessage);

  return (
    <section className="py-16 bg-brand-50/70 border-b border-brand-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-xl border border-brand-200/60 p-6 sm:p-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase">
              <i className="fa-solid fa-sliders"></i> {simulator.badge}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900">
              {simulator.title}
            </h2>
            <p className="text-sm text-slate-600">
              {simulator.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Passo 1: Selecionar Serviço */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                {simulator.step1Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {simulator.options.map((option) => {
                  const isSelected = selectedServiceId === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedServiceId(option.id)}
                      className={`p-4 rounded-2xl border-2 text-left flex items-center gap-3 transition-all ${
                        isSelected
                          ? 'border-brand-600 bg-brand-50 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-brand-400 hover:bg-brand-50/30'
                      }`}
                    >
                      <i className={`${option.icon} text-brand-600 text-xl`}></i>
                      <div>
                        <span className="block text-sm font-bold text-navy-900">{option.title}</span>
                        <span className="block text-[11px] text-slate-600">{option.subtitle}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Passo 2, 3 e 4: Dados complementares */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div>
                <label htmlFor="student-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {simulator.step2Title}
                </label>
                <input
                  type="text"
                  id="student-name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ex: Mariana Silva"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50"
                />
              </div>

              <div>
                <label htmlFor="student-period" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {simulator.step3Title}
                </label>
                <select
                  id="student-period"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50"
                >
                  {simulator.periods.map((p, idx) => (
                    <option key={idx} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="student-transmission" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {simulator.step4Title}
                </label>
                <select
                  id="student-transmission"
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50"
                >
                  {simulator.transmissions.map((t, idx) => (
                    <option key={idx} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Preview da Mensagem Gerada */}
            <div className="p-4 rounded-2xl bg-emerald-900/5 border border-emerald-200">
              <span className="block text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1">
                <i className="fa-brands fa-whatsapp text-brand-600 mr-1"></i> Preview da mensagem que será enviada:
              </span>
              <p className="text-xs text-slate-700 font-mono italic whitespace-pre-line">
                "{composedMessage}"
              </p>
            </div>

            {/* Botão de Ação do Gerador */}
            <div className="text-center pt-2">
              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-brand-600/30 transition hover:scale-105 active:scale-95"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                <span>{simulator.buttonText}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
