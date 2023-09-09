import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './EntrySection.css';
import ControlledInput from '../ControlledInput/ControlledInput';
import SubmitButton from '../SubmitButton/SubmitButton';

function EntrySection({ greeting, buttonText, buttonAction, redirectionText, linkName, linkPath }) {
  const location = useLocation();

  const [userInfo, setUserInfo] = React.useState(
    {
      name: '',
      email: '',
      password: ''
    });

  function handleInputChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userInfo);
   /*  buttonAction(); */
  }
  return (
    <section className='entry-section'>
      <h1 className='entry-section__greeting'>{greeting}</h1>
      <form className='entry-section__form' >
        <div className='entry-section__container'>
          <ControlledInput
            id='name'
            type='text'
            labelName='Имя'
            placeHolder=''
            value={userInfo.name}
            isDisabled={false}
            onChange={handleInputChange} />
          <ControlledInput
            id='email'
            type='email'
            labelName='E-mail'
            placeHolder=''
            value={userInfo.email}
            isDisabled={false}
            onChange={handleInputChange} />
          {location.pathname === '/signup' &&
            <ControlledInput
              id='password'
              type='password'
              labelName='Пароль'
              placeHolder=''
              value={userInfo.password}
              isDisabled={false}
              onChange={handleInputChange} />
          }
        </div>
        <SubmitButton type='submit' buttonText={buttonText} buttonAction={handleSubmit} isDisabled={false} />
      </form>
      <p className='entry-section__redirection'>{redirectionText}<Link className='entry-section__link' to={linkPath}>{linkName}</Link></p>
    </section>
  );
}

export default EntrySection;