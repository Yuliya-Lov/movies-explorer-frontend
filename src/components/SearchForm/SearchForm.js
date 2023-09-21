import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

/* keyword={filter.keyword} isShort={filter.isShort} handleChangeInput={filter.handleChangeInput} handleChangeCheckbox={filter.handleChangeCheckbox} handleSubmit={filter.handleSubmit(allFindMovies)} */

function SearchForm({keyword, isShort, handleChangeInput, handleChangeCheckbox, handleSubmit}) {
  /* const [seachValue, setSeachValue] = React.useState({ value: undefined });
  const [isShort, setIsShort] = React.useState(true); */
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


 /*  const handleTumbClick = () => {
    isShort
      ? setIsShort(false)
      : setIsShort(true);
  } */

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
            disabled={isDisabled}
            className="seach__submit-button"
            aria-label='Найти фильмы'
          ></button>
        </div>
        <FilterCheckbox isShort={isShort} handleTumbClick={handleChangeCheckbox} />
      </form>
    </section>
  );
}

export default SearchForm;
