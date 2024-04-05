import React, { useState, useEffect } from 'react';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFromFavorites = (pokemonToRemove) => {
    const updatedFavorites = favorites.filter(pokemon => pokemon.name !== pokemonToRemove.name);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="card-container">
      <div className="container-content">
        {favorites.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={index} removeFromFavorites={handleRemoveFromFavorites} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
