import React from 'react';
import './Techs.css';
import Title from '../Title/Title';
import Underline from '../Underline/Underline';

function Techs(props) {
  return (
    <article className='techs' id='techs'>
      <div className='techs__container'>
        <Title level={2} size='m' text='Технологии' />
        <Underline type='light' />
        <div className='techs__info'>
          <Title level={3} size='xl' text='7 технологий' />
          <p className='techs__about'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__list'>
            <li className='techs__item'>HTML</li>
            <li className='techs__item'>CSS</li>
            <li className='techs__item'>JS</li>
            <li className='techs__item'>React</li>
            <li className='techs__item'>Git</li>
            <li className='techs__item'>Express.js</li>
            <li className='techs__item'>mongoDB</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Techs;
