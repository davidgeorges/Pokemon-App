import React from 'react'

export default function PokemonCard({ pokemon, key }) {
  return (
    <div key={key}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemon.url.split('/')[6]
        }.png`}
        alt={pokemon.name}
      />
      <p>{pokemon.name} </p>
    </div>
  )
}
