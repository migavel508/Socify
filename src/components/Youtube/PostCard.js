// src/components/PostCard.js
import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h3 className="post-username">{post.username}</h3>
      <h4 className="post-title">{post.title}</h4>
      {post.videoUrl ? (
        <iframe
          className="youtube-video"
          src={post.videoUrl}
          title={post.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No video content available.</p>
      )}
      <div className="post-meta">
        <span>{post.time}</span>
        <span>{post.likes} Likes</span>
        <span>{post.shares} Shares</span>
      </div>
    </div>
  );
};

export default PostCard;
