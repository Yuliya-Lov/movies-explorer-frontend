import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  const [seachValue, setSeachValue] = React.useState({ value: '' });
  const [isShort, setIsShort] = React.useState(true);
  const [error, setError] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(false);

  function handleChangeInput(e) {
    setSeachValue({
      value: e.target.value
    })
    if (!e.target.validity.valid) {
      setError(e.target.validationMessage);
      setIsDisabled(true)
    } else {
      setError('');
      setIsDisabled(false)
    }
  }


  const handleTumbClick = () => {
    isShort
      ? setIsShort(false)
      : setIsShort(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const meaning = e.target['search-value'];
    if (meaning.validity.valid) {
      console.log(seachValue)
    } else {
      setError(meaning.validationMessage);
    }
  }

  return (
    <section className='seach'>
      <form className='seach__form' onSubmit={handleSubmit} noValidate>
        <div className='seach__line'>
          <input
            name='search-value'
            className={`seach__input ${error.length > 0 ? 'seach__input__err' : ''}`}
            required
            placeholder={error.length > 0 ? error : 'Фильм'}
            value={seachValue.value}
            onChange={handleChangeInput} />
          <button
            type="submit"
            disabled={isDisabled}
            className="seach__submit-button"
            aria-label='Найти фильмы'
          ></button>
        </div>
        <FilterCheckbox isShort={isShort} handleTumbClick={handleTumbClick} />
      </form>
    </section>
  );
}

export default SearchForm;
