import React from 'react';
import './Portfolio.css';

function Portfolio(props) {
  return (
    <article className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a href='#' className='portfolio__link' target='blank'>Статичный сайт</a>
          <hr className='portfolio__underline'/>
        </li>
        <li className='portfolio__item'>
          <a href='https://yuliya-lov.github.io/russian-travel/' className='portfolio__link' target='blank'>Адаптивный сайт</a>
          <hr className='portfolio__underline'/>
        </li>
        <li className='portfolio__item'>
          <a href='#' className='portfolio__link' target='blank'>Одностраничное приложение</a>
        </li>
      </ul>
    </article>
  );
}

export default Portfolio;
