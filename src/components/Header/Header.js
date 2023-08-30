import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation.js';

function Header({ isLoggedIn, isMobile }) {
  const navigate = useNavigate();

  return (
    <header className='header'>
      <Link className='header__logo' aria-label='Перейти на главную' to="/"/>
      {isLoggedIn
        ? <Navigation isMobile={isMobile} />
        : <div className='header__access'>
            <Link className='header__signup-link' to="/signup">Регистрация</Link>
            <button className='header__signin-button' onClick={() => navigate('/signin', { replace: true })}>Войти</button>
          </div>
      }

    </header>
  );
}

export default Header;
