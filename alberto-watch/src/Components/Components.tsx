// /Users/darrellamory/alberto clock/alberto-watch/src/components/Dropdown.tsx
import React, { useState, useRef, useEffect } from 'react';
import '../styles/Dropdown.css'; // Import the CSS for styling

interface DropdownProps {
  buttonText: string;
  children: React.ReactNode; // The menu items will be passed as children
}

const Dropdown: React.FC<DropdownProps> = ({ buttonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the entire dropdown container

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  // Effect to handle clicks outside the dropdown and Escape key press
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the dropdown is open and the click is outside the dropdown container, close it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      // If the dropdown is open and the Escape key is pressed, close it
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Add event listeners when the dropdown is open
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    // Cleanup function to remove event listeners when the component unmounts or isOpen changes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]); // Re-run this effect whenever `isOpen` state changes

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="dropdown-toggle"
        aria-haspopup="true" // Indicates that the button opens a popup
        aria-expanded={isOpen} // Indicates whether the popup is currently expanded or collapsed
      >
        {buttonText}
      </button>
      {isOpen && (
        <ul className="dropdown-menu" role="menu"> {/* role="menu" for accessibility */}
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
