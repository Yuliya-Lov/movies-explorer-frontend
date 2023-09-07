import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav className='project-nav'>
      <ul className='project-nav__list'>
        <li className='project-nav__item'>
          <a href='#about-project' className='project-nav__link'>О проекте</a>
        </li>
        <li className='project-nav__item'>
          <a href='#techs' className='project-nav__link'>Технологии</a>
        </li>
        <li className='project-nav__item'>
          <a href='#about-me' className='project-nav__link'>Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
