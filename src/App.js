import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Favorites from './Pages/Favorites/Favorites'
import Home from './Pages/Home/Home'
import PokemonDetailsPage from './Pages/PokemonDetailsPage/PokemonDetailsPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/pokemonDetails/:id" element={<PokemonDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
