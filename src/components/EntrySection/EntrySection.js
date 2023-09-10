import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './EntrySection.css';
import logo from '../../images/logo.svg';
import ControlledInput from '../ControlledInput/ControlledInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import FormValidator from '../../utils/FormValidator';
import { validationSettings } from '../../utils/validationSettings';

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
    buttonAction(userInfo);
  }

  const enteryForm = React.useRef();

  React.useEffect(() => {
    console.log(enteryForm);
    const validatedForm = new FormValidator(validationSettings, enteryForm.current);
    validatedForm.enableValidation();
    validatedForm.setInitialFormState();
  }, [enteryForm])


  return (
    <section className='entry-section'>
      <img src={logo} className='entry-section__logo' alt='Логотип' ></img>
      <h1 className='entry-section__greeting'>{greeting}</h1>
      <form className='entry-section__form' name='entry-form' ref={enteryForm}>
        <div className='entry-section__container'>
          {location.pathname === '/signup' &&
            <ControlledInput
              id='name'
              type='text'
              labelName='Имя'
              placeHolder=''
              value={userInfo.name}
              isDisabled={false}
              isRequired={true}
              minLengthValue='2'
              maxLengthValue='30'
              onChange={handleInputChange} />
          }
          <ControlledInput
            id='email'
            type='email'
            labelName='E-mail'
            placeHolder=''
            value={userInfo.email}
            isDisabled={false}
            isRequired={true}
            onChange={handleInputChange} />
          <ControlledInput
            id='password'
            type='password'
            labelName='Пароль'
            placeHolder=''
            value={userInfo.password}
            isDisabled={false}
            isRequired={true}
            onChange={handleInputChange} />
        </div>
        <SubmitButton type='submit' buttonText={buttonText} buttonAction={handleSubmit} isDisabled={false} />
      </form>
      <p className='entry-section__redirection'>{redirectionText}<Link className='entry-section__link' to={linkPath}>{linkName}</Link></p>
    </section>
  );
}

export default EntrySection;
