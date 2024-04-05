import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">
        <img src={require('../../images/pokemon.png')} />
      </NavLink>
      <ul className="navbarlist">
        <NavLink to="/" style={{ color: 'white' }}>
          <li>Pokédex</li>
        </NavLink>
        <NavLink to="/favorites" style={{ color: 'white' }}>
          <li>Favoris</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default NavBar
