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
        <div className="precedent-btn"> </div>
      ) : (
        <div
          className="precedent-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Precedent
        </div>
      )}

      <div className="pagination">
        {(currentPage + 1).toString()} / {Math.ceil(totalPages.toString())}
      </div>
      {totalPages === currentPage + 1 ? (
        <div className="precedent-btn"> </div>
      ) : (
        <div
          className="precedent-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Suivant
        </div>
      )}
    </div>
  )
}

export default Pagination
