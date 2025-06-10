import React, { useState } from 'react';

interface Props {
  // Callback function to send the search query to the parent component
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  // Local state to hold the current input value
  const [input, setInput] = useState('');

  // Handle form submission
  const submit = (e: React.FormEvent) => {
    e.preventDefault();               // Prevent default form behavior (page reload)
    onSearch(input.trim());           // Call parent search handler with trimmed input
  };

  return (
    <form onSubmit={submit} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search repos…"
        value={input}
        onChange={e => setInput(e.target.value)} // Update input state on every keystroke
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
