import React from 'react';
import './SearchBar.module.css';

function SearchBar() {
  return (
    <div className="searchBarContainer">
      <input type="text" placeholder="Search events..." className="searchInput" />
      <button className="searchButton">Search</button>
      {/* You can add filter elements here later */}
    </div>
  );
}

export default SearchBar;