import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import EntryForm from '../EntryForm/EntryForm';

function Login(props) {
  return (
    <section className='login'>
      <h1 className='login__greeting'>Рады видеть!</h1>
      <EntryForm buttonText='Войти' />
      <p className='login__redirection'>Ещё не зарегистрированы? <Link className='login__link' to='/signup'>Регистрация</Link></p>
    </section>
  );
}

export default Login;
