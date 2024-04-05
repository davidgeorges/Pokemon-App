import React, { useEffect, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import './Home.css'
function Home() {
  const [allPokemonList, setAllPokemonList] = useState([])
  const [
    twentyFirstFilteredPokemonList,
    setTwentyFirstFilteredPokemonList,
  ] = useState([])
  const [filteredPokemonList, setFilteredPokemonList] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function getPokemonList() {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=4000',
      )

      const list = await response.json()

      setAllPokemonList(list.results)
      setTwentyFirstFilteredPokemonList(
        list.results.slice(currentPage * 20, 20 * (currentPage + 1)),
      )
      setFilteredPokemonList(list.results)
    }
    console.log('first render')
    getPokemonList()
  }, [])

  useEffect(() => {
    const pokemonFiltered = allPokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const twentyFirstPokemon = pokemonFiltered.slice(
      currentPage * 20,
      20 * (currentPage + 1),
    )

    setTwentyFirstFilteredPokemonList(twentyFirstPokemon)
    setFilteredPokemonList(pokemonFiltered)
  }, [searchTerm, currentPage])

  useEffect(() => {
    setCurrentPage(0)
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

      {filteredPokemonList.length == 0 ? (
        <h1>Aucun pokemon trouvé</h1>
      ) : (
        <div className="container-content">
          {twentyFirstFilteredPokemonList.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={filteredPokemonList.length / 20}
        onPageChange={3}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default Home
