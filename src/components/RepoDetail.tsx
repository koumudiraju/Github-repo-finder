// import React from 'react';
// import { Repo } from '../types';

// interface Props {
//   repo: Repo;
//   onClose: () => void;
// }

// const RepoDetail: React.FC<Props> = ({ repo, onClose }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//     <div className="bg-white rounded p-6 max-w-lg w-full relative">
//       <button
//         onClick={onClose}
//         className="absolute top-2 right-2 text-gray-500 hover:text-black"
//       >
//         ✕
//       </button>
//       <h2 className="text-xl font-bold mb-2">{repo.name}</h2>
//       <p className="mb-2">{repo.description}</p>
//       <p className="mb-4">⭐ {repo.stars}</p>
//       <a 
//         href={repo.url} 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="text-blue-600 underline"
//       >
//         View on GitHub
//       </a>
//     </div>
//   </div>
// );

// export default RepoDetail;


// src/components/RepoDetail.tsx
import React, { CSSProperties } from 'react';
import { Repo } from '../types';

interface Props {
  repo: Repo;
  onClose: () => void;
}

// Inline style objects
const overlayStyle: CSSProperties = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  zIndex: 1000,
};

const modalStyle: CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '1.5rem',
  maxWidth: '600px',
  width: '100%',
  position: 'relative',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
};

const closeButtonStyle: CSSProperties = {
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
  background: 'transparent',
  border: 'none',
  fontSize: '1.25rem',
  cursor: 'pointer',
  color: '#555',
};

const RepoDetail: React.FC<Props> = ({ repo, onClose }) => (
  <div style={overlayStyle}>
    <div style={modalStyle}>
      <button onClick={onClose} style={closeButtonStyle}>
        &times;
      </button>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem' }}>
        {repo.name}
      </h2>
      <p style={{ marginBottom: '0.75rem', color: '#333' }}>
        {repo.description || 'No description'}
      </p>
      <p style={{ marginBottom: '1rem', color: '#666' }}>
        ⭐ {repo.stars}
      </p>
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#0066cc', textDecoration: 'underline' }}
      >
        View on GitHub
      </a>
    </div>
  </div>
);

export default RepoDetail;
