import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import './Home.css'

function Home() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    async function getPokemonList() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const list = await response.json()
      console.log(list.results[10].url.split('/')[list.results[10].url.split('/').length - 2])
      setPokemonList(list.results)
    }

    getPokemonList()
  }, [])

  return (
    <div className="card-container" >
      <div className="container-content">
      {pokemonList.map((pokemon, index) => (
        // <NavLink to={`/pokemonDetailsPage/${pokemon.url.split('/')[pokemon.url.split('/').length - 2]}`}><PokemonCard pokemon={pokemon} key={index} /></NavLink>
        <PokemonCard pokemon={pokemon} key={index} />
      ))}
      </div>
    </div>
  )
}

export default Home
