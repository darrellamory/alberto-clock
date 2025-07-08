import React from 'react';

const DropdownButton = ({ children, isOpen, id }) => {
    return (
        <button
            id={id}
            className="dropdown-toggle"
            aria-haspopup="true"
            aria-expanded={isOpen}
        >
            {children}
            <span aria-hidden="true">{isOpen ? '▲' : '▼'}</span>
        </button>
    );
};

export default DropdownButton;
