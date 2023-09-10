import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import Footer from '../Footer/Footer.js';
import PopupWithNav from '../PopupWithNav/PopupWithNav.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';
import PageNotFound from '../PageNotFound/PageNotFound';
import FormValidator from '../../utils/FormValidator';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isPopupWithNavOpen, setIsPopupWithNavOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const isOpen = isPopupWithNavOpen || isInfoTooltipOpen;
  const [isSucces, setIsSucces] = React.useState(false);
  const [message, setMessage] = React.useState({ message: 'The HTML element is used to create interactive controls for web-based forms in order' })
  const [currentUser, setCurrentUser] = React.useState(
    {
      name: 'Виталий',
      email: 'pochta@yandex.ru',
      password: ''
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

  const pathWithoutFooTer = (location.pathname === '/profile') ||
    (location.pathname === '/*') || (location.pathname === '/signup') || (location.pathname === '/signin');

  const pathWithoutHeader = (location.pathname === '/signup') || (location.pathname === '/signin') || (location.pathname === '/*')


  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  function onRegister() {
    navigate('/signin', { replace: true });
  }

  function onLogin(data) {
    console.log(data);
    setCurrentUser({
      ...currentUser,
      email: data.email,
      password: data.password,
    });
    setIsLoggedIn(true);
    navigate('/', { replace: true });
  }

  function updateUserInfo(data) {
    setCurrentUser({
      ...currentUser,
      email: data.email,
      name: data.name,
    });
  }


  React.useEffect(() => {
    setIsPopupWithNavOpen(false);
  }, [location]);

  return (
    <div className="root">
      {!pathWithoutHeader &&
        <Header isLoggedIn={isLoggedIn} isMobile={isMobile} onNavClick={handleNavClick}></Header>
      }
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile currentUser={currentUser} handleExit={handleChangeIsLogged} onUpdate={updateUserInfo} />} />
          <Route path='/signin' element={<Login handleSubmit={onLogin} />} />
          <Route path='/signup' element={<Register handleSubmit={onRegister} />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
      {isLoggedIn && !pathWithoutFooTer && <Footer />}
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
