import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './PokemonCard.css';
import { NavLink } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  p: 4,
  outline: "none",
};

export default function PokemonCard({ pokemon, key }) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [type, setType] = useState(async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.url.split('/')[6]}`)
    const responseData = await response.json()
    return responseData.types[0].type.name
  })
  const [backgroundColor, setBackgroundColor] = useState('');
  const [information, setInformation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.url.split('/')[6]}`);
      const responseData = await response.json();
      setType(responseData.types[0].type.name);
      console.log(responseData)
      setInformation(responseData);
      switch (responseData.types[0].type.name) {
        case 'normal':
          setBackgroundColor('#A8A878');
          break;
        case 'fire':
          setBackgroundColor('#F08030');
          break;
        case 'fighting':
          setBackgroundColor('#C03028');
          break;
        case 'water':
          setBackgroundColor('#6890F0');
          break;
        case 'flying':
          setBackgroundColor('#A890F0');
          break;
        case 'grass':
          setBackgroundColor('#78C850');
          break;
        case 'poison':
          setBackgroundColor('#A040A0');
          break;
        case 'electric':
          setBackgroundColor('#F8D030');
          break;
        case 'ground':
          setBackgroundColor('#E0C068');
          break;
        case 'psychic':
          setBackgroundColor('#F85888');
          break;
        case 'rock':
          setBackgroundColor('#B8A038');
          break;
        case 'ice':
          setBackgroundColor('#98D8D8');
          break;
        case 'bug':
          setBackgroundColor('#A8B820');
          break;
        case 'dragon':
          setBackgroundColor('#7038F8');
          break;
        case 'ghost':
          setBackgroundColor('#705898');
          break;
        case 'dark':
          setBackgroundColor('#705848');
          break;
        case 'steel':
          setBackgroundColor('#B8B8D0');
          break;
        case 'fairy':
          setBackgroundColor('#EE99AC');
          break;
        default:
          setBackgroundColor('#A8A878');
          break;
      }
    };

    
    fetchData();
    return () => {}
  }, [pokemon.url]);

  return (
    <>
      {/* <NavLink to={`/PokemonDetails/${pokemon.url.split('/')[6]}`}> */}
        <div style={{backgroundColor:backgroundColor}} className="card" key={key} onClick={handleOpen}>
        <img style={{backgroundColor:backgroundColor}}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.url.split('/')[6]
          }.png`}
          alt={pokemon.name}
        />
        <p>{capitalizeFirstLetter(pokemon.name)} N°{pokemon.url.split('/')[6]}</p>
      </div>{/*</NavLink> */}
      <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <div className="card-pokemon">
        {information && (
          <div className="pokemon-information">
            <div className='informations-principal'>
              <p className='name-pokemon'>{capitalizeFirstLetter(pokemon.name)}</p>
              {typeof type === 'string' && (
                <p className='pokemon-type'>{capitalizeFirstLetter(type)}</p>
              )}
            </div>
            <div className='height-weight'>
              {information.weight !== null && <p style={{backgroundColor:backgroundColor}}>{information.weight / 10} kg</p>}
              {information.height !== null && <p style={{backgroundColor:backgroundColor}}>{information.height / 10} m</p>}
            </div>
            <div className='abilities'>
              <h1>Abilities</h1>
              <div className='list-abilities'>
                {information.abilities.map(ability => (
                  ability.ability.name !== null && <p style={{backgroundColor:backgroundColor}}>{ability.ability.name}</p>
                ))}
              </div>
            </div>
            <div className='stats'>
              <h1>Statistics</h1>
              <div className='list-stats'>
                {information.stats.map(base_stat => (
                base_stat.base_stat !== null && base_stat.stat.name !== null && <p style={{ backgroundColor: backgroundColor }}>{base_stat.base_stat + " " + base_stat.stat.name}</p>
                ))}
              </div>
            </div>
          </div>
        )}
          <div className='pokemon-image' style={{ backgroundColor: backgroundColor }}>
            {<img className="image-pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.url.split('/')[6]
              }.png`} />}
          </div>
        </div>
      </Box>
    </Modal>
    </>
  )
}
