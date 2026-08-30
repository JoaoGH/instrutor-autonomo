import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage || i18n.language || 'pt-BR';

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="inline-flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-full shadow-inner">
      <button
        type="button"
        onClick={() => handleLanguageChange('pt-BR')}
        aria-label={t('languageSwitcher.ptBR')}
        title={t('languageSwitcher.ptBR')}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 ${
          currentLanguage === 'pt-BR' || currentLanguage.startsWith('pt')
            ? 'bg-brand-600 text-white shadow-sm'
            : 'text-slate-600 hover:text-navy-900 hover:bg-slate-200/60'
        }`}
      >
        <span>🇧🇷</span>
        <span>PT</span>
      </button>

      <button
        type="button"
        onClick={() => handleLanguageChange('en')}
        aria-label={t('languageSwitcher.en')}
        title={t('languageSwitcher.en')}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 ${
          currentLanguage.startsWith('en')
            ? 'bg-brand-600 text-white shadow-sm'
            : 'text-slate-600 hover:text-navy-900 hover:bg-slate-200/60'
        }`}
      >
        <span>🇺🇸</span>
        <span>EN</span>
      </button>
    </div>
  );
}
