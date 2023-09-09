import React from 'react';
import EntrySection from '../EntrySection/EntrySection';

function Register({ handleSubmit }) {
  return (
    <EntrySection
      greeting='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      buttonAction={handleSubmit}
      redirectionText='Уже зарегистрированы?'
      linkName='Войти' linkPath='/signin' />
  );
}

export default Register;
