import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  const [moviesArr, setMoviesArr] = React.useState([])

  const arrayFavoriteMovies = () => {
    let stringArray = localStorage.getItem("favoriteMovies");
    let arrayFavoriteMovies = JSON.parse(stringArray);
    return arrayFavoriteMovies;
  }
  React.useEffect(() => {
    if (localStorage.getItem("favoriteMovies") !== null) setMoviesArr(arrayFavoriteMovies());
  }, []);

  window.addEventListener('storage', () => {
    setMoviesArr(arrayFavoriteMovies);
  })

  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList movies={moviesArr} saved={true} />
    </main>
  );
}

export default SavedMovies;
