import React from 'react';
import Paragraph from '../Paragraph/Paragraph.js';
import Title from '../Title/Title';

function AboutProject(props) {
  return (
    <article className='about-project'>
      <Title level={2} size='m' text='О проекте'/>
      <hr className='about-project__underscore' />
      <ul className='about-project__info'>
        <li className='about-project__stages'>
          <h3 className='two-columns__stages-title'>Дипломный проект включал 5 этапов</h3>
          <Paragraph text='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'/>
        </li>
        <li className='about-project__stages'>
          <h3 className='about-project__stages-title'>На выполнение диплома ушло 5 недель</h3>
          <Paragraph text='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'/>
        </li>
      </ul>
      <ul className='about-project__schema'>
        <li className='about-project__schema-part about-project__schema-part_left'>
          <h3 className='about-project__schema-time about-project__schema-time_colorful'>1 неделя</h3>
          <p lang='en' className='about-project__schema-about'>Back-end</p>
        </li>
        <li className='about-project__schema-part about-project__schema-part_right'>
          <h3 className='about-project__schema-time'>4 недели</h3>
          <p lang='en' className='about-project__schema-about'>Front-end</p>
        </li>
      </ul>
    </article>
  );
}

export default AboutProject;
