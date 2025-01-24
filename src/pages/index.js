import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useIntl } from 'react-intl';
import ReactPaginate from 'react-paginate';
import '../styles/pagination.scss';

const IndexPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;
  const { formatMessage } = useIntl();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon data');
        }
        const data = await response.json();
        setPokemonList(
          data.results.map((pokemon, index) => ({
            id: index + 1,
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          }))
        );
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  // Filter the list based on search query
  const filteredPokemon = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const offset = currentPage * itemsPerPage;
  const currentPokemon = filteredPokemon.slice(offset, offset + itemsPerPage);

  // Handle page change
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ textTransform: 'uppercase', color: 'white' }}>{formatMessage({ id: 'title' })}</h1>
      <input
        type="text"
        placeholder={formatMessage({ id: 'searchPlaceholder' })}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(0);
        }}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />

      {loading && <p>{formatMessage({ id: 'loading' })}</p>}
      {error && <p style={{ color: 'red' }}>{formatMessage({ id: 'error' })}: {error}</p>}

      {!loading && !error && (
        <div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginLeft: '0px' }}>
            {currentPokemon.length > 0 ? (
              currentPokemon.map((pokemon) => (
                <li key={pokemon.id} style={{ margin: '20px', backgroundColor: 'white', borderRadius: '15px', padding: '20px' }}>
                  <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                    <img src={pokemon.imageUrl} alt={pokemon.name} width="100" />
                    <p >{pokemon.name}</p>
                  </Link>
                </li>
              ))
            ) : (
              <p>{formatMessage({ id: 'noResults' })}</p>
            )}
          </ul>

          <ReactPaginate
            previousLabel={formatMessage({ id: 'previous' })}
            nextLabel={formatMessage({ id: 'next' })}
            pageCount={Math.ceil(filteredPokemon.length / itemsPerPage)}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            disabledClassName={"disabled"}
            breakLabel={"..."}
            marginPagesDisplayed={0}
          />
        </div>
      )}
    </div>
  );
};

export default IndexPage;
