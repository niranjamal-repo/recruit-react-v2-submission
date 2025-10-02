import React from 'react';

interface MenuProps {
  onBackClick: () => void;
}

const MenuView: React.FC<MenuProps> = ({ onBackClick }) => {
  return (
    <div className="menu-container">
      <header className="menu-header">
        <button 
          onClick={onBackClick} 
          className="back-button"
          aria-label="Go back to registration form"
        >
          ←
        </button>
        <h2>Menu</h2>
      </header>
      <div className="menu-content">
        <p>This is menu content</p>
      </div>
    </div>
  );
};

export default MenuView;
