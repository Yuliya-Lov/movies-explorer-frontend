import React from 'react';
import './Result.css';

function Result({ message }) {
  return (
    <section className='result'>
      <h1 className='result__title'>{message}</h1>
    </section>
  );
}

export default Result;
