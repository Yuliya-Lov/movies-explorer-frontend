import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import Footer from '../Footer/Footer.js';
import PopupWithNav from '../PopupWithNav/PopupWithNav.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isPopupWithNavOpen, setIsPopupWithNavOpen] = React.useState(false);
  const isOpen = isPopupWithNavOpen;

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
        <Route path='/' element={<Main/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/saved-movies' element={<SavedMovies/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
      </Routes>
      {isLoggedIn && <Footer />}
      <PopupWithNav isMobile={isMobile} isOpen={isOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
