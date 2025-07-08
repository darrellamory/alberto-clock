import React, { useState, useEffect } from "react";
import Card from "../Pages/Card.jsx";
import "../index.css"; // Make sure this points to your main CSS file

// Import your images from the assets folder
import water from '../assets/water.jpg';
import rubber from '../assets/rubber.jpg';
import silver from '../assets/silver.jpg';
import pinkgold from '../assets/pinkgold.jpg';
import goldpink from '../assets/goldpink.jpg';
import greenrollie from '../assets/greenrollie.jpg';
import greenface from '../assets/greenface.jpg';
import rubberr from '../assets/rubberr.jpg';
import silvergold from '../assets/silvergold.jpg';
import crocblue from '../assets/crocblue.jpg';
import classroll from '../assets/classroll.jpg';
import crocsly from '../assets/crocsly.jpg';
import digold from '../assets/digold.jpg';
import ehhh from '../assets/ehhh.jpg';
import goldclass from '../assets/goldclass.jpg';
import sweetpink from '../assets/sweetpink.jpg';
import blackface from '../assets/blackface.jpg';
import goldface from '../assets/goldface.jpg';

// Expanded data for all watches to meet the count requirements
const allWatches = [
  // 8 Classic Watches
  { id: 4, image: rubberr, title: "Rolex", text: "Daytona", price: "$280,000", type: "classic" },
  { id: 11, image: silvergold, title: "Rolex", text: "Daytona", price: "$125,000", type: "classic" },
  { id: 12, image: crocblue, title: "Rolex", text: "Land Dweller", price: "$200,000", type: "classic" },
  { id: 13, image: classroll, title: "Rolex", text: "Day-Date", price: "$245,000", type: "classic" },
  { id: 14, image: crocsly, title: "Rolex", text: "Land  Dweller", price: "$333,000", type: "classic" },
  { id: 15, image: digold, title: "Rolex", text: "Daytona", price: "$480,000", type: "classic" },
  { id: 16, image: ehhh, title: "Rolex", text: "Daytona", price: "$250,000", type: "classic" },
  { id: 17, image: goldclass, title: "Rolex", text: "Day-Date", price: "$60,000", type: "classic" },
  // 4 Modern Watches (total of 12 watches)
  { id: 1, image: greenface, title: "Rolex", text: "Day-Date", price: "$150,000", type: "modern" },
  { id: 2, image: sweetpink, title: "Rolex", text: "Daytona", price: "$12,500", type: "modern" },
  { id: 8, image: blackface, title: "Rolex", text: "DateJust", price: "$40,000", type: "modern" },
  { id: 10, image: goldface, title: "Rolex", text: "DayJust", price: "$80,000", type: "modern" },
];

const NewPage = () => {
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [water, rubber, silver, pinkgold, goldpink, greenrollie];

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
      <div className="datagrid">
        <h1 className="richardis">Rolex Collection</h1>

        <div className="navigator">
          <a className={`nav-link ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</a>
          <a className={`nav-link ${filter === 'classic' ? 'active' : ''}`} onClick={() => setFilter('classic')}>Classic</a>
        </div>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          {cardsToShow.map(watch => (
            <Card
              key={watch.id}
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