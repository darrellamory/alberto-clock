import React, { useEffect, useState } from "react";
import logo1 from'./assets/logo1.png';


export const Footer = ({ location }) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    <div className="footer-container"></div>;
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      {dateTime.toLocaleString()} | Location: {location}
      {/* New footer box element */}
      <div className="footer-box">
        <img className="footer-img" src={logo1}></img>
        <p className="para">Rolex Watches </p>
        <p className="para1">Richard Mille Watches </p>
        <p className="para2">Audemar Piuget Watches </p>
        <p className="para3">Hublot Watches </p>
        <p className="para5">Classic</p>
        <p className="para6">All</p>
        <p className="para7">Classic</p>
        <p className="para8">All</p>
        <p className="para9">Classic</p>
        <p className="para10">All</p>
        <p className="para11">Classic</p>
        <p className="para12">All</p>
        <p className="para13">Contact us</p>
        <p className="email">info@albertowatches.co.ug</p>
      </div>
    </footer>
  );
};
<div className="footer-container"></div>;
