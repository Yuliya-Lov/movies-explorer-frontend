import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, saved }) {
  return (
    <section className='movies-list' aria-label='Фильмы'>
      <ul className='movies-list__shell'>
        {movies.map(item => {
          console.log(item._id);
          return (
            <li className='movies-list__item' key={item._id}>
              <MoviesCard  movie={item} saved={saved} />
            </li>
          )
        })}
      </ul>

    </section>
  );
}

export default MoviesCardList;
