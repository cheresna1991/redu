import React from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Поиск задач..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {searchTerm && (
        <button 
          className="clear-search"
          onClick={() => onSearchChange('')}
        >
          ✖
        </button>
      )}
    </div>
  );
}

export default SearchBar;