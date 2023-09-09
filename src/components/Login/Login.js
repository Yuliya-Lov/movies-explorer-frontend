import React from 'react';
import EntrySection from '../EntrySection/EntrySection';

function Login({buttonAction}) {
  return (
    <EntrySection
      greeting='Рады видеть!'
      buttonText='Войти'
      buttonAction={buttonAction}
      redirectionText='Ещё не зарегистрированы?'
      linkName='Регистрация' linkPath='/signup' />
  );
}

export default Login;
