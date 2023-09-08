import React from 'react';
import './FormHeader.css';
import logo from '../../images/logo.svg';

function FormHeader() {
  return (
    <header className='form-header'>
      <img src={logo} className='form-header__logo' alt='Логотип' ></img>
    </header>
  );
}

export default FormHeader;
