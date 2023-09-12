import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, saved }) {
  return (
    <section className='movies-list' aria-label='Фильмы'>
      <ul className='movies-list__shell'>
        {movies.map(item => {
        return (
          <li className='movies-list__item'>
            <MoviesCard key={item._id} movie={item} saved={saved} />
          </li>
        )
         })}
      </ul>

    </section>
  );
}

export default MoviesCardList;
