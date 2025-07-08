import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import { Footer } from './Footer';

const Layout = ({ menuItems, slideshowImages, onItemClick, location, visitorCount }) => {
  return (
    <div className="visitor">
      <div className="visitor1">
        <div className="visito">Visitor Count: {visitorCount}</div>
      </div>
      <Header menuItems={menuItems} slideshowImages={slideshowImages} onItemClick={onItemClick} />
      
      <main>
        <Outlet /> {/* Child routes (your pages) will render here */}
      </main>
      <Footer location={location} />
    </div>
  );
};

export default Layout;
