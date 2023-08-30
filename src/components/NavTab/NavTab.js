import React from 'react';
import './NavTab.css';

function NavTab(props) {
  return (
    <nav className='project-nav'>
      <ul className='project-nav__list'>
        <li className='project-nav__item'>
          <a href='#' className='project-nav__link'>О проекте</a>
        </li>
        <li className='project-nav__item'>
          <a href='#techs' className='project-nav__link'>Технологии</a>
        </li>
        <li className='project-nav__item'>
          <a href='#' className='project-nav__link'>Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
