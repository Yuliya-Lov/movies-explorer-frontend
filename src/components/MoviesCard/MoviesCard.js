import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { saveMovie } from '../../utils/MainApi'

function MoviesCard({ movie, savedMovies, deleteSavedMovie }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = React.useState(false);
  const image = movie.image.url
    ? `https://api.nomoreparties.co${movie.image.url}`
    : movie.image;

  function getTime(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor((duration - hours * 60));
    return hours + "ч " + minutes + "м";
  }

  function handleSave() {
    saveMovie(movie)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
    setIsSaved(true);
  }

  function deleteMovie() {
    movie.movieId
      ? deleteSavedMovie(movie._id)
      : deleteSavedMovie(savedMovies.find((item) => item.movieId === movie.id)._id)
    setIsSaved(false);
  }

  React.useEffect(() => {
    movie.movieId
      ? setIsSaved(true)
      : savedMovies.find((item) => {
        console.log(item.movieId === movie.id)
        return item.movieId === movie.id
      })
        ? setIsSaved(true)
        : setIsSaved(false)
  }, [savedMovies])

  return (
    <article className='movie'>
      <a className='movie__trailer-link' href={movie.trailerLink} target='blank'>
        <img
          className='movie__img'
          src={image}
          alt={movie.nameRu} />
      </a>
      <div className='movie__info'>
        <h2 className='movie__name'>{movie.nameRU}</h2>
        <p className='movie__duration'>{getTime(movie.duration)}</p>
      </div>
      {isSaved
        ? <button type='button' className={`movie__button movie__button_type_remove ${location.pathname === '/saved-movies' && 'movie__button_saved'}`} aria-label='Удалить из сохраненного' onClick={deleteMovie}>{location.pathname === '/saved-movies' ? '×' : '✓'}</button>
        : <button type='button' className='movie__button movie__button_type_save' onClick={handleSave}>Сохранить</button>
      }
    </article>
  );
}

export default MoviesCard;
