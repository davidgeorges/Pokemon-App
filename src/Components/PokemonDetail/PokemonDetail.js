import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetail.css';

function PokemonDetail() {
  const id = useParams().id

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const responseData = await response.json();
        let pokemon = {}
        pokemon.id = responseData.id;
        pokemon.sprite = responseData.sprites.other.home.front_default;
        pokemon.name = responseData.name;
        pokemon.hp = responseData.stats[0].base_stat;
        pokemon.abilities = responseData.abilities
        console.log(responseData)
        setPokemons([pokemon]);
      } catch (e) {
        console.error('Error during get pokemon:', e)
      }
    }

    getPokemon()
  }, [])

  return (
    pokemons.map(pokemon => (
      <div>
        <h1 className='title'>{pokemon.name} N°{pokemon.id}</h1>
        <div className="container-img">
          <div className='image'>
            <img src={pokemon.sprite} alt="profile"/>
          </div>
        </div>
      </div>
    ))
  );
}

export default PokemonDetail;
