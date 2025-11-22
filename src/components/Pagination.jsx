import React from 'react'
import '../Styles/pagination.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPages = () => {
    const pages = []

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)

      if (currentPage > 3) pages.push('...')

      const middleStart = Math.max(2, currentPage - 1)
      const middleEnd = Math.min(totalPages - 1, currentPage + 1)

      for (let i = middleStart; i <= middleEnd; i++) pages.push(i)

      if (currentPage < totalPages - 2) pages.push('...')

      pages.push(totalPages)
    }

    return pages
  }

  return (
    <div className="pagination-page">
      <div className="pagination-wrapper">
        <div className="pagination">
          <button
            className="nav-btn"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ChevronLeft size={18} />
          </button>

          {getPages().map((p, index) =>
            p === '...' ? (
              <span key={index} className="dots">
                …
              </span>
            ) : (
              <button
                key={index}
                className={`page-btn ${currentPage === p ? 'active' : ''}`}
                onClick={() => onPageChange(p)}
              >
                {p}
              </button>
            )
          )}

          <button
            className="nav-btn"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
