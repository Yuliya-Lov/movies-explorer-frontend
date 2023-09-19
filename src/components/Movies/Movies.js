import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { db } from '../../utils/db';

function Movies({ renderingMovies, addMoreMovies }) {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList movies={renderingMovies} />
      <button type='button' className='movies__more-button' onClick={addMoreMovies}>Ещё</button>
    </main>
  );
}

export default Movies;
