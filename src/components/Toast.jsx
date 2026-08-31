import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TOAST_ACTIVITIES } from '../data/content.js';

export default function Toast() {
  const { t } = useTranslation();

  const rawActivities = t('toast.activities', { returnObjects: true });
  const activities = Array.isArray(rawActivities) ? rawActivities : [];
  const activitiesLength = activities.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (activitiesLength === 0 || isDismissed) return;

    const initialTimer = setTimeout(() => {
      setIsVisible(true);

      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, TOAST_ACTIVITIES.tempoVisivelToast);

      return () => clearTimeout(hideTimer);
    }, TOAST_ACTIVITIES.tempoPrimeiroToast);

    const intervalTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activitiesLength);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, TOAST_ACTIVITIES.tempoVisivelToast);
    }, TOAST_ACTIVITIES.intervaloEntreToasts);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [activitiesLength, isDismissed]);

  if (isDismissed || activitiesLength === 0) return null;

  return (
    <aside
      aria-label={t('toast.notifLabel')}
      className={`fixed bottom-6 left-6 z-50 max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-200 transition-all duration-500 flex items-center gap-3 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center text-lg flex-shrink-0">
        <i className="fa-solid fa-car-side"></i>
      </div>
      <div
        className="flex-1 text-xs text-slate-700 leading-snug"
        dangerouslySetInnerHTML={{ __html: activities[currentIndex] || '' }}
      />
      <button
        type="button"
        onClick={() => {
          setIsVisible(false);
          setIsDismissed(true);
        }}
        aria-label={t('toast.closeNotif')}
        className="text-slate-400 hover:text-slate-600 p-1 transition"
      >
        <i className="fa-solid fa-xmark text-sm"></i>
      </button>
    </aside>
  );
}
