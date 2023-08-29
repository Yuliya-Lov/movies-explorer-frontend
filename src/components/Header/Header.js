import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

function Header({ isLoggedIn }) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/profile', { replace: true })
  }
  return (
    <header className='header'>
      <img className='header__logo' alt='Логотип' src={logo} />
      {isLoggedIn &&
        <nav className='header__nav'>
          <Link className='header__nav-item' to="/movies">Фильмы</Link>
          <Link className='header__nav-item header__nav-item_active' to="/saved-movies">Сохранённые фильмы</Link>
        </nav>}
      {isLoggedIn
        ? <button className='header__profile-button' onClick={() => navigate('/profile', { replace: true })}>Аккаунт</button>
        : <div className='header__access'>
            <Link className='header__signup-link' to="/signup">Регистрация</Link>
            <button className='header__signin-button' onClick={() => navigate('/signin', { replace: true })}>Войти</button>
          </div>
      }

    </header>
  );
}

export default Header;
