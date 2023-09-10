import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {db} from '../../utils/db';

function Movies() {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList movies={db}/>
      <button className='movies__more-button'>Ещё</button>
    </main>
  );
}

export default Movies;
