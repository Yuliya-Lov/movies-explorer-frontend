import React from 'react';
import Title from '../Title/Title';
import './Promo.css';

function Promo() {
  return (
    <div className='promo'>
      <Title level={1} size='xl' text='Учебный проект студента факультета Веб-разработки.' />
    </div>
  );
}

export default Promo;
