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

import travis from '../assets/travis.jpg';
import apt from '../assets/apt.jpg';
import glow from '../assets/glow.jpg';
import blueap from '../assets/blueap.jpg';
import night from '../assets/night.jpg';
import scott from '../assets/scott.jpg';
import cactusjack from '../assets/cactusjack.jpg';
import kaws from '../assets/kaws.jpg';
import rocky from '../assets/rocky.jpg';
import space from '../assets/space.jpg';
import rainbow from '../assets/rainbow.jpg';
import sweetwhite from '../assets/sweetwhite.jpg';
import royalblack from '../assets/royalblack.jpg';
import bluearmy from '../assets/bluearmy.jpg';
import royalwhite from '../assets/royalwhite.jpg';
import oldie from '../assets/oldie.jpg';
import army from '../assets/army.jpg';
import blackearth from '../assets/blackearth.jpg';
import limitededition from '../assets/limitededition.jpg';
import moon from '../assets/moon.jpg';
import hand from '../assets/hand.jpg';
import glowing from '../assets/glowing.jpg';

// Expanded data for all watches to meet the count requirements
const allWatches = [
  // 8 Classic Watches
  { id: 4, image: cactusjack, title: "AP", text: "Royal Oak Cactus Jack", price: "$2,800,000", type: "classic", customClass: "cactus-jack-image" },
  { id: 11, image: kaws, title: "AP", text: "Royal Oak Concept", price: "$1,125,000", type: "classic" },
  { id: 12, image: rocky, title: "AP", text: "Code 11.59", price: "$400,000", type: "classic" },
  { id: 13, image:space, title: "AP", text: "Royal Oak", price: "$245,000", type: "classic" },
  { id: 14, image: rainbow, title: "RAP", text: "Royal Oak", price: "$333,000", type: "classic" },
  { id: 15, image: sweetwhite, title: "AP", text: "Royal Oak Offshore", price: "$480,000", type: "classic" },
  { id: 16, image: royalblack, title: "AP", text: "Royal Oak", price: "$250,000", type: "classic" },
  { id: 17, image: bluearmy, title: "AP", text: "Royal Oak", price: "$160,000", type: "classic" },
  // 4 Modern Watches (total of 12 watches)
  { id: 1, image: royalwhite, title: "AP", text: "Royal Oak", price: "$150,000", type: "modern" },
  { id: 2, image: oldie, title: "AP", text: "Royal Oak", price: "$120,500", type: "modern" },
  { id: 8, image: army, title: "AP", text: "Royal Oak", price: "$140,000", type: "modern" },
  { id: 10, image: blackearth, title: "AP", text: "Code 11.59", price: "$180,000", type: "modern" },
];

const NewPage = () => {
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [travis, limitededition, glow, moon, hand, glowing];

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
        <h1 className="richardis">AP Collection</h1>

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
              customClass={watch.customClass}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default NewPage;