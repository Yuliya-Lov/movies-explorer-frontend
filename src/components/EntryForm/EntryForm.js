import React from 'react';
import { useLocation } from 'react-router-dom';
import './EntryForm.css';

function EntryForm({ buttonText }) {
  const location = useLocation();
  return (
    <form className='entry-form'>
      <div className='entry-form__container'>
        <div className='entry-form__input-area'>
          <label htmlFor='name' className='entry-form__input-label'>Имя</label>
          <input type="text" id='name' className='entry-form__input'></input>
          <span className="entry-form__input-error name-input-error"></span>
        </div>
        <div className='entry-form__input-area'>
          <label htmlFor='email' lang='en' className='entry-form__input-label'>E-mail</label>
          <input id='email' className='entry-form__input'></input>
          <span className="entry-form__input-error email-input-error"></span>
        </div>
        {location.pathname === '/signup' &&
          <div className='entry-form__input-area'>
            <label htmlFor='password' className='entry-form__input-label'>Пароль</label>
            <input type="password" id='password' className='entry-form__input entry-form__input_error'></input>
            <span className="entry-form__input-error password-input-error">Что-то пошло не так...</span>
          </div>
        }
      </div>
      <button className='entry-form__submit-button'>{buttonText}</button>
    </form>
  );
}

export default EntryForm;
