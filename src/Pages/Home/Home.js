import React, { useEffect, useState } from 'react'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
function Home() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    async function getPokemonList() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const list = await response.json()

      setPokemonList(list.results)
    }

    getPokemonList()
  }, [])

  return (
    <div className="card-container" >
      <div className="container-content">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard pokemon={pokemon} key={index} />
      ))}
      </div>
    </div>
  )
}

export default Home
