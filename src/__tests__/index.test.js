import React from 'react';
import { render, screen } from '@testing-library/react';
import IndexPage from '@/pages/index';
import { IntlProvider } from 'react-intl';
import en from '@/locales/en.json';

describe('Index Page', () => {
    test('renders page title', () => {
        render(
            <IntlProvider locale="en" messages={en}>
                <IndexPage />
            </IntlProvider>
        );
        expect(screen.getByText('Pokedex')).toBeInTheDocument();
    });

    test('renders search input', () => {
        render(
            <IntlProvider locale="en" messages={en}>
                <IndexPage />
            </IntlProvider>
        );
        expect(screen.getByPlaceholderText('Search Pokemon...')).toBeInTheDocument();
    });
});
