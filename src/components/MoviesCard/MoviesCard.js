import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, saved }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = React.useState(saved || false);

  function checkLocalFavoriteMovies() {
    let oldArray = localStorage.getItem("favoriteMovies");
    let arrayFavoriteMovies = JSON.parse(oldArray);
    if (arrayFavoriteMovies) {
      return arrayFavoriteMovies.find((item) => item._id === movie._id);
    }
  }

  function setLocalFavoriteMovies() {
    if (localStorage.getItem("favoriteMovies") === null) {
      const favoriteMovies = [];
      const string = JSON.stringify(favoriteMovies);
      localStorage.setItem("favoriteMovies", string);
    }
    if (!checkLocalFavoriteMovies()) {
      let retString = localStorage.getItem("favoriteMovies");
      let retArray = JSON.parse(retString);
      retArray.push(movie);
      const stringArray = JSON.stringify(retArray);
      localStorage.setItem("favoriteMovies", stringArray);
    }
  }

  function removeLocalFavoriteMovies() {
    let oldArray = localStorage.getItem("favoriteMovies");
    let arrayFavoriteMovies = JSON.parse(oldArray);
    let newFavoriteMovies = arrayFavoriteMovies.filter((item) => item._id !== movie._id);
    const stringArray = JSON.stringify(newFavoriteMovies);
    localStorage.setItem("favoriteMovies", stringArray);
    window.dispatchEvent(new Event("storage"));
  }

  function getTime(duration) {
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    return hours + "ч " + minutes + "м";
  }

  function saveMovie() {
    setLocalFavoriteMovies()
    setIsSaved(true);
  }

  function deleteMovie() {
    removeLocalFavoriteMovies()
    setIsSaved(false);
  }

  return (
      <article className='movie'>
        <img className='movie__img' src={movie.image} alt={movie.nameRu} />
        <div className='movie__info'>
          <h2 className='movie__name'>{movie.nameRU}</h2>
          <p className='movie__duration'>{getTime(movie.duration)}</p>
        </div>
        {isSaved
          ? <button className={`movie__button movie__button_type_remove ${location.pathname === '/saved-movies' && 'movie__button_saved'}`} aria-label='Удалить из сохраненного' onClick={deleteMovie}>{location.pathname === '/saved-movies' ? '×' : '✓'}</button>
          : <button type='button' className='movie__button movie__button_type_save' onClick={saveMovie}>Сохранить</button>
        }
      </article>
  );
}

export default MoviesCard;
