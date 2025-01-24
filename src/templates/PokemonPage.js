import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'gatsby';

const PokemonPage = ({ pageContext }) => {
    const { id, name, genus, descriptions, imageUrl } = pageContext;
    const { locale, formatMessage } = useIntl();

    const localizedGenus = genus[locale] || genus['en'];
    const localizedDescription = descriptions[locale] || descriptions['en'];

    return (
        <div className='pokemonDetails'>

            <div>
                <img src={imageUrl} alt={name} />
                <h1>{id} - {name}</h1>

                <h2>
                    {formatMessage({ id: 'genus' })}
                </h2>
                <p>{localizedGenus}</p>
                <h2>
                    {formatMessage({ id: 'description' })}
                </h2>
                <p>{localizedDescription}</p>
                <div>
                    <Link to="/" style={{
                        padding: '10px 20px',
                        color: 'white',
                        borderRadius: '5px',
                        textAlign: 'center',
                        display: 'inline-block',
                        marginTop: '20px'
                    }}>
                        {formatMessage({ id: 'backToIndex' })}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PokemonPage;
