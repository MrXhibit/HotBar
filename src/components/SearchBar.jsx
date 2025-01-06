import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query, type);
    }
  };

  return (
    <div className="flex items-center gap-4 my-4">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded w-full"
        placeholder="Search your favorite movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        className="border border-gray-300 p-2 rounded"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

