import React from 'react';
import { useNavigate } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound(props) {
  const navigate = useNavigate();
  return (
    <div className='page-not-found'>
      <h2 className='page-not-found__code'>404</h2>
      <p className='page-not-found__about'>Страница не найдена</p>
      <button className='page-not-found__redirect-button' type="button" onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

export default PageNotFound;
