import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import en from './src/locales/en.json';
import it from './src/locales/it.json';
import fr from './src/locales/fr.json';
import es from './src/locales/es.json';

const messages = { en, it, fr, es };

// Function to get the initial locale from browser or local storage
const getInitialLocale = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('locale') || navigator.language.split('-')[0] || 'en';
    }
    return 'en';
};

// Create a new component to manage state and language switching
const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState(getInitialLocale());

    useEffect(() => {
        localStorage.setItem('locale', locale);
    }, [locale]);

    return (
        <IntlProvider locale={locale} messages={messages[locale] || messages.en}>
            <div style={{ textAlign: 'right', padding: '10px' }}>
                <button onClick={() => setLocale('en')}>🇺🇸 English</button>
                <button onClick={() => setLocale('it')}>🇮🇹 Italiano</button>
                <button onClick={() => setLocale('fr')}>🇫🇷 Français</button>
                <button onClick={() => setLocale('es')}>🇪🇸 Español</button>
            </div>
            {children}
        </IntlProvider>
    );
};

// Export wrapRootElement with LanguageProvider component
export const wrapRootElement = ({ element }) => {
    return <LanguageProvider>{element}</LanguageProvider>;
};
