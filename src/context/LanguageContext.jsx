import { createContext, useState, useContext, useCallback } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(() => {
        return localStorage.getItem('mesob-lang') || 'en';
    });

    const setLang = useCallback((newLang) => {
        setLangState(newLang);
        localStorage.setItem('mesob-lang', newLang);
        document.documentElement.lang = newLang === 'am' ? 'am' : 'en';
    }, []);

    const t = useCallback((key) => {
        return translations[lang]?.[key] || translations['en']?.[key] || key;
    }, [lang]);

    const toggleLang = useCallback(() => {
        setLang(lang === 'en' ? 'am' : 'en');
    }, [lang, setLang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang, t, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
