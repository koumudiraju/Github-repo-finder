// src/components/Pagination.tsx
import React from 'react';

interface Props {
  page: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination: React.FC<Props> = ({ page, onPrev, onNext }) => (
  <div className="flex justify-center my-4">
    <button 
      onClick={onPrev} 
      disabled={page === 1} 
      className="px-3 py-1 border rounded disabled:opacity-50"
    >
      Prev
    </button>
    <span className="px-4">Page {page}</span>
    <button onClick={onNext} className="px-3 py-1 border rounded">
      Next
    </button>
  </div>
);

export default Pagination;
