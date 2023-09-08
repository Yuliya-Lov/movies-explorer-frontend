import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import EntryForm from '../EntryForm/EntryForm';

function Login(props) {
  return (
    <section className='login'>
      <h2 className='login__greeting'>Добро пожаловать!</h2>
      <EntryForm buttonText='Войти' />
      <p className='login__redirection'>Ещё не зарегистрированы? <Link className='login__link' to='/signup'>Регистрация</Link></p>
    </section>
  );
}

export default Login;
