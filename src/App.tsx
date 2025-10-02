import React, { useState } from 'react';
import Header from './components/Header';
import MenuView from './components/MenuView';
import RegisterCardForm from './components/RegisterCardForm';
import { ViewState } from './types';
import './styles/App.scss';

const App: React.FC = () => {
  // Dummy data for First Name
  const DUMMY_USER_FIRST_NAME = 'First Name'; 
  
  const [currentView, setCurrentView] = useState<ViewState>('form');

  const handleShowMenu = () => {
    setCurrentView('menu');
  };

  const handleShowForm = () => {
    setCurrentView('form');
  };

  return (
    <div className="app-container">
      
      { }
      {currentView === 'form' ? (
        <>
          <Header 
            onBurgerClick={handleShowMenu} 
            title="Register card form"
          />
          <main className="main-content">
            <RegisterCardForm firstName={DUMMY_USER_FIRST_NAME} />
          </main>
        </>
      ) : (
        <MenuView onBackClick={handleShowForm} />
      )}
      
    </div>
  );
};

export default App;