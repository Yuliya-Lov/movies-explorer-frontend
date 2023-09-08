import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {db} from '../../utils/db';

function MoviesCardList(props) {
  return (
    <section className='movies-list' aria-label='Фильмы'>
      {db.map(item => { return <MoviesCard key={item._id} movie={item}/>})}
    </section>
  );
}

export default MoviesCardList;
