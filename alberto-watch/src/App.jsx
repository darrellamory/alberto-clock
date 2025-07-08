import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


// Import Layout and Page components
import Layout from './Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import NewPage from './pages/NewPage.jsx';
import RolexPage from './pages/RolexPage.jsx';
import APpage from './pages/APpage.jsx';
import HublotPage from './Pages/HublotPage.jsx';

// Import assets
import rolex1 from './assets/rolex1.jpg'; 
import hub1 from './assets/hub1.jpg'; 
import rich1 from './assets/rich1.jpg'; 
import ap1 from './assets/ap1.jpg'; 

const menuItems = [
  { label: 'Rolex', href: '/rolex' },
  { label: 'Home', href: '/' },
  { label: 'Richard Mille', href: '/new-page' },
  { label: 'Audemar Piuget', href: '/AP' },
  { label: 'Hublot', href: '/hublot' },
];

const slideshowImages = [
  { src: rolex1, alt: 'Watch Model A' },
  { src: hub1, alt: 'Watch Model B' },
  { src: rich1, alt: 'Watch Model C' },
  { src: ap1, alt: 'Watch Model D' },
];


function App() {
  const [visitorCount, setVisitorCount] = useState(1);
  const [location, setLocation] = useState('');

  const handleSelect = (item) => {
    console.log('Selected:', item.label);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation(`Lat: ${pos.coords.latitude.toFixed(2)}, Lon: ${pos.coords.longitude.toFixed(2)}`);
      });
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout 
              menuItems={menuItems} 
              slideshowImages={slideshowImages} 
              onItemClick={handleSelect}
              location={location}
              visitorCount={visitorCount}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="new-page" element={<NewPage />} />
          <Route path="rolex" element={<RolexPage />} />
          <Route path="AP" element={<APpage />} />
          <Route path="hublot" element={<HublotPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
