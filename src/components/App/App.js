import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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

  function handleOverlayClick(evt) {
    if (evt.target.classList.contains('popup'))
      closeAllPopups();
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
      <Routes>
        <Route path='/' element={<Main></Main>}
        />
        {/* <Route
            path='/signup'
            element={<Register isLoggedIn={isLoggedIn} />} />
          <Route
            path='/signin'
            element={<Login isLoggedIn={isLoggedIn} />} /> */}
      </Routes>
      {isLoggedIn && <Footer />}
      <PopupWithNav isMobile={isMobile} isOpen={isOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
