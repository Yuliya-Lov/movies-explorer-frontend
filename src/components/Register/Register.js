import React from 'react';
import EntrySection from '../EntrySection/EntrySection';

function Register({ handleSubmit, reqError }) {
  return (
    <EntrySection
      greeting='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      buttonAction={handleSubmit}
      reqError={reqError}
      redirectionText='Уже зарегистрированы?'
      linkName='Войти' linkPath='/signin' />
  );
}

export default Register;
