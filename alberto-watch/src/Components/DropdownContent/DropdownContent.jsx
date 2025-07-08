import React from "react";

const DropdownContent = ({ children, isOpen }) => {
    return (
        <div className={`dropdownContent ${isOpen ? 'open' : ''}`}>
            {children}
        </div>
    );
};

export default DropdownContent;