import React from 'react';
import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <div className='techs__container'>
        <SectionTitle text="Технологии" />
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
    </section>
  );
}

export default Techs;
