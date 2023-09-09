import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import SubmitButton from '../SubmitButton/SubmitButton';

function Profile({ currentUser }) {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <section className='profile'>
      <h2 className='profile__greeting'>Привет, {currentUser.name}!</h2>
      <form className='profile__form'>
        <div className='profile__input-container'>
          <label className='profile__form-field profile__form-field_type_key'>Имя</label>
          <input
            className='profile__form-field profile__form-field_type_value' disabled={isEditMode ? false : true}
            value={currentUser.name} />
        </div>
        <div className='profile__input-container'>
          <label className='profile__form-field profile__form-field_type_key'>E-mail</label>
          <input
            className='profile__form-field profile__form-field_type_value' disabled={isEditMode ? false : true}
            value={currentUser.email} />
        </div>
        {isEditMode &&
          <div className='profile__actions'>
            <span className='profile__form-error'>При обновлении профиля произошла ошибка.</span>
            <SubmitButton buttonText="Сохранить" isDisabled={true} />
          </div>}
      </form>
      {!isEditMode &&
        <div className='profile__actions'>
          <button
            type='button'
            className='profile__button profile__button_type_edit'
            onClick={() => setIsEditMode(true)}
          >Редактировать</button>
          <button
            type='button'
            className='profile__button profile__button_type_exit'
            onClick={() => navigate('/signup', { replace: true })}
          >Выйти из аккаунта</button>
        </div>
      }
    </section>
  );
}

export default Profile;
