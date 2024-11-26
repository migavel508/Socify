// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SocialFeed from './components/SocialFeed';
import Navbar from './components/Navbar';
import './styles/global.css'; // Global styles

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState('twitter'); // Default platform
  const [sidebarVisible, setSidebarVisible] = useState(false); // State to control sidebar visibility

  // Function to handle platform selection
  const handleSelectPlatform = (platform) => {
    setSelectedPlatform(platform);
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev); // Toggle the sidebar visibility state
  };

  return (
    <div className="app">
      <Navbar onToggleSidebar={toggleSidebar} /> {/* Pass toggle function */}
      <div className="main-container">
        {/* Conditionally render Sidebar based on state */}
        <Sidebar visible={sidebarVisible} onSelectPlatform={handleSelectPlatform} />
        <div className="content">
          <SocialFeed selectedPlatform={selectedPlatform} />
        </div>
      </div>
    </div>
  );
}

export default App;
