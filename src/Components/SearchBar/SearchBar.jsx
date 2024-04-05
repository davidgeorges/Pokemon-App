// SearchBar.js

import React from 'react'
import './SearchBar.css'

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Faire quelque chose avec le terme de recherche, comme envoyer à une API
    console.log('Recherche soumise:', searchTerm)
  }

  return (
    <input
      type="text"
      placeholder="Rechercher..."
      value={searchTerm}
      onChange={handleChange}
    />
  )
}

export default SearchBar
