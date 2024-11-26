// src/components/PostCard.js
import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      {/* User Info */}
      <div className="post-header">
        <img
          src={post.userAvatar}
          alt="User Avatar"
          className="post-user-avatar"
        />
        <div className="post-user-details">
          <p className="post-username">{post.username}</p>
          <p className="post-time">{post.time}</p>
        </div>
      </div>

      {/* Post Image */}
      <img src={post.image} alt="Post Content" className="post-image" />

      {/* Post Content */}
      <div className="post-footer">
        <div className="post-actions">
          <button className="post-action">❤️</button>
          <button className="post-action">💬</button>
          <button className="post-action">🔗</button>
        </div>
        <p className="post-description">
          <strong>{post.username}</strong> {post.caption}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
