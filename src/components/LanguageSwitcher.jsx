import { useTranslation } from 'react-i18next';

function LanguageSwitcher({ className = '' }) {
  const { i18n, t } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage === 'es' ? 'es' : 'en';

  const setLanguage = (language) => {
    if (language !== activeLanguage) {
      i18n.changeLanguage(language);
    }
  };

  return (
    <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`transition-colors ${activeLanguage === 'en' ? 'text-gold-500' : 'text-slate-400 hover:text-slate-200'}`}
        aria-label={t('languageSwitcher.switchToEnglish')}
      >
        {t('languageSwitcher.en')}
      </button>
      <span className="text-slate-600">|</span>
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={`transition-colors ${activeLanguage === 'es' ? 'text-gold-500' : 'text-slate-400 hover:text-slate-200'}`}
        aria-label={t('languageSwitcher.switchToSpanish')}
      >
        {t('languageSwitcher.es')}
      </button>
    </div>
  );
}

export default LanguageSwitcher;
