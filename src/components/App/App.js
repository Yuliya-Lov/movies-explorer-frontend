import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import PopupWithNav from '../PopupWithNav/PopupWithNav.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isPopupWithNavOpen, setIsPopupWithNavOpen] = React.useState(false);
  console.log(isPopupWithNavOpen);
  const isOpen = isPopupWithNavOpen;
  console.log(isOpen);

  function handleNavClick() {
    console.log('handleNavClick')
    setIsPopupWithNavOpen(true);
  }

  function closeAllPopups() {
    setIsPopupWithNavOpen(false);
  }

  const handleResize = () => {
    if (window.innerWidth < 790) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsPopupWithNavOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div className="root">
      <Header isLoggedIn={isLoggedIn} isMobile={isMobile} onNavClick={handleNavClick}></Header>
      <Main></Main>
      <Footer />
      <PopupWithNav isMobile={isMobile} isOpen={isOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
