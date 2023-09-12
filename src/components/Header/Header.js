import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation.js';

function Header({ isLoggedIn, isMobile, onNavClick }) {
  const navigate = useNavigate();

  return (
    <header className='header'>
      <Link className='header__logo' aria-label='Перейти на главную' to="/" />
      {isLoggedIn && (
        isMobile
        ? <button
        type="button"
        className='header__menu-button'
        aria-label='Навигация по сайту'
        onClick={onNavClick}></button>
        : <Navigation isMobile={isMobile} />
      )
      }
      {!isLoggedIn &&
      <nav className='header__access'>
        <Link className='header__signup-link' to="/signup">Регистрация</Link>
        <button className='header__signin-button' onClick={() => navigate('/signin', { replace: true })}>Войти</button>
      </nav>
      }

    </header>
  );
}

export default Header;
