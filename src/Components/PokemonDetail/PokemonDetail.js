import React from 'react';
import './PokemonDetail.css';

function PokemonDetail({ pokemonData }) {

  return (
    <li class="animating" >
        <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"} alt="profile"/>

      <div class="pokemon-info">
        <p class="id">
          <span class="number-prefix">Nº&nbsp;</span>0002
        </p>
        <h5>Herbizarre</h5>

        <div class="abilities">
          <span class="pill background-color-grass">Plante</span>
        </div>
        <div class="abilities">
          <span class="pill background-color-poison">Poison</span>
        </div>
      </div>
    </li>
  );
}

export default PokemonDetail;
