import React, { useState, useId, useRef } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import "./Dropdown.css";

const Dropdown = ({ buttonText, items = [], slideshowItems = [], onItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonId = useId();
    const slideshowRef = useRef(null);
    const dropdownRef = useRef(null);

    const handleItemClick = (item) => {
        if (onItemClick) {
            onItemClick(item); // Call the handler passed from App.jsx
        }
        setIsOpen(false);  // Close the dropdown after selection
    };

    const scrollGallery = (direction) => (e) => {
        e.stopPropagation(); // Prevent dropdown from closing
        if (slideshowRef.current) {
            const scrollAmount = 300; // Adjust scroll distance as needed
            slideshowRef.current.scrollBy({ 
                left: direction * scrollAmount, 
                behavior: 'smooth' 
            });
        }
    };

    const scrollLeft = scrollGallery(-1);
    const scrollRight = scrollGallery(1);

    return (
        <div 
            ref={dropdownRef} 
            className="dropdown-container"
            onMouseEnter={() => setIsOpen(true)} // Open on hover
            onMouseLeave={() => setIsOpen(false)} // Close when mouse leaves
        >
            <DropdownButton isOpen={isOpen} id={buttonId}>
                {buttonText} 
            </DropdownButton>
            {isOpen && (
                <DropdownContent buttonId={buttonId} isOpen={isOpen}>
                    <div className="dropdown-layout">
                        <div className="menu-column">
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.href} onClick={() => handleItemClick(item)}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {slideshowItems.length > 0 && (
                            <div className="slideshow-column">
                                <button className="slide-arrow prev" onClick={scrollLeft}>&#10094;</button>
                                <div className="slideshow-container" ref={slideshowRef}>
                                    {slideshowItems.map((item, index) => (
                                        <div key={index} className="slide-content">
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                className="slide-image"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button className="slide-arrow next" onClick={scrollRight}>&#10095;</button>
                            </div>
                        )}
                    </div>
                </DropdownContent>
            )}
        </div>
    );
};

export default Dropdown;