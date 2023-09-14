import React from 'react';
import EntrySection from '../EntrySection/EntrySection';

function Login({ handleSubmit, reqError, cleanMessage }) {
  return (
    <EntrySection
      greeting='Рады видеть!'
      buttonText='Войти'
      buttonAction={handleSubmit}
      reqError={reqError}
      cleanMessage ={cleanMessage}
      redirectionText='Ещё не зарегистрированы?'
      linkName='Регистрация' linkPath='/signup' />
  );
}

export default Login;
