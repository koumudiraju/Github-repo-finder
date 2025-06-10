import React from 'react';
import { Repo } from '../types';

interface Props {
  // Array of repositories to display
  repos: Repo[];
  // Callback when a repository row is clicked
  onSelect: (repo: Repo) => void;
}

const RepoList: React.FC<Props> = ({ repos, onSelect }) => {
  // Show a message if no repositories are found
  if (repos.length === 0) {
    return <p className="loading-text">No repositories found.</p>;
  }

  return (
    <>
      {/* Small instruction for users */}
      <p className="table-hint">Click on a row to see more details.</p>

      {/* Table wrapper for styling and layout */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Stars</th>
            </tr>
          </thead>
          <tbody>
            {repos.map(r => (
              <tr key={r.id} onClick={() => onSelect(r)}>
                {/* Repo name */}
                <td>{r.name}</td>
                {/* Description fallback if null */}
                <td>{r.description ?? '—'}</td>
                {/* Star count */}
                <td>{r.stars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RepoList;
