import React from 'react';

interface Props {
  page: number;       // Current page number
  onPrev: () => void; // Handler for clicking "Prev"
  onNext: () => void; // Handler for clicking "Next"
}

const Pagination: React.FC<Props> = ({ page, onPrev, onNext }) => (
  <div className="pagination">
    {/* Prev button disabled on first page */}
    <button onClick={onPrev} disabled={page === 1}>
      Prev
    </button>

    {/* Current page number */}
    <span style={{ padding: '0.5rem 1rem', fontWeight: 'bold' }}>
      Page {page}
    </span>

    {/* Next button */}
    <button onClick={onNext}>Next</button>
  </div>
);

export default Pagination;
