import React from 'react';
import EntrySection from '../EntrySection/EntrySection';
import { useNavigate } from 'react-router-dom';


function Register({ isLoggedIn, handleSubmit, reqError, cleanMessage }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    isLoggedIn && navigate('/', {replace: true})
  })
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
