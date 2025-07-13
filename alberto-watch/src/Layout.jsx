import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Header from './Header';
import { Footer } from './Footer';

const Layout = ({ menuItems, slideshowImages, onItemClick, location, visitorCount }) => {
  const locationRouter = useLocation(); // Renamed to avoid conflict with 'location' prop
  
  return (
    <div className="visitor">
      <div className="visitor1">
        <div className="visito">Visitor Count: {visitorCount}</div>
      </div>
      <Header menuItems={menuItems} slideshowImages={slideshowImages} onItemClick={onItemClick} />
      
      <main key={locationRouter.pathname} className="page-fade-in">
        <Outlet /> {/* Child routes (your pages) will render here */}
      </main>
      <Footer location={location} />
    </div>
  );
};

export default Layout;
