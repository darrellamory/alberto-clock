import React, { useState, useEffect } from "react";
import Card from "../Pages/Card.jsx";
import "../index.css"; // Make sure this points to your main CSS file

// Import your images from the assets folder
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

import future from '../assets/future.jpg';
import bappe from '../assets/bappe.jpg';
import tennis from '../assets/tennis.jpg';
import ladyball from '../assets/ladyball.jpg';
import sweater from '../assets/sweater.jpg';
import theset from '../assets/theset.jpg';
import takashi from '../assets/takashi.png';
import takashim from '../assets/takashim.png';
import smoothbl from '../assets/smoothbl.png';
import soldier from '../assets/soldier.png';
import skyblue from '../assets/skyblue.png';
import oddone from '../assets/oddone.png';
import loco from '../assets/loco.png';
import bloldier from '../assets/bloldier.png';
import sapsoldier from '../assets/sapsoldier.png';
import spots from '../assets/spots.png';
import slyblax from '../assets/slyblax.png';
import allred from '../assets/allred.png';



// Expanded data for all watches to meet the count requirements
const allWatches = [
  // 8 Classic Watches
  { id: 4, image: takashi, title: "Hublot", text: "Takashi Murakami", price: "$340,000", type: "classic" },
  { id: 11, image: takashim, title: "Hublot", text: "Takashi Murakami", price: "$325,000", type: "classic" },
  { id: 12, image: sapsoldier, title: "Hublot", text: "MP-10 Tourbillon", price: "$400,000", type: "classic" },
  { id: 13, image:soldier, title: "Hublot", text: "MP-10 Tourbillon", price: "$245,000", type: "classic" },
  { id: 14, image: skyblue, title: "Hublot", text: "Big Bang Water Blue", price: "$333,000", type: "classic" },
  { id: 15, image: oddone, title: "Hublot", text: " Arsham Drooplet", price: "$480,000", type: "classic" },
  { id: 16, image: loco, title: "Hublot", text: "Big Bang", price: "$250,000", type: "classic" },
  { id: 17, image: bloldier, title: "Hublot", text: "Classic Fusion", price: "$160,000", type: "classic" },
  // 4 Modern Watches (total of 12 watches)
  { id: 1, image: smoothbl, title: "Hublot", text: "Classic Fusion", price: "$150,000", type: "modern" },
  { id: 2, image: spots, title: "Hublot", text: "Big Bang", price: "$120,500", type: "modern" },
  { id: 8, image: allred, title: "Hublot", text: "Big Bang", price: "$140,000", type: "modern" },
  { id: 10, image: slyblax, title: "Hublot", text: "MP-13", price: "$180,000", type: "modern" },
];

const NewPage = () => {
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [future, bappe, tennis, ladyball, sweater, theset];

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
        <h1 className="richardis">Hublot Collection</h1>

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
              customClass={watch.customClass}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default NewPage;