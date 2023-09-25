import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Result from '../Result/Result';
import Preloader from '../Preloader/Preloader';
import { useFilter } from '../../utils/useFilter';

function SavedMovies({ savedMovies, saveMovie, deleteSavedMovie, reqError }) {
  const [keyword, setKeyword] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);
  const [renderedMovies, setRenderedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  function handleChangeKeyword(value) {
    setKeyword(value)
  }

  function handleChangeIsShort(value) {
    setIsShort(value)
  }

  const filter = useFilter(keyword, isShort, handleChangeKeyword, handleChangeIsShort);

  function handleSubmit() {
    setRenderedMovies(filter.handleSubmitFilter(savedMovies))
  }

  React.useEffect(() => {
    setIsLoading(true)
    setRenderedMovies(savedMovies)
    setIsLoading(false);
  }, [])

  React.useEffect(() => {
    if (savedMovies.length !== 0) {
      handleSubmit();
    }
  }, [filter.isShort])

  React.useEffect(() => {
    setRenderedMovies(savedMovies)
  }, [savedMovies])

  return (
    <main className='movies'>
      <SearchForm keyword={filter.keyword} isShort={filter.isShort} handleChangeInput={filter.handleChangeInput} handleChangeCheckbox={filter.handleChangeCheckbox} handleSubmit={handleSubmit} />
      {isLoading
        ? <Preloader />
        : renderedMovies.length > 0
          ? <MoviesCardList movies={renderedMovies} savedMovies={savedMovies} saveMovie={saveMovie} deleteSavedMovie={deleteSavedMovie} />
          : <Result message={reqError || 'Ничего не найдено'} />}
    </main>
  );
}

export default SavedMovies;
