import React from 'react';
import Dropdown from './Components/Dropdown/Dropdown';
import logoImage from './assets/logo.png';

const Header = React.memo(({ menuItems, slideshowImages, onItemClick }) => {
  return (
    <>
      <header className="header1" style={{ position: 'relative', zIndex: 1000 }}>
        <div className="header-content">
          <img src={logoImage} alt="Alberto Watch Logo" className="logo" />
          <div className="account-dropdown">
            <Dropdown buttonText="Menu" items={menuItems} slideshowItems={slideshowImages} onItemClick={onItemClick} />
          </div>
        </div>
      </header>
      <div className="header-background-extension"></div>
    </>
  );
});

export default Header;