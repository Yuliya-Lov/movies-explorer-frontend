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
import ErrorMessage from '../../utils/ErrorMessage';
import {
  register,
  login,
  logout,
  getUser,
  updateUser
} from '../../utils/MainApi';
import { allMovies } from '../../utils/MoviesApi';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isPopupWithNavOpen, setIsPopupWithNavOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const isOpen = isPopupWithNavOpen || isInfoTooltipOpen;
  const [isSucces, setIsSucces] = React.useState(false);
  const errorMessage = ErrorMessage();
  const [currentUser, setCurrentUser] = React.useState(
    {
      name: '',
      email: '',
      password: ''
    })

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

  function cleanMessage() {
    errorMessage.resetMessage()
  }


  const pathWithFooter =
    (location.pathname === '/movies') || (location.pathname === '/saved-movies') || (location.pathname === '/');

  const pathWithHeader = (location.pathname === '/movies') || (location.pathname === '/saved-movies') || (location.pathname === '/') || (location.pathname === '/profile');

  function checkUser() {
    return getUser()
      .then(res => {
        setCurrentUser({
          ...currentUser,
          email: res.data.email,
          name: res.data.name,
        });
      })
      .catch((e) => {
        return Promise.reject(e);
      })
  }

  function onRegister(data) {
    return register(data.name, data.email, data.password)
      .then(res => {
        setIsSucces(true);
        setCurrentUser({
          ...currentUser,
          email: res.email,
          name: res.name,
        });
        setIsLoggedIn(true);
        navigate('/', { replace: true });
      })
      .catch((e) => {
        errorMessage.changeError(e)
      })
  }

  function onLogin(data) {
    return login(data.email, data.password)
      .then(() => {
        checkUser()
          .then(() => {
            setIsLoggedIn(true);
            navigate('/', { replace: true });
          })
          .catch(() => console.log('На сервере произошла ошибка.'))
      })
      .catch((e) => {
        errorMessage.changeError(e)
      })
  }

  function updateUserInfo(data) {
    return updateUser(data)
      .then((res) => {
        setCurrentUser({
          ...currentUser,
          email: res.data.email,
          name: res.data.name,
        });
      })
      .catch((e) => {
        errorMessage.changeError(e);
        console.log(errorMessage)
        return Promise.reject(e);
      })
  }

  function onExit() {
    return logout()
      .then(() => {
        setIsLoggedIn(false);
        navigate('/', { replace: true });

      })
      .catch((e) => {
        setIsSucces(false);
        errorMessage.changeError(e)
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
    checkUser()
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((e) => {
        setIsLoggedIn(false);
      })

    allMovies()
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e))
  }, []);

  React.useEffect(() => {
    if (!isLoggedIn) {
      checkUser()
        .then(() => {
          setIsLoggedIn(true);
        })
        .catch((e) => {
          setIsLoggedIn(false);
        })
    }

  }, [isLoggedIn])

  React.useEffect(() => {
    setIsPopupWithNavOpen(false);
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
          <Route path='/movies' element={<ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} />} />
          <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} />} />
          <Route path='/profile' element={<ProtectedRoute isLoggedIn={isLoggedIn} element={Profile} currentUser={currentUser} onExit={onExit} onUpdate={updateUserInfo} reqError={errorMessage.message.message} cleanMessage={cleanMessage} />} />
          <Route path='/signin' element={<Login handleSubmit={onLogin} reqError={errorMessage.message.message} cleanMessage={cleanMessage} />} />
          <Route path='/signup' element={<Register handleSubmit={onRegister} reqError={errorMessage.message.message} cleanMessage={cleanMessage} />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
      {pathWithFooter && <Footer />}
      <PopupWithNav isMobile={isMobile} isOpen={isPopupWithNavOpen} onClose={closeAllPopups} />
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        isOk={isSucces}
        message={errorMessage.message.message}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
