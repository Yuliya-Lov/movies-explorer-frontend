import React from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

function Header(props) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/profile', {replace: true})
  }
  return (
    <header className='header'>
      <img className='header__logo' alt='Логотип' src={logo} />
      <nav className='header__nav'>
        <Link className='nav-item' to="/movies">Фильмы</Link>
        <Link className='nav-item' to="/saved-movies">Сохранённые фильмы</Link>
      </nav>
      <button className='header__profile-button' onClick={handleButtonClick}>Аккаунт</button>

    </header>
  );
}

export default Header;
