import React from 'react';
import './AboutProject.css';
import ArticleTitle from '../ArticleTitle/ArticleTitle';

function AboutProject() {
  return (
    <article className='about-project' id='about-project'>
      <ArticleTitle text='О проекте'/>
      <ul className='about-project__info'>
        <li className='about-project__stages'>
          <h3 className='about-project__stages-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__stages-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-project__stages'>
          <h3 className='about-project__stages-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__stages-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className='about-project__schema'>
        <li className='about-project__schema-part'>
          <h3 className='about-project__schema-cell about-project__schema-cell_colorfull'>1 неделя</h3>
          <p lang='en' className='about-project__schema-cell about-project__schema-cell_about'>Back-end</p>
        </li>
        <li className='about-project__schema-part'>
          <h3 className='about-project__schema-cell'>4 недели</h3>
          <p lang='en' className='about-project__schema-cell about-project__schema-cell_about'>Front-end</p>
        </li>
      </ul>
    </article>
  );
}

export default AboutProject;
