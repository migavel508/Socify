import React, { useState, useEffect } from 'react';
import twitterFeed from '../data/twitterFeed'; // Simulated Twitter data
import facebookFeed from '../data/facebookFeed'; // Simulated Facebook data
import instagramFeed from '../data/instagramFeed'; // Simulated Instagram data
import youtubeFeed from '../data/youtubeFeed'; // Simulated YouTube data
import './SocialFeed.css'; // Styling for the feed
import PostCard from './PostCard'; // General PostCard
import YouTubePostCard from '../components/Youtube/PostCard'; // YouTube-specific PostCard

const SocialFeed = ({ selectedPlatform }) => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    // Simulate fetching posts based on the selected platform
    console.log(`Selected Platform: ${selectedPlatform}`);  // Log selected platform

    switch (selectedPlatform) {
      case 'twitter':
        console.log("Loading Twitter Feed", twitterFeed);  // Log Twitter feed data
        setFeedData(twitterFeed || []); // Fallback to an empty array if data is undefined
        break;
      case 'facebook':
        console.log("Loading Facebook Feed", facebookFeed);  // Log Facebook feed data
        setFeedData(facebookFeed || []); // Fallback to an empty array if data is undefined
        break;
      case 'instagram':
        console.log("Loading Instagram Feed", instagramFeed);  // Log Instagram feed data
        setFeedData(instagramFeed || []); // Fallback to an empty array if data is undefined
        break;
      case 'youtube':
        console.log("Loading YouTube Feed", youtubeFeed);  // Log YouTube feed data
        setFeedData(youtubeFeed || []); // Fallback to an empty array if data is undefined
        break;
      default:
        console.log("No platform selected, clearing feed");  // Log if no platform is selected
        setFeedData([]); // Fallback to an empty array if no platform is selected
    }
  }, [selectedPlatform]);

  console.log("Feed Data:", feedData);  // Log feed data after it is set

  return (
    <div className="social-feed">
      {Array.isArray(feedData) && feedData.length === 0 ? (
        <p className="no-feed-message">Select a platform to view the feed.</p>
      ) : (
        <div className="feed-grid">
          {Array.isArray(feedData) && feedData.length > 0 ? (
            feedData.map((post) =>
              selectedPlatform === 'youtube' ? (
                <YouTubePostCard key={post.id} post={post} />
              ) : (
                <PostCard key={post.id} post={post} />
              )
            )
          ) : (
            <p className="no-feed-message">No posts available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SocialFeed;
