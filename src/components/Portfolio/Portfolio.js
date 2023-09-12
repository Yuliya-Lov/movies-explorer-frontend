import React from 'react';
import './Portfolio.css';

function Portfolio(props) {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a href='https://yuliya-lov.github.io/how-to-learn/' className='portfolio__link' target='blank'>Статичный сайт</a>
        </li>
        <li className='portfolio__item'>
          <a href='https://yuliya-lov.github.io/russian-travel/' className='portfolio__link' target='blank'>Адаптивный сайт</a>
        </li>
        <li className='portfolio__item'>
          <a href='https://place.nomoreparties.co/' className='portfolio__link portfolio__link_last' target='blank'>Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
