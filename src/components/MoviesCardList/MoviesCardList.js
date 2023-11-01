import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, savedMovies, saveMovie, deleteSavedMovie }) {
  return (
    <section className='movies-list' aria-label='Фильмы'>
      <ul className='movies-list__shell'>
        {movies.map(item => {
          return (
            <li className='movies-list__item' key={item.id || item._id }>
              <MoviesCard  movie={item} savedMovies={savedMovies}  saveMovie={saveMovie} deleteSavedMovie={deleteSavedMovie} />
            </li>
          )
        })}
      </ul>

    </section>
  );
}

export default MoviesCardList;
