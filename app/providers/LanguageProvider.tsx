// components/LanguageProvider.tsx
'use client';

import { I18nextProvider } from 'react-i18next';
import { ReactNode, useEffect } from 'react';
import i18n from '../lib/i18n';

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Optional: Sync with localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}