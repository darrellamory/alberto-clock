import React, { useState, useEffect } from "react";
import Card from "../Pages/Card.jsx";
import "../index.css"; // Make sure this points to your main CSS file

// Import your images from the assets folder
import lebron from "../assets/lebron.jpg";
import mbappe from "../assets/mbappe.jpg";
import hamilton from "../assets/hamilton.jpg";
import rafael from "../assets/rafael.jpg";
import lady from "../assets/lady.jpg";
import lbj from "../assets/lbj.jpg";
import richh1 from '../assets/richh1.jpg';
import newr from '../assets/newr.png';
import rmm from '../assets/rmm.png';
import classicr from '../assets/classicr.png';
import time from '../assets/time.png';
import rmtt from '../assets/rmtt.png';
import twentysevenfive from '../assets/twentysevenfive.png';
import sixtysevenone from '../assets/sixtysevenone.png';
import thirtyone from '../assets/thirtyone.png';
import thirtyeighttwo from '../assets/thirtyeighttwo.png';
import sskull from '../assets/sskull.png';
import Ninja from '../assets/Ninja.png';
import classico from '../assets/classico.png';
import green from '../assets/green.png';
import beast from '../assets/beast.png';
import pink from '../assets/pink.png';
import skeleton from '../assets/skeleton.png';
// Expanded data for all watches to meet the count requirements
const allWatches = [
  // 8 Classic Watches
  { id: 4, image: Ninja, title: "Richard Mille", text: "RM-47", price: "$280,000", type: "classic" },
  { id: 11, image: time, title: "Richard Mille", text: "RM-40-01", price: "$125,000", type: "classic" },
  { id: 12, image: thirtyeighttwo, title: "Richard Mille", text: "RM-38-02", price: "$200,000", type: "classic" },
  { id: 13, image: classico, title: "Richard Mille", text: "RM-11-05", price: "$245,000", type: "classic" },
  { id: 14, image: green, title: "Richard Mille", text: "RM-25-01", price: "$333,000", type: "classic" },
  { id: 15, image: beast, title: "Richard Mille", text: "RM-68-01", price: "$480,000", type: "classic" },
  { id: 16, image: pink, title: "Richard Mille", text: "RM-71-02", price: "$250,000", type: "classic" },
  { id: 17, image: skeleton, title: "Richard Mille", text: "RM-52-01", price: "$600,000", type: "classic" },
  // 4 Modern Watches (total of 12 watches)
  { id: 1, image: sskull, title: "Richard Mille", text: "RM66", price: "$150,000", type: "modern" },
  { id: 2, image: newr, title: "Richard Mille", text: "RM-75-01", price: "$12,500", type: "modern" },
  { id: 8, image: sixtysevenone, title: "Richard Mille", text: "RM-67-01", price: "$40,000", type: "modern" },
  { id: 10, image: thirtyone, title: "Richard Mille", text: "RM-30-01", price: "$80,000", type: "modern" },
];

const NewPage = () => {
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [lebron, mbappe, hamilton, rafael, lady, lbj];

  // Effect for the image slideshow
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(imageInterval);
  }, [images.length]);

  // Logic to determine which cards to show
  let cardsToShow;
  if (filter === 'classic') {
    // Filter for classic and take the first 8
    cardsToShow = allWatches.filter(watch => watch.type === 'classic').slice(0, 8);
  } else {
    // For 'all', just take the first 12 from the entire list
    cardsToShow = allWatches.slice(0, 12);
  }

  return (
    <div className="page-fade-in">
      <div className="new-page-slideshow-container">
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`new-page-slide slide-image-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="datagrid" style={{ marginTop: '-100px' }}>
        <h1 className="richardis">Richard Mille Collection</h1>

        <div className="navigator">
          <a className={`nav-link ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</a>
          <a className={`nav-link ${filter === 'classic' ? 'active' : ''}`} onClick={() => setFilter('classic')}>Classic</a>
        </div>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          {cardsToShow.map(watch => (
            <Card
              key={watch.id}
              id={watch.id} /* Pass the id prop */
              image={watch.image}
              title={watch.title}
              text={watch.text}
              price={watch.price}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default NewPage;

