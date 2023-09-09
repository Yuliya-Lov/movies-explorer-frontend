import React from 'react';
import EntrySection from '../EntrySection/EntrySection';

function Register({ buttonAction }) {
  return (
    <EntrySection
      greeting='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      buttonAction={buttonAction}
      redirectionText='Уже зарегистрированы?'
      linkName='Войти' linkPath='/signin' />
  );
}

export default Register;
