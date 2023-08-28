import React from 'react';

function Dropdown({ onLogout }) {
  return (
    <div className="dropdown">
      <button className="dropdown-toggle">Profile</button>
      <div className="dropdown-content">
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dropdown;
