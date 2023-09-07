import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const [isShort, setIsShort] = React.useState(true);

  const handleTumbClick = () => {
    isShort
      ? setIsShort(false)
      : setIsShort(true);
  }

  return (
    <form className='seach-form'>
      <div className='seach-form__line'>
        <input className='seach-form__input'
          placeholder='Фильм' />
        <button
          type="submit"
          className="seach-form__submit-button" aria-label='Найти фильмы'></button>
      </div>
      <FilterCheckbox isShort={isShort} handleTumbClick={handleTumbClick} />
      <hr className='seach-form__underline'></hr>
    </form>
  );
}

export default SearchForm;
