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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  register,
  login,
  logout,
  checkToken
} from '../../utils/MainApi';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isPopupWithNavOpen, setIsPopupWithNavOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const isOpen = isPopupWithNavOpen || isInfoTooltipOpen;
  const [isSucces, setIsSucces] = React.useState(false);
  const [message, setMessage] = React.useState({ message: '' })
  const [currentUser, setCurrentUser] = React.useState(
    {
      name: '',
      email: '',
      password: ''
    })
  const [reqError, setReqError] = React.useState('');

  function handleChangeIsLogged(value) {
    setIsLoggedIn(value);
  }

  function handleNavClick() {
    setIsPopupWithNavOpen(true);
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


  const pathWithFooter =
    (location.pathname === '/movies') || (location.pathname === '/saved-movies') || (location.pathname === '/');

  const pathWithHeader = (location.pathname === '/movies') || (location.pathname === '/saved-movies') || (location.pathname === '/') || (location.pathname === '/profile');

  function checkUser() {
    return checkToken()
      .then(res => {
        setIsSucces(true);
        setMessage({
          message: 'Авторизация прошла успешно!'
        })
        setCurrentUser({
          ...currentUser,
          email: res.email,
          name: res.name,
        });
        setIsLoggedIn(true);
        navigate('/', { replace: true });
        setIsInfoTooltipOpen(true);

      })
      .catch((e) => {
        setIsSucces(false);
        setMessage({
          message: 'Не удалось зарегистрироваться, попробуйте еще раз!'
        })
        setIsInfoTooltipOpen(true);
        return Promise.reject();
      })
  }

  function onRegister(data) {
    return register(data.name, data.email, data.password)
      .then(res => {
        setIsSucces(true);
        setMessage({
          message: 'Регистрация прошла успешно!'
        })
        setCurrentUser({
          ...currentUser,
          email: res.email,
          name: res.name,
        });
        setIsLoggedIn(true);
        navigate('/', { replace: true });
        setIsInfoTooltipOpen(true);

      })
      .catch((e) => {
        navigate('/signin', { replace: true });
      })
  }

  function onLogin(data) {
    return login(data.email, data.password)
      .then(res => {
        setIsSucces(true);
        setMessage({
          message: 'Авторизация прошла успешно!'
        })
        setCurrentUser({
          ...currentUser,
          email: res.email,
          name: res.name,
        });
        setIsLoggedIn(true);
        navigate('/', { replace: true });
        setIsInfoTooltipOpen(true);

      })
      .catch((e) => {
        setIsSucces(false);
        setMessage({
          message: 'Авторизация не пройдена!'
        })
        setIsInfoTooltipOpen(true);
      })
  }

  function updateUserInfo(data) {
    setCurrentUser({
      ...currentUser,
      email: data.email,
      name: data.name,
    });
  }

  function onExit() {
    return logout()
      .then(() => {
        setIsSucces(true);
        setMessage({
          message: 'Вы успешно вышли из аккаунта!'
        })
        handleChangeIsLogged(false);
        navigate('/', { replace: true });
        setIsInfoTooltipOpen(true);

      })
      .catch((e) => {
        setIsSucces(false);
        setMessage({
          message: 'Не удалось выйти, попробуйте еще раз!'
        })
        setIsInfoTooltipOpen(true);
      })
  }

  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    function handleOverlayClick(evt) {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('tooltip'))
        closeAllPopups();
    }

    if (isOpen) {
      document.addEventListener('keydown', closeByEscape);
      document.addEventListener('click', handleOverlayClick);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
        document.removeEventListener('click', handleOverlayClick);
      }
    }
  }, [isOpen])

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    checkUser();
  }, []);

  React.useEffect(() => {
    setIsPopupWithNavOpen(false);
    console.log(location.pathname === '/*');
  }, [location]);

  return (
    <div className="root">
      {pathWithHeader &&
        <Header isLoggedIn={isLoggedIn} isMobile={isMobile} onNavClick={handleNavClick}></Header>
      }
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Main />} >
          </Route>
          <Route path='/movies' element={<ProtectedRoute element={Movies} />} />
          <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies} />} />
          <Route path='/profile' element={<ProtectedRoute element={Profile} currentUser={currentUser} onExit={onExit} onUpdate={updateUserInfo} reqError={reqError} />} />
          <Route path='/signin' element={<Login handleSubmit={onLogin} reqError={reqError} />} />
          <Route path='/signup' element={<Register handleSubmit={onRegister} reqError={reqError} />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
      {pathWithFooter && <Footer />}
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
