import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './EntrySection.css';
import ControlledInput from '../ControlledInput/ControlledInput';
import SubmitButton from '../SubmitButton/SubmitButton';

function EntrySection({ greeting, buttonText, buttonAction, redirectionText, linkName, linkPath }) {
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    buttonAction();
  }
  return (
    <section className='entry-section'>
      <h1 className='entry-section__greeting'>{greeting}</h1>
      <form className='entry-section__form' >
        <div className='entry-section__container'>
          <ControlledInput id='name' type='text' labelName='Имя' placeHolder='' value='' isDisabled={false} />
          <ControlledInput id='email' type='email' labelName='E-mail' placeHolder='' value='' isDisabled={false} />
          {location.pathname === '/signup' &&
            <ControlledInput id='password' type='password' labelName='Пароль' placeHolder='' value='' isDisabled={false} />
          }
        </div>
        <SubmitButton type='submit' buttonText={buttonText} buttonAction={handleSubmit} isDisabled={false} />
      </form>
      <p className='entry-section__redirection'>{redirectionText}<Link className='entry-section__link' to={linkPath}>{linkName}</Link></p>
    </section>
  );
}

export default EntrySection;
