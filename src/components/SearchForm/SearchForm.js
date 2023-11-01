import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({keyword, isShort, handleChangeInput, handleChangeCheckbox, handleSubmit, isLoading }) {
  const [error, setError] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(false);

  function handleChange(e) {
    handleChangeInput(e)
    if (!e.target.validity.valid) {
      setError('Нужно ввести ключевое слово.');
      setIsDisabled(true)
    } else {
      setError('');
      setIsDisabled(false)
    }
  }

  function handleSubmitSearch(e) {
    e.preventDefault();
    if (e.target['search-value'].validity.valid) {
      handleSubmit();
    } else {
      setError('Нужно ввести ключевое слово.');
    }
  }

  return (
    <section className='seach'>
      <form className='seach__form' onSubmit={handleSubmitSearch} noValidate>
        <div className='seach__line'>
          <input
            name='search-value'
            className={`seach__input ${error.length > 0 ? 'seach__input__err' : ''}`}
            required
            placeholder={error.length > 0 ? error : 'Фильм'}
            value={keyword}
            onChange={handleChange} />
          <button
            type="submit"
            disabled={isLoading || isDisabled}
            className="seach__submit-button"
            aria-label='Найти фильмы'
          ></button>
        </div>
        <FilterCheckbox isShort={isShort} disabled={isLoading} handleTumbClick={handleChangeCheckbox} />
      </form>
    </section>
  );
}

export default SearchForm;
