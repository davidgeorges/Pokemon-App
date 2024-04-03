import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetail.css';

function PokemonDetail() {
  const id = useParams().id

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const responseData = await response.json();
        setPokemon(responseData);
        console.log(responseData.sprites.other.home.front_default)
      } catch (e) {
        console.error('Error during get:', e)
      }
    }

    getPokemon()
  }, [])

  return (
    <li className="animating" >
        <img src={pokemon.sprites.other.home.front_default} alt="profile"/>

      <div className="pokemon-info">
        <p className="id">
          <span className="number-prefix">Nº&nbsp;</span>0002
        </p>
        <h5>Herbizarre</h5>

        <div className="abilities">
          <span class="pill background-color-grass">Plante</span>
        </div>
        <div className="abilities">
          <span className="pill background-color-poison">Poison</span>
        </div>
      </div>
    </li>
  );
}

export default PokemonDetail;
