// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onToggleSidebar }) => {
  return (
    <div className="navbar">
      <button className="navbar-toggle-btn" onClick={onToggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </button>
      <h1 className="navbar-title">Socify</h1>
      <div className="navbar-profile">
        <img 
          src="https://kalingastone.com/wp-content/uploads/2024/04/Untitled-design-5-1-551x675.png" 
          alt="Profile" 
          className="navbar-profile-pic"
        />
        <span className="navbar-profile-name">John Doe</span>
      </div>
    </div>
  );
};

export default Navbar;
