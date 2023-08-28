import React from 'react';

function AboutProject(props) {
  return (
    <article className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <hr className='about-project__underscore' />
      <ul className='about-project__info'>
        <li className='about-project__stages'>
          <h3 className='two-columns__stages-title'>Дипломный проект включал 5 этапов</h3>
          <p className='two-columns__stages-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-project__stages'>
          <h3 className='about-project__stages-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__stages-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
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
