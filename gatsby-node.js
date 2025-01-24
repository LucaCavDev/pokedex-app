const axios = require('axios');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const pokemonTemplate = require.resolve(`./src/templates/PokemonPage.js`);

  try {
    // Fetch list of Pokémon (first 151)
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon-species?limit=151');
    const pokemonList = response.data.results;

    // Loop through each Pokémon and fetch more detailed information
    for (const pokemon of pokemonList) {
      const details = await axios.get(pokemon.url);
      const pokemonData = details.data;

      // Extract descriptions for all supported languages
      const descriptions = {};
      pokemonData.flavor_text_entries.forEach((entry) => {
        if (['en', 'fr', 'it', 'es'].includes(entry.language.name)) {
          descriptions[entry.language.name] = entry.flavor_text.replace(/[\n\f]/g, ' '); // Remove unwanted characters
        }
      });

      // Extract genus for all supported languages
      const genus = {};
      pokemonData.genera.forEach((entry) => {
        if (['en', 'fr', 'it', 'es'].includes(entry.language.name)) {
          genus[entry.language.name] = entry.genus; // Store genus in appropriate language
        }
      });

      // Create the page for each Pokémon
      createPage({
        path: `/pokemon/${pokemonData.id}`,
        component: pokemonTemplate,
        context: {
          id: pokemonData.id,
          name: pokemonData.names.find((n) => n.language.name === 'en').name, // Default to English name
          genus: genus,  // Store all genus translations
          descriptions,   // Store all descriptions in different languages
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`, // Pokémon image URL
        },
      });
    }

    console.log('Pokémon pages created successfully!');
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
};
