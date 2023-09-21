import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Result from '../Result/Result';
import Preloader from '../Preloader/Preloader';
import { useFilter } from '../../utils/useFilter';

function Movies({ allFindMovies, addMoreMovies, isEndedMovies }) {
  const filter = useFilter();
  const [renderedMovies, setRenderedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit() {
    setIsLoading(true)
    await filter.handleSubmitFilter(allFindMovies);
    filter.saveSearch();
    setRenderedMovies(filter.filterResult);
    setIsLoading(false);
  }

  return (
    <main className='movies'>
      <SearchForm keyword={filter.keyword} isShort={filter.isShort} handleChangeInput={filter.handleChangeInput} handleChangeCheckbox={filter.handleChangeCheckbox} handleSubmit={handleSubmit} />
      {isLoading
        ? <Preloader />
        : renderedMovies.length > 0
          ? <MoviesCardList movies={renderedMovies} />
          : <Result message='Ничего не найдено' />}
      {!isEndedMovies &&
        <button type='button' className='movies__more-button' onClick={addMoreMovies}>Ещё</button>
      }
    </main>
  );
}

export default Movies;
