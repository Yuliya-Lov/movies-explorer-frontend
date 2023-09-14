import React from 'react';
import EntrySection from '../EntrySection/EntrySection';

function Login({ handleSubmit, reqError }) {
  return (
    <EntrySection
      greeting='Рады видеть!'
      buttonText='Войти'
      buttonAction={handleSubmit}
      reqError={reqError}
      redirectionText='Ещё не зарегистрированы?'
      linkName='Регистрация' linkPath='/signup' />
  );
}

export default Login;
