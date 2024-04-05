// Pagination.js

import React from 'react'
import './Pagination.css'

function Pagination({ currentPage, totalPages, onPageChange }) {
  // Fonction pour générer les numéros de page
  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? 'active' : ''}>
          <a href="#" onClick={() => onPageChange(i)}>
            {i}
          </a>
        </li>,
      )
    }
    return pageNumbers
  }

  return (
    <div className="pagination-container">
      <div>precedent</div>
      <ul className="pagination">{renderPageNumbers()}</ul>
      <div> suivant</div>
    </div>
  )
}

export default Pagination
