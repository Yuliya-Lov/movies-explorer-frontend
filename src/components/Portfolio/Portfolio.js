import React from 'react';
import './Portfolio.css';
import Underline from '../Underline/Underline';

function Portfolio(props) {
  return (
    <article className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a href='#' className='portfolio__link' target='blank'>Статичный сайт</a>
          <Underline  type='mist'/>
        </li>
        <li className='portfolio__item'>
          <a href='https://yuliya-lov.github.io/russian-travel/' className='portfolio__link' target='blank'>Адаптивный сайт</a>
          <Underline  type='mist'/>
        </li>
        <li className='portfolio__item'>
          <a href='#' className='portfolio__link' target='blank'>Одностраничное приложение</a>
        </li>
      </ul>
    </article>
  );
}

export default Portfolio;
