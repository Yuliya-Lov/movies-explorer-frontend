import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './EntrySection.css';
import ControlledInput from '../ControlledInput/ControlledInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

function EntrySection({ greeting, buttonText, buttonAction, redirectionText, linkName, linkPath, reqError, cleanMessage }) {
  const location = useLocation();
  const useValidation = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    buttonAction(useValidation.values);
  }

  function handleChange(e){
    useValidation.handleChange(e);
    cleanMessage();
  }

  React.useEffect(() => {
    cleanMessage();
    useValidation.resetForm();
  }, [])

  return (
    <main className='entry-section'>
      <Link className='entry-section__logo' aria-label='Перейти на главную' to="/" />
      <section className='entry-section__section'>
        <h1 className='entry-section__greeting'>{greeting}</h1>
        <form className='entry-section__form' name='entry-form'>
          <div className='entry-section__container'>
            {location.pathname === '/signup' &&
              <ControlledInput
                id='name'
                type='text'
                labelName='Имя'
                pattern='^[A-Za-zА-Яа-я\sё\-]*$'
                placeHolder='Введите имя'
                value={useValidation.values['name'] || ''}
                isDisabled={false}
                isRequired={true}
                minLengthValue='2'
                maxLengthValue='30'
                errorValue={useValidation.errors['name'] || ''}
                onChange={handleChange} />
            }
            <ControlledInput
              id='email'
              type='email'
              labelName='E-mail'
              placeHolder='Введите email'
              value={useValidation.values['email'] || ''}
              isDisabled={false}
              isRequired={true}
              errorValue={useValidation.errors['email'] || ''}
              onChange={handleChange} />
            <ControlledInput
              id='password'
              type='password'
              labelName='Пароль'
              placeHolder='Введите пароль'
              value={useValidation.values['password'] || ''}
              isDisabled={false}
              minLengthValue='8'
              isRequired={true}
              errorValue={useValidation.errors['password'] || ''}
              onChange={handleChange} />
          </div>
          <div className='entry-section__container'>
            <span className='entry-section__error'>{reqError}</span>
            <SubmitButton type='submit' buttonText={buttonText} buttonAction={handleSubmit} isDisabled={!useValidation.isValid} />
          </div>
        </form>
        <p className='entry-section__redirection'>{redirectionText}<Link className='entry-section__link' to={linkPath}>{linkName}</Link></p>
      </section>
    </main>
  );
}

export default EntrySection;
