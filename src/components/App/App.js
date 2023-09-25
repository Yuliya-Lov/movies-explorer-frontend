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
import useErrorMessage from '../../utils/useErrorMessage';
import {
  register,
  login,
  logout,
  getUser,
  updateUser
} from '../../utils/MainApi';
import { allMovies } from '../../utils/MoviesApi';
import { getMovies, saveMovie, deleteMovie } from '../../utils/MainApi';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isPopupWithNavOpen, setIsPopupWithNavOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const isOpen = isPopupWithNavOpen || isInfoTooltipOpen;
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSucces, setIsSucces] = React.useState(false);
  const errorMessage = useErrorMessage();
  const [currentUser, setCurrentUser] = React.useState(
    {
      name: '',
      email: '',
      password: ''
    })
  const [stepForRendering, setStepForRendering] = React.useState(12);
  const [additionalCountForRendering, setAdditionalCountForRendering] = React.useState(3);
  const [savedMovies, setSavedMovies] = React.useState([]);

  function handleNavClick() {
    setIsPopupWithNavOpen(true);
  }

  function closeAllPopups() {
    setIsPopupWithNavOpen(false);
    setIsInfoTooltipOpen(false);
  }

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
      setStepForRendering(5);
      setAdditionalCountForRendering(2);
      return;
    }
    if (window.innerWidth < 790 && window.innerWidth >= 600) {
      setIsMobile(true);
      return;
    }
    if (window.innerWidth < 1050 && window.innerWidth >= 790) {
      setIsMobile(true);
      setStepForRendering(8);
      setAdditionalCountForRendering(2);
      return;
    }
    else {
      setIsMobile(false);
      setIsPopupWithNavOpen(false);
      setAdditionalCountForRendering(3);
      setStepForRendering(12);
      return;
    }
  };

  function cleanMessage() {
    errorMessage.resetMessage()
    setIsLoading(false)
  }


  const pathWithFooter =
    (location.pathname === '/movies') || (location.pathname === '/saved-movies') || (location.pathname === '/');

  const pathWithHeader = (location.pathname === '/movies') || (location.pathname === '/saved-movies') || (location.pathname === '/') || (location.pathname === '/profile');

  function checkUser() {
    const place = location.pathname;
    return getUser()
      .then(res => {
        setCurrentUser({
          ...currentUser,
          email: res.data.email,
          name: res.data.name,
        });
        navigate(place, { redirect: true })
      })
      .catch((e) => {
        return Promise.reject(e);
      })
  }

  function onRegister(data) {
    setIsLoading(true)
    register(data.name, data.email, data.password)
      .then(res => {
        setIsSucces(true);
        setCurrentUser({
          ...currentUser,
          email: res.email,
          name: res.name,
        });
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
        setIsLoading(false)
      })
      .catch((e) => {
        errorMessage.changeError(e)
      })
      .finally(() => setIsLoading(false))
  }

  function onLogin(data) {
    setIsLoading(true)
    login(data.email, data.password)
      .then(() => {
        return checkUser()
          .then(() => {
            setIsLoggedIn(true);
            navigate('/movies', { replace: true });
            setIsLoading(false)
          })
          .catch((e) => Promise.reject(e))
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
        return Promise.reject(e);
      })
  }

  function onExit() {
    return logout()
      .then(() => {
        setIsLoggedIn(false);
        localStorage.clear();
        navigate('/', { replace: true });

      })
      .catch((e) => {
        setIsSucces(false);
        errorMessage.changeError(e)
        setIsInfoTooltipOpen(true);
      })
  }

  function findAllMovies() {
    setIsLoading(true)
    return allMovies()
      .then(res => {
        setIsLoading(false);
        return res;
      })
      .catch(e => {
        setIsLoading(false);
        return Promise.reject(e);
      })
  }

  function findSavedMovies() {
    return getMovies()
      .then((res) => {
        setSavedMovies(res.data)
      })
      .catch(e => {
        errorMessage.changeError(e);
      })
  }

  function handleSaveMovie(movie) {
    return saveMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, res.data]);
        return res;
      })
      .catch((e) => {
        setIsSucces(false);
        errorMessage.changeError(e)
        setIsInfoTooltipOpen(true);
        return Promise.reject(e);
      })
  }


  function deleteSavedMovie(_id) {
    return deleteMovie(_id)
      .then(() => {
        setSavedMovies(savedMovies.filter(c => c._id !== _id));
      })
      .catch(e => {
        setIsSucces(false);
        errorMessage.changeError(e)
        setIsInfoTooltipOpen(true);
        return Promise.reject(e);
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
    window.addEventListener("resize", () => {
      setTimeout(handleResize, 1000)
    });
    handleResize();
  }, []);

  React.useEffect(() => {
    if (!isLoggedIn) {
      checkUser()
        .then(() => {
          setIsLoggedIn(true);
          findSavedMovies()
            .then(res => {
              setSavedMovies(res.data)
            })
            .catch(e => {
              errorMessage.changeError(e)
            })
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
        <Header
          isLoggedIn={isLoggedIn}
          isMobile={isMobile}
          onNavClick={handleNavClick}></Header>
      }
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Main />} >
          </Route>
          <Route
            path='/movies'
            element={<ProtectedRoute
              element={Movies}
              isLoggedIn={isLoggedIn}
              findAllMovies={findAllMovies}
              savedMovies={savedMovies}
              stepForRendering={stepForRendering}
              additionalCountForRendering={additionalCountForRendering}
              saveMovie={handleSaveMovie}
              deleteSavedMovie={deleteSavedMovie}
              isLoading={isLoading}/>} />
          <Route
            path='/saved-movies'
            element={<ProtectedRoute
              element={SavedMovies}
              savedMovies={savedMovies}
              isLoggedIn={isLoggedIn}
              saveMovie={handleSaveMovie}
              deleteSavedMovie={deleteSavedMovie}
              reqError={errorMessage.message.message} />} />
          <Route
            path='/profile'
            element={<ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={Profile}
              currentUser={currentUser}
              onExit={onExit}
              onUpdate={updateUserInfo}
              reqError={errorMessage.message.message}
              cleanMessage={cleanMessage} />} />
          <Route
            path='/signin'
            element={<Login
              isLoggedIn={isLoggedIn}
              handleSubmit={onLogin}
              reqError={errorMessage.message.message}
              cleanMessage={cleanMessage}
              isLoading={isLoading}
              />} />
          <Route
            path='/signup'
            isLoggedIn={isLoggedIn}
            element={<Register
              handleSubmit={onRegister}
              reqError={errorMessage.message.message}
              cleanMessage={cleanMessage}
              isLoading={isLoading} />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
      {pathWithFooter && <Footer />}
      <PopupWithNav
        isMobile={isMobile}
        isOpen={isPopupWithNavOpen}
        onClose={closeAllPopups} />
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
