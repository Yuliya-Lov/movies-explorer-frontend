import React from 'react';
import { useNavigate } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();


  return (
    <main className='page-not-found'>
      <section className='page-not-found__section'>
        <h1 className='page-not-found__code'>404</h1>
        <p className='page-not-found__about'>Страница не найдена</p>
        <button className='page-not-found__redirect-button' onClick={() => navigate(-1)}>Назад</button>
      </section>
    </main>
  );
}

export default PageNotFound;
