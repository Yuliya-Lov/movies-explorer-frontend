import React from 'react';
import './Techs.css';
import Title from '../Title/Title';
import Underline from '../Underline/Underline';

function Techs(props) {
  return (
    <article className='techs' id='techs'>
      <div className='techs__container'>
        <h2 className='techs__title'>Технологии</h2>
        <Underline type='light' />
        <div className='techs__info'>
          <h3 className='techs__info-title'>7 технологий</h3>
          <p className='techs__about'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__list'>
            <li className='techs__item' lang='en'>HTML</li>
            <li className='techs__item' lang='en'>CSS</li>
            <li className='techs__item' lang='en'>JS</li>
            <li className='techs__item' lang='en'>React</li>
            <li className='techs__item' lang='en'>Git</li>
            <li className='techs__item' lang='en'>Express.js</li>
            <li className='techs__item' lang='en'>mongoDB</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Techs;
