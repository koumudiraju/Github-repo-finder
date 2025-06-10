import React, { CSSProperties } from 'react';
import { Repo } from '../types';

interface Props {
  repo: Repo;         // Selected repository to show details for
  onClose: () => void; // Callback to close the modal
}

// === Inline styles for the modal and overlay ===

// Full-screen semi-transparent background
const overlayStyle: CSSProperties = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)', // dark overlay
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  zIndex: 1000, // ensures it appears on top
};

// Modal box container
const modalStyle: CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '1.5rem',
  maxWidth: '600px',
  width: '100%',
  position: 'relative',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
};

// Close (X) button in top-right
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
      {/* Close button */}
      <button onClick={onClose} style={closeButtonStyle}>
        &times;
      </button>

      {/* Repo name */}
      <h2
        style={{
          margin: '0 0 0.5rem',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#000', // force black for contrast
        }}
      >
        {repo.name}
      </h2>

      {/* Repo description */}
      <p style={{ marginBottom: '0.75rem', color: '#333' }}>
        {repo.description || 'No description'}
      </p>

      {/* Star count */}
      <p style={{ marginBottom: '1rem', color: '#666' }}>
        ⭐ {repo.stars}
      </p>

      {/* Link to GitHub */}
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
