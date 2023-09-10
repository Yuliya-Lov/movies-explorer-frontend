import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, saved}) {
  return (
    <section className='movies-list' aria-label='Фильмы'>
      {movies.map(item => { return <MoviesCard key={item._id} movie={item} saved={saved}/>})}
    </section>
  );
}

export default MoviesCardList;
