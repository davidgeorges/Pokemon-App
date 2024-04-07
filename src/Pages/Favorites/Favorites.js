import React, { useState, useEffect } from 'react';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import './Favorites.css'

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

  const handleOnClick = () => {
    localStorage.clear()
    setFavorites([])
  }

  return (
    <div className="card-container">
      <button onClick={handleOnClick}>Vider le pokédex</button>
      <div className="container-content">
        {favorites.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={index} removeFromFavorites={handleRemoveFromFavorites} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
