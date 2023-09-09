import React from 'react';
import './Login.css';
import EntrySection from '../EntrySection/EntrySection';

function Login(props) {
  return (
    <EntrySection
      greeting='Рады видеть!'
      buttonText='Войти'
      buttonAction={() => console.log('buttonAction')}
      redirectionText='Ещё не зарегистрированы?'
      linkName='Регистрация' linkPath='/signup' />
  );
}

export default Login;
