import React from 'react';
import './AboutMe.css';
import Title from '../Title/Title';
import Underline from '../Underline/Underline';
import photo from '../../images/photo_yuliya.jpg';

function AboutMe(props) {
  return (
    <article className='about-me' id='about-me'>
      <h1 className='about-me__title'>Студент</h1>
      <Underline type='light' />
      <div className='about-me__container'>
        <div className='about-me__info'>
          <h3 className='about-me__info-title'>Юлия</h3>
          <p className='about-me__brief'>Фронтенд-разработчик, 37 лет</p>
          <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className='about-me__git-link' target='blank' href='https://github.com/Yuliya-Lov'>Github</a>
        </div>
        <img className='about-me__photo' src={photo} alt='Фотография студента'/>
      </div>
    </article>
  );
}

export default AboutMe;
