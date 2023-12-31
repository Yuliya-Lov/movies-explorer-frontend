import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Result from '../Result/Result';
import Preloader from '../Preloader/Preloader';
import { useFilter } from '../../utils/useFilter';
import { usePartialRender } from '../../utils/usePartialRender';

function Movies({ findAllMovies, stepForRendering, additionalCountForRendering, savedMovies, saveMovie, deleteSavedMovie, isLoading }) {
  const [keyword, setKeyword] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [renderedMovies, setRenderedMovies] = React.useState([]);
  const [moviesPart, setMoviesPart] = React.useState([]);
  const [message, setMessage] = React.useState(false);
  const renderControl = usePartialRender(renderedMovies, stepForRendering, additionalCountForRendering);

  const filter = useFilter(keyword, isShort, handleChangeKeyword, handleChangeIsShort);

  const localData = {
    key: JSON.parse(localStorage.getItem('keyword')),
    short: JSON.parse(localStorage.getItem('isShort')),
    movies: JSON.parse(localStorage.getItem('moviesArr'))
  }

  function handleChangeKeyword(value) {
    setKeyword(value)
  }

  function handleChangeIsShort(value) {
    setIsShort(value)
  }

  function handleSubmit() {
    if (allMovies.length === 0) {
      findAllMovies()
        .then(res => {
          setAllMovies(res)
          const result = filter.handleSubmitFilter(res);
          setRenderedMovies(result)
          filter.saveSearch(result);
        })
        .catch(e => setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        )
    } else {
      const result = filter.handleSubmitFilter(allMovies);
      setRenderedMovies(result)
      filter.saveSearch(result);
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem('keyword')) {
      filter.handleChangeFilter(localData.key, localData.short);
      setRenderedMovies(localData.movies)
    } else {
      setRenderedMovies([])
    }
  }, [])

  React.useEffect(() => {
    if (keyword.length > 0) {
      handleSubmit()
    }
  }, [filter.isShort])

  React.useEffect(() => {
    renderControl.setInitialMoviesState();
    setMoviesPart(renderControl.setMoviesCount)
  }, [renderedMovies])

  React.useEffect(() => {
    setMoviesPart(renderControl.setMoviesCount)
  }, [renderControl.countAdditionalStepsForRendering, stepForRendering])

  return (
    <main className='movies'>
      <SearchForm keyword={filter.keyword} isShort={filter.isShort} handleChangeInput={filter.handleChangeInput} handleChangeCheckbox={filter.handleChangeCheckbox} handleSubmit={handleSubmit} isLoading={isLoading} />
      {isLoading
        ? <Preloader />
        : renderedMovies.length > 0
          ? <MoviesCardList movies={moviesPart} savedMovies={savedMovies} saveMovie={saveMovie} deleteSavedMovie={deleteSavedMovie} />
          : <Result message={message || 'Ничего не найдено'} />}
      {!renderControl.isMoviesEnded &&
        <button type='button' className='movies__more-button' onClick={renderControl.addMoreMovies}>Ещё</button>
      }
    </main>
  );
}

export default Movies;
