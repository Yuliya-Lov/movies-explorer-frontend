import React from 'react';
import './AboutMe.css';
import ArticleTitle from '../ArticleTitle/ArticleTitle';
import photo from '../../images/photo_yuliya.jpg';

function AboutMe(props) {
  return (
    <article className='about-me' id='about-me'>
      <ArticleTitle text='Студент' />
      <div className='about-me__container'>
        <div className='about-me__info'>
          <h3 className='about-me__info-title'>Юлия</h3>
          <p className='about-me__brief'>Фронтенд-разработчик, 37 лет</p>
          <p className='about-me__description'>
            Я живу в Санкт-Петербурге со свои мужем и детьми. Последние 7 лет работала в продажах, на должности руководителя отдела поняла поняла, что хочу сменить свое направление деятельности и выбрала веб-разработку. После окончания курса по веб-разработке я планирую найти работу по этой специальности.
            </p>
          <a className='about-me__git-link' target='blank' href='https://github.com/Yuliya-Lov'>Github</a>
        </div>
        <img className='about-me__photo' src={photo} alt='Фотография студента' />
      </div>
    </article>
  );
}

export default AboutMe;
