// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ visible, onSelectPlatform }) => {
  // Track whether the sidebar is visible or not using the 'visible' prop passed from the parent component
  return (
    <div className={`sidebar ${visible ? 'visible' : ''}`}>
      {/* Each sidebar item can be clicked to select a platform */}
      <div className="sidebar-item" onClick={() => onSelectPlatform('twitter')}>
        Twitter Feed
      </div>
      <div className="sidebar-item" onClick={() => onSelectPlatform('facebook')}>
        Facebook Feed
      </div>
      <div className="sidebar-item" onClick={() => onSelectPlatform('instagram')}>
        Instagram Feed
      </div>
      <div className="sidebar-item" onClick={() => onSelectPlatform('youtube')}>
        YouTube Feed
      </div>
    </div>
  );
};

export default Sidebar;
