import React, { useState, useEffect } from "react";
import "../index.css"; // Make sure this points to your main CSS file

// Import your images from the assets folder
import travis from '../assets/travis.jpg';
import limitededition from '../assets/limitededition.jpg';
import glow from '../assets/glow.jpg';
import moon from '../assets/moon.jpg';
import hand from '../assets/hand.jpg';
import glowing from '../assets/glowing.jpg';
import future from '../assets/future.jpg';
import bappe from '../assets/bappe.jpg';
import tennis from '../assets/tennis.jpg';
import ladyball from '../assets/ladyball.jpg';
import sweater from '../assets/sweater.jpg';
import theset from '../assets/theset.jpg';
import lebron from "../assets/lebron.jpg";
import mbappe from "../assets/mbappe.jpg";
import hamilton from "../assets/hamilton.jpg";
import rafael from "../assets/rafael.jpg";
import lady from "../assets/lady.jpg";
import lbj from "../assets/lbj.jpg";
import water from '../assets/water.jpg';
import rubber from '../assets/rubber.jpg';
import silver from '../assets/silver.jpg';
import pinkgold from '../assets/pinkgold.jpg';
import goldpink from '../assets/goldpink.jpg';
import greenrollie from '../assets/greenrollie.jpg';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [travis, limitededition, glow, moon, hand, glowing
    , future, bappe, tennis, ladyball, sweater, theset, lebron, mbappe, hamilton, rafael, lady, lbj, water, rubber, silver, pinkgold, goldpink, greenrollie
  ];

  // Effect for the image slideshow
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <div className="gallery-slideshow-page"> {/* Changed classname here */}
      <div className="new-page-slideshow-container1">
        <div
          className="slides-wrapper1"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`gallery-slide slide-image-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;