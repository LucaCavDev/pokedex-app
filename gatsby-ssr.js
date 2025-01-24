import React from 'react';
import { IntlProvider } from 'react-intl';
import en from './src/locales/en.json';
import it from './src/locales/it.json';
import fr from './src/locales/fr.json';
import es from './src/locales/es.json';

const messages = { en, it, fr, es };

export const wrapRootElement = ({ element }) => {
  return <IntlProvider locale="en" messages={messages.en}>{element}</IntlProvider>;
};
