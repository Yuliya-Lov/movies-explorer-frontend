import React from 'react';
import './Navigation.css';

import { Link } from 'react-router-dom';

function Navigation({ isMobile }) {
  return (
    <nav className={`navigation ${isMobile && 'navigation_mobile'}`}>
      <div className={`navigation__movies ${isMobile && 'navigation__movies_mobile'}`}>
        {isMobile && <Link className={`navigation__link ${isMobile && 'navigation__link_mobile'}`} to="/">Главная</Link>}
        <Link className={`navigation__link ${isMobile && 'navigation__link_mobile'}`} to="/movies">Фильмы</Link>
        <Link className={`navigation__link navigation__link_mobile-active ${isMobile && 'navigation__link_mobile'}`} to="/saved-movies">Сохранённые фильмы</Link>
      </div>
      <Link className='navigation__profile-link' to="/profile">Аккаунт</Link>
    </nav>
  )
}

export default Navigation;
