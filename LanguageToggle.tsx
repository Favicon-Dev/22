import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
    >
      <Languages className="w-5 h-5" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
}