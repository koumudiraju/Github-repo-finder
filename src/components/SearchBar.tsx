// src/components/SearchBar.tsx
import React, { useState } from 'react';
// import './index.css'

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <form onSubmit={submit} className="flex mb-4">
      <input
        type="text"
        className="flex-grow border px-2 py-1"
        placeholder="Search repos…"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit" className="ml-2 px-4 py-1 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
