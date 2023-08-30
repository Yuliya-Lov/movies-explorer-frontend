import React from 'react';
import './Navigation.css';

import { Link } from 'react-router-dom';

function Navigation({ isMobile }) {
  return (
    <nav className='navigation'>
      <div className='navigation__movies'>
        <Link className='navigation__link' to="/movies">Фильмы</Link>
        <Link className='navigation__link navigation__link_active' to="/saved-movies">Сохранённые фильмы</Link>
      </div>
      <Link className='navigation__profile-link' to="/profile">Аккаунт</Link>
    </nav>
  )
}

export default Navigation;
