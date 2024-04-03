import React from 'react';
import './Test.css'
function Test() {

  return (
    <div class="container" style={{ backgroundImage: `url(${require("./bg.png")})` }}> 
        <img class="pokemon-1" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif"} alt='pokemon-1'/>
        <img class="pokemon-2" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif"} alt='pokemon-2'/>
        <img class="pokemon-1-hp" src={require('./hp-p1-f.png')} alt='pokemon-1-hp'/>
        <img class="pokemon-2-hp" src={require('./hp-p2-f.png')} alt='pokemon-2-hp'/>
    </div>
  );
}

export default Test;
