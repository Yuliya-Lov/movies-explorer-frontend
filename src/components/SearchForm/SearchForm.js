import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  return (
    <form className='seach-form'>
      <div className='seach-form__line'>
        <input className='seach-form__input'
        placeholder='Фильм'/>
        <button
          type="submit"
          className="seach-form__submit-button" aria-label='Найти фильмы'></button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
