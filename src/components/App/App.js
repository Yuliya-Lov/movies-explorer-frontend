import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
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

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isPopupWithNavOpen, setIsPopupWithNavOpen] = React.useState(false);
  const isOpen = isPopupWithNavOpen;
  const [currentUser, setCurrentUser] = React.useState(
    {
      name: 'Виталий',
      email: 'pochta@yandex.ru',
    })

  function handleNavClick() {
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
      <PopupWithNav isMobile={isMobile} isOpen={isOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
