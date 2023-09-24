import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Result from '../Result/Result';
import Preloader from '../Preloader/Preloader';
import { useFilter } from '../../utils/useFilter';

function SavedMovies({savedMovies, findSavedMovies, saveMovie, deleteSavedMovie}) {
  const [keyword, setKeyword] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);
  const [renderedMovies, setRenderedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState(false);

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
    findSavedMovies()
      .then(res => {
        setRenderedMovies(res.data)
      })
      .catch(e => setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      )
      .finally(() => {
        setIsLoading(false);
      })
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
          ? <MoviesCardList movies={renderedMovies} savedMovies={savedMovies} saveMovie={saveMovie} deleteSavedMovie={deleteSavedMovie}/>
          : <Result message={message || 'Ничего не найдено'} />}
    </main>
  );
}

export default SavedMovies;
