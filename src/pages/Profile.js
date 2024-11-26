// src/pages/Profile.js
import React from 'react';
import Navbar from '../components/Navbar';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profile-container">
        <h1>User Profile</h1>
        <div className="profile-info">
          <img src="https://kalingastone.com/wp-content/uploads/2024/04/Untitled-design-5-1-551x675.png" alt="Profile" className="profile-pic" />
          <div className="profile-details">
            <h2>John Doe</h2>
            <p>Email: johndoe@example.com</p>
            <p>Joined: January 1, 2020</p>
            <button>Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
