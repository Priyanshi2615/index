import React from 'react';
import SearchBar from './SearchBar.js';
import logoImage from './logo.svg'; // Import your logo image
import Dropdown from './Dropdown';

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <div className="right-section">
        <SearchBar />
        <Dropdown />
      </div>
    </div>
  );
}

export default Navbar;
