import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import EntryForm from '../EntryForm/EntryForm';

function Register(props) {
  return (
    <section className='register'>
      <h2 className='register__greeting'>Добро пожаловать!</h2>
      <EntryForm buttonText='Зарегистрироваться' />
      <p className='register__redirection'>Уже зарегистрированы?<Link className='register__link' to='/signin'>Войти</Link></p>
    </section>
  );
}

export default Register;
