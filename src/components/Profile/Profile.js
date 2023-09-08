import React from 'react';
import './Profile.css';

function Profile({ currentUser }) {
  return (
    <section className='profile'>
      <h2 className='profile__greeting'>Привет, {currentUser.name}!</h2>
      <div className='profile__info'>
        <p className='profile__field profile__field_type_key'>Имя</p>
        <p className='profile__field profile__field_type_value'>{currentUser.name}</p>
        <p className='profile__field profile__field_type_key'>E-mail</p>
        <p className='profile__field profile__field_type_value'>{currentUser.email}</p>
      </div>
      <button className='profile__button profile__button_type_edit'>Редактировать</button>
      <button className='profile__button profile__button_type_exit'>Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
