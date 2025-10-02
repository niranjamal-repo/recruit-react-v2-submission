import React from 'react';

interface HeaderProps {
  onBurgerClick: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ onBurgerClick, title }) => {
  return (
    <header className="app-header">
      <button 
        onClick={onBurgerClick} 
        aria-label="Open navigation menu"
        className="burger-button"
      >
        ☰ 
      </button>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;