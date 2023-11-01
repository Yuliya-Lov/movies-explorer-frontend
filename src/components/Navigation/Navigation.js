import React from 'react';
import './Navigation.css';

import { Link, useLocation } from 'react-router-dom';

function Navigation({ isMobile }) {
  const location = useLocation();

  const linkClass = isMobile
    ? 'navigation__link navigation__link_mobile'
    : 'navigation__link';
  const activeLinkClass = isMobile
    ? 'navigation__link_mobile-active'
    : 'navigation__link_active';

  return (
    <nav className={`navigation ${isMobile ? 'navigation_mobile' : ''}`}>
      <div className={`navigation__movies ${isMobile && 'navigation__movies_mobile'}`}>
        {isMobile && <Link className={`${linkClass} ${location.pathname === '/' ? activeLinkClass : ''}`} to="/">Главная</Link>}
        <Link className={`${linkClass} ${location.pathname === '/movies' ? activeLinkClass : ''}`} to="/movies">Фильмы</Link>
        <Link className={`${linkClass} ${location.pathname === '/saved-movies' ? activeLinkClass : ''}`} to="/saved-movies">Сохранённые фильмы</Link>
      </div>
      <Link className='navigation__profile-link' to="/profile">Аккаунт</Link>
    </nav>
  )
}

export default Navigation;
