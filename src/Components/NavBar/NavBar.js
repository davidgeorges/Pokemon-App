import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/"><img src={require('../../images/pokemon.png')} /></NavLink>
            <ul>
                <NavLink to="/"><li>Pokédex</li></NavLink>
                <NavLink to="/types"><li>Types</li></NavLink>
                <NavLink to="/favoris"><li>Favoris</li></NavLink>
            </ul>
        </nav>
    )
}

export default NavBar;