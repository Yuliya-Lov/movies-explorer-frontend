import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import FormHeader from '../FormHeader/FormHeader.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import Footer from '../Footer/Footer.js';
import PopupWithNav from '../PopupWithNav/PopupWithNav.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isPopupWithNavOpen, setIsPopupWithNavOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const isOpen = isPopupWithNavOpen || isInfoTooltipOpen;
  const [isSucces, setIsSucces] = React.useState(false);
  const [message, setMessage] = React.useState({message: 'The HTML element is used to create interactive controls for web-based forms in order'})
  const [currentUser, setCurrentUser] = React.useState(
    {
      name: 'Виталий',
      email: 'pochta@yandex.ru',
    })

  function handleNavClick() {
    setIsPopupWithNavOpen(true);
  }

  function handleChangeIsLogged(value) {
    setIsLoggedIn(value);
  }

  function closeAllPopups() {
    setIsPopupWithNavOpen(false);
    setIsInfoTooltipOpen(false);
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

  console.log((location.pathname === '/signup'));
  return (
    <div className="root">
      {(location.pathname !== '/signup' && location.pathname !== '/signin')
        ? <Header isLoggedIn={isLoggedIn} isMobile={isMobile} onNavClick={handleNavClick}></Header>
        : <FormHeader />
      }
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile currentUser={currentUser} />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
      {isLoggedIn && location.pathname !== '/profile' && <Footer />}
      <PopupWithNav isMobile={isMobile} isOpen={isPopupWithNavOpen} onClose={closeAllPopups} />
      <InfoTooltip
          isOpen={isInfoTooltipOpen}
          isOk={isSucces}
          message={message}
          onClose={closeAllPopups}
        />
    </div>
  );
}

export default App;
