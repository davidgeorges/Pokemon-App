import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Favorites from './Pages/Favorites/Favorites';
import Test from './Pages/Test/Test';
import PokemonDetailsPage from './Pages/PokemonDetailsPage/PokemonDetailsPage';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/test" element={<Test />} />
          <Route path="/pokemonDetailsPage/:id" element={<PokemonDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
