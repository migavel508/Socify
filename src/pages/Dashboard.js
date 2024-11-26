// src/pages/Dashboard.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SocialFeed from '../components/SocialFeed';
import './Dashboard.css';

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState('twitter');

  // Handle platform selection from the sidebar
  const handleSelectPlatform = (platform) => {
    setSelectedPlatform(platform);
  };

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar 
          visible={sidebarVisible} 
          onSelectPlatform={handleSelectPlatform} 
        />
        <div className="dashboard-content">
          <h1>Welcome to your Dashboard!</h1>
          <SocialFeed selectedPlatform={selectedPlatform} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
