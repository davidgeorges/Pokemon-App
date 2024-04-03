import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({ pokemon, key }) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
 
  return (
    <div  className="card" key={key}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemon.url.split('/')[6]
        }.png`}
        alt={pokemon.name}
      />
      <p>{capitalizeFirstLetter(pokemon.name)}  </p>
    </div>
  )
}
