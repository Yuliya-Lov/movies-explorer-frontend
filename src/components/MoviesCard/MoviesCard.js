import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  const [isSaved, setIsSaved] = React.useState(true);

  function getTime(duration) {
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    return hours + "ч " + minutes + "м";
  }
  console.log(getTime(movie.duration))
  return (
    <article className='movie'>
      <img className='movie__img' src={movie.image} alt={movie.nameRu} />
      <div className='movie__info'>
        <h3 className='movie__name'>{movie.nameRU}</h3>
        <p className='movie__duration'>{getTime(movie.duration)}</p>
      </div>
      {isSaved
        ? <button className='movie__button movie__button_type_remove' aria-label='Удалить из сохраненного'>✓</button>
        : <button className='movie__button movie__button_type_save'>Сохранить</button>
      }
    </article>
  );
}

export default MoviesCard;
