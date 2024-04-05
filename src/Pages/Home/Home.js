import React, { useEffect, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import './Home.css'
function Home() {
  const [allPokemonList, setAllPokemonList] = useState([])
  const [filteredPokemonList, setFilteredPokemonList] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function getPokemonList() {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000',
      )

      const list = await response.json()

      setAllPokemonList(list.results)
      setFilteredPokemonList(list.results.slice(0, 20))
    }

    getPokemonList()
  }, [])

  useEffect(() => {
    const pokemonFiltered = allPokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const pokemonOnCurrentPage = pokemonFiltered.slice(0, 20)
    setFilteredPokemonList(pokemonOnCurrentPage)
  }, [searchTerm])

  // const pokemonDisplayed =
  //   searchTerm === ''
  //     ? pokemonList
  //     : pokemonList.filter((pokemon) =>
  //         pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  //       )

  return (
    <div className="card-container">
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <div className="container-content">
        {filteredPokemonList.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </div>
      <Pagination currentPage={2} totalPages={20} onPageChange={3} />
    </div>
  )
}

export default Home
