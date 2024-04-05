// Pagination.js

import React from 'react'
import './Pagination.css'

function Pagination({ currentPage, totalPages, onPageChange, setCurrentPage }) {
  // Fonction pour générer les numéros de page
  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 0; i < Math.ceil(totalPages); i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? 'active' : ''}>
          <span>{i + 1}</span>
        </li>,
      )
    }
    return pageNumbers
  }

  return (
    <div className="pagination-container">
      {currentPage === 0 ? (
        <div> </div>
      ) : (
        <div onClick={() => setCurrentPage(currentPage - 1)}>
          precedent{Math.ceil(totalPages)} {currentPage + 1}
        </div>
      )}

      <ul className="pagination">{renderPageNumbers()}</ul>
      {totalPages === currentPage + 1 ? (
        <div> </div>
      ) : (
        <div onClick={() => setCurrentPage(currentPage + 1)}>suivant</div>
      )}
    </div>
  )
}

export default Pagination
