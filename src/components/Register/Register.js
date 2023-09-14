import React from 'react';
import EntrySection from '../EntrySection/EntrySection';

function Register({ handleSubmit, reqError, cleanMessage }) {
  return (
    <EntrySection
      greeting='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      buttonAction={handleSubmit}
      reqError={reqError}
      cleanMessage={cleanMessage}
      redirectionText='Уже зарегистрированы?'
      linkName='Войти' linkPath='/signin' />
  );
}

export default Register;
