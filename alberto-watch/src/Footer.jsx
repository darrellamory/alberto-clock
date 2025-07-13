import React, { useEffect, useState } from "react";
import logo1 from'./assets/logo1.png';


export const Footer = ({ location }) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-info">
          <img className="footer-logo" src={logo1} alt="Alberto Watch Logo" />
          <p className="footer-datetime">{dateTime.toLocaleString()}</p>
          <p className="footer-location">Location: {location}</p>
        </div>

        <div className="footer-section footer-links">
          <h3>Collections</h3>
          <ul>
            <li><a href="/rolex">Rolex Watches</a></li>
            <li><a href="/new-page">Richard Mille Watches</a></li>
            <li><a href="/AP">Audemars Piguet Watches</a></li>
            <li><a href="/hublot">Hublot Watches</a></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@albertowatches.co.ug">info@albertowatches.co.ug</a></p>
          {/* Add more contact info if available */}
        </div>
      </div>
    </footer>
  );
};
