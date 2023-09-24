import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Result from '../Result/Result';
import Preloader from '../Preloader/Preloader';
import { useFilter } from '../../utils/useFilter';
import { usePartialRender } from '../../utils/usePartialRender';

function Movies({ findAllMovies, stepForRendering, savedMovies, saveMovie, deleteSavedMovie }) {
  const [keyword, setKeyword] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [renderedMovies, setRenderedMovies] = React.useState([]);
  const [moviesPart, setMoviesPart] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const renderControl = usePartialRender(renderedMovies, stepForRendering);

  function handleChangeKeyword(value) {
    setKeyword(value)
  }

  function handleChangeIsShort(value) {
    setIsShort(value)
  }

  const filter = useFilter(keyword, isShort, handleChangeKeyword, handleChangeIsShort);

  function handleSubmit() {
    setIsLoading(true)
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
        .finally(() => {
          setIsLoading(false);
        })
    } else {
      const result = filter.handleSubmitFilter(allMovies);
      setRenderedMovies(result)
      filter.saveSearch(result);
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem('keyword')) {
      filter.handleChangeFilter(JSON.parse(localStorage.getItem('keyword')), JSON.parse(localStorage.getItem('isShort')));
      setRenderedMovies(JSON.parse(localStorage.getItem('moviesArr')))
    } else {
      setRenderedMovies([])
    }
  }, [])

  React.useEffect(() => {
    if (allMovies.length !== 0) {
      handleSubmit();
    }
  }, [filter.isShort])

  React.useEffect(() => {
    renderControl.setInitialMoviesState();
    setMoviesPart(renderControl.setMoviesCount)
  }, [renderedMovies])

  React.useEffect(() => {
    setMoviesPart(renderControl.setMoviesCount)
  }, [renderControl.countStepsForRendering, stepForRendering])

  return (
    <main className='movies'>
      <SearchForm keyword={filter.keyword} isShort={filter.isShort} handleChangeInput={filter.handleChangeInput} handleChangeCheckbox={filter.handleChangeCheckbox} handleSubmit={handleSubmit} />
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
