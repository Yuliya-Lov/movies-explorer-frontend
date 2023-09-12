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
    <section className='seach'>
      <form className='seach__form'>
        <div className='seach__line'>
          <input className='seach__input'
            placeholder='Фильм' />
          <button
            type="submit"
            className="seach__submit-button" aria-label='Найти фильмы'></button>
        </div>
        <FilterCheckbox isShort={isShort} handleTumbClick={handleTumbClick} />
      </form>
    </section>
  );
}

export default SearchForm;
