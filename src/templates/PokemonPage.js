import React from 'react';
import { useIntl } from 'react-intl';

const PokemonPage = ({ pageContext }) => {
    const { id, name, genus, descriptions, imageUrl } = pageContext;
    const { locale, formatMessage } = useIntl();

    // Get translated genus and description based on selected language
    const localizedGenus = genus[locale] || genus['en'];
    const localizedDescription = descriptions[locale] || descriptions['en'];

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{name}</h1>
            <img src={imageUrl} alt={name} />
            <p><strong>{formatMessage({ id: 'id' })}:</strong> {id}</p>
            <p><strong>{formatMessage({ id: 'genus' })}:</strong> {localizedGenus}</p>
            <p><strong>{formatMessage({ id: 'description' })}:</strong> {localizedDescription}</p>
        </div>
    );
};

export default PokemonPage;
