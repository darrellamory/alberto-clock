import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import { Footer } from './Footer';
import { StoreLocator } from '../StoreLocator'; // Import StoreLocator

const Layout = ({ menuItems, slideshowImages, onItemClick, location, visitorCount }) => {
  // Add Store Locator to menuItems if it's not already there
  const updatedMenuItems = menuItems ? [...menuItems] : [];
  if (!updatedMenuItems.some(item => item.name === 'Store Locator')) {
    updatedMenuItems.push({ name: 'Store Locator', path: '/store-locator' });
  }

  return (
    <div className="visitor">
      <div className="visitor1">
        <div className="visito">Visitor Count: {visitorCount}</div>
      </div>
      <Header menuItems={updatedMenuItems} slideshowImages={slideshowImages} onItemClick={onItemClick} />
      
      {/* Simple navigation links */}
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/new-page">New Page</Link>
        <Link to="/store-locator">Store Locator</Link> {/* Add link for StoreLocator */}
      </nav>

      <main>
        <Outlet /> {/* Child routes (your pages) will render here */}
      </main>
      <Footer location={location} />
    </div>
  );
};

export default Layout;

