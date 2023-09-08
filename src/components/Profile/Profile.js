import React, { useState } from 'react';
import './Profile.css';
import SubmitButton from '../SubmitButton/SubmitButton';

function Profile({ currentUser }) {
  const [isEditMode, setIsEditMode] = useState(false);
 const disableButtonStatus = isEditMode ? false : true;
  return (
    <section className='profile'>
      <h2 className='profile__greeting'>Привет, {currentUser.name}!</h2>
      <form className='profile__form'>
        <div className='profile__input-container'>
          <label className='profile__form-field profile__form-field_type_key'>Имя</label>
          <input className='profile__form-field profile__form-field_type_value' readonly value={currentUser.name} />
        </div>
        <div className='profile__input-container'>
          <label className='profile__form-field profile__form-field_type_key'>E-mail</label>
          <input className='profile__form-field profile__form-field_type_value' disable value={currentUser.email} />
        </div>
        {isEditMode &&
          <div className='profile__actions'>
            <span className='profile__form-error'>При обновлении профиля произошла ошибка.</span>
            <SubmitButton buttonText="Сохранить"/>
          </div>}
      </form>
      {!isEditMode &&
        <div className='profile__actions'>
          <button type='button' onClick={() => setIsEditMode(true)} className='profile__button profile__button_type_edit'>Редактировать</button>
          <button className='profile__button profile__button_type_exit'>Выйти из аккаунта</button>
        </div>
      }
    </section>
  );
}

export default Profile;
