import React from 'react';
import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/photo-yuliya.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <SectionTitle text='Студент' />
      <div className='about-me__container'>
        <div className='about-me__info'>
          <div className='about-me__general'>
            <h3 className='about-me__info-title'>Юлия</h3>
            <p className='about-me__brief'>Фронтенд-разработчик, 37 лет</p>
            <p className='about-me__description'>
              Я живу в Санкт-Петербурге со своим мужем и детьми. Последние 7 лет работала в продажах, на должности руководителя отдела поняла поняла, что хочу сменить свое направление деятельности и выбрала веб-разработку. После окончания курса по веб-разработке я планирую найти работу по этой специальности.
            </p>
          </div>
          <a className='about-me__git-link' target='blank' href='https://github.com/Yuliya-Lov'>Github</a>
        </div>
        <img className='about-me__photo' src={photo} alt='Фотография студента' />
      </div>
    </section>
  );
}

export default AboutMe;
