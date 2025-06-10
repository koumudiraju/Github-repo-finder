// src/App.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Repo } from './types';
import './index.css'
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import Pagination from './components/Pagination';
import RepoDetail from './components/RepoDetail';

function App() {
  const [query, setQuery] = useState('');
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sortByStars, setSortByStars] = useState<'asc'|'desc'>('desc');
  const [selectedRepo, setSelectedRepo] = useState<Repo|null>(null);

  useEffect(() => {
    if (!query) {
      setRepos([]);
      return;
    }
    setLoading(true);
    axios
      .get(`https://api.github.com/search/repositories`, {
        params: { q: query, per_page: 10, page }
      })
      .then(res => {
        const items = res.data.items.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          stars: repo.stargazers_count,
          url: repo.html_url,
        }));
        setRepos(items);
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  // sort
  const sorted = [...repos].sort((a,b) =>
    sortByStars === 'desc' ? b.stars - a.stars : a.stars - b.stars
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Repo Search</h1>
      <SearchBar onSearch={q => { setQuery(q); setPage(1); }} />
      
      <div className="flex items-center my-2">
        <button 
          className="mr-2 px-3 py-1 border rounded"
          onClick={() => setSortByStars(sortByStars === 'desc' ? 'asc' : 'desc')}
        >
          Sort by stars: {sortByStars === 'desc' ? '▼' : '▲'}
        </button>
      </div>

      {loading
        ? <p>Loading…</p>
        : <RepoList repos={sorted} onSelect={setSelectedRepo} />
      }

      <Pagination 
        page={page} 
        onPrev={() => setPage(p => Math.max(1, p-1))}
        onNext={() => setPage(p => p+1)}
      />

      {selectedRepo && 
        <RepoDetail repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
      }
    </div>
  );
}

export default App;
