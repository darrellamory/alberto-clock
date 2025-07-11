import React from 'react';
import '../index.css'; // Import the main CSS file for styling
import worldmapImage from '../assets/worldmap.png'; // Import the worldmap image

const Sitemap = () => {
  return (
    <div className="sitemap-container">
      <h1 className="sitemap-title">Site Map</h1>
      <div className="world-map-container">
        <img src={worldmapImage} alt="World Map" className="world-map-image" />
      </div>

      <div className="sitemap-links">
        <h2>Navigation</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/new-page">Richard Mille Collection</a></li>
          <li><a href="/rolex">Rolex Collection</a></li>
          <li><a href="/AP">Audemars Piguet Collection</a></li>
          <li><a href="/hublot">Hublot Collection</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/store-locator">Store Locator</a></li>
          <li><a href="/sitemap">Sitemap</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sitemap;