import React from 'react';
import EntrySection from '../EntrySection/EntrySection';
import { useNavigate } from 'react-router-dom';

function Login({ isLoggedIn, handleSubmit, reqError, cleanMessage }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    isLoggedIn && navigate('/', {replace: true})
  })
  return (
    <EntrySection
      greeting='Рады видеть!'
      buttonText='Войти'
      buttonAction={handleSubmit}
      reqError={reqError}
      cleanMessage={cleanMessage}
      redirectionText='Ещё не зарегистрированы?'
      linkName='Регистрация' linkPath='/signup' />
  );
}

export default Login;
