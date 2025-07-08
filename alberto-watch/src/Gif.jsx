import React, { useEffect, useRef, useState } from 'react';

import rolexPng from './assets/Rolex.png';
import richPng from './assets/rich.png';
import hublotPng from './assets/hublot.png';
import celliniPng from './assets/cellini.png';
import hblotPng from './assets/hblot.png';


const images = [
  { 
    src: rolexPng, 
    alt: "Rolex watch with green dial",
    title: "The Submariner",
    description: "An icon of the deep, engineered for exploration."
  },
  { 
    src: richPng, 
    alt: "Richard Mille watch with intricate design",
    title: "RM 07-01",
    description: "A synthesis of high performance and elegance."
  },
  { 
    src: hublotPng, 
    alt: "Hublot watch with black band",
    title: "Big Bang",
    description: "The epitome of the Art of Fusion in watchmaking."
  },
  { src: celliniPng, alt: "Elegant Rolex Cellini watch", title: "Cellini Moonphase", description: "Celebrating the classicism of traditional timepieces." },
  { src: hblotPng, alt: "Hublot watch with skeleton dial", title: "Spirit of Big Bang", description: "All the disruptive codes of Hublot in a tonneau case." }
];



function GifSlide({ image }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const currentDomRef = domRef.current; // Capture current value for cleanup
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // entry.isIntersecting is true when the element is at least partially visible
        setIsVisible(entry.isIntersecting);
      });
    }, { threshold: 0.4 }); // Trigger when 10% of the item is visible

    if (currentDomRef) {
      observer.observe(currentDomRef);
    }

    return () => {
      if (currentDomRef) {
        observer.unobserve(currentDomRef);
      }
    };
  }, []);

  return (
    <div ref={domRef} className={`slide-item ${isVisible ? 'is-visible' : ''}`}>
      <img className="slide-image-content" src={image.src} alt={image.alt} />
      <div className="slide-text-overlay">
        <h2 className="slide-title">{image.title}</h2>
        <p className="slide-description">{image.description}</p>
      </div>
    </div>
  );
}

function Gif() {
  return (
    <div className="page-scrolling-slideshow">
      {images.map((image, index) => (
        <GifSlide key={index} image={image} />
      ))}
    </div>
  );
}

export default Gif;