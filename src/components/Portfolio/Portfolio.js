import React from 'react';
import './Portfolio.css';
import Underline from '../Underline/Underline';

function Portfolio(props) {
  return (
    <article className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a href='#' className='portfolio__link'>Статичный сайт</a>
          <Underline  type='mist'/>
        </li>
        <li className='portfolio__item'>
          <a href='#' className='portfolio__link'>Адаптивный сайт</a>
          <Underline  type='mist'/>
        </li>
        <li className='portfolio__item'>
          <a href='#' className='portfolio__link'>Одностраничное приложение</a>
        </li>
      </ul>
    </article>
  );
}

export default Portfolio;
